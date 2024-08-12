<template>

    <div>
        <!-- Modal Erro -->
        <base-dialog :show="error.is" title="Error Fetching Data!!" @close="handleError" >
                <p class="font-bold p-3 text-center m-3 text-red-500">
                    {{ error.message }}
                </p>
        </base-dialog>
        <section>
            <filter-item @set-filter="changeFilter"></filter-item>
        </section>
        
        <section>
            <base-card>
            <div class="controls">
                <base-button @click="loadCoachs(true)">
                    Refrshe
                </base-button>
                <base-button v-if="!isLoading" link to="/register" mode="outline">
                    Register Coache
                </base-button>
            </div>

            
                <!-- Loading spinner -->
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
            <!-- List Coaches -->
                <ul v-else-if="hasCoaches">
                    
                        <coache-item v-for="coach in Allcoaches" 
                            
                            :key="coach.id"
                            :id="coach.id"
                            :first-name="coach.firstName"
                            :last-name="coach.lastName"
                            :areas="coach.areas"
                            :rate="coach.hourlyRate"
                        ></coache-item>
                        
                </ul>
                
                <h3 class="bg-gray-50 p-10 m-4 font-bold rounded-lg 
                        underline border-spacing-1 text-3xl" v-else>
                    No Coaches Avaiable</h3>
                </base-card>

        </section>
    </div>
    

</template>

<script>

import CoacheItem from "../../components/coaches/coachItem.vue"
import FilterItem from "../../components/coaches/FilterItem.vue"
export default {
    
    components:{
        CoacheItem , FilterItem 
    },
    data() {
        return {
            isLoading : false ,
            error : {
                message : '',
                is : false,
            } ,
            activeFilters : {
                frontend : true , 
                backend : true ,
                career : true
            }
        }
    } ,
    computed : {
        Allcoaches(){
            let coaches =  this.$store.getters['coaches/getCoaches'];
            return coaches.filter( coach => {
                if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;
                    }
                if (this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                    }
                if (this.activeFilters.career && coach.areas.includes('career')) {
                    return true;
                    }
                return false;
                });
        },
        hasCoaches(){
            return !this.isLoading &&  this.$store.getters['coaches/hasCoaches'];
        }
    },
    created() {
        this.loadCoachs();
    },
    methods: {
        changeFilter(updateFilter){
            this.activeFilters = updateFilter;
        } , 
        async loadCoachs(shouldFetch=false){
            this.isLoading = true ;
            try {
                await this.$store.dispatch('coaches/loadCoaches', {shouldFetch : shouldFetch})
            } catch (error) {
                this.error.is = true;
                this.error.message = error.message || "Something Worng";
            }
            this.isLoading = false ;
        },
        handleError(){
            this.error.is = false ;
            this.error.message='';
        }
    }
}
</script>
<style scoped>
    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    }


    .controls {
    display: flex;
    justify-content: space-between;
    }
</style>

