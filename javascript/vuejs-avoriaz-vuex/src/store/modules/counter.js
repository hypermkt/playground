import * as types from '../mutation-types'

// 初期状態
const state = {
  count: 0
}

// アクション
const actions = {
  increment (context) {
    context.commit(types.INCREMENT)
  },
  decrement (context) {
    context.commit(types.DECREMENT)
  }
}

// ミューテーション
const mutations = {
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.DECREMENT] (state) {
    state.count--
  }
}

export default {
  state,
  actions,
  mutations
}

