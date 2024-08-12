<template>
    <base-card>
    
        <form @submit.prevent="submitForm" class="h-auto">

            <div class="form-control" :class="{invalid : !email.isValid}">
                <label for="firstName">Email</label>
                <input type="email" class="rounded-md px-5 py-2"  id="firstName" v-model="email.val" @blur="clearValide('email')">
                <p class="text-red-500 font-bold text-xs mt-3" v-if="!email.isValid">
                    The Field is required</p>
            </div>
            <div class="form-control mb-3" :class="{invalid : !message.isValid}">
                <label for="message">Message</label>
                <textarea type="text" id="message" class="rounded-md px-5 py-2" v-model.trim="message.val" @blur="clearValide('message')"></textarea>
                <p class="text-red-500 font-bold text-xs mt-3" v-if="!message.isValid">
                    The Field is required</p>
            </div>

            <div class="form-control m-auto w-full">
                <base-button>Send Message</base-button>
            </div>

        </form>
    </base-card>
</template>
<script>
export default {
    data(){
        return {
            isValid : true , 
            email : {
                val : '',
                isValid : true
            },
            message : {
                val : '',
                isValid : true
            }
        }
    },

    methods : {
        validateForm(){
            this.isValid = true ;
            if(this.email.val === '' || !this.email.val.includes('@')){
                this.email.isValid =  false;
                this.isValid =  false;
            }
            if(this.message.val === '' ){
                this.message.isValid =  false;
                this.isValid =  false;
            }
        },
        //when the blur input he clear the validate from style
        clearValide(input){
            this[input].isValid = true ;
        },
        submitForm(){
            this.validateForm();

            if(!this.isValid){
                return;
            }
            const formData = {
                email : this.email.val,
                msg : this.message.val,
                coacheId : this.$route.params.id
            }    

            this.$store.dispatch('requests/setRequest' , formData );


            this.$router.replace('/coaches');
        }
    }
}
</script>
<style>
.form-control {
    margin: 0.5rem 0;
    }

    label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    }
    input{
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    }
    textarea{
        display: block;
        width: 100%;
        height: 90px;
        border: 1px solid #ccc;
        font: inherit;
    }

    input:focus,
    textarea:focus {
    background-color: #88f3d8;
    outline: none;
    border-color: #88f3d8;
    }
    .invalid label {
    color: red;
    }

    .invalid input,
    .invalid textarea {
    border: 1px solid red;
    }
    
</style>