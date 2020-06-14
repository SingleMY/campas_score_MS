<template>
  <el-card shadow="hover" class="box-card">
    <el-form :model="form" label-width="100px">
      <el-form-item label="商家ID" style="width:350px;margin-left:50px">
        <el-input
          v-model="form.business_id"
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

      <el-form-item label="商家姓名" style="width:250px;text-align:left;margin-left:50px">
        <el-input v-model="form.business_name" />
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
import { BusinessAdd } from '@/api/submit'

export default {
  data() {
    return {
      list: null,
      form: {
        business_id: '',
        admin_id: '',
        business_name: ''
      }
    }
  },
  methods: {
    Submit(form) {
      BusinessAdd(form).then(response => {
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
