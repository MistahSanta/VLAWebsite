import Head from "next/head";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      <Head>
        <title>VLA</title>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Welcome to the Vietnamese Language Association at UTD. We teach Vietnamese!"
        />
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
