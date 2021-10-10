
const API_URL = "http://localhost:8801"

const logFile = async () => {
    const id = "6161e9d52dc9fc45b53c7a07"
    const res = await fetch(`${API_URL}/api/logs/posts/${id}`)
    console.log(res)
    // console.log(data)
    // const dests = data.dests
    // console.log(dests)
    return res.json()
}
export {
    logFile
}