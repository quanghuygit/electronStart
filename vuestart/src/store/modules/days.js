import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'
import moment from 'moment'

// state
export const state = {
    days: []
}

// getters
export const getters = {
    days: state => state.days,
    check: state => state
}

// mutations
export const mutations = {
    [types.GENERATE_JOURNAL_DATES] (state, { days }) {
        state.days = days;
    }
}

// actions
export const actions = {
    async generateDays({commit}) {
        
        console.log('generage day', commit);
        let dateEnd = moment(moment().format('YYYY-MM-DD'))

        let listDay = []
        for(let i = 0; i< 30; i++) {
            let cDate = dateEnd.subtract(1, 'days')
            listDay.push({
                date: cDate.format('YYYY-MM-DD'),
                text: cDate.format('ddd'),
                onlyDay: cDate.format('DD')
            })
        }

        commit(types.GENERATE_JOURNAL_DATES, {days: listDay});
    }
}