<template>
    <v-data-table
    :headers="headers"
    :items="goals"
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
                {text:'Target', value: 'target'}, 
                {text: 'Current', value: 'current'}, 
                {text: 'Create Date', value: 'createdAt'}
            ],
            goals: [
                {
                    "_id": "5c3325954a23413b5ce4bfa6",
                    "userId": "1",
                    "taskName": "running",
                    "target": 360,
                    "current": 100,
                    "unit": "km",
                    "description": "test test",
                    "createdAt": "2019-01-07T10:10:29.590Z",
                    "updatedAt": "2019-01-07T10:10:29.590Z",
                    "__v": 0
                },
                {
                    "_id": "5c3325d64c10210830fc4655",
                    "userId": "1",
                    "taskName": "running",
                    "target": 360,
                    "current": 100,
                    "unit": "km",
                    "description": "test test",
                    "createdAt": "2019-01-07T10:11:34.366Z",
                    "updatedAt": "2019-01-07T10:11:34.366Z",
                    "__v": 0
                    },
                    {
                    "_id": "5c33278d13247538e0c21404",
                    "userId": "1",
                    "taskName": "running",
                    "target": 360,
                    "current": 100,
                    "unit": "km",
                    "description": "test test",
                    "createdAt": "2019-01-07T10:18:53.223Z",
                    "updatedAt": "2019-01-07T10:18:53.223Z",
                    "__v": 0
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
