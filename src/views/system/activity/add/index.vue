<template>
  <el-card shadow="hover" class="box-card">
    <div class="demo-drawer__content">
      <el-form :model="form" label-width="100px">
        <el-form-item label="活动ID" style="width:350px;margin-left:50px">
          <el-input
            v-model="form.activity_id"
            type="input"
            :autosize="{ minRows: 1, maxRows: 2}"
          />
        </el-form-item>
        <el-form-item label="活动名称" style="width:450px;margin-left:50px">
          <el-input
            v-model="form.activity_name"
            type="input"
            :autosize="{ minRows: 1, maxRows: 2}"
          />
        </el-form-item>
        <el-form-item label="开始时间" style="width:450px;margin-left:50px">
          <el-date-picker
            v-model="form.activity_begintime"
            type="datetime"
            placeholder="选择时间"
            style="width: 100%;"
          />
        </el-form-item>
        <el-form-item label="结束时间" style="width:450px;margin-left:50px">
          <el-date-picker
            v-model="form.activity_endtime"
            type="datetime"
            placeholder="选择时间"
            style="width: 100%;"
          />
        </el-form-item>
        <el-form-item label="活动成绩" style="width:250px;margin-left:50px">
          <el-input v-model="form.score" />
        </el-form-item>
        <el-form-item label="活动描述" style="text-align:left;margin:20px 150px 20px 50px">
          <el-input
            v-model="form.activity_des"
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 5}"
          />
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
import { ActivityAdd } from '@/api/submit'

export default {
  data() {
    return {
      list: null,
      form: {
        activity_id: '',
        activity_name: '',
        activity_des: '',
        activity_begintime: '',
        activity_endtime: '',
        score: ''
      }

    }
  },
  methods: {
    Submit(form) {
      ActivityAdd(form).then(response => {
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
.demo-drawer_footer{
  margin-left:150px ;
}
</style>
