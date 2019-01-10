<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="primary" dark>Add</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Add New Goal</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field 
                  label="Sport Goal *" 
                  v-model="goal.name"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="Target *" v-model="goal.target" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field label="Unit" v-model="goal.unit"></v-text-field>
              </v-flex>
              <v-flex xs12>

              </v-flex>
              <!-- <v-flex xs12>
                <v-menu
                  :close-on-content-click="false"
                  v-model="menu"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="startDate"
                    prepend-icon="event"
                    label="Start Date *"
                    required
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="startDate" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-flex> -->
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>


<script>
import {createSportGoal} from '@/api/sport';

export default {
    name: 'NewSportGoal',
    data() {
        return {
            dialog: false,
            startDate: new Date().toISOString().substr(0, 10),
            menu: false,
            goal: {
              userId: this.$store.getters.userId,
              name: '',
              target: '',
              unit: '',
              description: ''
            },
            rules: {
              required: value => !!value || 'Required'
            },
        }
    },
    methods: {
      save() {
        createSportGoal(this.goal).then(response => {
          if(response.isSuccess) {
            this.$store.commit('addSportGoals', [response.data]);
          }
          this.dialog = false;
        }).catch(err => {
          console.log(err)
          this.dialog = false;
        });
      }
    },
}
</script>

<style scoped>

</style>

