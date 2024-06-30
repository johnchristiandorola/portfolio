import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import motorent from '@/images/motorent.png';
import marketplace from '@/images/marketplace.png';
import portfolio from '@/images/portfolio.png';

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto py-20  text-center">
      <div className="max-w-6xl px-5 flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold">Projects.</h1>
        <div className="flex flex-col gap-8">
          <h2>These are the public projects that I have done.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            <div className="rounded-lg border shadow-lg shadow-secondary py-5 px-6 flex flex-col gap-5">
              <div>
                <h1 className="text-left text-xl font-semibold">Motorent</h1>
                <p className="text-left">
                  A front-end website application for motor renting services.
                </p>
              </div>
              <Image
                src={motorent}
                alt="motorent"
                height={300}
                className="border rounded-md"
              ></Image>
              <div className="flex justify-start items-center gap-5">
                <Link href={'https://motorent-phi.vercel.app/'} target="_blank">
                  <Button variant={'default'}>View Live</Button>
                </Link>

                <Link
                  href={'https://github.com/johnchristiandorola/Motor-Rental'}
                  target="_blank"
                >
                  <Button variant={'secondary'}>Source Code</Button>
                </Link>
              </div>
            </div>

            <div className="rounded-lg border shadow-lg shadow-secondary py-5 px-6 flex flex-col gap-5">
              <div>
                <h1 className="text-left text-xl font-semibold">Portfolio</h1>
                <p className="text-left">
                  A front-end website application for my portfolio project.
                </p>
              </div>
              <Image
                src={portfolio}
                alt="motorent"
                height={300}
                className="border rounded-md"
              ></Image>
              <div className="flex justify-start items-center gap-5">
                <Link href={'/'} target="_blank">
                  <Button variant={'default'}>View Live</Button>
                </Link>

                <Link
                  href={'https://github.com/johnchristiandorola/portfolio'}
                  target="_blank"
                >
                  <Button variant={'secondary'}>Source Code</Button>
                </Link>
              </div>
            </div>

            <div className="rounded-lg border shadow-lg shadow-secondary py-5 px-6 flex flex-col gap-5">
              <div>
                <h1 className="text-left text-xl font-semibold">
                  Marketplace Program
                </h1>
                <p className="text-left">
                  A C++ project for Computer Programming I
                </p>
              </div>
              <Image
                src={marketplace}
                alt="motorent"
                height={300}
                className="border rounded-md"
              ></Image>
              <div className="flex justify-start items-center gap-5">
                <Link
                  href={'https://www.youtube.com/watch?v=KtBTGeMiMf8'}
                  target="_blank"
                >
                  <Button variant={'default'}>View Live</Button>
                </Link>

                <Link
                  href={'https://github.com/johnchristiandorola/Marketplace'}
                  target="_blank"
                >
                  <Button variant={'secondary'}>Source Code</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
