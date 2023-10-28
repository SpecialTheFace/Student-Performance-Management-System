<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="姓名" prop="Name">
      </el-table-column>
      <el-table-column label="Gender" prop="性别" align="center">
      </el-table-column>
      <el-table-column label="住址" align="center" prop="Address">
      </el-table-column>
      <el-table-column label="联系电话" align="center" prop="PhoneNumber">
      </el-table-column>
      <el-table-column class-name="status-col" label="邮件" align="center" prop="Email">
      </el-table-column>
      <el-table-column label="操作" align="center">
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
  </div>
</template>

<script>
import { getList } from '@/api/table'
// import service from "@/utils/request";
import axios from "axios";

export default {
  filters : {
    statusFilter ( status ) {
      const statusMap = {
        published : 'success' ,
        draft : 'gray' ,
        deleted : 'danger'
      }
      return statusMap[ status ]
    }
  } ,
  data () {
    return {
      list : null ,
      listLoading : true
    }
  } ,
  created () {
    // this.fetchData ()
  } ,
  methods : {
    // fetchData () {
    //   this.listLoading = true
    //   getList ().then ( response => {
    //     this.list = response.data.items
    //     this.listLoading = false
    //   } )
    // }
  } ,
  mounted () {
    axios.get ( '/myapi/teachers' ).then ( response => {
      // console.log ( ">>>>" , response.data )
      this.list = response.data.data
      this.listLoading = false
    } )
  }
}
</script>
