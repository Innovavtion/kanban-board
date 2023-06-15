import Image from "next/image";

type Props = {
  params: {
    id: number;
  };
};

async function getData(id: number) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);

  const data = await response.json();

  return data;
}

export default async function CurrentBlog({ params: { id } }: Props) {
  const data = await getData(id);

  return (
    <>
      <h1>{data.title}</h1>
      <Image src={data.image} width={500} height={500} alt={data.title} />
    </>
  );
}
