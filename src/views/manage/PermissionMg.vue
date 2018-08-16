<template>
  <div class="permission">
 <div class="block">
<div class="treeHeader">
    <el-button type="primary" size="mini"  @click.native = "append('d','d','0')"     icon="el-icon-plus">添加Root节点</el-button>
      <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>
</div>
    <el-tree
      :data="data5"
      show-checkbox
      node-key="id"
      :props="defaultProps"
      :expand-on-click-node="false"
      :filter-node-method="filterNode"
      accordion
      default-expand-all
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
        </span>
      </span>
    </el-tree>
  </div>

<el-dialog title="收货地址" :visible.sync="dialogFormVisible"  width='30%'>
  <el-form label-position="right" label-width="80px" :rules="rules" ref="ruleForm"  :model="form"  >
  <el-form-item label="菜单名称"  prop="menuName">
    <el-input v-model="form.menuName"></el-input>
  </el-form-item>
  <el-form-item label="菜单图标" prop="icon">
    <el-input v-model="form.icon"></el-input>
  </el-form-item>
  <el-form-item label="组件名称" prop="comName">
    <el-input v-model="form.comName"></el-input>
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
  export default {
    data() {
      return {
        authList : [
  {
      id:"1",
      parentId:"0",
      menuName:'一级1',
      icon: '',
  },{
      id:"2",
      parentId:"0",
      menuName:'一级2',
      comName:'xxx',
      icon: '',
  },
  {
      id:"3",
      parentId:"0",
      menuName:'一级3',
      comName:'xxx',
      icon: '',
  },
  {
      id:"10",
      parentId:"1",
     menuName:'一级1-1',
      comName:'xxx',
      icon: '',
  },
    {
      id:"11",
      parentId:"1",
     menuName:'一级1-2',
      comName:'xxx',
      icon: '',
  },
    {
      id:"22",
      parentId:"2",
     menuName:'一级2-1',
      comName:'xxx',
      icon: '',
  },
    {
      id:"19  ",
      parentId:"2",
     menuName:'一级2-2',
      comName:'xxx',
      icon: '',
  },
    {
      id:"23",
      parentId:"1",
     menuName:'一级1-3',
      comName:'xxx',
      icon: '',
  },
    {
      id:"24",
      parentId:"1",
     menuName:'一级1-4',
      comName:'xxx',
      icon: '',
  },
],
         rules: {
          menuName: [
            { required: true, message: '请输入菜单名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
           icon: [
            { required: true, message: '请输入菜单图标', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3  到 10 个字符', trigger: 'blur' }
          ],
           comName: [
            { required: true, message: '请输入组件名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
        
        },
        form: {
          menuName: '',
          icon: '',
          comName:'',
          parentId:'',
          id:''
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
      let data =   JSON.parse(JSON.stringify(this.authList))
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
    authTree(JSON.parse(JSON.stringify(data)),0,targetArr)
    return  targetArr
  }
},
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           
            this.dialogFormVisible = false
            let FORM = JSON.parse(JSON.stringify(this.form))
              FORM.id =   id ++
              console.log(FORM)
            // this.$refs.tree.append(FORM,this.node)
            this.authList.push(FORM)
  
            // this.$refs[formName].resetFields();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       filterNode(value, data) {
        if (!value) return true;
        return data.menuName.indexOf(value) !== -1;
      },
      append(node,data,parentId) {  
      this.dialogFormVisible = true;
      alert( data.id)
       this.form.parentId = parentId  ||   data.id;// 把当前的 id 也就是将要插入的
      },

      remove(node, data) {
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
        this.$refs.tree.remove(node)
        this.$notify({
          title: '删除<'+data.menuName+'>',
          message: '删除<'+data.menuName+'>节点,成功',
          type: 'success'
        });



            
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


