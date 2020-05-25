<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div>
        <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
        <el-divider />

      </div>
      <div class="block" style="margin-top: 20px">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp"
          >
            <el-card>
              <h4>{{ activity.content }}</h4>
              <p>{{ activity.username }} 提交于 {{ activity.timestamp }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activities: [{
        username: 'moyang',
        content: '审核了活动申请表01010101',
        timestamp: '2020-05-20 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        username: 'moyang',
        content: '审核了活动申请表03560101',
        timestamp: '2020-05-21 22:32',
        color: '#0bbd87'
      }, {
        username: 'moyang',
        content: '审核了活动申请表00202101',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        username: 'moyang',
        content: '审核了活动申请表00902101',
        timestamp: '2020-05-24 23:48'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
