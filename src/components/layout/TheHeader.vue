<template>
    <header>
        <nav>
            <h1 class="text-white hover:scale-110 transition-all ease-out translate-x-1 text-3xl font-mono font-bold"><router-link to="/">Find Coache</router-link></h1>
            <ul>
                <li><router-link class="transition-all ease-in"  to="/">All Coaches</router-link></li>
                <li v-if="CheckIfIsAuth"><router-link class="transition-all ease-in" to="/request">Requests</router-link></li>
                <li v-else><router-link class="transition-all ease-in" to="/login">Login</router-link></li>
                
                <li v-if="CheckIfIsAuth"><base-button @click="logout" >Logout</base-button></li>
            </ul>
        </nav>    
    </header>
</template>


<script>
export default {
    computed:{
        CheckIfIsAuth(){
            return this.$store.getters.isAuth
        },
    },
    methods:{
        logout(){
            this.$store.dispatch('logout');
            this.$router.replace("/coaches")
        }
    }
}
</script>

<style scoped>
    header {
        width: 100%;
        height: 5rem;
        background-color: #0ecb73;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header a {
        text-decoration: none;
        color: #181632;
        display: inline-block;
        padding: 0.75rem 1.5rem;
        border: 1px solid transparent;
    }

    a:active,
    a:hover,
    a.router-link-active {
        border: 1px solid  #181632;
    }

    h1 {
        margin: 0;
    }

    

    h1 a:hover,
    h1 a:active,
    h1 a.router-link-active {
        border-color: transparent;
    }

    header nav {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li {
        margin: 0 0.5rem;
    }
</style>