import * as types from '../types';

//容器
const state = {
  tabIndex:0,
  item:0
}


//更改state状态的唯一方法 提交
const mutations = {
    //1.简单的可以直接在mutations中更改
    [types.TAB_INDEX](state,index){
      state.tabIndex = index;
      console.log(index);
    },

    [types.ITEM](state,item){
      state.item = item
    },
}

// action提交mutations，不直接更改状态（通过store.dispatch触发）
const actions = {
  
  setItem({commit},item){
    commit(types.ITEM,item)
  }

}

// 如同计算属性,处理state的某个状态
const getters = {

}

export default {
  state,
  actions,
  getters,
  mutations
}
