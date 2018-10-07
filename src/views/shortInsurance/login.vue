<template>
    <div class="login">
        <div class="login-jl">
            <!--<img class="login-bg" src="./img/bg.jpg">-->
            <img class="login-logo" src="./img/logo.png">
            <div class="login-list">
                <div class="login-list-wrap">
                    <div class="title">账号密码登录</div>
                    <div class="user">
                        <input type="text" placeholder="请输入账号" class="user-input account" v-model="account"
                        :class="{'err': atErrFlag}" @focus="userInputAcc()" maxlength="20">
                        <p class="wrong" :class="{'wrong-text':atErrFlag}">{{atErrText}}</p>
                    </div>
                    <div class="user">
                        <input type="password" placeholder="请输入密码" class="user-input" v-model="password"
                        :class="{'err': pwErrFlag}" @focus="userInputPsw()" maxlength="20">
                        <p class="wrong" :class="{'wrong-text':pwErrFlag}">{{pwErrText}}</p>
                    </div>
                    <!--<div class="authcode clearfix">-->
                        <!--<input type="text" placeholder="请输入验证码" class="user-auth" v-model="verification"-->
                               <!--:class="{'err': vfErrFlag}" @focus="userInputVer()" maxlength="4">-->
                        <!--<div class="auth">-->
                            <!--<img :src="verificationSrc" class="auth-img">-->
                            <!--<div class="change" @click="_getValidCode()">换一张</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <p class="wrong" :class="{'wrong-text':vfErrFlag}">{{vfErrText}}</p>
                    <div class="loginBtn" @click="login">登录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from 'api/anxin'
    export default {
        name: 'anxin',
        data() {
            return {
                account: '', // 账号
                password: '', // 密码
                verification: '', // 验证码
                verificationSrc: '', // 验证码图片地址
                atErrFlag: false, // 账号错误标志
                atErrText: '请输入正确账号', // 账号错误文字提醒
                pwErrFlag: false, // 密码错误标志
                pwErrText: '请输入正确密码', // 密码错误文字提醒
                vfErrFlag: false, // 验证码为空标志
                vfErrText: '请输入验证码' // 验证码错误提醒
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
//                this._getValidCode()
            },
//            _getValidCode() {
//                let currentTime = new Date().getTime()
//                this.verificationSrc = this.url.api.longJuGetValidCode + '?' + currentTime
//            },
            _login() {
                login({
                    userName: this.account,
                    userPwd: this.password
//                    verifCode: this.verification.toUpperCase()
                }).then(res => {
//                    if (res.code === '10092') {
//                        this.verification = ''
//                        this.vfErrFlag = true
//                        this.vfErrText = '验证码错误'
//                    } else
                    if (res.code === '10091') {
                        this.account = ''
                        this.atErrFlag = true
                        this.atErrText = '账号不存在'
                    } else if (res.code === '10001') {
                        this.password = ''
                        this.pwErrFlag = true
                        this.pwErrText = '密码错误'
                    } else if (res.code === '0000') {
                        this.$router.push({path: 'index'})
                    }
                })
            },
            userInputAcc() { // 账号输入框，获取焦点事件
                this.atErrFlag = false
            },
            userInputPsw() { // 密码输入框，获取焦点事件
                this.pwErrFlag = false
            },
//            userInputVer() { // 验证码输入框，获取焦点事件
//                this.vfErrFlag = false
//            },
            login() {
//                this._getValidCode()
                if (!this.account) {
                    this.atErrFlag = true
                }
                if (!this.password) {
                    this.pwErrFlag = true
                }
//                if (!this.verification) {
//                    this.vfErrFlag = true
//                }
//                if (this.account && this.password && this.verification) {
                if (this.account && this.password) {
                    this._login()
//                    this.$router.push({path: 'index'})
                }
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
    body{
        margin: 0px;
        padding: 0px;
    }
    .login{
        width: 100%;
        height: 100%;
        min-width: 1000px;
        overflow: hidden;
        &-jl{
            position: relative;
            margin: 60px auto;
            /*margin-bottom: 0px;*/
            width: 1400px;
            height: 700px;
            background: url("./img/bg.jpg") no-repeat;
            background-size: 100%;
        }
        &-bg{
            display: inline-block;
            width: 100%;
            height: 700px;
            background-size: contain;
        }
        &-logo{
            position: absolute;
            top: 0px;
            left: 2%;
            display: inline-block;
            width: 88px;
            height: 67px;
            padding: 10px 17px;
            background-color: #fff;
            border-radius: 6px;
        }
        &-list{
            position: absolute;
            top: 27%;
            left: 60%;
            width: 351px;
            height: auto;
            background: #fff;
            border-radius:4px;
            padding: 30px 20px;
            &-wrap{
                .title{
                    font-size: 18px;
                    color: #333333;
                    letter-spacing: 0;
                    line-height: 18px;
                    text-align: center;
                    font-weight: 600;
                }
                .wrong{
                    font-size: 12px;
                    color: #fff;
                    /*color: #FF5B5B;*/
                    letter-spacing: 0;
                    line-height: 12px;
                    margin: 5px;
                }
                .wrong-text{
                    color: #FF5B5B;
                }
                .user{
                    .user-input{
                        width: 309px;
                        height: 40px;
                        line-height: 40px;
                        border: 1px solid #CCCCCC;
                        border-radius: 4px;
                        padding: 0 10px;
                        font-size: 14px;
                    }
                    .account{
                        margin-top: 30px;
                    }
                    .err{
                        border: 1px solid #FF5B5B;
                    }
                }
                .authcode{
                    width: 100%;
                    .user-auth{
                        float: left;
                        width: 155px;
                        height: 40px;
                        border: 1px solid #CCCCCC;
                        border-radius: 4px;
                        margin-right: 10px;
                        padding:0 10px;
                        text-transform: uppercase;
                    }
                    .auth{
                        float: left;
                        width: 142px;
                        height: 40px;
                        border: 1px solid #CCCCCC;
                        border-radius: 4px;
                        padding: 5px 12px;
                        &-img{
                            float: left;
                            display: inline-block;
                            width: 70px;
                            height: 32px;
                            border: none;
                            cursor: pointer;
                        }
                        .change{
                            float: left;
                            width: 42px;
                            line-height: 32px;
                            margin-left: 6px;
                            color: #0199FE;
                            cursor: pointer;
                            font-size: 14px;
                        }
                    }
                    .err{
                        border: 1px solid #FF5B5B;
                    }
                }
                .loginBtn{
                    width: 312px;
                    height: 42px;
                    background: #F1A61A;
                    border-radius: 4px;
                    font-size: 18px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    line-height: 42px;
                    text-align: center;
                    margin-top: 10px;
                    cursor: pointer;
                }
            }
        }
    }
    .clearfix {
        *zoom: 1;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        line-height: 0;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }
</style>