
export const FetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
    return await response.json()
}


export const FetchAlbums=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/albums', { method: 'GET' })
    return await response.json()
}