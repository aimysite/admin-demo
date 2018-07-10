const demo={
  state:{
    waite:false
  },
  mutations:{
    CHANGE_WAITE:(state,data)=>{
      console.log(data)
      state.waite = !state.waite
    },
  },
  actions:{
    changeWaite:({ commit },data)=>{
      commit("CHANGE_WAITE",data)
    }
  }
}
export default demo
