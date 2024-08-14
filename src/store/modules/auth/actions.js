

export default {
    async singup(context,payload){
        context.dispatch('auth' , payload)
    } ,
    async login(context,payload){
        context.dispatch('auth' , payload)
    } ,


    async auth(context,payload){

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBymQBZqTTDk4vv4QS57xuribzDID4YGTY'
        
        
        if(payload.mode === "singup"){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBymQBZqTTDk4vv4QS57xuribzDID4YGTY';
        }

        const response = await fetch(url , {
            method : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                email : payload.email,
                password : payload.password,
                returnSecureToken : true,
            })
        });
        const responseData = await response.json();

        if(!response.ok){
            throw new Error(responseData.error.message || 'Failed to authenticate.');
        }

        localStorage.setItem('userId' ,responseData.localId );
        localStorage.setItem('Token' ,responseData.idToken );
        localStorage.setItem('ExpiresTime' ,responseData.expiresIn );

        context.commit("setUser" , {
            token : responseData.idToken,
            userId :responseData.localId ,
            expiresToken :responseData.expiresIn ,
        });
    },

    keepAuthnticate(context,payload){
        context.commit('setUser' , {
            userId:payload.userId,
            token : payload.token , 
            expiresToken: payload.expiresToken , 
        });
    },

    logout(context){
        localStorage.removeItem('userId')
        localStorage.removeItem('Token')
        localStorage.removeItem("ExpiresTime")
        context.commit('setUser' , {
            userId:null,
            token : null , 
            expiresToken: null , 
        });
    }
}