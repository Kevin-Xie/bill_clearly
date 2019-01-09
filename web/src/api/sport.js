import http from 'axios';

export const getSportGoal = async () => {
    console.log('getSportGoal')
    http.get('/api/sports').then( (data) => {
        console.log(data);
    }).catch(err => {
        console.log(err)
    })
}