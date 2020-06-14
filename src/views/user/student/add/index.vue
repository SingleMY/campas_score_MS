<template>
  <el-card shadow="hover" class="box-card">
    <el-form :model="form" label-width="100px">
      <el-form-item label="用户ID" style="width:350px;margin-left:50px">
        <el-input
          v-model="form.user_id"
          type="input"
          :autosize="{ minRows: 1, maxRows: 2}"
        />
      </el-form-item>
      <el-form-item label="管理员ID" style="width:350px;margin-left:50px">
        <el-input
          v-model="form.admin_id"
          type="input"
          :autosize="{ minRows: 1, maxRows: 2}"
        />
      </el-form-item>
      <el-form-item label="用户名" style="width:350px;margin-left:50px">
        <el-input
          v-model="form.user_name"
          type="input"
          :autosize="{ minRows: 1, maxRows: 2}"
        />
      </el-form-item>
      <el-form-item label="用户密码" style="width:350px;margin-left:50px">
        <el-input
          v-model="form.user_password"
          type="input"
          :autosize="{ minRows: 1, maxRows: 2}"
        />
      </el-form-item>
      <el-form-item label="学院" style="width:350px;margin-left:50px">
        <el-input
          v-model="form.user_major"
          type="input"
          :autosize="{ minRows: 1, maxRows: 2}"
        />
      </el-form-item>
      <el-form-item label="班级" style="width:350px;margin-left:50px">
        <el-input
          v-model="form.user_class"
          type="input"
          :autosize="{ minRows: 1, maxRows: 2}"
        />
      </el-form-item>
      <el-form-item label="成绩" style="width:250px;text-align:left;margin-left:50px">
        <el-input v-model="form.score" />
      </el-form-item>
    </el-form>
    <div class="demo-drawer_footer">
      <el-button @click="cancelForm">取 消</el-button>
      <el-button
        type="primary"
        :loading="loading"
        @click="Submit(form)"
      >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
    </div>
  </el-card>
</template>

<script>
import { UserAdd } from '@/api/submit'

export default {
  data() {
    return {
      list: null,
      form: {
        user_id: '',
        admin_id: '',
        user_name: '',
        user_password: '',
        user_major: '',
        user_class: '',
        score: ''
      }

    }
  },
  methods: {
    Submit(form) {
      UserAdd(form).then(response => {
        this.open()
      })
    },
    cancelForm() {
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
</style>
