export default {
    getRequest(state , getters,rootState,rootGetter){
        let coachId = rootGetter.coachId;
        console.log("from getter : ",state.requests)
        return state.requests.filter(req => req.coacheId === coachId);
        // console.log("from getter : ",state.requests)
        // return state.requests
    },
    hasRequest(_ , getters){
        return getters.getRequest && getters.getRequest.length > 0 ;
    }
}