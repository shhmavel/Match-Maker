import config from '../config'

const ScoresApiService = {
    getScores(){
        return fetch(`${config.API_ENDPOINT}/scores`, {
            headers:{
                'content-type': 'application/json'
            },
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    postScore(score_initials, score_score){
        return fetch(`${config.API_ENDPOINT}/scores`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                initials: score_initials,
                score: score_score
            }),
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default ScoresApiService