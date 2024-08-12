"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

const About = () => {
    const router = useRouter()

    return (
        <div>
            <h1 className="heading"> About page </h1>
            <button onClick={() => router.push('/')}> Go to Home page</button>

            <br />
            <br />
            <Link href="/about/aboutcollege">Go to About College Page</Link>
            <br />
            <br />
            <Link href="/about/aboutstudent">Go to About student page</Link>

        </div>
    )
}

export default About