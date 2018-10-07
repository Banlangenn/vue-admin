<template>
    <div class="anxin-index">
        <div class="index-wrap">
            <div class="index-top">
                <div class="index-top-logo">
                    <img src="./img/logo.png" class="logo-img">
                    <span class="vertical-ine"></span>
                    <span class="title">短期团体意外险</span>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="index-con">
            <div class="img-wrap list">
                <img src="./img/sec-bg.jpg" class="sec-img">
            </div>
            <div>
            <div class="safeguard list">
                <div class="title ">
                    <!-- <i class="shu"></i> -->
                    <span class="dec">短期团体意外险</span>
                </div>
                <div class="des-data">
                    <ul class="des-head des-list">
                        <li style="flex:2">保障责任</li>
                        <li style="flex:2">保额</li>
                        <li style="flex:6">保障说明</li>
                    </ul>
                    <ul class="des-list" style="box-shadow: inset 0 -1px 0 0 #E6E6E6;">
                        <li style="flex:2">保障说明</li>
                        <li style="flex:2;">10万</li>
                        <li style="flex:6">被保险人遭受意外伤害导致身故或残疾，我们将按约定给付保险金。</li>
                    </ul>
                    <ul class="des-list">
                        <li style="flex:2">意外医疗</li>
                        <li style="flex:2">1万</li>
                        <li style="flex:6">被保险人遭受意外伤害，且必须在医疗机构进行治疗，我们将按约定给付保险金。</li>
                    </ul>
                </div>
                <!-- <div class="data-wrap ">
                    <div class="con-list clearfix">
                        <div class="start">
                            <span class="dec-title">保险起期</span>
                            <el-date-picker
                                    v-model="insurStratDate"
                                    type="date"
                                    placeholder="选择日期"
                                    @change="optionData"
                                    :picker-options="pickerOptionsStart">
                            </el-date-picker>
                        </div>
                        <div class="end">
                            <span class="dec-title">保险止期</span>
                            <el-date-picker
                                    readonly
                                    v-model="insurEndDate"
                                    type="date"
                                    placeholder="选择日期">
                            </el-date-picker>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="list">
                <div class="title btm-list" >
                     <p class="dec">保费：<span style="color: #3598F7;">2元/人/天</span></p>
                </div>
               
            </div>

            <div class="plan list btm-p">
                <div class="title btm-list" style="box-shadow: inset 0 -1px 0 0 #E0E0E0;">
                    <span class="dec">起保日期</span>
                </div>
                <div class="person-wrap time ">
                    <div class="input-wrap">
                        <label>起保日期</label>   <el-date-picker
                                            v-model="insurEndDate"
                                            type="date"
                                            placeholder="选择日期">
                        </el-date-picker>
                    </div>
                    <p class="tips">*自 2018年*月*日起 至 2018年*月*日 止 共 1天</p>
                </div>
            </div>
            <div class="plan list btm-p">
                <div class="title btm-list" style="box-shadow: inset 0 -1px 0 0 #E0E0E0;">
                    <span class="dec">投保人信息</span>
                </div>
                <div class="person-wrap">
                <div class="input-wrap">
                    <label>投保企业名称</label>  <input  class="input" type="text" placeholder="请填写营业执照上一致的企业名称">
                </div>
                 <div class="input-wrap">
                    <label>统一社会信用代码</label>  <input  class="input" type="text" placeholder="与组织机构代码证件一致">
                </div>
                 <div class="input-wrap file-wrap" >
                    <label>统一社会信用代码图片</label>  <input  class="input" type="text"  readonly > 
                    <span class="file-select"> 
                        <input type="file" class="file" id="excel-upload-input" @change="tirggerFile($event)">
                        <span class="btn" @click="getFile()">上传营业执照</span>
                    </span>
                </div>
                 <p class="tips">*仅支持.jpg/.jpeg/png/PDF格式，大小不超过4M（没有三证合一的地区，请将营业执照、机构代码证和税务登记证打包成压缩文件上传）</p>
                </div>
            </div>
            <div class="plan list btm-p">
                <div class="title btm-list" style="box-shadow: inset 0 -1px 0 0 #E0E0E0;">
                    <span class="dec">联系人信息</span>
                </div>
                <div class="person-wrap">
                    <div class="input-wrap">
                        <label>联系人姓名</label>  <input  class="input" type="text" placeholder="请填写投保联系人姓名">
                    </div>
                    <div class="input-wrap">
                        <label>联系人手机号</label>  <input  class="input" type="text" placeholder="请填写投保联系人手机号">
                    </div>
                    <div class="input-wrap">
                        <label>联系人邮箱</label>  <input  class="input" type="text" placeholder="请填写投保联系人邮箱">
                    </div>
                </div>
            </div>
            <div class="inport list btm-p"  >
                <div class="title btm-list"  style="box-shadow: inset 0 -1px 0 0 #E0E0E0;">
                    <span class="dec">批量导入信息</span>
                </div>
                 <div class="person-wrap">
                    <div class="input-wrap">
                        <label>人员总数</label>  人员总数 0人 （3周岁-75周岁  1-3类）
                    </div>
                    <div class="input-wrap">
                        <label></label>  <input type="radio" name="aaa">批量导入<span>（下载模版）</span> <input type="radio" name="aaa">手动输入
                    </div>
                    <div class="des-data import-info">
                    <ul class="des-head des-list">
                        <li style="flex:2">姓名</li>
                        <li style="flex:2">证件类型</li>
                        <li style="flex:3">证件号码</li>
                        <li style="flex:2">生日</li>
                        <li style="flex:1.5">性别</li>
                        <li style="flex:2">手机号码</li>
                        <li style="flex:3">操作</li>
                    </ul>
                    <ul v-for = "item of importInfo"  class="des-list">
                        <li style="flex:2">
                            <input type="text" v-model="item.name"  class="info-input">
                        </li>
                         <li style="flex:2">
                           <el-select class="id-type"  v-model="item.idType" placeholder="请选择">
                            <el-option
                                v-for="item in idTypeOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        </li>
                         <li style="flex:3">
                            <input type="text"  v-model="item.id" class="info-input">
                        </li>
                         <li style="flex:2">
                            <input type="text"  class="info-input">
                        </li>
                         <li style="flex:1.5">
                            <el-select class="id-type"  v-model="item.sex" placeholder="请选择">
                            <el-option
                                v-for="item in sexOpt"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        </li>
                         <li style="flex:2">
                            <input type="text"   v-model="item.phone" class="info-input">
                        </li>
                         <li style="flex:3" class="operate">
                            <span>添加人员</span>
                            <span>删除</span>
                        </li>
                    </ul>
                </div>
                     <div class="input-wrap file-wrap">
                        <label></label> <input  class="input" type="text"  readonly > 
                        <span class="file-select"> 
                            <input type="file" class="file" id="excel-upload-input" @change="tirggerFile($event)">
                            <span class="btn" style="width:140px"  @click="getFile()">批量导入被保险人</span>
                        </span>
                    </div>
                    <div class="input-wrap">
                        <label>目的地</label>  <input  class="input" type="text" placeholder="请填写投保联系人邮箱">
                    </div>
                </div>
            </div>
            </div>
             <p style="font-size: 12px;color: #666666;text-align: center;line-height: 32px;background: #FFF1D8;">特别说明：如被保险人为未成年人，需由法定监护人签署投保确认书</p>
        </div>

        <footer>
            <div class="footer-con">
                <p class="agreement"><input type="radio"> 
                    本人已了解并接受以下条款和告知  
                    <a href="">《详细条款与除外责任》</a>
                    <a href="">《投保须知》</a>
                    ，投保人承诺被保险人职业符合1-3类，查看太平洋财险团险 
                    <a href="" class="dec">业类别表</a>
                。</p>
                <div class="total">
                    <p>
                        <span>总计保费</span>
                        <span class="toatlNum">{{total.toFixed(2)}}元</span>
                    </p>
                    <span class="btn" >立即投保</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    // import {formDate, getCookie} from 'common/js/util'
    // import {logout, storeFile} from 'api/anxin'
//    import Loading from 'components/loading'
     let uuid = 0
    export default {
        data() {
            return {
                total:0.00,
                uploadTitle: '导入成功', // 文件上传弹窗标题
                uploadErrText: '文件导入成功', // 上传文件提示
                insurStratDate: '', // 保险起期
                pickerOptionsStart: {
                    disabledDate: function(time) {
                        return time.getTime() < new Date() - 8.64e6
                    }
                },
                insurEndDate: '', // 保险止期
                fileName: '', // 上传文件名
                idTypeOpt: [
                    {
                    value: '选项1',
                    label: '身份证'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }
                 ],
                sexOpt: [
                    {
                    value: '选项1',
                    label: '男'
                    }, {
                    value: '选项2',
                    label: '女'
                    }
                ],
                    importInfo:[
                        {
                            name: 'ss',
                            idType: '选项1',
                            id: '',
                            sex: '男',
                            birthday: '',
                            sex:'选项1',
                            phone:''
                        },
                        {
                            name: 'ee',
                            idType: '选项1',
                            id: '',
                            sex: '男',
                            birthday: '',
                            sex:'选项1',
                            phone:'ss'
                        },
                    ]
            }
        },
        created () {
            this.init()
        },
        methods: {
            init() {
                // if (!getCookie('u_l_2')) {
                //     // this.$router.push({path: 'login'})
                //     console.log('22')
                // }
                let start = new Date()
                this.insurStratDate = formDate(new Date(start.getTime() + 86400000), 'yyyy-MM-dd')
                this.insurEndDate = formDate(new Date(start.getTime() + 31622400000), 'yyyy-MM-dd')
            },
            optionData() {
                let now = new Date(this.insurStratDate)
                this.insurEndDate = formDate(new Date(now.getTime() + 31536000000), 'yyyy-MM-dd')
            },
            getFile() {
                document.getElementById('excel-upload-input').click()
            },
            tirggerFile(e) {
                this.fileName = e.target.files[0].name
            },
            uploadFile() {
                let formData = new window.FormData()
                let file = document.querySelector('input[type=file]').files[0]
                formData.append('myfile', file)
                let options = {
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                this.Loading.open({
                    txt: '文件正在上传中'
                })
                storeFile(options).then((res) => {
                    this.Loading.close()
                    if (res.code === '0000') {
                        this.open()
                    } else {
                        if (res.message) {
                            this.uploadTitle = '导入异常'
                            this.uploadErrText = res.message
                            this.open()
                        } else {
                            this.uploadTitle = '导入失败'
                            this.uploadErrText = '系统错误，请重新导入'
                        }
                    }
                }).catch(() => {
                    this.uploadTitle = '导入失败'
                    this.uploadErrText = '系统错误，请重新导入'
                    this.open()
                })
            },
            exit() { // 用户退出
                logout().then((res) => {
                    if (res.code === '0000') {
                        this.$router.push({path: 'login'})
                    }
                })
            },
            open() {
                this.$alert(this.uploadErrText, this.uploadTitle, {
                    confirmButtonText: '确定',
                    callback: action => {
                    }
                })
            },
            exitAlert() {
                this.$confirm('退出账号', '您确定要退出当前帐号？', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(() => {
                    this.exit()
                })
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/scss" type="text/scss">
    .anxin-index{
        width: 100%;
        font-size: 14px;
        background: #F4F4F4;
        padding-bottom: 117px;
        .index-wrap {
            background: #fff;
        }
        .index-top{
            width: 1000px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #fff;
            height: 70px;
            &-exit{
                font-size: 14px;
                color: #333333;
                .exit{
                    cursor: pointer;
                    color: #F1A61A;
                }
            }
            .vertical-ine {
                width: 1px;
                background: #0C60A7;
                height: 28px;
                display: inline-block;
                vertical-align: middle;
                margin: 0 22px;
            
            }
            &-logo{
                flex: 0 0 1;
                .logo-img, .title {
                    display: inline-block;
                    vertical-align: middle;
                }
                .logo-img{
                    width: 129px;
                    height: 34px;
                }
                .title{
                    font-size: 20px;
                    color: #333333;
                    letter-spacing: 0;
                }
            }
        }
        .line{
            width: 100%;
            height: 1px;
            background: #FFFFFF;
            box-shadow: inset 0 -1px 0 0 #E4E4E4;
        }
        .index-con{
            width: 1000px;
            margin: 0 auto;
            .img-wrap.list{
                width: 1000px;
                height: 260px;
                margin: 22px 0;
                .sec-img{
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    background-size: contain;
                }
            }
            .list {
                margin: 10px 0;
                background: #fff;
                padding: 0 20px;
                .title{
                    .shu{
                        display: inline-block;
                        width: 2px;
                        height: 16px;
                        background:#F7A400;
                    }
                    .dec{
                        display: inline-block;
                        height: 52px;
                        line-height: 52px;
                        // vertical-align: top;
                        font-size: 16px;
                        color: #222222;
                        letter-spacing: 0;
                        margin-left: 8px;
                    }
                }
                .data-wrap{
                    border-bottom: 1px solid #E4E4E4;
                    .con-list{
                        margin-left: 90px;
                        padding-bottom: 30px;
                        .start{
                            float: left;
                        }
                        .end{
                            float: left;
                            margin-left: 49px;
                        }
                        .dec-title{
                            margin-right: 15px;
                        }
                    }
                }
            }
            .btm-list {
                margin-bottom: 12px;
            }
            .btm-p {
                padding-bottom: 12px;
            }
            .des-data {
                width: 100%;
                .des-list {
                    display: flex;
                    justify-items: center;
                    // line-height: 60px;
                    align-content: center;
                    height: 40px;
                    .operate {
                        display: flex;
                        justify-content: space-around;
                        line-height: 28px;
                        span {
                            font-size: 13px;
                            color: #4CA8FF;
                            &:last-child {                     
                            color: #F25959;
                            }
                        }
                    }
                    li {
                    // display: flex;
                    // justify-items: center;
                    // align-content: center;
                    // line-height: 40px;
                    text-align: center;
                    height: 40px;
                    padding:6px 8px;
                    input {
                        width: 100%;
                    }
                    }
                }
                .des-head{
                    background: #F4F4F4;
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                    color: #222222;
                    // text-align: center;
                }
            }
            .price {
                font-size: 16px;
                line-height: 52px;
            }
            .list {
                .tips {
                    font-size: 12px;
                    color: #666666;
                    margin-left: 187px;
                    // line-height: 30px;
                    // padding-bottom: 17px;
                }
                label {
                    width: 187px;
                    display: inline-block;
                    text-align: right;
                    padding: 0 10px;
                }
                 .input{
                    border: 1px solid #B3B3B3;
                    border-radius: 4px;
                    width: 258px;
                    height: 36px;
                    text-indent: 10px;
                }
            
                .input-wrap {
                    padding: 10px 0;
                }
                input::-webkit-input-placeholder {
                    /* placeholder颜色  */
                    color: #aab2bd;
                    /* placeholder字体大小  */
                    font-size: 12px;
                    /* placeholder位置  */
                    text-align: left;
                    text-indent: 10px;
                }
                .file-wrap{
                        position: relative;
                        // margin-left: 90px;
                        .file-name{
                            display: inline-block;
                            width: 231px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            height:34px;
                            line-height: 34px;
                            padding-left: 10px;
                            border: 1px solid #E4E4E4;
                            border-radius: 4px;
                        }
                        .file-select{
                            display: inline-block;
                            position: absolute;
                            top: 10px;
                            .file{
                                display: none;
                            }
                        }
                    }
            }
        }
        .btn{
            display: inline-block;
            width: 103px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            vertical-align: top;
            background:  #4CA8FF;
            border-radius: 4px;
            color: #fff;
            margin-left: 15px;
            cursor: pointer;
        }
         footer {
                position: fixed;
                bottom: 0;
                height: 97px;
                background: #FFFFFF;
                box-shadow: 0 -2px 6px 0 rgba(0,0,0,0.08);
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .footer-con {
                    width: 1000px;
                    margin: 0 auto;
                    height: 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .agreement {
                    a {
                        color: #4CA8FF;
                    }
                    a.dec {
                        text-decoration: underline;
                    }
                    font-size: 12px;
                    color: #222222;
                }
                .total {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    
                    p {
                        line-height: 26px; 
                        display: flex;
                        justify-content: center;
                    }
                    .toatlNum {
                       font-size: 22px;
                        color: #4CA8FF;
                        padding-left: 8px;
                        // line-height: 26px; 
                    }
                }
            }
        .import-info {
            .info-input {
                border: 1px solid #B3B3B3;
                border-radius: 4px;
                height: 28px;
                // margin-top: 6px;
                text-indent: 10px;
            }
             .el-icon-arrow-up:before {
                        position: absolute;
                        top: -6px;
                        left: 7px;
                   }  
            .id-type {
                // margin-top: 6px;
                .el-input__inner {
                    height: 28px;   
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
        .el-progress{
            display: none;
        }
    }
    .el-message-box{
        width: 620px;
        .el-message-box__title{
            font-size: 16px;
            color: #333333;
            line-height: 16px;
        }
        .el-button--primary{
            span{
                font-size: 14px;
                color: #FFFFFF;
                letter-spacing: 0;
            }
        }
        p{
            line-height: 21px;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    }
  
    
</style>