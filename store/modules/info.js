const state = {
    info: {
        game: "mk8dx-150cc",
        track: ""
    }
  }
  const getters = {
    game: state => {
      return state.info.game
    },
    track: state => {
      return state.info.track
    }
  }
  // actions
  const actions = {
    setGame ({ commit }, game) {
      commit('setGame', game)
    },
    setTrack ({ commit }, track) {
      commit('setTrack', track)
    }
  }
  // mutations
  const mutations = {
    setGame (state, game) {
      state.info.game = game
    },
    setTrack (state, track) {
      state.info.track = track
    }
  }
  export default {
    state,
    getters,
    actions,
    mutations
  }