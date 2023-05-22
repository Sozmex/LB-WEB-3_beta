import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import { useLocation } from "@reach/router";

import Layouthome from "../components/layouthome";
import Hero from "../components/hero";
import Metrics from "../components/metrics";
import Services from "../components/services";
import Services1 from "../components/services1";
import Awards from "../components/awards";
import About from "../components/about";
import Works from "../components/works";
import SectionBreak from "../components/SectionBreak";

const IndexPage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollTarget;
    if (scrollTarget) {
      scroller.scrollTo(scrollTarget.substring(1), {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location.state]);

  return (
    <Layouthome>
      <Hero />
      <Awards />
      <About />
      <Metrics />
      <SectionBreak />
      <Services />
      <SectionBreak />
      <Works />
      <SectionBreak />
      <Services1 />
      <div className="bg-neutral-50" />
    </Layouthome>
  );
};

export default IndexPage;
