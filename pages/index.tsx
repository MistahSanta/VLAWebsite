import Head from "next/head";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Le Personal Webpage</title>
      </Head>

      <Welcome />
    </>
  );
}

/*
Made good progression today. Next goal: 
- Add a nav bar 
- Use <img> instead of NextJs because of size formatting
- Add personal project page 
*/
