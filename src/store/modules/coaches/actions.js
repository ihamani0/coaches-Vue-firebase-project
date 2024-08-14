


export default {
    async registerCoach(context,payload){
        let coachId = context.rootGetters.coachId;
        let token = context.rootGetters.token;

        const coacheData = {
            firstName : payload.first,
            lastName : payload.last,
            description : payload.desc,
            hourlyRate : payload.rate,
            areas : payload.areas,
        }  

        const response = await fetch(`https://vue-project-coachs-default-rtdb.europe-west1.firebasedatabase.app/coaches/${coachId}.json?auth=${token}` , {
            method : "PUT" , 
            body : JSON.stringify(coacheData)
        }) ;

        if(!response.ok){
            //errror .....

        }

        context.commit("registerCoache" , {
            ...coacheData ,
            id : coachId
        })
    }   ,

    async loadCoaches(context , payload){
        
        if(!payload.shouldFetch && !context.getters.chechIfCanFetch){
            return ;
        }

        const response = await fetch(
            `https://vue-project-coachs-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
        ) ;
        
        let responseData = await response.json();

        if(!response.ok){
            let error = new Error( responseData.message || "Ther Error With fetching Data")
            throw error;
        }

        
        let Coaches =[];
        
        for (const key in responseData) {
            //push each coach in coaches array 
            Coaches.push({
                id : key ,
                firstName : responseData[key].firstName ,
                lastName : responseData[key].lastName ,
                description : responseData[key].description ,
                hourlyRate : responseData[key].hourlyRate ,
                areas : responseData[key].areas ,
            });
        } // end foreach

        //commit mutation of coaches
        context.commit('setCoaches' , Coaches);

        //commit timeStamp for fetching data(for cache purpose)
        context.commit('setTimeForLastFetch');
    }
}