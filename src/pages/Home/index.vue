<template>
  <div>
    <!-- 三级联动全局组件;三级联动已经注册为全局组件，因此不需要引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!-- 在floor组件中是没有发请求的，数据是父组件home给的 -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer/index.vue";
import Recommend from "./Recommend/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";
import { mapState } from "vuex";
export default {
    components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
    mounted() {
      // 派发action,获取floor组件的数据
      this.$store.dispatch("getFloorList");
    },
    computed:{
      ...mapState({
        floorList:state=>state.home.floorList
      })
    }
}
</script>

<style>

</style>