import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";


//requests 

export default  {
    namespaced: true,
    state(){
        return {
            requests : [],
        }
    },
    
    mutations ,
    actions  ,
    getters 
}
