<template>
  <div class="permission">
 <div class="block">
<div class="treeHeader">
    <div style="display:flex;    justify-content: space-between; ">
      <el-button type="primary" size="mini"  @click.native = "append('d',{id:0})"     icon="el-icon-plus">添加Root节点</el-button>
   <el-popover
  placement="bottom"
  width="400"
  trigger="hover"
   content="component：因为vue-router，嵌套规则限制，component只有root和尾部节点有用,中间并没有什么卵用,可以不填"
      >

  <el-button slot="reference" size="mini"  type="primary"   >一些必要的描述</el-button>
</el-popover>
    </div>
      <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>
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
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span  class="edit">
          <el-button
            type="text"
            size="mini "
            @click="() =>{append(node,data)}" >
          <i class="el-icon-plus"></i>
          </el-button>
          <el-button
            type="text"
            size="mini "
            @click="() =>{remove(node, data)}">
           <i class="el-icon-minus" ></i>
          </el-button>
           <el-button
            type="text"
            size="mini "
            @click="() =>{editNode(node, data)}">
           <i class="el-icon-edit" ></i>
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
  </div>

<el-dialog  :title="title" :visible.sync="dialogFormVisible"  width='30%'>
  <el-form label-position="right" label-width="90px" :rules="rules"    ref = "ruleForm"  :model="form"  >
  <el-form-item label="menuName"  prop="menuName">
    <el-input v-model="form.menuName"  placeholder='请输入内容'></el-input>
  </el-form-item>
  <el-form-item label="icon" prop="icon">
    <el-input v-model="form.icon"   placeholder="请输入内容"></el-input>
  </el-form-item>
     <el-form-item label="path"  prop="path">
    <el-input v-model="form.path"  placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item label="component" prop="component">
    <el-input v-model="form.component"  placeholder="请输入内容"></el-input>
  </el-form-item>
</el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <!-- <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button> -->
    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
  </div>
</el-dialog>  

    </div> 
</template>

<script>
 let id = 1000;
 import cloneDeep from 'lodash/cloneDeep';
  export default {
    data() {
      return {
        title:'',
        edit:false,
        authList : [
  {
      id:"1",
      parentId:"0",
      menuName:'权限',
      component:'Index',
      icon: 'el-icon-setting',
      path:'permission',
  },{
      id:"2",
      parentId:"0",
      menuName:'管理',
      component:'Index',
      icon: 'el-icon-setting',
       path:'test',
  },
    //   PermissionMg,
    // About ,
    // HelloWorld
  {
      id:"3",
      parentId:"0",
      menuName:'测试',
      component:'Index',
      icon: 'el-icon-setting',
       path:'xxx',
  },
    {
      id:"40",
      parentId:"0",
      menuName:'测试-1',
      component:'HelloWorld',
      icon: 'el-icon-setting',
       path:'helloWorld',
  },
  {
      id:"10",
      parentId:"1",
     menuName:'一级1-1',
      component:'About',
      icon: 'el-icon-setting',
       path:'about',
  },
    {
      id:"11",
      parentId:"1",
     menuName:'一级1-2',
      component:'HelloWorld',
      icon: 'el-icon-setting',
       path:'one',
  },
    {
      id:"22",
      parentId:"2",
     menuName:'一级2-1',
      component:'PermissionMg',
      icon: 'el-icon-setting',
       path:'two',
  },
    {
      id:"19  ",
      parentId:"2",
     menuName:'一级2-2',
      component:'xxx',
      icon: 'el-icon-setting',
       path:'three',
  },
    {
      id:"23",
      parentId:"1",
     menuName:'一级1-3',
      component:'About',
      icon: 'el-icon-setting',
       path:'four',
  },
    {
      id:"24",
      parentId:"1",
     menuName:'一级1-4',
      component:'HelloWorld',
      icon: 'el-icon-setting',
       path:'five',
  },
],
         rules: {
          menuName: [
            { required: true, message: '请输入菜单名称', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
           icon: [
            { required: true, message: '请输入菜单图标', trigger: 'blur' },
            { min: 3, max: 30, message: '长度在 3  到 10 个字符', trigger: 'blur' }
          ],
           component: [
            { required: false, message: '请输入组件名称', trigger: 'blur' },
            { min: 3, max: 25, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
            path: [
            { required: true, message: '请输入路由路径', trigger: 'blur' },
            { min: 3, max: 30, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
        
        },
        form: {
          menuName: '',
          icon: '',
          component:'',
          parentId:'',
          id:'',
          path:''
        },
        formLabelWidth: '120px',
        dialogFormVisible:false,
        filterText: '',
        // data5: JSON.parse(JSON.stringify(data)),
         defaultProps: {
          children: 'children',
          label: 'menuName', 
        }
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
computed:{
  data5:function(){
    console.log('authList 改变了')
      // let data =   JSON.parse(JSON.stringify(this.authList))
     let data =   cloneDeep(this.authList)
      let targetArr = []
    function authTree(list,nodeId,targetArr){
      if(!targetArr){return}
        list.forEach((element,i) => {
        if(element.parentId ==  nodeId){
          element.children = [];
          targetArr.push(element)
          authTree(list,element.id,element.children)
          }
          });
    }
    // authTree(JSON.parse(JSON.stringify(data)),0,targetArr)
    authTree(cloneDeep(data),0,targetArr)
    return  targetArr
  }
},
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          // let FORM = JSON.parse(JSON.stringify(this.form))
            let FORM =  cloneDeep(this.form)
          if (valid) {
   
            if(!this.edit){
            
              // 添加

              // 请求成功
            
              FORM.id =   id ++
          // 返回对象


              this.$notify({
              title: '添加<'+FORM.menuName+'>',
              message: '添加<'+FORM.menuName+'>节点,成功',
              type: 'success'
            });
            this.authList.push(FORM)

           }else{       
            delete FORM.children ;
            // 请求成功  
              this.$notify({
              title: '修改<'+FORM.menuName+'>',
              message: '修改<'+FORM.menuName+'>节点,成功',
              type: 'success'
            });
             //如果  返回新数组 不用我自己在遍历了
          for(let i =0; i<this.authList.length;i++){
            if(this.authList[i].id === FORM.id){
              console.log(this.authList[i] )
                this.authList.splice(i,1,FORM)
              break;
            }
         
          }
           } 
                  /***
             * dialog 影藏
             * form 清空
             */
         
          this.dialogFormVisible = false
           this.resetForm() 
  
           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm() {
            this.form = {
                menuName: '',
                icon: '',
                component:'',
                parentId:'',
                id:''
            }
      },
       filterNode(value, data) {
        if (!value) return true;
        return data.menuName.indexOf(value) !== -1;
      },
      append(node,data) {  
        this.edit = false;
        this.title = '添加节点'
        this.resetForm()
        this.dialogFormVisible = true;
       this.form.parentId =  data.id;// 把当前的 id 也就是将要插入的
       if(data.id == 0){
          this.form.component = 'Index'
       }
      },
      editNode(node,data){
             this.title = '编辑：'+data.menuName
            //  this.form =  JSON.parse(JSON.stringify(data))
              this.form =  cloneDeep(data)
              this.dialogFormVisible = true;
              this.edit = true;
      },

      remove(node, data) {
         this.title = '删除'+data.menuName
        if (data.children&&data.children.length>0) {
             this.$message({
                message: '不可直删除有儿子的节点',
                type: 'warning'
              });
        }else{
     
         this.$confirm('检测到删除<'+data.menuName+'>节点？', '确认删除', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认',
          cancelButtonText: '取消'
        })
          .then(() => {
            // 删除节点

             for(let i =0; i<this.authList.length;i++){
                    if(this.authList[i].id === data.id){
                      console.log(this.authList[i] )
                        this.authList.splice(i,1)
          
                        this.$notify({
                          title: '删除<'+data.menuName+'>',
                          message: '删除<'+data.menuName+'>节点,成功',
                          type: 'success'
                        });
                      break;
                    }
            }







            
              // 删除节点
          })
          .catch(action => {
        
          });

        }
       
      },
    }
  };
 

</script>
<style scoped lang = 'less'>
.permission{
  
    .treeHeader{
      display: flex;
      padding: 10px 0;
      flex-direction:column; 
      justify-content: space-between;
      width: 330px;
      height: 100px;
      .el-button {
        width: 120px;
      }
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


