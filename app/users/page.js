import Link from "next/link";
import styles from "../stylesheet/Jobs.module.css";
import getStaticProps from "../libs/getStaticProps";

export default async function users() {
    const users = await getStaticProps();

    return (
        <div>
            <h1>All Users</h1>
            {users.map(user => (
                <Link href={`/users/${user.id}`} key={user.id} className={styles.single}>
                    <h3>{user.name}</h3>
                </Link>
            ))}
        </div>
    );
}