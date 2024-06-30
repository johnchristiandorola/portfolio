import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto py-20 text-center bg-secondary">
      <div className="max-w-6xl px-5 flex flex-col gap-10 w-full">
        <h1 className="text-5xl font-extrabold">Skills.</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              className="h-10"
            />
            <p>HTML</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              className="h-10"
            />

            <p>CSS</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              className="h-10"
            />

            <p>Javascript</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              className="h-10"
            />

            <p>NextJS</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              className="h-10"
            />

            <p>ReactJS</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
              className="h-10"
            />

            <p>npm</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
              className="h-10"
            />

            <p>Flutter</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
              className="h-10"
            />

            <p>Firebase</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
              className="h-10"
            />
            <p>C++</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              className="h-10"
            />
            <p>Java </p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
              className="h-10"
            />
            <p>Vercel</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              className="h-10"
            />
            <p>Github</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              className="h-10"
            />
            <p>Git</p>
          </div>

          <div className="border-secondary-foreground rounded border shadow-secondary-foreground p-3 flex items-center justify-between px-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              className="h-10"
            />
            <p>Typescript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
