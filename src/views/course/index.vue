<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="课程"
      prop="CourseName"
      align="center"
    >
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template>
        <el-button
          size="mini"
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
  name : 'Course' ,
  data () {
    return {
      tableData : null
    }
  } ,

  created () {
    axios.get ( '/myapi/course' ).then ( res => res.data ).then ( res => {
      this.tableData = res.data
    } )
  }
}
</script>
