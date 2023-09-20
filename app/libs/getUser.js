//reusable code to get users
export default async function getUser(id) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //console.log(response);
    if (!response.ok) {
        throw new Error('failed to fetch user')
    }
    return response.json()
}