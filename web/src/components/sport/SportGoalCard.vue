<template>
    <v-card>
        <v-card-title>
            <div class="headline">{{goal.taskName}}</div>
        </v-card-title>
        <v-card-text>
            <v-layout>
                <v-flex xs5>
                    <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="15"
                    :value="progressValue"
                    color="primary">
                    {{progressPercent}}
                    </v-progress-circular>
                </v-flex>
                <v-flex xs7 align-self-center>
                    <div class="headline font-weight-light">Target: {{goal.target}}</div>
                    <div class="headline font-weight-light">Current: {{goal.current}}</div>
                </v-flex>
            </v-layout>
        </v-card-text>
        <!-- <v-card-actions>
            <v-layout justify-end>
                <v-btn color="orange" flat>Detail</v-btn>
            </v-layout>
        </v-card-actions> -->
    </v-card>
</template>

<script>
import {toPercent} from '@/utils/utils'
export default {
    name: 'SportGoalCard',
	props: ['goal'],
    data() {
        return {
            
        }
    },
    computed: {
        percent() {
            return (this.goal.current/this.goal.target).toFixed(2);
        },
        progressPercent() {
            return toPercent(this.percent);
        },
        progressValue() {
            return this.percent * 100;
        },
    },
}
</script>

<style scoped>

</style>
