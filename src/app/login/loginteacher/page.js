import Link from "next/link"

const LoginTeacher = () => {
    return (
        <div>
            <h1 className="heading"> This is Login Teacher page </h1>
            <br />
            <br />
            <Link href="/login"> Go to login page </Link>
        </div>
    )
}

export default LoginTeacher