import http from 'axios';

export const getSportGoalByUserId = async (userId) => {
    try {
        return await http.get(`/api/sports?userId=${userId}`);
    } catch (error) {
        throw new Error(error);
    }
}