import React from "react";
import projectsList from "./assets/data/projectsList.json";
import sections from "./assets/data/sections.json";

import Background from "./components/Background";
import {
  CardCV,
  CardDunkirk,
  CardGitHub,
  CardLille,
  CardMail,
  CardProject,
  CardSection,
  CardSkills,
} from "./components/Components";

const App = () => {
  return (
    <>
      <Background />
      <div className="mb-16 mt-4 flex items-center justify-center rounded-xl bg-white/10 p-8 text-center shadow-xl backdrop-blur-xl">
        <h1 className="rounded-lg text-3xl font-bold md:text-5xl">
          Portfolio Dylan Bryckaert
        </h1>
      </div>
      <div className="grid max-w-7xl grid-flow-row auto-rows-[150px] grid-cols-6 gap-4 md:gap-8">
        <CardSection
          title={sections[0].heading}
          image={sections[0].image}
          content={sections[0].content}
        />
        <CardLille />
        <CardMail />
        <CardGitHub />
        <CardDunkirk />
        <CardCV />
        <CardSection
          title={sections[1].heading}
          image={sections[1].image}
          content={sections[1].content}
        />
        <CardSkills />
        {projectsList.map((project) => (
          <React.Fragment key={project.id}>
            <CardProject project={project} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
export default App;