<template>
    <!-- this template is wrapied by li tag -->
    <li class="list-item">
        <h3>{{ FullName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div>
            <base-badge v-for="area in areas" 
                :key="area"
                :title="area"
                :mode="area"
                >
            </base-badge>
            
        </div>
        <div class="actions">
            <base-button link mode="outline" :to="ContactLink">Contact</base-button>
            <base-button link mode="outline" :to="DeatailsLink">Details</base-button>
        </div>
    </li>
</template>

<script>
export default {
    props : ['id' , 'firstName' , 'lastName' , 'rate' , 'areas'],
    computed : {
        FullName(){
            return this.firstName+' '+this.lastName;
        },
        ContactLink(){
            return this.$route.path+'/'+this.id+'/contact' ;
        },
        DeatailsLink(){
            //access the route path
            return this.$route.path+'/'+this.id ; 
        },
    }
}
</script>

<style scoped>
    .list-item {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
    }

    h3 {
    font-size: 1.5rem;
    }

    h3,
    h4 {
    margin: 0.5rem 0;
    }

    div {
    margin: 0.5rem 0;
    }

    .actions {
    display: flex;
    justify-content: flex-end;
    }
</style>