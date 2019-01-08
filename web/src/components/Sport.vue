<template>
    <v-layout>
        <!-- <SportGoal /> -->
        <SportList />
    </v-layout>
</template>

<script>
import SportGoal from '@/components/SportGoal'
import SportList from '@/components/SportList'

export default {
    name: 'Sport',

    components: {
        SportGoal,
        SportList,
    }
}
</script>

<style scoped>

</style>
