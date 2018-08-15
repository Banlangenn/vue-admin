<template>
  <div class="hello">
    <h1>权限管理</h1>
      



 <div class="block">
    <p>使用 scoped slot</p>
    <el-input
  placeholder="输入关键字进行过滤"
  v-model="filterText">
</el-input>

    <el-tree
      :data="data5"
      show-checkbox
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
      const data = [{
        id: 1,
        label: '一级 1',
        icon:'dsd',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
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
          comName:''
          // date1: '',
          // date2: '',
          // delivery: false,
          // type: [],
          // resource: '',
          // desc: ''
        },
        formLabelWidth: '120px',
        dialogFormVisible:false,
        filterText: '',
        data5: JSON.parse(JSON.stringify(data)),
         defaultProps: {
          children: 'children',
          label: 'label', 
        }
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogFormVisible = false
            alert('submit!');
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
        return data.label.indexOf(value) !== -1;
      },
      append(node,data) {
        const newChild = { id: id++, label: 'testtest', children: [] };  
      //  this.dialogFormVisible = true

        // this.$refs.tree.append(newChild,node)
          
      },

      remove(node, data) {
        console.log(data)
        if (data.children) {
             this.$message({
                message: '不可直删除有儿子的节点',
                type: 'warning'
              });
        }else{
          console.log(data)
         this.$confirm('检测到删除《'+data.label+'》节点？', '确认删除', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认',
          cancelButtonText: '取消'
        })
          .then(() => {
            // 删除节点
            this.$refs.tree.remove(node)

            
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
  .edit {
    margin-left: 10px;
    i {
      font-size: 16px;
    }
  }

</style>


