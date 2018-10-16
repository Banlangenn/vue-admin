<template>
  <div class="permission">
    <div class="block">
      <div class="treeHeader">
        <div style="display:flex;    justify-content: space-between; ">
          <el-button 
            type="primary" 
            size="mini" 
            @click.native = "append('d',{id:0})" 
            icon="el-icon-plus">添加Root节点</el-button>
          <el-popover
            placement="bottom"
            width="400"
            trigger="hover"
            content="component：因为vue-router，嵌套规则限制，component只有root和尾部节点有用,中间并没有什么卵用,可以不填"
          >
            <el-button 
              slot="reference" 
              size="mini" 
              type="primary" >一些必要的描述</el-button>
          </el-popover>
        </div>
        <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText"/>
      </div>
      <div class="custom-tree-node ">
        <el-tree
          :data="data5"
          node-key="id"
          :props="defaultProps"
          :expand-on-click-node="false"
          :filter-node-method="filterNode"
          accordion
          ref="tree">
          >
          <span 
            class="custom-tree-node" 
            slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span class="edit">
              <el-button
                type="text"
                size="mini "
                @click="() =>{append(node,data)}" >
                <i class="el-icon-plus"/>
              </el-button>
              <el-button
                type="text"
                size="mini "
                @click="() =>{remove(node, data)}">
                <i class="el-icon-minus" />
              </el-button>
              <el-button
                type="text"
                size="mini "
                @click="() =>{editNode(node, data)}">
                <i class="el-icon-edit" />
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </div>

    <el-dialog 
      :title="title" 
      :visible.sync="dialogFormVisible" 
      width='30%'>
      <el-form 
        label-position="right" 
        label-width="90px" 
        :rules="rules" 
        ref = "ruleForm" 
        :model="form" >
        <el-form-item 
          label="menuName" 
          prop="menuName">
          <el-input 
            v-model="form.menuName" 
            placeholder='请输入内容'/>
        </el-form-item>
        <el-form-item 
          label="icon" 
          prop="icon">
          <el-input 
            v-model="form.icon" 
            placeholder="请输入内容"/>
        </el-form-item>
        <el-form-item 
          label="path" 
          prop="path">
          <el-input 
            v-model="form.path" 
            placeholder="请输入内容"/>
        </el-form-item>
        <el-form-item 
          label="component" 
          prop="component">
          <!-- <el-input v-model="form.component"  placeholder="请输入内容"></el-input> -->
          <el-autocomplete
            class="inline-input"
            v-model="form.component"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            :readonly = 'rootNodeCom'
           
          >
            <template slot-scope="{item}">
              <i 
                class="iconfont-icon-zujian" 
                :style = "{color:'#409efe',fontSize:'15px',marginRight:'4px'}" />
              <span > {{ item.value }}</span> 
            </template>
          </el-autocomplete>
          <!-- :trigger-on-focus="false" -->
        </el-form-item>
      </el-form>
      <div 
        slot="footer" 
        class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <!-- <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button> -->
        <el-button 
          type="primary" 
          @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>  

  </div> 
</template>

<script>
let id = 1000;
import { comArr } from "@/router/comObj";
import cloneDeep from "lodash/cloneDeep";
import { getMenutData ,insertMenuData ,updateMenuData ,deleteMenuData } from "@/services/api";
export default {
  created() {
    getMenutData().then((res)=> {
        if(res.code == 'success') {
          this.authList = res.data
        }else{
          this.$message.error(res.message)
        }
      }).catch(err => {
        this.$message.error(res.message)
      });
  },
  data() {
    return {
      title: "",
      edit: false,
      rootNodeCom: false,
      authList: [
        // {
        //   id: "1",
        //   parentId: "0",
        //   menuName: "权限",
        //   component: "Index",
        //   icon: "el-icon-setting",
        //   path: "permission"
        // },
      ],
      rules: {
        menuName: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 10个字符", trigger: "blur" }
        ],
        icon: [
          { required: true, message: "请输入菜单图标", trigger: "blur" },
          {
            min: 3,
            max: 30,
            message: "长度在 3  到 10 个字符",
            trigger: "blur"
          }
        ],
        component: [
          { required: false, message: "请输入组件名称", trigger: "blur" },
          { min: 1, max: 25, message: "长度在 1 到 10个字符", trigger: "blur" }
        ],
        path: [
          { required: true, message: "请输入路由路径", trigger: "blur" },
          { min: 3, max: 30, message: "长度在 3 到 10个字符", trigger: "blur" }
        ]
      },
      form: {
        menuName: "",
        icon: "",
        component: "",
        parentId: "",
        path: "",
        id: null
      },
      formLabelWidth: "120px",
      dialogFormVisible: false,
      filterText: "",
      // data5: JSON.parse(JSON.stringify(data)),
      defaultProps: {
        children: "children",
        label: "menuName"
      }
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  computed: {
    data5: function() {
      console.log("authList 改变了");
      // let data =   JSON.parse(JSON.stringify(this.authList))
      let data = cloneDeep(this.authList);
      let targetArr = [];
      function authTree(list, nodeId, targetArr) {
        if (!targetArr) {
          return;
        }
        list.forEach((element, i) => {
          if (element.parentId == nodeId) {
            element.children = [];
            targetArr.push(element);
            authTree(list, element.id, element.children);
          }
        });
      }
      // authTree(JSON.parse(JSON.stringify(data)),0,targetArr)
      authTree(cloneDeep(data), 0, targetArr);
      return targetArr;
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
           const FORM = cloneDeep(this.form);
          if (!this.edit) {
            // 添加
            // 请求成功
            insertMenuData(this.form).then(res=>{
              if(res.code == 'success') {
                this.form.id = res.data.id
                this.$notify({
                      title: "添加<" + this.form.menuName + ">",
                      message: "添加<" + this.form.menuName + ">节点,成功",
                      type: "success"
                });
                this.authList.push(this.form)
              }else{
                this.$message.error(res.message)
              }
              }).catch(err => {
                this.$message.error(res.message)
              });
          } else {
            updateMenuData({
              component: FORM.component,
              icon: FORM.icon,
              menuName: FORM.menuName,
              path: FORM.path,
              parentId: FORM.parentId,
              id: FORM.id,
            }).then(res=>{
              if(res.code == 'success') {
                // this.form.id = res.data.id
                this.$notify({
                  title: "修改<" + FORM.menuName + ">",
                  message: "修改<" + FORM.menuName + ">节点,成功",
                  type: "success"
                })
                //如果  返回新数组 不用我自己在遍历了
                for (let i = 0; i < this.authList.length; i++) {
                  if (this.authList[i].id === FORM.id) {
                    this.authList.splice(i, 1, FORM)
                    break;
                  }
                }
              }else{
                this.$message.error(res.message)
              }
              }).catch(err => {
                this.$message.error(res.message)
              });
          }
          /***
           * dialog 影藏
           * form 清空
           */
          this.dialogFormVisible = false;
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.form = {
        menuName: "",
        icon: "",
        component: "",
        parentId: "",
        path: "",
        id: null
      };
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.menuName.indexOf(value) !== -1;
    },
    append(node, data) {
      this.edit = false;
      this.title = "添加节点";
      this.resetForm();
      this.dialogFormVisible = true;
      this.form.parentId = data.id; // 把当前的 id 也就是将要插入的
      if (data.id == 0) {
        this.rootNodeCom = true;
        this.form.component = "Index";
      } else {
        this.rootNodeCom = false;
      }
    },
    editNode(node, data) {
      this.title = "编辑：" + data.menuName;
      //  this.form =  JSON.parse(JSON.stringify(data))
      this.form = cloneDeep(data);
      this.dialogFormVisible = true;
      this.edit = true;
    },
    remove(node, data) {
      this.title = "删除" + data.menuName;
      if (data.children && data.children.length > 0) {
        this.$message({
          message: "不可直删除有儿子的节点",
          type: "warning"
        });
      } else {
        this.$confirm("检测到删除<" + data.menuName + ">节点？", "确认删除", {
          distinguishCancelAndClose: true,
          confirmButtonText: "确认",
          cancelButtonText: "取消"
        })
          .then(()=> {
            deleteMenuData({ id: data.id }).then(res=>{
              console.log(res)
            })
            // 删除节点
            for (let i = 0; i < this.authList.length; i++) {
              if (this.authList[i].id === data.id) {
                this.authList.splice(i, 1);
                this.$notify({
                  title: "删除<" + data.menuName + ">",
                  message: "删除<" + data.menuName + ">节点,成功",
                  type: "success"
                });
                break;
              }
            }
            // 删除节点
          })
          .catch(action => {});
      }
    },
    // 搜索提示
    querySearch(queryString, cb) {
      const results = queryString
        ? comArr.filter(this.createFilter(queryString))
        : comArr;
      // 调用 callback 返回建议列表的数据
      cb(results.map(item => ({ value: item })));
    },
    createFilter(queryString) {
      return comstr => {
        // return (comstr.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        return comstr.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
      };
    }
    // handleSelect(item) {
    // console.log(item);
    // }
  }
};
</script>
<style  lang = 'less'>
.permission {
  .treeHeader {
    display: flex;
    padding: 10px 0;
    flex-direction: column;
    justify-content: space-between;
    width: 330px;
    height: 100px;
    .el-button {
      width: 120px;
    }
  }
  .el-autocomplete {
    width: 100%;
  }
  .edit {
    margin-left: 10px;
    i {
      font-size: 16px;
      font-weight: 800;
    }
  }
}
</style>
