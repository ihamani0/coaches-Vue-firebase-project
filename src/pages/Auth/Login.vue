<template>
    <div class="container mx-auto">
        <base-card>
            <form class="flex flex-col justify-center space-y-6">
                <div class="form-control">
                    <label for="email">Email<span class="text-red-600">*</span></label>
                    <input type="email" class="px-6 py-2" >
                </div>
                <div class="form-control">
                    <label for="email">Password<span class="text-red-600">*</span></label>
                    <input type="password" class="px-6 py-2" >
                </div>
                <div>
                    <base-button  class="px-6 py-2 text-white  bg-slate-700 hover:bg-orange-500 rounded-full">login</base-button>
                    <base-button link to="singup"  class="px-4 py-1 text-black" type="button" >Singup</base-button>
                </div>
            </form>
        </base-card>
    </div>    
</template>
<script>
export default {
    
}
</script>