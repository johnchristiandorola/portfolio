import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto py-20 text-center">
      <div className="max-w-6xl px-5 flex flex-col gap-10">
        <h1 className="text-5xl font-extrabold">Contact Me.</h1>
        <div>
          <p>Contact me with.</p>

          <div className="mt-5 flex flex-col lg:flex-row gap-5 ">
            <div className="flex items-center justify-between rounded border gap-5 p-3">
              <Mail />
              <Link href="https://mail.google.com/" target="_blank">
                dorolajohnchristian@gmail.com
              </Link>
            </div>

            <div className="flex items-center justify-between rounded border gap-5 p-3">
              <Linkedin />
              <Link
                href="https://www.linkedin.com/in/johnchristiandorola/"
                target="_blank"
              >
                johnchristiandorola
              </Link>
            </div>

            <div className="flex items-center justify-between rounded border gap-5 p-3">
              <Github />
              <Link
                href="https://github.com/johnchristiandorola"
                target="_blank"
              >
                johnchristiandorola
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
