import axios, { Axios } from 'axios'

const TRADES_URL = 'https://api.sleeper.app/v1/league/808945082609815552/transactions/3'

export default async function getTrades() {
    return new Promise ((resolve, reject) => {
        axios.get(TRADES_URL).then(res => resolve(res.data))
        .catch(err => reject(err));
    })
}








