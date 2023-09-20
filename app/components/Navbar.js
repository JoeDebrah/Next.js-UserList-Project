import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/React_Logo.png" width={128} height={77} />
            </div>
            <Link href="/"> Home </Link>
            <Link href="/about"> About</Link>
            <Link href="/users/"> React Listing </Link>

        </nav>
    );
}
export default Navbar;