import { createStore } from 'vuex'

export default createStore({
	state: {
		data: null,
		dateVariants: null,
		selectedDate: null,
	},
	mutations: {
		setData(state, data) {
			state.data = data.options
		},
		setDates(state, data) {
			state.dateVariants = data.dateVariants
		},
		setSelectedDate(state, date) {
			state.selectedDate = date
		},
	},
	actions: {
		async getData({ commit }, data) {
			commit('setData', data)
			commit('setDates', data)
			commit('setSelectedDate', data.dateVariants[0])
		},
		changeDate({ commit }, payload) {
			commit('setSelectedDate', payload)
		},
	},
})
