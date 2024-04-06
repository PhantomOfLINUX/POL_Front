const url = process.env.NEXT_PUBLIC_BASE_API

export const getPlayerId = async (validAccessToken:string|undefined) => {
    try{
        const player = await fetch(`${url}/api/player/me`,{
            headers:{
                Authorization:`Bearer ${validAccessToken}`
            }
        })
        const playerData = await player.json()
        if(player.ok){
            return playerData.uid
        }
        else {
            return ""
        }
    }catch(error){
        console.error(error)
    }
}