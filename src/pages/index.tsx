import {
  faGithub,
  faGoodreads,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Andrew Pham (@andrewphamvk) - Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer with experience in developing and operating distributed enterprise systems. Enjoys keeping up to date with new technologies and trends in software development. Passionate about building a culture of engineering excellence and writing clean, easy to maintain code.
"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="max-w-md mx-auto px-2 text-gray-800 mb-6">
          <h1 className="text-3xl font-bold mb-5 mt-5 text-center text-gray-900">
            Hey, I&apos;m Andrew 👋
          </h1>
          <p className="mb-3">
            I&apos;m exploring my interests in Front End technologies after
            getting a taste of React in the beginning of 2021.
          </p>
          <p className="mb-3">
            My main area of expertise is in developing and operating distributed
            enterprise systems and I currently do this on the Fleet Deployment
            Optimization team @ Google. Previously, I worked on the M365 Build
            and Infra team @ Microsoft building the backend infrastructure and
            tooling to support the M365 product team.
          </p>
          <p>
            Outside of work I like reading (self-help, philosophy, fiction),
            stretching / mobility training and training jiu jitsu.
          </p>
        </section>
      </main>

      <footer className="max-w-lg mx-auto px-2 mt-5 flex flex-col text-gray-800">
        <div className="mx-auto">
          <a
            href="https://github.com/andrewphamvk/me"
            className="hover:underline "
          >
            View Source
          </a>
        </div>
        <div className="flex mx-auto items-baseline space-x-2">
          <div className="">Andrew Pham @ {new Date().getFullYear()}</div>
          <div className="text-2xl leading-0 space-x-2">
            <a
              href="https://github.com/andrewphamvk"
              aria-label="Go to my GitHub"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/andrewphamvk/"
              aria-label="Go to my LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.goodreads.com/andrewphamvk/"
              aria-label="Go to my Goodreads"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faGoodreads} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
