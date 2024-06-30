import React from 'react';

const About = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto py-20 bg-secondary text-center">
      <div className="max-w-6xl px-5 lg:px-16 flex flex-col gap-5">
        <h1 className="text-5xl font-extrabold">About me.</h1>
        <div className="font-light  ">
          <p>
            I am a first-year student pursuing a Bachelor of Science in Computer
            Science at Cavite State University Rosario CCAT Campus. My journey
            in programming began in high school back in 2018, giving me about
            five years of experience. However, my progress was intermittent due
            to the pandemic and the responsibilities I had to fulfill for my
            family.
            <br />
            This year, I have recommitted myself to my studies and am
            consistently honing my skills. With renewed focus and dedication, I
            am now ready to take on projects as a Front-End Developer and an
            aspiring Android Developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
