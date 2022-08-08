// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes'

// 使用插件
Vue.use(VueRouter)

// 引入store
import store from '@/store'

// 先把VueRouter原型对象的push,先保存一份
let originPush  = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push|replace
// 第一个参数：告诉原来的push,你往哪里跳转（传递哪些参数）
// 第二个参数：成功回调
// 第三参数：失败的回调
// call||apply区别
// 相同点，都可以调用函数一次，都可以篡改函数的上下文一次（this的指向）
// 不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

// 配置路由
let router = new VueRouter({
    // 配置路由
    routes,
    // 滚动行为
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        // 返回的y=0，代表的滚动条在最上方
        return {y:0}
      }
})

// 全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to,from,next)=>{
    // to:可以获取你要跳转到哪个路由信息
    // from:可以获取你从哪个路由而来的信息
    // next:放行函数 next()放行  next('/login')指定放行位置  next(false)
    // next();
    // 用户登录，才会有token，为登录一定不会有token
    let token = store.state.user.token;
    // 用户民信息
    let name=store.state.user.userInfo.name;
    // 用户已经登录了
    if(token){
        // 用户登录后无法去login
        if(to.path=='/login'){
            next('/home')
        }else{
            // 登录了，去的不是login[home|search|detail|shopcart]
            // 如果用户名已有
            if(name){
                next()
            }else{
                // 没有用户信息，派发action让仓库存储用户信息在跳转
              try {
                // 获取用户信息成功
                await store.dispatch('getUserInfo')
                // 放行
                next();
              } catch (error) {
                // token失效了获取不到用户信息，重新登录
                // 清除token
                await store.dispatch('userLogout');
                next('/login')
              }
            }
            
        }
    }else{
        // 未登录不能去购物车，交易，支付【pay|paysuccess】，个人中心这些页面，
        // 应该跳转到登录页面  其他页面放行（home|search)
        let toPath=to.path
        if(toPath.indexOf('/trade')!=-1||toPath.indexOf('/pay')!=-1||toPath.indexOf('/shopcart')!=-1||toPath.indexOf('/center')!=-1){
            // 把未登录的时候要去的而没去成的信息，存储于地址栏中【路由】
            next('/login?redirect='+toPath)
        }else{
            // 其他页面放行（home|search)
            next()
        }
    }
})

export default router;