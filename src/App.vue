<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import Footer from './components/Footer/index.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    // 通知Vuex发送请求，获取商品分类的三级列表的数据，用于存储仓库当中
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>
</style>
