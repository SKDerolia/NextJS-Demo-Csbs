"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Login = () => {
    const router = useRouter()

    return (
        <div>
            <h1 className="heading">Login Page</h1>
            <button onClick={() => router.push('/')}> Go to Home page</button>
            <br />
            <br />
            <Link href="/login/loginteacher">Go to login teacher Page</Link>
            <br />
            <br />
            <Link href="/login/loginstudent">Go to login student page</Link>

        </div>
    )
}

export default Login