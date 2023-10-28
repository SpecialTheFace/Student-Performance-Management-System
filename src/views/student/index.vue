<template>
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
    <el-table-column label="操作"  align="center">
      <template>
        <el-button
          size="mini"
          type="success"
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
</template>

<script>
import axios from "axios";

export default {
  name : 'Student' ,
  data () {
    return {
      tableData : null
    }
  } ,
  created () {
    axios.get ( '/myapi/student' ).then ( res => res.data ).then ( res => {
      this.tableData = res.data
    } )
  }
}
</script>
