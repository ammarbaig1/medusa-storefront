async function getData() {
  const res = await fetch("http://localhost:1337/api/headers", {
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

export default async function Header() {
  const data = await getData();
  const home = data.data.map((item: any, index: number) => (
    <li key={index}>{item.attributes.home}</li>
  ));

  const about = data.data.map((item: any, index: number) => (
    <li key={index}>{item.attributes.about}</li>
  ));
  //   const filter = data.data.forEach((item: any) => {
  //     Object.entries(item.attributes).forEach(([key, value]) => {
  //       console.log();
  //     });
  //   });

  return (
    <>
      <div className="px-10 py-4 bg-gray-500">
        <ul className="flex space-x-4">
          <li>{home}</li>
          <li>{about}</li>
        </ul>
      </div>
    </>
  );
}
