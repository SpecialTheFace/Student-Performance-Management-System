<template>
  <div class="studentContainer">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="Name"
        label="姓名"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="DateOfBirth"
        label="出生日期"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="Gender"
        label="性别"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="Address"
        label="住址"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="PhoneNumber"
        label="联系电话"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="Email"
        label="邮件"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="AdmissionDate"
        label="入学日期"
        align="center"
      >
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template scope="scope">
          <el-button
            size="mini"
            type="success"
            @click="handleEdit(scope)"
          >编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
          >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--弹出层-->
    <Dialog
      :visible="dialogFormVisible"
      :Name="Name"
      :DateOfBirth="DateOfBirth"
      :Gender="Gender"
      :Address="Address"
      :PhoneNumber="PhoneNumber"
      :Email="Email"
      :AdmissionDate="AdmissionDate"
      :id="id"
      @changeVisible="changeVisible"></Dialog>
  </div>


</template>

<script>
import axios from "axios";
import Dialog from "@/views/student/dialog/index.vue";

export default {
  name : 'Student' ,
  components : { Dialog } ,
  data () {
    return {
      // 表格数据源
      tableData : null ,
      dialogFormVisible : false ,
      Name : '' ,
      DateOfBirth : '' ,
      Gender : '' ,
      Address : '' ,
      PhoneNumber : '' ,
      Email : '' ,
      AdmissionDate : '' ,
      id : ''
    }
  } ,
  created () {
    axios.get ( '/myapi/student' ).then ( res => res.data ).then ( res => {
      this.tableData = res.data
    } )


  } ,
  methods : {
    handleEdit ( scope ) {
      this.dialogFormVisible = true;
      const { Name , DateOfBirth , Gender , Address , PhoneNumber , Email , AdmissionDate , id } = scope.row;
      this.Name = Name;
      this.DateOfBirth = DateOfBirth;
      this.Gender = Gender;
      this.Address = Address;
      this.PhoneNumber = PhoneNumber;
      this.Email = Email;
      this.AdmissionDate = AdmissionDate;
      this.id = id;

    } ,
    changeVisible ( data , options , peopleId ) {
      console.log ( "子组件传过来的数据" , data , options , peopleId )
      this.dialogFormVisible = data;
    }
  }
}
</script>
