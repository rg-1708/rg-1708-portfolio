"use client";
import Script from "next/script";
import { useEffect } from "react";
import gsapMainUrl from "../libs/gsap/gsap.min.js";
import gsapScrollTriggerUrl from "../libs/gsap/ScrollTrigger.min.js";
import gsapScrollSmootherUrl from "../libs/gsap/ScrollSmoother.min.js";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    ScrollSmoother.create({
      wrapper: ".wrapper",
      content: ".content",
      smooth: 1.2,
    });
  }, []);
  return (
    <>
      <Script src={gsapMainUrl} onLoad={() => {}} />
      <Script src={gsapScrollTriggerUrl} onLoad={() => {}} />
      <Script src={gsapScrollSmootherUrl} onLoad={() => {}} />

      <div className="wrapper">
        <div className="content">
          <header className="hero-section">
            <img
              data-speed=".6"
              className="hero"
              src="img/hero.png"
              alt="Alt"
            />
            <div className="container">
              <div data-speed=".75" className="main-header">
                <h1 className="main-title">creative scroll</h1>
              </div>
            </div>
          </header>

          <div className="portfolio">
            <div className="container">
              <main className="gallery">
                <div data-speed=".9" className="gallery__left">
                  <img
                    className="gallery__item"
                    src="img/work/1.jpg"
                    alt="Alt"
                  />
                  <img
                    className="gallery__item"
                    src="img/work/2.jpg"
                    alt="Alt"
                  />

                  <div className="text-block gallery__item">
                    <h2 className="text-block__h">
                      Creative floating scroll with amazing parallax effect
                    </h2>
                    <p className="text-block__p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor amount scrolling.
                    </p>
                  </div>

                  <img
                    className="gallery__item"
                    src="img/work/6.jpg"
                    alt="Alt"
                  />
                </div>

                <div data-speed="1.1" className="gallery__right">
                  <div className="text-block gallery__item">
                    <h2 className="text-block__h">
                      Creative floating scroll with amazing parallax effect
                    </h2>
                    <p className="text-block__p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor amount scrolling.
                    </p>
                  </div>

                  <img
                    className="gallery__item"
                    src="img/work/4.jpg"
                    alt="Alt"
                  />
                  <img
                    className="gallery__item"
                    src="img/work/5.jpg"
                    alt="Alt"
                  />
                  <img
                    className="gallery__item"
                    src="img/work/3.jpg"
                    alt="Alt"
                  />
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
