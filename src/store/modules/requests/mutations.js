export default {
    setRequest(state,payload){
            state.requests.push(payload) ;
    },
    loadRequest(state,payload){
        state.requests = payload;
    }

    
}