import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://fakestoreapi.com/products?limit=5");

  const data = await response.json();

  return data;
}

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const products = await getData();

  return (
    <>
      <h1>Blog all</h1>
      {console.log(products)}
      <ul>
        {/* после => надо ставить скобки */}
        {products.map((product: any) => (
          <li key={product.id}>
            <Link href={`/blog/${product.id}`}>{product.title}</Link>;
          </li>
        ))}
      </ul>
    </>
  );
}
