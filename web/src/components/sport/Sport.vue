<template>
    <v-layout>
        <!-- <new-sport-goal></new-sport-goal> -->
        <sport-list></sport-list>
    </v-layout>
</template>

<script>
import NewSportGoal from '@/components/sport/NewSportGoal'
import SportList from '@/components/sport/SportList'
import {getSportGoal} from '@/api/sport'

export default {
    name: 'Sport',

    components: {
        NewSportGoal,
        SportList,
    },

    mounted() {
        getSportGoal();
    },
}
</script>

<style scoped>

</style>
