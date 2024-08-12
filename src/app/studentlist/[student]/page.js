'use client'
import Link from "next/link"

const Student = ({ params }) => {
    console.log(params)
    return (
        <div>

            <h1>Student Details</h1>
            <h3>Name: {params.student}</h3>

            <br />
            <br />
            <Link href="/studentlist">Student List Page</Link>

        </div>
    )
}

export default Student