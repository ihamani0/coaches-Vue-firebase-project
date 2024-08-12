
export default {
    getCoaches(state){
        return state.coaches;
    },
    hasCoaches(state){
        return state.coaches && state.coaches.length > 0;
    },
    chechIfCanFetch(state){
        if(!state.timeStamp){
            return true;
        }
        let currentTime = new Date().getTime();
        return (state.timeStamp - currentTime) / 1000 > 60;
    }
}