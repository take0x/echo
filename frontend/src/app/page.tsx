"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8080")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <main>
      <h1>Next.js + Echo</h1>
      <p>{message}</p>
    </main>
  );
}
