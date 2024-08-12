<template>
        <span class="badge px-2 py-1 text-gray-50 rounded-xl inline-block mx-1 text-xs" :class="mode" >
            {{ text }}
        </span>
</template>
<script>
export default {
    props : ['mode' , 'title'],
    computed : {
        text(){
            return this.title.toUpperCase();
        }
    }
}
</script>
<style scoped>


    .frontend {
    background-color: #0fc799;
    }

    .backend {
    background-color: #ef3c84;
    }

    .career {
    background-color: #f2b55b;
    }
</style>