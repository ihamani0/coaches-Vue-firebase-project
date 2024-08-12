<template>
    <base-card>
        <h2 class="font-bold text-xl p-2 my-5">Filter List</h2>
        <div class="flex justify-around">
            <span class="">
                <input type="checkbox" id="frontend" checked @change="setFilter" />
                <label for="frontend">Frontend</label>
            </span>
            <span class="filter-option">
                <input type="checkbox" id="backend" checked @change="setFilter"/>
                <label for="backend">Backend</label>
            </span>
            <span class="filter-option">
                <input  type="checkbox" id="career" checked @change="setFilter" />
                <label  for="career">Career</label>
            </span>
        </div>
    </base-card> 
</template>
<script>
export default {
    emits : ['set-filter'] ,
    data(){
        return {
            filtered : {
                frontend : true ,
                backend : true , 
                career : true
            }
        }
    },
    methods : {
        setFilter(event){
            const inputId = event.target.id;
            const isActive = event.target.checked;

            const updateFilter = {
                ...this.filtered,
                [inputId] : isActive
            }
            this.filtered = updateFilter;
            this.$emit('set-filter' ,updateFilter)
        }
    }
}
</script>
<style scoped>
    /* h2 {
    margin: 0.5rem 0;
    }

    .filter-option {
    margin-right: 1rem; 
    
    }

    .filter-option label,
    .filter-option input {
    vertical-align: middle;
    }

    .filter-option label {
    margin-left: 0.25rem;
    } */

</style>