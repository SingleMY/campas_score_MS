<template>
  <el-card shadow="hover" class="box-card">
    <el-form :model="form" label-width="100px">
      <el-form-item label="商品ID" style="width:350px;margin-left:50px">
        <el-input
          v-model="form.p_id"
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
      <el-form-item label="产品名称" style="width:250px;text-align:left;margin-left:50px">
        <el-input v-model="form.p_name" />
      </el-form-item>
      <el-form-item label="产品描述" style="text-align:left;margin:20px 150px 20px 50px">
        <el-input
          v-model="form.application_content"
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 5}"
        />
      </el-form-item>
      <el-form-item label="产品价格" style="text-align:left;margin:20px 150px 20px 50px">
        <el-input
          v-model="form.price"
          type="input"
          :autosize="{ minRows: 1, maxRows: 2}"
        />
      </el-form-item>
      <el-form-item label="产品地点" style="text-align:left;margin:20px 150px 20px 50px">
        <el-input
          v-model="form.p_place"
          type="input"
          :autosize="{ minRows: 1, maxRows: 2}"
        />
      </el-form-item>
      <el-form-item label="交易时间" style="width:350px;margin-left:50px;margin-left:50px">
        <el-date-picker
          v-model="form.p_prodution_date"
          type="datetime"
          placeholder="选择时间"
          style="width: 100%;"
        />
      </el-form-item>
      <el-form-item label="交易状态" style="text-align:left;margin:20px 150px 20px 50px">
        <el-input
          v-model="form.p_validity"
          type="input"
          :autosize="{ minRows: 1, maxRows: 1}"
        />
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
import { scoreApplyAdd } from '@/api/submit'

export default {
  data() {
    return {
      list: null,
      form: {
        p_id: '',
        admin_id: '',
        p_name: '',
        p_description: '',
        p_price: '',
        p_place: '',
        p_prodution_date: '',
        p_validity: ''
      }

    }
  },
  methods: {
    Submit(form) {
      scoreApplyAdd(form).then(response => {
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
