<template>
    <div class="container mx-auto">

        <base-dialog :show="error.is" title="Error"  @close="handleError" >
                <p class="font-bold p-3 text-center m-3 text-red-500">
                    {{ error.message }}
                </p>
        </base-dialog>
        <base-dialog :show="isLoading" title="Auth..." fixed>
                <base-spinner></base-spinner>
        </base-dialog>
        <base-card>
            <form @submit.prevent="submitForm"  class="flex flex-col justify-center space-y-6">
                <div class="form-control">
                    <label for="email">Email<span class="text-red-600">*</span></label>
                    <input type="email" class="px-6 py-2" v-model.trim="email">
                </div>
                <div class="form-control">
                    <label for="email">Password<span class="text-red-600">*</span></label>
                    <input type="password" class="px-6 py-2"  v-model.trim="password" >
                </div>
                <div>
                    <p class="text-red-500 text-xs font bold px-1 py-2 border-l-2 my-3 border-l-red-400" v-if="!FormIsValid">
                        Please ensure the input field
                    </p>
                    <base-button  class="px-6 py-2 text-white  bg-slate-700 hover:bg-orange-500 rounded-full">Singup</base-button>
                    <base-button link to="login"  class="px-4 py-1 text-black" type="button" >login</base-button>
                </div>
            </form>
        </base-card>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            email : '',
            password:'',
            FormIsValid:true,
            isLoading : false,
            error : {
                message : "",
                is : false
            }
        }
    },
    methods: {
        async submitForm(){
            this.validation();
            //send http request
            this.isLoading = true;
            try {
                await this.$store.dispatch("singup" , {
                email:this.email,
                password : this.password,
                mode:'singup'
            })
            } catch (error) {
                this.error.is = true;
                this.error.message = error.message;

            }
            this.isLoading = false;

            
        } ,
        validation(){
            this.FormIsValid = true ;
            if(this.email === "" || !this.email.includes("@")
                || this.password === "" || this.password.length < 6){
                

                this.FormIsValid = false ; 
                return;
            }
        } ,
        handleError(){
            this.error.is=false;
            this.message="";
        }
    }
}
</script>