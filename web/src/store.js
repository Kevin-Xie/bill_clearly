import {getSportGoalByUserId} from '@/api/sport'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {userId: 1, nickName: '', email: ''},
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
    getMySportGoal(context) {
	  let userId = context.getters.userId;
      getSportGoalByUserId(userId).then(({data}) => {
        if(data.isSuccess)
          context.commit('addSportGoals', data.data)
      }).catch(err => {
        console.log(err);
      })
    }
  }
})
