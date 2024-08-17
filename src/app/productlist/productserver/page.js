import Link from "next/link";
import Product from "./product";

async function productList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json()
    return data.products
}

export default async function ServerPage() {
    let products = await productList();
    console.log("======")
    // server page ka console gets printed in terminal instead of browser's console
    return (
        <div>
            <h1>This is Product Server page </h1>
            <br />
            <br />

            <Link href="/productlist">To Product List Page</Link>
            <br />
            <br />

            <h1>Products</h1>
            {
                products.map((item) => (
                    <>
                        <h3 key={item.title}>{item.title}</h3>
                        <Product price={item.price} />
                    </>
                ))
            }
        </div>
    )
}