<template>
    <div class="swiper-container" ref="cur">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
                <img :src="carousel.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
// 引入Swiper
import Swiper from 'swiper'
export default {
    name: 'Carousel',
    props: ['list'],
    watch: {
        // 监听bannerList数据变化：因为这条数据方式了变化
        bannerList: {
            immediate: true,//立即监听
            handler(newValue, oldValue) {
                // 通过watch监听bannerList属性的属性值的变化
                // 如果执行handler方法，代表组件实例身上这个属性的属性已经有了【数组：四个元素】
                // 当前这个函数执行：只能保证bannerList数据已经有了，但是你没办法保证v-for已经执行结束了
                // v-for执行完毕，才有结构【现在在watch当中没办法保证的】
                // netxTick:在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
                this.$nextTick(() => {
                    // 执行这个回调时候：保证服务器数据回来了，v-for执行完毕了【轮播图需要的结构也有了】
                    var mySwiper = new Swiper(this.$refs.cur, {
                        loop: true, // 循环模式选项
                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                            //点击小球切换图片
                            clickable: true,
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    })
                })
            }
        }
    }
}
</script>

<style>
</style>