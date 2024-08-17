"use client"
import { useEffect, useState } from "react"
import Link from "next/link";


export default function Page() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const jasdata = await fetch("https://dummyjson.com/products");
        const data = await jasdata.json();
        console.log("data.products ", data.products)
        setProduct(data.products)
        console.log("product ", product)

    }

    return (
        <div>
            <h1>
                This is Product Client Page
            </h1>
            <br />

            <Link href="/productlist">To Product List Page</Link>
            <br />
            <br />
            <div>
                {
                    product.map((item) => (
                        <h3 key={item.title}>
                            {item.title}
                        </h3>
                    ))
                }
            </div>
        </div>
    )
}

