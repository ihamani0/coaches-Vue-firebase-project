export default {
    getRequest(state , getters,rootState,rootGetter){
        let coachId = rootGetter.coachId;
        return state.requests.filter(req => req.coacheId === coachId);
    },
    hasRequest(_ , getters){
        return getters.getRequest && getters.getRequest.length > 0 ;
    }
}