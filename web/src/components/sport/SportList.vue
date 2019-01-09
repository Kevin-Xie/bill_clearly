<template>
    <v-data-table
    :headers="headers"
    :items="sportGoals"
    class="elevation-1"
    >
        <template slot="items" slot-scope="props">
            <td>{{props.item.taskName}}</td>
            <td>{{props.item.target}}</td>
            <td>{{props.item.current}}</td>
            <td>{{props.item.createdAt}}</td>
        </template>
    </v-data-table>
</template>

<script>
export default {
    name: 'SportList',
    data() {
        return {
            headers: [ 
                {text: 'Goal', value: 'taskName'}, 
                {text: 'Target', value: 'target'}, 
                {text: 'Current', value: 'current'}, 
                {text: 'Create Date', value: 'createdAt'}
            ],
            
        }
    },
    computed: {
        sportGoals() {
            return this.$store.state.sportGoals;
        }
    },

}
</script>

<style scoped>

</style>
