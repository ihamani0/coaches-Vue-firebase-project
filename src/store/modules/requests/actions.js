export default {
    async setRequest(context , payload){
        let coachId = context.rootGetters.coachId;
        let token = context.rootGetters.token;

        const request = {
            email : payload.email,
            message : payload.msg,
            coacheId : coachId
        }

        const response = await fetch(`
            https://vue-project-coachs-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json
            ` , {
                method : "POST" , 
                body : JSON.stringify(request)
            })
        const  responsData = await response.json();    
        if(!response.ok){
            throw new Error(responsData.message || "Problme with Set Request data")
            
        }

        context.commit('setRequest' , request);
    } ,

    async loadRequest(context){
        let coachId = context.rootGetters.coachId;
        let token = context.rootGetters.token;

        const response = await fetch(`https://vue-project-coachs-default-rtdb.europe-west1.firebasedatabase.app/requests.json?auth=${token}`)

        const  responsData = await response.json();    

        if(!response.ok){
            throw new Error(responsData.message || "Problme with Set Request data")
            
        }
        
        let Requests = [];

        for (const coachKey in responsData) {

            const coach = responsData[coachKey];
                for (const id in coach) {

                    Requests.push({
                        email : coach[id].email,
                        message : coach[id].message,
                        coacheId : coach[id].coacheId
                    });

            }
        }


        context.commit('loadRequest' , Requests)
    }
}