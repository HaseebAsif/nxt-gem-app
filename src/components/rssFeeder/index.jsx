import React, { useState, useEffect } from "react";

export default function RssFeader() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getRss();
  });

  const getRss = async (e) => {
    const res = await fetch(`https://cointelegraph.com/rss}`);
    const { contents } = await res.json();
    // const feed = new window.DOMParser().parseFromString(contents, "text/xml");
    // const items = feed.querySelectorAll("item");
    // const feedItems = [...items].map((el) => ({
    //   link: el.querySelector("link").innerHTML,
    //   title: el.querySelector("title").innerHTML,
    //   author: el.querySelector("author").innerHTML,
    // }));
    console.log(contents);
    setItems(feedItems);
  };

  return (
    <div className="App">
      {items.map((item) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <p>{item.author}</p>
            <a href={item.link}>{item.link}</a>
          </div>
        );
      })}
    </div>
  );
}
