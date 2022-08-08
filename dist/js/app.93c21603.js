(function(){"use strict";var t={6999:function(t,e,r){var a={};r.r(a),r.d(a,{reqAddOrUpdateShopCart:function(){return mt},reqAddressInfo:function(){return bt},reqCartList:function(){return pt},reqCategoryList:function(){return it},reqDeleteCartById:function(){return ft},reqFloorList:function(){return ut},reqGetBannerList:function(){return ct},reqGetCode:function(){return ht},reqGetSearchInfo:function(){return lt},reqGoodsInfo:function(){return dt},reqLogout:function(){return Ct},reqMyOrderList:function(){return Et},reqOrderInfo:function(){return wt},reqPayInfo:function(){return kt},reqPayStatus:function(){return Lt},reqSubmitOrder:function(){return It},reqUpdateCheckedByid:function(){return gt},reqUserInfo:function(){return _t},reqUserLogin:function(){return yt},reqUserRegister:function(){return vt}});var o=r(7881),s=r.n(o),n=r(5034),i=r.n(n),c=r(6369),u=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("router-view"),e("Footer",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.show,expression:"$route.meta.show"}]})],1)},l=[],d=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"loginList"},[e("p",[t._v("尚品汇欢迎您！")]),t.userName?e("p",[e("a",[t._v(t._s(t.userName))]),e("a",{staticClass:"register",on:{click:t.logout}},[t._v("退出登录")])]):e("p",[e("span",[t._v("请")]),e("router-link",{attrs:{to:"/login"}},[t._v("登录")]),e("router-link",{staticClass:"register",attrs:{to:"/register"}},[t._v("免费注册")])],1)]),e("div",{staticClass:"typeList"},[e("router-link",{attrs:{to:"/center"}},[t._v("我的订单")]),e("router-link",{attrs:{to:"/shopcart"}},[t._v("我的购物车")]),e("a",{attrs:{href:"###"}},[t._v("我的尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇会员")]),e("a",{attrs:{href:"###"}},[t._v("企业采购")]),e("a",{attrs:{href:"###"}},[t._v("关注尚品汇")]),e("a",{attrs:{href:"###"}},[t._v("合作招商")]),e("a",{attrs:{href:"###"}},[t._v("商家后台")])],1)])]),e("div",{staticClass:"bottom"},[e("h1",{staticClass:"logoArea"},[e("router-link",{staticClass:"logo",attrs:{to:"/home"}},[e("img",{attrs:{src:r(587),alt:""}})])],1),e("div",{staticClass:"searchArea"},[e("form",{staticClass:"searchForm",attrs:{action:"###"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"input-error input-xxlarge",attrs:{type:"text",id:"autocomplete"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),e("button",{staticClass:"sui-btn btn-xlarge btn-danger",attrs:{type:"button"},on:{click:t.goSearch}},[t._v("搜索")])])])])])},m=[],p={data(){return{keyword:""}},methods:{goSearch(){if(this.$route.query){let t={name:"search",params:{keyword:this.keyword||void 0}};t.query=this.$route.query,this.$router.push(t)}},async logout(){try{await this.$store.dispatch("userLogout"),this.$router.push("/home")}catch(t){}}},mounted(){this.$bus.$on("clear",(()=>{this.keyword=""}))},computed:{userName(){return this.$store.state.user.userInfo.name}}},f=p,g=r(1001),h=(0,g.Z)(f,d,m,!1,null,"624b2fdd",null),v=h.exports,y=function(){var t=this;t._self._c;return t._m(0)},_=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footerList"},[e("div",{staticClass:"footerItem"},[e("h4",[t._v("购物指南")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("购物流程")]),e("li",[t._v("会员介绍")]),e("li",[t._v("生活旅行/团购")]),e("li",[t._v("常见问题")]),e("li",[t._v("购物指南")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("配送方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("上门自提")]),e("li",[t._v("211限时达")]),e("li",[t._v("配送服务查询")]),e("li",[t._v("配送费收取标准")]),e("li",[t._v("海外配送")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("支付方式")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("货到付款")]),e("li",[t._v("在线支付")]),e("li",[t._v("分期付款")]),e("li",[t._v("邮局汇款")]),e("li",[t._v("公司转账")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("售后服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("售后政策")]),e("li",[t._v("价格保护")]),e("li",[t._v("退款说明")]),e("li",[t._v("返修/退换货")]),e("li",[t._v("取消订单")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("特色服务")]),e("ul",{staticClass:"footerItemCon"},[e("li",[t._v("夺宝岛")]),e("li",[t._v("DIY装机")]),e("li",[t._v("延保服务")]),e("li",[t._v("尚品汇E卡")]),e("li",[t._v("尚品汇通信")])])]),e("div",{staticClass:"footerItem"},[e("h4",[t._v("帮助中心")]),e("img",{attrs:{src:r(2552)}})])]),e("div",{staticClass:"copyright"},[e("ul",{staticClass:"helpLink"},[e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("联系我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("商家入驻 "),e("span",{staticClass:"space"})]),e("li",[t._v("营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v("友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们 "),e("span",{staticClass:"space"})]),e("li",[t._v("营销中心 "),e("span",{staticClass:"space"})]),e("li",[t._v("友情链接 "),e("span",{staticClass:"space"})]),e("li",[t._v("关于我们")])]),e("p",[t._v("地址：北京市昌平区宏福科技园综合楼6层")]),e("p",[t._v("京ICP备19006430号")])])])])}],C={},b=C,w=(0,g.Z)(b,y,_,!1,null,"b8b6d400",null),I=w.exports,k={name:"App",components:{Header:v,Footer:I},mounted(){this.$store.dispatch("categoryList")}},L=k,E=(0,g.Z)(L,u,l,!1,null,null,null),N=E.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"type-nav"},[e("div",{staticClass:"container"},[e("div",{on:{mouseleave:t.leaveIndex,mouseenter:t.enterShow}},[e("h2",{staticClass:"all"},[t._v("全部商品分类")]),e("transition",{attrs:{name:"sort"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"sort"},[e("div",{staticClass:"all-sort-list2",on:{click:t.goSearch}},t._l(t.categoryList,(function(r,a){return e("div",{key:r.categoryId,staticClass:"item",class:{cur:t.currentIndex==a}},[e("h3",{on:{mouseenter:function(e){return t.changeIndex(a)}}},[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category1Id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("div",{staticClass:"item-list clearfix",style:{display:t.currentIndex==a?"block":"none"}},t._l(r.categoryChild,(function(r,a){return e("div",{key:r.categoryId,staticClass:"subitem"},[e("dl",{staticClass:"fore"},[e("dt",[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category2Id":r.categoryId}},[t._v(t._s(r.categoryName))])]),e("dd",t._l(r.categoryChild,(function(r,a){return e("em",{key:r.categoryId},[e("a",{attrs:{"data-categoryName":r.categoryName,"data-category3Id":r.categoryId}},[t._v(t._s(r.categoryName))])])})),0)])])})),0)])})),0)])])],1),t._m(0)])])},S=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav"},[e("a",{attrs:{href:"###"}},[t._v("服装城")]),e("a",{attrs:{href:"###"}},[t._v("美妆馆")]),e("a",{attrs:{href:"###"}},[t._v("尚品汇超市")]),e("a",{attrs:{href:"###"}},[t._v("全球购")]),e("a",{attrs:{href:"###"}},[t._v("闪购")]),e("a",{attrs:{href:"###"}},[t._v("团购")]),e("a",{attrs:{href:"###"}},[t._v("有趣")]),e("a",{attrs:{href:"###"}},[t._v("秒杀")])])}],O=r(3822),T=r(9289),P=r.n(T),$={name:"TypeNav",data(){return{currentIndex:-1,show:!0}},mounted(){"/home"!=this.$route.path&&(this.show=!1)},computed:{...(0,O.rn)({categoryList:t=>t.home.categoryList})},methods:{changeIndex:P()((function(t){this.currentIndex=t}),50),goSearch(t){let e=t.target,{categoryname:r,category1id:a,category2id:o,category3id:s}=e.dataset;if(r){let t={name:"search"},e={categoryName:r};a?e.category1Id=a:o?e.category2Id=o:e.category3Id=s,this.$route.params&&(t.params=this.$route.params,t.query=e,this.$router.push(t))}},leaveIndex(){this.currentIndex=-1,"/home"!=this.$route.path&&(this.show=!1)},enterShow(){"/home"!=this.$route.path&&(this.show=!0)}}},A=$,U=(0,g.Z)(A,x,S,!1,null,"3e5dd4b2",null),q=U.exports,G=function(){var t=this,e=t._self._c;return e("div",{ref:"cur",staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.list,(function(t,r){return e("div",{key:t.id,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.imgUrl}})])})),0),e("div",{staticClass:"swiper-pagination"}),e("div",{staticClass:"swiper-button-prev"}),e("div",{staticClass:"swiper-button-next"})])},R=[],j=r(781),Z={name:"Carousel",props:["list"],watch:{bannerList:{immediate:!0,handler(t,e){this.$nextTick((()=>{new j.Z(this.$refs.cur,{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}))}}}},F=Z,D=(0,g.Z)(F,G,R,!1,null,null,null),B=D.exports,K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("button",{attrs:{disabled:1==t.pageNo},on:{click:function(e){return t.$emit("getPageNo",t.pageNo-1)}}},[t._v("上一页")]),t.starNumAndEndNum.start>1?e("button",{class:{active:1==t.pageNo},on:{click:function(e){return t.$emit("getPageNo",1)}}},[t._v("1")]):t._e(),t.starNumAndEndNum.start>2?e("button",[t._v("···")]):t._e(),t._l(t.starNumAndEndNum.end,(function(r,a){return r>=t.starNumAndEndNum.start?e("button",{key:a,class:{active:t.pageNo==r},on:{click:function(e){return t.$emit("getPageNo",r)}}},[t._v(t._s(r))]):t._e()})),t.starNumAndEndNum.end<t.totalPage-1?e("button",[t._v("···")]):t._e(),t.starNumAndEndNum.end<t.totalPage?e("button",{class:{active:t.pageNo==t.totalPage},on:{click:function(e){return t.$emit("getPageNo",t.totalPage)}}},[t._v(t._s(t.totalPage))]):t._e(),e("button",{attrs:{disabled:t.pageNo==t.totalPage},on:{click:function(e){return t.$emit("getPageNo",t.pageNo+1)}}},[t._v("下一页")]),e("button",{staticStyle:{"margin-left":"30px"}},[t._v("共"+t._s(t.total)+"页")])],2)},H=[],M={name:"Pageination",props:["pageNo","pageSize","total","continues"],computed:{totalPage(){return Math.ceil(this.total/this.pageSize)},starNumAndEndNum(){const{continues:t,pageNo:e,totalPage:r}=this;let a=0,o=0;return t>r?(a=1,o=r):(a=e-parseInt(t/2),o=e+parseInt(t/2),a<1&&(a=1,o=t),o>r&&(o=r,a=r-t+1)),{start:a,end:o}}}},z=M,V=(0,g.Z)(z,K,H,!1,null,"1bb74122",null),Y=V.exports,J=r(2631);const Q=()=>r.e(435).then(r.bind(r,3435));var W=[{path:"*",redirect:"/home"},{path:"/home",component:Q,meta:{show:!0}},{path:"/search/:keyword?",component:()=>r.e(894).then(r.bind(r,5894)),meta:{show:!0},name:"search",props:t=>({keyword:t.params.keyword,k:t.query.k})},{path:"/login",component:()=>r.e(970).then(r.bind(r,7970)),meta:{show:!1}},{path:"/register",component:()=>r.e(210).then(r.bind(r,8210)),meta:{show:!1}},{path:"/detail/:skuid",component:()=>r.e(179).then(r.bind(r,179)),meta:{show:!0}},{path:"/addcartsuccess",name:"addcartsuccess",component:()=>r.e(57).then(r.bind(r,1998)),meta:{show:!0}},{path:"/shopcart",name:"shopcart",component:()=>r.e(447).then(r.bind(r,8447)),meta:{show:!0}},{path:"/trade",name:"trade",component:()=>r.e(724).then(r.bind(r,5724)),meta:{show:!0},beforeEnter:(t,e,r)=>{"/shopcart"==e.path?r():r(!1)}},{path:"/pay",name:"pay",component:()=>r.e(773).then(r.bind(r,7773)),meta:{show:!0},beforeEnter:(t,e,r)=>{"/trade"==e.path?r():r(!1)}},{path:"/paysuccess",name:"paysuccess",component:()=>r.e(722).then(r.bind(r,1722)),meta:{show:!0}},{path:"/center",name:"center",component:()=>r.e(700).then(r.bind(r,9700)),meta:{show:!0},children:[{path:"myorder",component:()=>r.e(325).then(r.bind(r,5325))},{path:"grouporder",component:()=>r.e(417).then(r.bind(r,8417))},{path:"/center",redirect:"/center/myorder"}]}],X=(r(1703),r(6265)),tt=r.n(X),et=r(530),rt=r.n(et);const at=tt().create({baseURL:"/api",tiemout:5e3});at.interceptors.request.use((t=>(ce.state.detail.uuid_token&&(t.headers.userTempId=ce.state.detail.uuid_token),ce.state.user.token&&(t.headers.token=ce.state.user.token),rt().start(),t))),at.interceptors.response.use((t=>(rt().done(),t.data)),(t=>Promise.reject(new Error("fail"))));var ot=at;const st=tt().create({baseURL:"/mock",tiemout:5e3});st.interceptors.request.use((t=>(rt().start(),t))),st.interceptors.response.use((t=>(rt().done(),t.data)),(t=>Promise.reject(new Error("fail"))));var nt=st;const it=()=>ot({url:"/product/getBaseCategoryList",method:"get"}),ct=()=>nt.get("/banner"),ut=()=>nt.get("/floor"),lt=t=>ot({url:"/list",method:"post",data:t}),dt=t=>ot({url:`/item/${t}`,method:"get"}),mt=(t,e)=>ot({url:`/cart/addToCart/${t}/${e}`,method:"post"}),pt=()=>ot({url:"/cart/cartList",method:"get"}),ft=t=>ot({url:`/cart/deleteCart/${t}`,method:"delete"}),gt=(t,e)=>ot({url:`/cart/checkCart/${t}/${e}`,method:"get"}),ht=t=>ot({url:`/user/passport/sendCode/${t}`,method:"get"}),vt=t=>ot({url:"/user/passport/register",data:t,method:"post"}),yt=t=>ot({url:"/user/passport/login",data:t,method:"post"}),_t=()=>ot({url:"/user/passport/auth/getUserInfo",method:"get"}),Ct=()=>ot({url:"/user/passport/logout",method:"get"}),bt=()=>ot({url:"/user/userAddress/auth/findUserAddressList",method:"get"}),wt=()=>ot({url:"/order/auth/trade",method:"get"}),It=(t,e)=>ot({url:`/order/auth/submitOrder?tradeNo=${t}`,data:e,method:"post"}),kt=t=>ot({url:`/payment/weixin/createNative/${t}`,method:"get"}),Lt=t=>ot({url:`/payment/weixin/queryPayStatus/${t}`,method:"get"}),Et=(t,e)=>ot({url:`/order/auth/${t}/${e}`,method:"get"}),Nt={categoryList:[],bannerList:[],floorList:[]},xt={CATEGORYLIST(t,e){t.categoryList=e},GETBANNERLIST(t,e){t.bannerList=e},GETFLOORLIST(t,e){t.floorList=e}},St={async categoryList({commit:t}){let e=await it();200==e.code&&t("CATEGORYLIST",e.data)},async getBannerList({commit:t}){let e=await ct();200==e.code&&t("GETBANNERLIST",e.data)},async getFloorList({commit:t}){let e=await ut();200==e.code&&t("GETFLOORLIST",e.data)}},Ot={};var Tt={state:Nt,mutations:xt,actions:St,getters:Ot};const Pt={searchList:{}},$t={GETSEARCHLIST(t,e){t.searchList=e}},At={async getSearchList({commit:t},e={}){let r=await lt(e);200==r.code&&t("GETSEARCHLIST",r.data)}},Ut={goodsList(t){return t.searchList.goodsList||[]},trademarkList(t){return t.searchList.trademarkList||[]},attrsList(t){return t.searchList.attrsList||[]}};var qt={state:Pt,mutations:$t,actions:At,getters:Ut},Gt=r(536);const Rt=()=>{let t=localStorage.getItem("UUIDTOKEN");return t||(t=(0,Gt.Z)(),localStorage.setItem("UUIDTOKEN",t)),t},jt={goodInfo:{},uuid_token:Rt()},Zt={GETGOODINFO(t,e){t.goodInfo=e}},Ft={async getGoodInfo({commit:t},e){let r=await dt(e);200==r.code&&t("GETGOODINFO",r.data)},async addOrUpdateShopCart({commit:t},{skuId:e,skuNum:r}){let a=await mt(e,r);return 200==a.code?"ok":Promise.reject(new Error("faile"))}},Dt={categoryView(t){return t.goodInfo.categoryView||{}},skuInfo(t){return t.goodInfo.skuInfo||{}},spuSaleAttrList(t){return t.goodInfo.spuSaleAttrList||[]}};var Bt={state:jt,mutations:Zt,actions:Ft,getters:Dt};const Kt={cartList:[]},Ht={GETCARTLIST(t,e){t.cartList=e}},Mt={async getCartList({commit:t}){let e=await pt();200==e.code&&t("GETCARTLIST",e.data)},async deleteCartListBySkuId({commit:t},e){let r=await ft(e);return 200==r.code?"ok":Promise.reject(new Error("faile"))},async UpdateCheckedById({commit:t},{skuId:e,isChecked:r}){let a=await gt(e,r);return 200==a.code?"ok":Promise.reject(new Error("faile"))},deleteAllCheckedCart({dispatch:t,getters:e}){let r=[];return e.cartList.cartInfoList.forEach((e=>{let a=1==e.isChecked?t("deleteCartListBySkuId",e.skuId):"";r.push(a)})),Promise.all(r)},updateAllCartIsChecked({dispatch:t,state:e},r){let a=[];return e.cartList[0].cartInfoList.forEach((e=>{let o=t("UpdateCheckedById",{skuId:e.skuId,isChecked:r});a.push(o)})),Promise.all(a)}},zt={cartList(t){return t.cartList[0]||{}}};var Vt={state:Kt,mutations:Ht,actions:Mt,getters:zt};const Yt=t=>{localStorage.setItem("TOKEN",t)},Jt=()=>localStorage.getItem("TOKEN"),Qt=()=>{localStorage.removeItem("TOKEN")},Wt={code:"",token:Jt(),userInfo:{}},Xt={GETCODE(t,e){t.code=e},USERLOGIN(t,e){t.token=e},GETUSERINFO(t,e){t.userInfo=e},CLEAR(t){t.token="",t.userInfo={},Qt()}},te={async getCode({commit:t},e){let r=await ht(e);return 200==r.code?(t("GETCODE",r.data),"ok"):Promise.reject(new Error("faile"))},async userRegister({commit:t},e){let r=await vt(e);return 200==r.code?"ok":Promise.reject(new Error("faile"))},async userLogin({commit:t},e){let r=await yt(e);return 200==r.code?(t("USERLOGIN",r.data.token),Yt(r.data.token),"ok"):Promise.reject(new Error("faile"))},async getUserInfo({commit:t}){let e=await _t();return 200==e.code?(t("GETUSERINFO",e.data),"ok"):Promise.reject(new Error(faile))},async userLogout({commit:t}){let e=await Ct();return 200==e.code?(t("CLEAR"),"ok"):Promise.reject(new Error("faile"))}},ee={};var re={state:Wt,mutations:Xt,actions:te,getters:ee};const ae={address:[],orderInfo:{}},oe={GETUSERADDRESS(t,e){t.address=e},GETORDERINFO(t,e){t.orderInfo=e}},se={async getUserAddress({commit:t}){let e=await bt();200==e.code&&t("GETUSERADDRESS",e.data)},async getOrderInfo({commit:t}){let e=await wt();200==e.code&&t("GETORDERINFO",e.data)}},ne={};var ie={state:ae,mutations:oe,actions:se,getters:ne};c["default"].use(O.ZP);var ce=new O.ZP.Store({modules:{home:Tt,search:qt,detail:Bt,shopcart:Vt,user:re,trade:ie}});c["default"].use(J.Z);let ue=J.Z.prototype.push,le=J.Z.prototype.replace;J.Z.prototype.push=function(t,e,r){e&&r?ue.call(this,t,e,r):ue.call(this,t,(()=>{}),(()=>{}))},J.Z.prototype.push=function(t,e,r){e&&r?le.call(this,t,e,r):le.call(this,t,(()=>{}),(()=>{}))};let de=new J.Z({routes:W,scrollBehavior(t,e,r){return{y:0}}});de.beforeEach((async(t,e,r)=>{let a=ce.state.user.token,o=ce.state.user.userInfo.name;if(a)if("/login"==t.path)r("/home");else if(o)r();else try{await ce.dispatch("getUserInfo"),r()}catch(s){await ce.dispatch("userLogout"),r("/login")}else{let e=t.path;-1!=e.indexOf("/trade")||-1!=e.indexOf("/pay")||-1!=e.indexOf("/shopcart")||-1!=e.indexOf("/center")?r("/login?redirect="+e):r()}}));var me=de,pe=r(7634),fe=r.n(pe),ge=JSON.parse('[{"id":"1","imgUrl":"/images/banner1.jpg"},{"id":"2","imgUrl":"/images/banner2.jpg"},{"id":"3","imgUrl":"/images/banner3.jpg"},{"id":"4","imgUrl":"/images/banner4.jpg"}]'),he=JSON.parse('[{"id":"001","name":"家用电器","keywords":["节能补贴","4K电视","空气净化器","IH电饭煲","滚筒洗衣机","电热水器"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门"},{"url":"#","text":"大家电"},{"url":"#","text":"生活电器"},{"url":"#","text":"厨房电器"},{"url":"#","text":"应季电器"},{"url":"#","text":"空气/净水"},{"url":"#","text":"高端电器"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"},{"id":"002","name":"手机通讯","keywords":["节能补贴2","4K电视2","空气净化器2","IH电饭煲2","滚筒洗衣机2","电热水器2"],"imgUrl":"/images/floor-1-1.png","navList":[{"url":"#","text":"热门2"},{"url":"#","text":"大家电2"},{"url":"#","text":"生活电器2"},{"url":"#","text":"厨房电器2"},{"url":"#","text":"应季电器2"},{"url":"#","text":"空气/净水2"},{"url":"#","text":"高端电器2"}],"carouselList":[{"id":"0011","imgUrl":"/images/floor-1-b01.png"},{"id":"0012","imgUrl":"/images/floor-1-b02.png"},{"id":"0013","imgUrl":"/images/floor-1-b03.png"}],"recommendList":["/images/floor-1-2.png","/images/floor-1-3.png","/images/floor-1-5.png","/images/floor-1-6.png"],"bigImg":"/images/floor-1-4.png"}]');fe().mock("/mock/banner",{code:200,data:ge}),fe().mock("/mock/floor",{code:200,data:he});var ve=r(6112),ye=r.p+"img/1.f5cf67ae.gif",_e=r(5708),Ce=r(8892),be=r.n(Ce);c["default"].use(_e.ZP),_e.ZP.Validator.localize("zh_CN",{messages:{...be().messages,if:t=>`${t}必须与密码相同`},attributes:{phone:"手机号",code:"验证码",password:"密码",password1:"确认密码",agree:"协议"}}),_e.ZP.Validator.extend("tongyi",{validate:t=>t,getMessage:t=>t+"必须同意"}),c["default"].component(q.name,q),c["default"].component(B.name,B),c["default"].component(Y.name,Y),c["default"].component(i().name,i()),c["default"].prototype.$msgbox=s(),c["default"].prototype.$alert=s().alert,c["default"].use(ve.Z,{loading:ye}),c["default"].config.productionTip=!1,new c["default"]({render:t=>t(N),beforeCreate(){c["default"].prototype.$bus=this,c["default"].prototype.$API=a},router:me,store:ce}).$mount("#app")},2552:function(t,e,r){t.exports=r.p+"img/wx_cz.5d92bf53.jpg"},587:function(t,e,r){t.exports=r.p+"img/logo.d600ca2b.png"}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(e,a,o,s){if(!a){var n=1/0;for(l=0;l<t.length;l++){a=t[l][0],o=t[l][1],s=t[l][2];for(var i=!0,c=0;c<a.length;c++)(!1&s||n>=s)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(i=!1,s<n&&(n=s));if(i){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[a,o,s]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{57:"582955c8",179:"2845b9e8",210:"7008322b",325:"cf66e25e",417:"ba37c11a",435:"55290d24",447:"e5e33bc0",700:"45018fa9",722:"61dfd5fa",724:"e6fd0251",773:"3494b16f",894:"3cc0cdac",970:"d48e61c9"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{57:"126007df",179:"10477c34",210:"80b2fa98",435:"0fa169e7",447:"eede6018",700:"607fda9e",722:"c51012ef",724:"c6a2fb10",773:"a44ace03",894:"374b5764",970:"8e3245eb"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="shop:";r.l=function(a,o,s,n){if(t[a])t[a].push(o);else{var i,c;if(void 0!==s)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+s){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+s),i.src=a),t[a]=[o];var m=function(e,r){i.onerror=i.onload=null,clearTimeout(p);var o=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t=function(t,e,r,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(s){if(o.onerror=o.onload=null,"load"===s.type)r();else{var n=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=n,c.request=i,o.parentNode.removeChild(o),a(c)}};return o.onerror=o.onload=s,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===t||s===e))return o}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){o=n[a],s=o.getAttribute("data-href");if(s===t||s===e)return o}},a=function(a){return new Promise((function(o,s){var n=r.miniCssF(a),i=r.p+n;if(e(n,i))return o();t(a,i,o,s)}))},o={143:0};r.f.miniCss=function(t,e){var r={57:1,179:1,210:1,435:1,447:1,700:1,722:1,724:1,773:1,894:1,970:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=a(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,a){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var s=new Promise((function(r,a){o=t[e]=[r,a]}));a.push(o[2]=s);var n=r.p+r.u(e),i=new Error,c=function(a){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,o[1](i)}};r.l(n,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,s,n=a[0],i=a[1],c=a[2],u=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var l=c(r)}for(e&&e(a);u<n.length;u++)s=n[u],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(l)},a=self["webpackChunkshop"]=self["webpackChunkshop"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(6999)}));a=r.O(a)})();