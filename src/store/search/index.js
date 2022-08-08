import {reqGetSearchInfo} from '@/api'
// search模块的小仓库
// state:仓库存储数据的地方
const state = {
    // 仓库初始化
    searchList:{},
};
// mutations:修改state的唯一手段
const mutations= {
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
};
// action:处理action,可以书写自己的业务逻辑，也可以吃了异步
const actions={
    // 获取search模块数据
    async getSearchList({commit},params={}){
        // 当前增reqGetSearchInfo这个函数在调用服务器数据的时候，至少传递一个参数（空对象）
        // params形参：是当前用户派发action的时候，在二个参数传递过来的，至少是一个空对象
       let result = await reqGetSearchInfo(params)
       if(result.code==200){
        commit('GETSEARCHLIST',result.data)
       }
    }
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters ={
    // 当前形参state,当前仓库中的state,并非大仓库中的state
    goodsList(state){
        // state.searchList.goodsList如果服务器数据回来了，没问题是一个数组
        // 假如没有网或者网络不给力state.searchList.goodsList应该返回的是undefined
        // 计算新的属性的属性值至少给人家来一个空数组
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    }
};
export default{
    state,mutations,actions,getters
}
