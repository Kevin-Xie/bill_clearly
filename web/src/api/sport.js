import http from 'axios';

export const getSportGoalByUserId = async (userId) => {
    try {
        return await http.get(`/api/sports?userId=${userId}`);
    } catch (error) {
        throw new Error(error);
    }
}

export const createSportGoal = async (goal) => {
    let newSportGoal = {
        userId: goal.userId,
        taskName: goal.name,
        target: goal.target,
        unit: goal.unit,
        description: "test test",
    }
    try {
        return (await http.post('/api/sports', newSportGoal)).data;
    } catch (error) {
        throw new Error(error);
    }
}