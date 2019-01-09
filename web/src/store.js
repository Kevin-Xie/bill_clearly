import {getSportGoalByUserId} from '@/api/sport'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {userId: 1},
    sportGoals: [],
  },

  getters: {
    userId: ({user}) => {
      return user.userId;
    }
  },

  mutations: {
    addSportGoals(state, newSportGoals) {
      state.sportGoals.push(...newSportGoals);
    }
  },

  actions: {
    getMySportGoal({commit}, userId) {
      getSportGoalByUserId(userId).then(({data}) => {
        if(data.isSuccess)
          commit('addSportGoals', data.data)
      }).catch(err => {
        console.log(err);
      })
    }
  }
})
