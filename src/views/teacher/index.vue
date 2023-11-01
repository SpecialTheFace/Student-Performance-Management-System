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
      <el-table-column label="性别" prop="Gender" align="center">
      </el-table-column>
      <el-table-column label="住址" align="center" prop="Address">
      </el-table-column>
      <el-table-column label="联系电话" align="center" prop="PhoneNumber">
      </el-table-column>
      <el-table-column class-name="status-col" label="邮件" align="center" prop="Email">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            @click="handelEdit(scope.$index, scope.row)"
          >编辑
          </el-button>
          <el-popconfirm
            confirm-button-text='确定'
            cancel-button-text='不用了'
            icon="el-icon-info"
            icon-color="red"
            title="确定删除吗？"
            @onConfirm="handelDelete(scope.row)"
          >
            <el-button slot="reference" type="danger" size="mini">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="信息编辑" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.Name" autocomplete="off"></el-input>
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

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handelEnter">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import service from "@/utils/request";
import axios from "axios";
import { Message } from "element-ui";

export default {
  name : 'Teacher' ,
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
      listLoading : true ,
      dialogFormVisible : false ,
      form : {
        Name : '' ,
        Gender : '' ,
        Address : '' ,
        PhoneNumber : '' ,
        Email : '' ,
        TeacherID : ''
      } ,
      formLabelWidth : '120px'
    }
  } ,
  created () {
    // this.fetchData ()
  } ,
  methods : {
    async fetchData () {
      const { data : res } = await axios.get ( 'http://localhost:8080/api/teacher' );
      this.list = res.data;
      this.listLoading = false;
    } ,
    // 开始编辑
    handelEdit ( index , info ) {
      this.form.TeacherID = info.TeacherID;
      this.form.Name = info.Name;
      this.form.Gender = info.Gender;
      this.form.Address = info.Address;
      this.form.PhoneNumber = info.PhoneNumber;
      this.form.Email = info.Email;
      this.dialogFormVisible = true;
    } ,
    // 确认编辑
    async handelEnter () {
      const { data : res } = await axios.put ( `http://localhost:8080/api/teacher/${ this.form.TeacherID }` , this.form )
      await this.fetchData ();
      Message.success ( res.msg )
      this.dialogFormVisible = false;
    } ,
    // 删除数据
    async handelDelete ( info ) {
      const { data : res } = await axios.delete ( `http://localhost:8080/api/teacher/${ info.TeacherID }` );
      await this.fetchData ();
      Message.success ( res.msg );
    } ,

  } ,
  mounted () {
    this.fetchData ();
  }
}
</script>
