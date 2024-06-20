import React, { useEffect, useState } from "react";
import { Footer } from "../componets/footer";
import { Header } from "../componets/header";
import Image from "next/image";
import sliderImg from "../../../public/slider.jpg";

async function getData() {
  try {
    const res = await fetch("http://localhost:1337/api/header");
    console.log("response", res);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const About = async () => {
  const data = await getData();
  console.log("data", data);

  return (
    <>
      <Header />
      <div className="max-w-1920 m-auto mx-20 ">
        <ul>
          {/* {articles.map((article: any) => (
            <li key={article.id}>{article.attributes.about}</li>
          ))} */}
        </ul>
        <div className="relative w-100">
          <Image
            src={sliderImg}
            width={500}
            height={500}
            alt="Picture of the author"
            className="w-[100%] object-cover"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export { About };

// export async function getStaticProps() {
//   const header = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/headers`);
//   console.log("data", header);
//   return {
//     props: {
//       header: header,
//     },
//   };
// }
