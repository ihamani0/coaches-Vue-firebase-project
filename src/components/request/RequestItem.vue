<template>
    <li class="p-4 my-2 mx-4 border-2 border-rose-100 rounded-md text-left"> 
        <div>
            <a class="hover:text-red-300 text-red-500 transition-all ease-in" 
            :href="emailLink">{{ email }}</a>
        </div>
        <p class="pl-1 ">{{ message }}</p>
    </li>
</template>
<script>
export default {
    props : ['email' , "message" , "coachId"] ,
    computed:{
        emailLink(){
            return "mailto:"+this.email;
        } , 
    }
}
</script>