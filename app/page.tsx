"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [fdata, setfdata] = useState<any[]>([]);

  async function fetching() {
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL!, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    setfdata(res.data);
    console.log(res.data);
  }

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      {fdata.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Home;
