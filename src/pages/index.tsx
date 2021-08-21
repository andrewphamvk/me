import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
        <section className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold">Welcome!</h1>
          <p className="">
            I&apos;m exploring my interests in Front End technologies after
            getting a taste of React in the beginning of 2021.
          </p>
          <p>
            My main area of expertise is in developing and operating distributed
            enterprise systems and I currently do this on the Fleet Deployment
            Optimization team @ Google. Previously, I worked on the M365 Build
            and Infra team @ Microsoft building the backend infrastructure and
            tooling to support the M365 product teams.
          </p>
          <p>
            Outside work, I like reading (self-help, philosophy, fiction) and
            practicing jiu jitsu (white belt).
          </p>
          <svg
            className="h-6 w-6 text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </section>
      </main>
      <footer className="max-w-md mx-auto">
        <div className="flex content-end justify-between">
          <div className="">Andrew Pham @ {new Date().getFullYear()}</div>
          <div className="text-2xl leading-0 space-x-2">
            <a
              href="https://github.com/andrewphamvk"
              aria-label="Go to my GitHub"
              target="_blank"
              rel="noreferrer"
              className="opacity-70 hover:opacity-100"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/andrewphamvk/"
              aria-label="Go to my LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="opacity-70 hover:opacity-100"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
