"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 5000);

    }, []);

    return (
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page cannot be found :(</h2>
            <Timer />
            <p>Go back to the <Link href="/"> Homepage </Link> </p>
        </div>
    );
}

export default NotFound;