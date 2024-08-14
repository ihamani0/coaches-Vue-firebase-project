
export default {
    coachId(state){
        return state.coachId;
    },
    token(state){
        return state.token;
    },
    isAuth(state){
        //if the token is have value and test is with ! he give false and to make it true give hime other ! 
        //if the token  (fasle && false ) = true && false give false for empty token
        //if the token  (fasle && true ) = false && false give true for not empty token

        return !!(state.token)  
    }
}