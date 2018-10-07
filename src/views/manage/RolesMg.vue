<template>
  <div class="roles">
    <Flex class="inputWrap">
      <el-input 
        placeholder="请输入用户名称" 
        prefix-icon = "el-icon-search" 
        v-model="searchInput" 
        class="input-with-select">
        <el-button 
          slot="append" 
          type="primary" 
          icon="el-icon-search"> 搜索</el-button>
      </el-input>
    </Flex>

    <Flex class="cardWrap" >
      <el-card 
        class="box-card" 
        v-for="o in 10" 
        :key="o" >
        <div slot="header">
          <span>李白</span>
          <i 
            style="float: right; padding: 3px 0; color:red" 
            class="el-icon-delete"/>
        </div>
        <div class="avatarWrap">
          <img 
            class="user-avatar" 
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537325984&di=e6f3a49415c4831211ee235a9a0723a2&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172454_j2VU3.jpeg">
        </div>
        <div class="infoContent">
          <p>用户名称：李白</p>
          <p>手机号码：18790176186</p>
          <p>用户状态：
            <el-switch
              v-model="userStaus"
              active-value="1"
              inactive-value="0"
              active-text="启用"
              inactive-text="禁用"/>
          </p>
          <p>用户角色：
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              size="mini"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{ tag }}
            </el-tag>
                 
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
                    
              size="mini"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            />
            <el-button 
              v-else 
              class="button-new-tag" 
              size="mini" 
              @click="showInput('saveTagInput'+1)">+ 角色</el-button>
          </p>
          <!-- <p>用户名称：李白</p> -->
        </div>
      </el-card>


     
    </Flex>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
      userStaus: "0",
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: ""
    };
  },

  computed: {},
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      // console.log(this.$refs)
      // this.$nextTick(_ => {
      //   this.$refs[saveTagInput].$refs.input.focus();
      // });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>
<style  lang = 'less'>
.roles {
  .input-with-select {
    max-width: 500px;
  }
  .inputWrap {
    justify-content: center;
  }
  .cardWrap {
    padding-top: 2px;
    /* display: flex; */
    flex-wrap: wrap;
    min-width: 800px;
    .box-card {
      margin: 20px;
      width: calc(~"33.333% - 40px");
    }
    .avatarWrap {
      text-align: center;
    }
    img.user-avatar {
      width: 60px;
      height: 60px;
      border-radius: 1000px;
    }
  }
  .el-tag + .el-tag {
    /* margin-left: 10px; */
    margin: 5px;
  }
  .button-new-tag {
    margin: 5px;
    padding: 0 5px;
    height: 20px;
  }
  .input-new-tag {
    margin: 5px;
    line-height: 19px;
    vertical-align: bottom;
  }
  .infoContent {
    margin-top: 12 px;
    font-size: 14px;
    p {
      /* margin: 5px 0; */
      line-height: 20px;
      color: #21c8f6;
    }
  }
}
</style>
