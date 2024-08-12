<template>
    <div>
        <section>
            <base-card>
                <h2>{{ FullName }}</h2>
                <h3>${{ rate }}/hour</h3>
            </base-card>
        </section>

    <section>
        <base-card>
            <base-badge v-for="area in areas" 
                :key="area" 
                :mode="area" 
                :title="area"
            ></base-badge>
            <p>{{ description }}</p>
        </base-card>
    </section>

    <section>
        <base-card>
            <h2 class="my-3 p-1 w-auto">Intreseted with this coache?</h2>
            <base-button link :to="contactLink" mode="outline">Contace</base-button>
        </base-card>
    </section>
    
    <router-view></router-view>
    </div>
    
    
</template>

<script>
export default {
    props :['id'],
    data(){
        return {
            selectedCoach : null 
        }
    },

    computed : {
        FullName(){
            return this.selectedCoach.firstName+' '+this.selectedCoach.lastName;
        },
        rate(){
            return this.selectedCoach.hourlyRate
        },
        description(){
            return this.selectedCoach.description
        },
        areas(){
            return this.selectedCoach.areas
        },
        contactLink(){
            return this.$route.path+"/contact"
        }
    },
    created(){
        this.selectedCoach = this.$store.getters['coaches/getCoaches'].find(coach => coach.id == this.id) 
    }
}
</script>