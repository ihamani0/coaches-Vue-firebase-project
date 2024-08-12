<template>
    
    <div v-if="!FormIsValid" class=" w-auto p-4 border-l-2 border-red-500 rounded-sm mx-4 ">
        <p class="text-red-500 font-bold" >
            Fill the field Input and Try Again</p>
    </div>
    <form @submit.prevent="submitForm">
            
            <div class="form-control"  :class="{invalid : !firstName.isValid}">
                <label for="firstName">First Name</label>
                <input type="text" class="rounded-md"  id="firstName" v-model="firstName.val" @blur="clearValide('firstName')">
                <p class="text-red-500 font-bold text-xs mt-3" v-if="!firstName.isValid">
                    The Field is required</p>
            </div>
            <div class="form-control" :class="{invalid : !lastName.isValid}">
                <label for="lastName">Last Name</label>
                <input type="text" class="rounded-md" id="lastName" v-model.trim="lastName.val" @blur="clearValide('lastName')">
                <p class="text-red-500 font-bold text-xs mt-3 " v-if="!lastName.isValid">
                    The Field is required</p>
            </div>
            <div class="form-control" :class="{invalid : !description.isValid}">
                <label for="description">Description</label>
                <textarea id="description" class="rounded-md" v-model.trim="description.val" @blur="clearValide('description')"></textarea>
                <p class="text-red-500 font-bold text-xs mt-3" v-if="!description.isValid">
                    The Field is required</p>
            </div>
            <div class="form-control" :class="{invalid : !rate.isValid}">
                <label for="rate">Rate</label>
                <input type="number" class="rounded-md"  id="rate" v-model.number.trim="rate.val" @blur="clearValide('rate')">
                <p class="text-red-500 font-bold text-xs mt-3" v-if="!rate.isValid">
                    The Field is required</p>
            </div>
            <div class="form-control " :class="{invalid : !areas.isValid}">
                <h3>Areas of Expertise</h3>
                    <div class="form-checkbox">
                    <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValide('areas')" />
                    <label id="frontend">FrontEnd Dev</label>
                    </div>
                    <div class="form-checkbox">
                    <input type="checkbox" id="backend" value="backend" v-model="areas.val" @blur="clearValide('areas')"/>
                    <label id="backend">BackEnd Dev</label>
                    </div>
                    <div class="form-checkbox">
                    <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="clearValide('areas')" />
                    <label id="career">Career Advisory</label>
                    </div>
                <p class="text-red-500 font-bold text-xs mt-3" v-if="!areas.isValid">
                    The Field is required</p>
            </div>


            <div class="from-control">
                <base-button>Register</base-button>
            </div>
    </form> 
</template>
<script>
export default {
    emits : ['save-data'],
    data(){
        return{
            FormIsValid : true ,
            firstName : {
                val : '',
                isValid : true,
            },
            lastName : {
                val : '',
                isValid : true,
            },
            description : {
                val : '',
                isValid : true,
            },
            rate : {
                val : null , 
                isValid : true,
            },
            areas: {
                val : [] , 
                isValid : true,
            },
        }
    },
    methods : {
        validateForm(){
            this.FormIsValid = true ;

            if(this.firstName.val ===''){
                this.firstName.isValid = false;
                this.FormIsValid = false;
            }
            if(this.lastName.val ===''){
                this.lastName.isValid = false;
                this.FormIsValid = false;
            }
            if(this.description.val ===''){
                this.description.isValid = false;
                this.FormIsValid = false;
            }
            if(!this.rate.val || this.rate.val < 0 ){
                this.rate.isValid = false;
                this.FormIsValid = false;
            }
            if(this.areas.val.length <= 0 ){
                this.areas.isValid = false;
                this.FormIsValid = false;
            }
        },
        clearValide(input){
            this[input].isValid = true ;
        },
        submitForm(){
            
            this.validateForm();

            if(!this.FormIsValid){
                return;
            }
        
            const formData = {
                first : this.firstName.val,
                last : this.lastName.val,
                desc : this.description.val,
                rate : this.rate.val,
                areas : this.areas.val,
            }
            this.$emit('save-data' , formData);
        }
    }
}
</script>
<style scoped>
    .form-control {
    margin: 0.5rem 0;
    }

    label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    }

    input[type='checkbox'] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
    }

    input{
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    padding: 10px 5px;
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

    input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
    }

    input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
    }

    h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
    }

    .invalid label {
    color: red;
    }

    .invalid input,
    .invalid textarea {
    border: 1px solid red;
    }
    .flex{
        display: flex;
    }
    .gap-10{
        gap:10px
    }
</style>
