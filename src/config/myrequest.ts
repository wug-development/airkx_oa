import qs from 'qs';
import axios, { 
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  CancelTokenStatic
} from 'axios';
import { message } from 'ant-design-vue';

export type pendingRequest = {
  url: String,
  cancel: Function,
}

export interface MyResponseType {
  code: Number,
  data: Object | Array<any>,
  message: string
}
export type loadingConfigType = {
  isLoading: Boolean,
  timer: NodeJS.Timeout,
  hideLoadingFn: Function
}
export class Request {
  instance: AxiosInstance
  pending: Array<pendingRequest> = []
  CancelToken: CancelTokenStatic = axios.CancelToken
  axiosRequestConfig: AxiosRequestConfig = {}
  successCode: Array<Number|String> = [1, 200, 201, 204, '0000']
  baseURL: string = '/api'
  loadingFn: Function
  loadingConfig: loadingConfigType
  constructor() {
    this.requestConfig();
    this.instance = axios.create(this.axiosRequestConfig)
    this.interceptorsRequest()
    this.interceptorsResponse()
    this.setLoading(message.loading('加载中...', 0))
  }
  // 设置loading 方法
  setLoading(callback: Function): void {
    this.loadingFn = () => {
      this.loadingConfig.timer = setTimeout(() => {
        this.loadingConfig.hideLoadingFn = callback();
      }, 1500);
      this.loadingConfig.isLoading = true;
    }
  }
  // loading 结束方法
  loadingEnd(): void {
    this.loadingConfig.isLoading = false;
    this.loadingConfig.hideLoadingFn();
  }
  async get<T = any>(url: string, config?:AxiosRequestConfig): Promise<MyResponseType> {
    try {
      const data: MyResponseType = await this.instance.get(url, config)
      return data
    } catch (err: any) {
      const message = err.message || '请求失败'
      return {
        code: 0,
        message,
        data: null as any
      }
    }
  }
  async post<T = any>(url: string, data?:T, config?:AxiosRequestConfig): Promise<MyResponseType> {
    try {
      const res: MyResponseType = await this.instance.post(url, data, config)
      return res
    } catch (err: any) {
      const message = err.message || '请求失败'
      return {
        code: 0,
        message,
        data: null as any
      }
    }
  }

  protected requestConfig(): void{
    this.axiosRequestConfig = {
      baseURL: this.baseURL,
      headers: {
        timestamp: String(new Date().getTime()),
        'Content-Type': 'application/json;charset=utf-8'
      },
      transformRequest: [(obj) => qs.stringify(obj)],
      transformResponse: [(data: AxiosResponse) => {
        return data
      }],
      paramsSerializer(params: any) {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      },
      timeout: 30000,
      withCredentials: false,
      responseType: 'json',
      // xsrfCookieName: 'XSRF-TOKEN',
      // xsrfHeaderName: 'X-XSRF-TOKEN',
      maxRedirects: 5,
      maxContentLength: 2000,
      validateStatus: (status: string | number): boolean => {
        return this.successCode.includes(status)
      }
    }
  }
  // 请求拦截
  protected interceptorsRequest(): void{
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      !this.loadingConfig.isLoading && this.loadingEnd();
      this.removePending(config);

      config.cancelToken = new this.CancelToken((cancel:any) => {
        this.pending.push({
          url: this.getPendingUrl(config),
          cancel
        })
      });
      const token = localStorage.getItem('token')
      if (token) {
        Object.assign(config.headers, {'X-Auth-Token': token})
      }
      return config
    })
  }
  interceptorsResponse(): void{
    this.instance.interceptors.response.use((response: AxiosResponse) => {
      this.loadingConfig.isLoading && this.loadingConfig.hideLoadingFn();
      delete this.pending[this.getPendingUrl(response.config) || '']
      if (this.successCode.includes(response.status)) {
        if (this.successCode.includes(response.data.code)) {
          return Promise.resolve(response.data.data)
        } else {
          message.error(response.data.msg)
          return Promise.reject(new Error(response.data))
        }
      }
      message.error(response.data);
      return Promise.reject(new Error(response.data))
    }, (error: AxiosError) => {
      return Promise.reject(error)
    })
  }
  removePending(config: AxiosRequestConfig): void{
    this.pending.map((v, index) => {
      if (v.url === this.getPendingUrl(config)) {
        v.cancel();
        this.pending.splice(index, 1);
      }
      return v;
    })
  }
  getPendingUrl(config: AxiosRequestConfig): string {
    return `${config.url}/${JSON.stringify(config.data)}&request_type=${config.method}`;
  }
}

export default Request

