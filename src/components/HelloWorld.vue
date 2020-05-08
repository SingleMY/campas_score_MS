<template>
  <el-container>
    <el-header>
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">活动</el-menu-item>
        <el-menu-item index="3">产品</el-menu-item>
        <el-menu-item index="4">公告消息</el-menu-item>
        <el-menu-item index="5">
          <el-avatar>
            <router-link to="/login">登陆</router-link>
          </el-avatar>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <div>
        <h2>欢迎使用校园积分管理系统</h2>
      </div>
      <el-carousel :interval="4000" type="card" height="450px">
        <el-carousel-item v-for="item in showLists" :key="item">
          <el-row class="showcard">
            <el-col span="24">
              <h3>{{ item.title }}</h3>
              <img :src="item.content" width="500px" height="320px" />
              <p>{{ item.des }}</p>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </el-main>
    <el-footer>校园积分系统后台管理系统 @copyright by Score Boys</el-footer>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      Iscard: true,
      imgHeight: '',
      showLists: [
        {
          title: '体育馆篮球比赛',
          content: require('@/assets/img/1.jpg'),
          des: '时间：2020年12月2日，地点：体育馆201教室'
        },
        {
          title: '体育馆篮球比赛',
          content: require('@/assets/img/1.jpg'),
          des: '时间：2020年12月2日，地点：体育馆201教室'
        },
        {
          title: '体育馆篮球比赛',
          content: require('@/assets/img/1.jpg'),
          des: '时间：2020年12月2日，地点：体育馆201教室'
        }
      ]
    }
  },
  methods: {},
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header,
.el-main {
  margin: 0px;
  padding: 0px;
}
.el-footer {
  color: #b3c0d1;
  text-align-last: right;
  line-height: 20px;
  margin-top: 30px;
  bottom: 0;
}
.el-main .el-carousel {
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
}
.el-menu {
  display: flex;
  justify-content: space-around;
}
.el-menu-item {
  display: inline;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  margin-top: '10px';
}

.el-carousel__item:nth-child(2n) {
}

.el-carousel__item:nth-child(2n + 1) {
}
.el-card {
  width: 800px;
  height: 800px%;
}
</style>
