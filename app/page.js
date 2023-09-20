import styles from "./stylesheet/Home.module.css"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title> User List | Home</title>
        <meta name="keywords" content="user" />
      </Head>

      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
        <Link href="/users" className={styles.btn}> See User Listing </Link>
      </div>
    </>
  )
}
