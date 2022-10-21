import axios from '../axios';

export const handleLoginAPI = (email, password) => {
    return axios.post('api/login', { email, password });
};

export const getAllUsersAPI = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`);
};

export const createNewUserAPI = (user) => {
    return axios.post('/api/create-new-user', user);
};

export const deleteUserAPI = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId,
        },
    });
};

export const editUserAPI = (user) => {
    return axios.put('/api/edit-user', user);
};
