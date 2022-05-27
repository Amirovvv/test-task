import { createStore } from 'vuex'
import axios from 'axios'

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
		async getData({ commit }) {
			const data = await axios.get('http://localhost:3000/data')
			commit('setData', data.data)
			commit('setDates', data.data)
			commit('setSelectedDate', data.data.dateVariants[0])
		},
		changeDate({ commit }, payload) {
			commit('setSelectedDate', payload)
		},
	},
})
