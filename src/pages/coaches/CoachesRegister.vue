<template>
    <base-card>
        <h2 class='text-3xl font-bold underline p-4 bg-gray-50 rounded-md w-full'>
            Register
        </h2>

        <coach-form @save-data="SaveData"></coach-form> 
        
    </base-card>
</template>
<script>
import CoachForm from '../../components/coaches/coacheForm.vue'
export default {
    components : {
        CoachForm
    } , 
    methods : {
        SaveData(formData){
            this.$store.dispatch('coaches/registerCoach' , formData); 

            this.$router.replace('/coaches');
        }
    }
}
</script>
