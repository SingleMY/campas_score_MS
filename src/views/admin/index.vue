<template>
  <el-card shadow="hover" class="box-card">
    <div class="demo-drawer__content">
      <el-form :model="form" label-width="100px">
        <el-form-item label="我的ID" style="width:350px;margin-left:50px">
          <el-input
            v-model="form.admin_id"
            type="input"
            :autosize="{ minRows: 1, maxRows: 2}"
          />
        </el-form-item>
        <el-form-item label="我的用户名" style="width:450px;margin-left:50px">
          <el-input
            v-model="form.admin_username"
            type="input"
            :autosize="{ minRows: 1, maxRows: 2}"
          />
        </el-form-item>
        <el-form-item label="我的密码" style="width:250px;margin-left:50px">
          <el-input v-model="form.admin_password" />
        </el-form-item>
      </el-form>
      <div class="demo-drawer_footer">
        <el-button @click="cancelForm">重 置</el-button>
        <el-button
          type="primary"
          :loading="loading"
          @click="Submit(form)"
        >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import { EditAdmin, getMyInfor } from '@/api/submit'
export default {
  data() {
    return {
      loading: false,
      list: null,
      form: {
        admin_id: '',
        admin_username: '',
        admin_password: ''
      }

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getMyInfor().then(response => {
        console.log(response.data)
        this.form = response.data
      })
    },
    Submit(form) {
      this.loading = true
      EditAdmin(form).then(response => {
        this.form = response.data.items
        this.loading = false
        this.open()
      })
    },
    cancelForm() {
      this.loading = false
      this.form = []
    },
    open() {
      this.$notify({
        title: '成功',
        message: '添加成功',
        type: 'success'
      })
    }
  }
}
</script>
<style>
.box-card{
  margin: 30px;
}
.demo-drawer_footer{
  margin-left:150px ;
}
</style>
