import * as types from '../mutation-types'

// 初期状態
const state = {
  count: 0
}

// ゲッター
const getters = {
  current_count: state => state.count
}

// アクション
const actions = {
  increment (context) {
    context.commit(types.INCREMENT)
  },
  input_number (context, count) {
    context.commit(types.INPUT_NUMBER, count)
  }
}

// ミューテーション
const mutations = {
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.INPUT_NUMBER] (state, count) {
    state.count = count
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}

