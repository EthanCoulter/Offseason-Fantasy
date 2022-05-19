
import axios, { Axios } from 'axios';

const USERS_URL = 'https://api.sleeper.app/v1/league/808945082609815552/users'

export default async function getUsers() {
    return new Promise((resolve, reject) => {
        axios.get(USERS_URL).then(res => resolve(res.data))
        .catch(err => reject(err));
    })

}