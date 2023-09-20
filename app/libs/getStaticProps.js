//reusable code to get props from any api
export default async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
        throw new Error('failed to fetch users')
    }

    return await response.json()
}