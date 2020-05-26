import Axios from "axios"

export default {
    state:{
        category:"this is a category",
    },
    getters:{
        getCategory(state){
             return state.category   
        }
    },
    mutations:{

    },
    actions:{
        allCategory(state, payload){
            Axios.get('/')
        }
    }
}