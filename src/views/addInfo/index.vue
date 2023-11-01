<template>
  <div class="addInfo-container">
    <h1>添加教师</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.Name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="form.Gender"></el-input>
      </el-form-item>
      <el-form-item label="住址">
        <el-input v-model="form.Address"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.PhoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="邮件">
        <el-input v-model="form.Email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="create">立即创建</el-button>

      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import axios from "axios";
import { Message } from "element-ui";

export default {
  name : 'AddTeacher' ,
  data () {
    return {
      form : {
        Name : '' ,
        Gender : '' ,
        Address : '' ,
        PhoneNumber : '' ,
        Email : '' ,
      } ,
    }
  } ,
  methods : {
    async onSubmit () {
      const { data : res } = await axios.post ( 'http://localhost:8080/api/teacher' , this.form );
      Message.success ( res.msg )
    }
  }
}
</script>

<style scoped lang="scss">
.addInfo-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  .el-form {
    width: 50vw;
    height: 50vh;

    .create {
      margin-left: 275px;
    }
  }
}


</style>
