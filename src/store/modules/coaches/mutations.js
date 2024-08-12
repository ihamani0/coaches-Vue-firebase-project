export default {
    registerCoache(state,payload){
        state.coaches.push(payload)
    },

    setCoaches(state,payload){
        // console.log("from mutatuin : " , payload);
        state.coaches = payload;
    },

    setTimeForLastFetch(state){
        state.timeStamp = new Date().getTime();
    }

}