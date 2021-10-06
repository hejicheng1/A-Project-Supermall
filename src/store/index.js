import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'


//1.安装插件
Vue.use(Vuex)

// const state = {
//     cartList:[]
// },


// 2.创建stroe对象
const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, payload) {
            payload.checked = true
            // state.cartList.push(payload)
            //     state.cartList.push(payload)
            let oldProduct = state.cartList.find(item => item.iid === payload.iid);
            // for (let item of state.cartList){
            //     if(item.iid === payload.iid){
            //         oldProduct = item;
            //     }
            // }
            // 2.判断oldProuduct
            if (oldProduct) {
                oldProduct.count += 1

            } else {
                payload.count = 1
                state.cartList.push(payload)
            }
        },

    },
    getters,
    actions: {
        addCart(context, payload) {
            return new Promise((resolve) => {
                ///payload新添加的商品
                let oldProduct = context.state.cartList.find(item => {
                    item.iid === payload.iid
                })

                //判断oldProduct
                if (oldProduct) {
                    // oldProduct.count += 1
                    context.commit('addCounter', oldProduct)
                    resolve('已添加购物车~a')
                } else {
                    payload.count = 0
                    //context.state.cartList.push(payload)
                    context.commit('addCart', payload)
                    resolve('已添加购物车~')
                }
            })
        }
    },



})

// 3.挂载vue实例上

export default store
