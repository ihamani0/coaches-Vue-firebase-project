import { createStore } from "vuex";

import coachesModule from "./modules/coaches/index.js"
import requestModule from "./modules/requests/index.js"

const store = createStore({
    modules :{
        coaches : coachesModule , 
        requests: requestModule
    },
    state(){
        return {
            coachId :'c4',
        }
    },
    getters : {
        coachId(state){
            return state.coachId;
        }
    }
})

export default store;