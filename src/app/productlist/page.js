import Link from "next/link";

export default function Page() {

    return (
        <div>
            <h1>
                This is Product List Page
            </h1>
            <br />

            <h3>
                <Link href="/productlist/productclient">To Product List Client Page</Link>
                <br />
                <Link href="/productlist/productserver">To Product List Server Page</Link>

            </h3>
        </div>
    )
}

