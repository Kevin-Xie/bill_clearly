<template>
    <v-layout row wrap justify-center align-center>
        <v-flex xs12 md6>

        <sport-goal-card v-for="goal in sportGoals" :key="goal._id" :goal="goal"></sport-goal-card>
        </v-flex>
    </v-layout>
</template>

<script>
import SportGoalCard from '@/components/sport/SportGoalCard'
export default {
    name: 'SportList',
    data() {
        return {
            
            
        }
    },
    components: {
        SportGoalCard,
    },
    computed: {
        sportGoals() {
            return this.$store.state.sportGoals;
        }
    },
    mounted() {
        console.log(this.sportGoals);
    },
}
</script>

<style scoped>

</style>
