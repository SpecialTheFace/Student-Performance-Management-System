<script>
export default {
  name : "Dialog" ,
  props : [
    'visible' ,
    'Name' ,
    'DateOfBirth' ,
    'Gender' ,
    'Address' ,
    'PhoneNumber' ,
    'Email' ,
    'AdmissionDate' ,
    'id'
  ] ,
  data () {
    return {
      dialogFormVisible : false ,
      form : {
        Name : '' ,
        DateOfBirth : '' ,
        Gender : '' ,
        Address : '' ,
        PhoneNumber : '' ,
        Email : '' ,
        AdmissionDate : ''
      } ,
      formLabelWidth : '120px'
    }
  } ,
  created () {
    console.log ( this.id )
  } ,
  watch : {
    visible : {
      immediate : true ,
      handler () {
        this.dialogFormVisible = this.visible;
        this.form.Name = this.Name;
        this.form.DateOfBirth = this.DateOfBirth
        this.form.Gender = this.Gender;
        this.form.Address = this.Address;
        this.form.PhoneNumber = this.PhoneNumber;
        this.form.Email = this.Email;
        this.form.AdmissionDate = this.AdmissionDate;
      }
    }
  } ,
  methods : {
    closeDialog () {
      // 向父组件传递 dialog 显示状态
      this.$emit ( 'changeVisible' , false )
    } ,
    enterDialog () {
      // TODO 发送 axios 请求，更新数据库数据


      // 确认编辑
      this.$emit ( 'changeVisible' , false , {
        Name : this.form.Name ,
        DateOfBirth : this.form.DateOfBirth ,
        Gender : this.form.Gender ,
        Address : this.form.Address ,
        PhoneNumber : this.form.PhoneNumber ,
        Email : this.form.Email ,
        AdmissionDate : this.form.AdmissionDate ,

      } , this.id )


    } ,
    handleClose () {
      // 关闭 Dialog
      this.$emit ( 'changeVisible' , false )
    }
  }
}
</script>

<template>
  <el-dialog title="信息编辑" :before-close="handleClose" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.Name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="出生日期" :label-width="formLabelWidth">
        <el-input v-model="form.DateOfBirth" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" :label-width="formLabelWidth">
        <el-input v-model="form.Gender" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="住址" :label-width="formLabelWidth">
        <el-input v-model="form.Address" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" :label-width="formLabelWidth">
        <el-input v-model="form.PhoneNumber" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮件" :label-width="formLabelWidth">
        <el-input v-model="form.Email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="入学日期" :label-width="formLabelWidth">
        <el-input v-model="form.AdmissionDate" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="enterDialog">确 定</el-button>
    </div>
  </el-dialog>
</template>

<style scoped lang="scss">

</style>
