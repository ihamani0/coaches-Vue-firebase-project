<template>
    <section>

        <!-- Modal Erro -->
            <base-dialog :show="error.is" title="Error Fetching Data!!" @close="handleError" >
                    <p class="font-bold p-3 text-center m-3 text-red-500">
                        {{ error.message }}
                    </p>
            </base-dialog>

        <base-spinner v-if="isLoading"></base-spinner>

        <base-card v-else-if="hasRequests">
        <header class="text-center mx-4">
            <h3 class="text-center font-bold font-mono text-2xl">Requests</h3>
        </header>
        
            <ul class="my-auto mx-8 max-w-xl">
                <request-item v-for="req in getRequests" 
                :key="req.id"
                :email="req.email"
                :message="req.message"
                :coachId="req.coacheId"
                >
                </request-item>
            </ul>
        </base-card>
        <div v-else>
            <base-card>
                <h3 class="font-mono text-xl text-center">You havent recived any request yet!</h3>
            </base-card>
        </div>
    </section>
    
</template>
<script>
import RequestItem from '../../components/request/RequestItem.vue';
export default {
    data(){
        return{
            isLoading : false,
            error : {
                message : "" , 
                is : false
            }
        }
    },
    components : {
        RequestItem
    },
    computed : {
        getRequests(){
            console.log(this.$store.getters['requests/getRequest'])
            return this.$store.getters['requests/getRequest']
        },
        hasRequests(){
            return !this.isLoading && this.$store.getters['requests/hasRequest']
        }
    } ,
    methods: {
        async loadRequest(){
                this.isLoading = true;
            try {
                await this.$store.dispatch('requests/loadRequest')
            } catch (error) {
                this.error.message = error.message;
                this.error.is = true;
            }
                this.isLoading = false;
        },
        handleError(){
            this.error.is = false;
        }
    },
    created(){
        this.loadRequest();
    }
}
</script>
