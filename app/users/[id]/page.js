import getUser from "@/app/libs/getUser";

export default async function Details({ params: { id } }) {
    const user = await getUser(id);

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <p>{user.address.city}</p>
        </div>
    );
}