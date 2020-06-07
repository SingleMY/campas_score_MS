<template>
  <el-card shadow="hover" class="box-card">
    <el-form :model="form" label-width="100px">
      <el-form-item label="申请人" style="width:350px;margin-left:50px">
        <el-input
          v-model="form.user_id"
          type="input"
          :autosize="{ minRows: 1, maxRows: 2}"
        />
      </el-form-item>
      <el-form-item label="活动ID" style="width:350px;margin-left:50px">
        <el-input
          v-model="form.activity_id"
          type="input"
          :autosize="{ minRows: 1, maxRows: 2}"
        />
      </el-form-item>
      <el-form-item label="申请时间" style="width:350px;margin-left:50px;margin-left:50px">
        <el-date-picker
          v-model="form.application_time"
          type="datetime"
          placeholder="选择时间"
          style="width: 100%;"
        />
      </el-form-item>
      <el-form-item label="完成情况" style="width:250px;text-align:left;margin-left:50px">
        <el-input v-model="form.finish_case" />
      </el-form-item>
      <el-form-item label="申请内容" style="text-align:left;margin:20px 150px 20px 50px">
        <el-input
          v-model="form.application_content"
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 5}"
        />
      </el-form-item>
      <el-form-item label="申请材料" style="text-align:left;margin:20px 150px 20px 50px">
        <el-input
          v-model="form.application_material"
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 5}"
        />
      </el-form-item>
      <el-form-item label="是否通过" style="text-align:left;margin:20px 150px 20px 50px">
        <el-select v-model="form.application_state">
          <el-option label="审核通过" value="examined" />
          <el-option label="申请拒绝" value="refused" />
        </el-select>
      </el-form-item>
      <el-form-item label="批注" style="text-align:left;margin:20px 150px 20px 50px">
        <el-input
          v-model="form.note"
          type="textarea"
          :autosize="{ minRows: 1, maxRows: 3}"
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
      loading: false,
      list: null,
      form: {
        user_id: '',
        activity_id: '',
        application_time: '',
        finish_case: '',
        application_content: '',
        application_material: '',
        application_state: '',
        note: ''
      }

    }
  },
  methods: {
    Submit(form) {
      this.loading = true
      scoreApplyAdd(form).then(response => {
        this.loading = false
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
