import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "Explore featured web applications and digital products crafted by Creative Frame using React, NextJS, and modern technologies." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
