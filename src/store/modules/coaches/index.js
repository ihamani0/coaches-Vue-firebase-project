import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";


//coaches 

export default {
    namespaced: true,
    
    state(){
        return {
            coaches : [],
            timeStamp:null,
        }
    },

    mutations ,
    actions  ,
    getters 
}
