import Link from "next/link";

const StudentList = () => {
    const students = ["Skd1", "Skd2", "Skd3", "Skd4"]
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {
                    students.map((data) => {
                        return (
                            <li>
                                <Link href={'/studentlist/' + data}>{data}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default StudentList