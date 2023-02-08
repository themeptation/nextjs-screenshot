import type { NextPage } from "next";
import Head from "next/head";
import { CopyBlock, dracula } from "react-code-blocks";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Nextjs Screenshot API - Themeptation</title>
        <meta
          name="description"
          content="Easily capture a screenshot of any website with our fast and reliable tool. Try it now and get your screenshot in seconds."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative py-12 bg-white sm:py-16 lg:py-20">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 lg:text-7xl">
              Nextjs Screenshot API{" "}
              <span className="block py-2 bg-clip-text text-transparent bg-gradient-to-r from-[#44BCFF] via-[#7cf6a9] to-[#FF675E]">
                Easy
              </span>
            </h1>
            <p className="max-w-5xl mx-auto mt-6 text-base font-normal leading-7 text-gray-500">
              Simply copy and paste the code below into your browser, change the
              URL parameter to the website you want a screenshot of, and voila!
              You'll have a screenshot in no time. Say goodbye to complicated
              screenshot processes and get quick and easy results.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto my-12">
          <CopyBlock
            text={`${process.env.NEXT_PUBLIC_APP_URL}/api/screenshot?url=https://themeptation.net`}
            language="javascript"
            showLineNumbers="true"
            wrapLines
            theme={dracula}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
