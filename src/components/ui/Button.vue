<template>
    <button v-if="!link" :class="mode" class="btn-outline-primary">
        <slot></slot>
    </button>
    <router-link v-else :class="mode" :to="to" class="btn-outline-primary">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props : {
        link : {
            type : Boolean,
            required : false,
            default : false
        },
        to : {
            type : String,
            required : false,
            default : "/"
        } ,
        mode : {
            type : String,
            required : false,
            default : ""
        }
    } , 
}
</script>

<style scoped>
    /* button,
    a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font: inherit;
    background-color: #1cc995;
    border: 1px solid #000000;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    margin-right: 0.5rem;
    display: inline-block;
    }

    a:hover,
    a:active,
    button:hover,
    button:active {
    background-color: #07855f;
    border-color: #ffffff;
    }

    .flat {
    background-color: transparent;
    color: #3a0061;
    border: none;
    }

    .outline {
    background-color: transparent;
    border-color: #270041;
    color: #270041;
    }

    .flat:hover,
    .flat:active,
    .outline:hover,
    .outline:active {
    background-color: #edd2ff;
    } */
</style>