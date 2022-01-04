import React, { useEffect, useState } from "react";

const SubscribeNewsLetter = () => {
  // const [isSubscribed, setIsSubscribed] = useState();
  // const mutations = [
  //   {
  //     createOrReplace: {
  //       _type: "string",
  //       title: "John Appleseed",
  //       name: "name",
  //     },
  //   },
  //   {
  //     createOrReplace: {
  //       _type: "string",
  //       name: "Carrie Anderton",
  //       title: "name",
  //     },
  //   },
  // ];
  // async function PushData(mutationsProp) {
  //   const url = `https://cqnczxva.api.sanity.io/v1/data/mutate/author`;
  //   const headers = {
  //     method: "post",
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
  //     },
  //     body: JSON.stringify(mutationsProp),
  //   };

  //   const result = await fetch(url, headers).then((res) => res.json());
  //   console.log("Hello");
  //   console.log(result);
  //   return result;
  // }

  return (
    <>
      <input
        type="text"
        className="rounded-md my-3 text-black p-1"
        placeholder="Email Address"
      />
      <button
        // onClick={() => PushData(mutations)}
        className="bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] rounded-md text-black p-1 uppercase"
      >
        Subscribe to our newsletter
      </button>
    </>
  );
};

export default SubscribeNewsLetter;
