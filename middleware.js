var fetch = require("isomorphic-fetch")
const {VANILLA_API_URL,CLIENT_SECRET,CLIENT_ID} = require("./config");

const log = console.info.bind(
    console,
    `[ \x1b[32minfo\x1b[0m ] [vanilla-express-demo]: `
)

const error = console.error.bind(
    console,
    `[ \x1b[31merror\x1b[0m ] [vanilla-express-demo]: `
)


const PROOF_QUERY = `
{
    proof {
        total  
    }
}`


const getContentProof = async ({onSuccess, onFailure, requestId}) => {
    try {
        const response = await fetch(VANILLA_API_URL, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
            },
            body: JSON.stringify({
                query: PROOF_QUERY
            })
        });
        if (response.status === 200) {
            return response.json().then(data => onSuccess(data)).catch(e => onFailure(e))
        }
        return onFailure()
    } catch (e) {
        onFailure()
    }
}


module.exports = {
    monetized: async (req, res, next) => {
        const {requestId} = req.params

        const onFailure = () => {
            error(`Couldn't verify requestId: ${requestId}`)
            res.send()
        }

        const onSuccess = () => {
            log(`RequestId verified: ${requestId}`)
            next()
        }

        log(`Verifying requestId: ${requestId}`)
        return getContentProof({onSuccess, onFailure, requestId})
    },
    proof: async (req, res) => {
        res.send({
            proof: "xxx"
        })
    },
}



