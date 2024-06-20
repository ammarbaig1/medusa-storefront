async function getData() {
  const res = await fetch("http://localhost:1337/api/footers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Footer() {
  const data = await getData();
  const title = data.data.map((item: any, index: number) => (
    <p key={index}>{item.attributes.title}</p>
  ));

  const description = data.data.map((item: any, index: number) => (
    <p key={index}>{item.attributes.description}</p>
  ));
  const listone = data.data.map((item: any, index: number) => (
    <p key={index}>{item.attributes.list_one}</p>
  ));
  const listtwo = data.data.map((item: any, index: number) => (
    <p key={index}>{item.attributes.list_two}</p>
  ));
  const listthree = data.data.map((item: any, index: number) => (
    <p key={index}>{item.attributes.list_three}</p>
  ));
  return (
    <>
      <div>
        <div className="flex justify-between bg-gray-500 px-10 py-10">
          <div className="w-84">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <div className="list-none">
            <li>{listone}</li>
            <li>{listtwo}</li>
            <li>{listthree}</li>
          </div>
        </div>
      </div>
    </>
  );
}

// import {
//     Key,
//     ReactElement,
//     JSXElementConstructor,
//     ReactNode,
//     ReactPortal,
//     AwaitedReactNode,
//   } from "react";

// const Footer = ({ footers, error }) => {
//   if (error) {
//     return <div>An error occured: {error.message}</div>;
//   }
//   return (
//     <ul>
//       {footers.data.map(
//         (restaurant: {
//           title: Key | null | undefined;
//           id: Key | null | undefined;
//           attributes: {};
//         }) => (
//           <li key={restaurant.title}>{restaurant.attributes.description}</li>
//         )
//       )}
//     </ul>
//   );
// };
// Footer.getInitialProps = async (ctx: any) => {
//   // Parses the JSON returned by a network request
//   const parseJSON = (resp: { json: () => any }) =>
//     resp.json ? resp.json() : resp;
//   // Checks if a network request came back fine, and throws an error if not
//   const checkStatus = (resp: { status: number }) => {
//     if (resp.status >= 200 && resp.status < 300) {
//       return resp;
//     }

//     return parseJSON(resp).then((resp: any) => {
//       throw resp;
//     });
//   };

//   const headers = {
//     "Content-Type": "application/json",
//   };

//   const restaurants = await fetch("http://localhost:1337/api/footers", {
//     method: "GET",
//     headers,
//   });
//   if (!restaurants.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return restaurants.json();
// };

// export { Footer };
