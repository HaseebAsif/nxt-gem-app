import React, { useEffect, useState } from "react";

const SubscribeNewsLetter = () => {
  return (
    <>
      <input
        type="text"
        className="rounded-md my-3 text-black p-1"
        placeholder="Email Address"
      />
      <button className="bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] rounded-md text-black p-1 uppercase">
        Subscribe to our newsletter
      </button>
    </>
  );
};

export default SubscribeNewsLetter;
