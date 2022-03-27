import Head from "next/head";
import styles from "./index.module.sass";
import { useEffect } from "react";
import AOS from "aos";
import getAllData from "../utils/fetchAllData";
import { useTheme } from "next-themes";
import Script from "next/script";

// COMPONENT
import Navbar from "../components/navbar";
import SocialLists from "../components/social-lists";
import Hero from "../components/hero";
import About from "../components/about";
import Education from "../components/education";
import Portfolio from "../components/portfolio";
import ModeSettings from "../components/mode-settings";
import { useLayoutEffect } from "react";

export default function App(props) {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    typeof window !== "undefined" &&
      new kursor({
        type: 4,
        color: "#fff",
        removeDefaultCursor: true,
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 3000 });
    window.addEventListener("load", AOS.refresh);
    window.addEventListener("scroll", () => {
      AOS.refresh();
    });
  }, []);

  return (
    <>
      {/* Website Head Paet And Meta Tags Container */}
      <Head>
        <meta charset="utf-8" />
        <title>Moustapha&#39;s Portfolio</title>
        <meta
          name="theme-color"
          content={theme === "dark" ? "#111119" : "#fff"}
        ></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I'm Moustapha Mahmoud, A Passionate Junior FullStack (MERN) Developer. Interested in ReactJs, NextJs, NodeJs and MongoDB."
        />
        <meta
          name="keyword"
          content="moustapha.me, moustapha, mahmoud, mmm066550, MERN, fullstack, nextjs, reactjs, nodejs, expressjs, mongodb, portfolio, javascript, developer"
        ></meta>
        <meta
          property="og:title"
          content="Moustapha Mahmoud | MERN Stack Developer • NextJs | NodeJs | ExpressJs | MongoDB"
        />
        <meta
          property="og:description"
          content="JavaScript, NextJs, NodeJs, ExpressJs, MongoDB"
        />
        <meta property="og:image" content="/me.jpg" />
        <meta property="og:url" content="https://moustapha.me" />
        <meta property="og:type" content="website" />
        <Script src="https://unpkg.com/kursor"></Script>
      </Head>
      {/* Actual Page Components Wrapper Area */}
      <SocialLists data={props.links} />
      <ModeSettings />
      <main id="app-main" className={styles.container}>
        <div className="row g-0">
          <div className="offset-1 col-10">
            <Navbar data={props.sections} />
            <Hero data={props.info} />
            <About data={props.about} />
            <Education data={props.education} />
            <Portfolio data={props.projects} />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = getAllData();
  return {
    props: data,
  };
}
