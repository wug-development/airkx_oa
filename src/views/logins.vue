<template>
    <div class="login-box" id="login-box">
        <div id="loading">
            <div class="loadingwrapper">
                <i v-for="item in 9"></i>
            </div>
            <div class="loadingtxt">
                <span>2021 尖峰教育</span>
                <i>0%</i>
                <b class="btn-introbox">进入</b>
            </div>
        </div>
        <div class="fullpage" id="fullpage">
            <div class="section page6"></div>
            <div class="section page3">
                <!-- <div class="txt"><img src="../assets/images/298712013780404.png"></div> -->
            </div>
            <div class="section page1">
                <!-- <div class="txt"><img src="../assets/images/298692010400560.png"></div> -->
            </div>
            <div class="section page2">
                <!-- <div class="txt"><img src="../assets/images/298734013640422.png"></div> -->
            </div>
            <div class="section page4">
                <!-- <div class="txt"><img src="../assets/images/298722013720390.png"></div> -->
            </div>
        </div>
        <div class="login-waper" :class="{'login-waper-show': isShow}">
            <div class="login-waper-title">尖锋后台管理系统</div>
            <div class="login-waper-item">
                <input type="text" v-model.trim="form.uname" class="login-waper-item-txt login-waper-item-account" placeholder="请输入账号" maxlength="20">
            </div>
            <div class="login-waper-item">
                <input type="password" v-model.trim="form.upass" class="login-waper-item-txt login-waper-item-password" placeholder="请输入密码" maxlength="20">
            </div>
            <div class="login-waper-item">
                <button class="login-waper-item-btn" @click="onLogin">登 录 <LoadingOutlined v-if="isLogining" :style="{fontSize: '16px', color: '#fff'}" /></button>
            </div>
        </div>
    </div>
</template>

<script>
import LoadingOutlined from '@ant-design/icons-vue/LoadingOutlined'
import { ref, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { debounce } from '../utils/tool/utils.js'
export default {
    components: {
        LoadingOutlined
    },
    setup () {
        window.supportWebGL=(function () {
            try {
                var canvas = document.createElement( 'canvas' );
                return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );
            } catch ( e ) {
                return false;
            }
        })();

        const router = new useRouter()

        // 登录表单
        const state = reactive({
            form: {
                utype: 'head', // 登录学校
                uname: '', // 账号
                upass: '', // 密码
                smsCode: '', // 短信验证码
                imgCode: '', // 图片验证码
                type: 1 // 登录类型
            }
        })

        // 登录中
        const isLogining = ref(false)

        // 显示登录框
        const isShow = ref(false)
        window.loginCallback = () => {
            isShow.value = true
            delete window.loginCallback
        }

        // 背景动画
        import('@/assets/js/sign.js')
        import('@/assets/js/common.js')
        import('@/assets/js/webgl.js')

        // 登录事件
        const onLogin = debounce(() => {
            console.log(1111)
            if (state.form.uname === '') {
                message.warning('请输入账号');
            } else if (state.form.upass === '') {
                message.warning('请输入密码');
            } else {
                isLogining.value = true
                setTimeout(() => {
                    isLogining.value = false
                    state.form.uname === state.form.upass && (router.push({
                        path: '/'
                    }))
                }, 2000)
            }
        })

        return {
            isShow,
            isLogining,
            ...toRefs(state),
            onLogin
        }
    }
}
</script>

<style lang="scss">
@import url('@/assets/css/bg.css');
.login-box{
    position: relative;
    height: 100%;
    .login-waper{
        width: 420px;
        height: 320px;
        position: fixed;
        z-index: 111;
        left: 50%;
        top: 0%;
        margin-left: -210px;
        background-color: rgba(255, 255, 255, .9);
        border-radius: 5px;
        box-shadow: 0 0 5px #ccc;
        font-size: 14px;
        transform: translateY(-100%);
        &-title{
            text-align: center;
            line-height: 0px;
            font-size: 28px;
            color: #333;
            font-weight: bold;
            padding: 40px 0 15px 0;
            box-sizing: border-box;
        }
        &-item{
            width: 320px;
            margin: 24px auto 0 auto;
            &-txt{
                width: 100%;
                height: 45px;
                border: 1px solid #808080;
                box-sizing: border-box;
                border-radius: 4px;
                background-color: rgba(255, 255, 255, 0);
                color: #333;
                text-indent: 43px;
                font-size: 16px;
                outline: none;
                &::placeholder{
                    color: #333;
                }
                &:focus-visible{
                    border: 1px solid #000;
                }
            }
            &-account:first-child{
                background: url('@/assets/images/icon-account.png') no-repeat left center;
                background-size: 26px;
                background-position-x: 10px;
            }
            &-password:first-child{
                background: url('@/assets/images/icon-password.png') no-repeat left center;
                background-size: 26px;
                background-position-x: 10px;
            }
            &-btn{
                width: 100%;
                height: 46px;
                line-height: 46px;
                background-color: #0E9D3F;
                text-align: center;
                border-radius: 4px;
                border: 0;
                color: #fff;
                font-size: 18px;
                box-shadow: 0 0 3px rgba(#333, .5);
                cursor: pointer;
                user-select: none;
                position: relative;
                overflow: hidden;
                // &:active{
                //     background-color: #0E9D3F;
                // }
                &::before{
                    content: '';
                    position: absolute;
                    left: 0%;
                    top: 0%;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(255, 255, 255, .2);
                    transform: translateX(-100%);
                    will-change: transform;
                }
                &:active::before{
                    transform: translateX(0);
                    transition: transform .2s cubic-bezier(0,0,0.3,1);
                }
                .anticon{
                    position: absolute;
                    top: 50%;
                    margin-left: 10px;
                    transform: translateY(-50%);
                }
            }
        }
    }
    .login-waper-show{
        animation: myslide 1s ease 0s 1 normal forwards;
    }
    @keyframes myslide{
        0% {
            top: 0;
            transform: translateY(-100%);
        }
        50% {
            top: 20%;
            transform: translateY(0) rotateY(0);
        }
        100% {
            top: 20%;
            transform: translateY(0) rotateY(360deg);
        }
    }
}
</style>