import Link from "next/link"

const AboutCollege = () => {
    return (
        <div>
            <h1 className="heading">  This is About college page </h1>

            <br />
            <br />

            <Link href="/about"> Go to about page </Link>
        </div>
    )
}

export default AboutCollege