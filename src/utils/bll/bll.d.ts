
export interface IconfirmConfig {
    title?: String,
    callback?: Function
}

export interface IhrefConfig {
    name?: String,
    path?: String,
}

export interface IobjToArrConfig extends IhrefConfig {
    children?: Array<IhrefConfig>
}

export const confirm: (confirmConfig: IconfirmConfig) => void;
export const objToArr: (objToArrConfig: IobjToArrConfig) => Array<IhrefConfig>;