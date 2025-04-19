import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>
    </main>
  );
};

export default Home;
