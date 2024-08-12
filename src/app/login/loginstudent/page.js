import Link from "next/link"

const LoginStudent = () => {
    return (
        <div>
            <h1 className="heading"> This is Login Student page </h1>
            <br />
            <br />
            <Link href="/login"> Go to Login page </Link>
        </div>
    )
}

export default LoginStudent