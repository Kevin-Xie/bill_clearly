<template>
    <v-layout>
        <new-sport-goal></new-sport-goal>
        <sport-list></sport-list>
    </v-layout>
</template>

<script>
import NewSportGoal from '@/components/sport/NewSportGoal'
import SportList from '@/components/sport/SportList'

export default {
    name: 'Sport',

    components: {
        NewSportGoal,
        SportList,
    },

    computed: {
        userId() {
            return this.$store.getters.userId;
        }    
    },

    created() {
        this.$store.dispatch('getMySportGoal', this.userId);
    },
}
</script>

<style scoped>

</style>
