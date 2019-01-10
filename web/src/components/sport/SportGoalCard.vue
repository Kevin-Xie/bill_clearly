<template>
    <v-layout row wrap justify-center align-center>
        <v-flex xs12 md6>
            <v-card>
                <v-card-title>
                    <div class="headline">{{goal.taskName}}</div>
                </v-card-title>
                <v-card-text>
                    <v-layout>
                        <v-flex xs6>
                            <v-progress-circular
                            :rotate="-90"
                            :size="120"
                            :width="15"
                            :value="progressValue"
                            color="primary">
                            {{progressPercent}}
                            </v-progress-circular>
                        </v-flex>
                        <v-flex xs6>
                            <div>Target: {{goal.target}}</div>
                            <div>Current: {{goal.current}}</div>
                            <v-btn color="orange" flat>Detail</v-btn>
                        </v-flex>
                    </v-layout>
                </v-card-text>
                <v-card-action>
                    <v-btn color="orange" flat>Detail</v-btn>
                </v-card-action>
            </v-card>
        </v-flex>
    </v-layout>
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
