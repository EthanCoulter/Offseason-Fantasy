import axios, { Axios } from 'axios';



const ROSTERS_URL = 'https://api.sleeper.app/v1/league/808945082609815552/rosters'

export default async function getRosters() {
    return new Promise((resolve, reject) => {
        axios.get(ROSTERS_URL).then(res => resolve(res.data))
        .catch(err => reject(err));
    })

}
