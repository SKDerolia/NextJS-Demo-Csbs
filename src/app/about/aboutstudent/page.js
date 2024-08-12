import Link from "next/link"

const AboutStudent = () => {
    return (
        <div>
            <h1 className="heading"> This is About Student page </h1>

            <br />
            <br />
            <Link href="/about"> Go to about page </Link>
        </div>
    )
}

export default AboutStudent