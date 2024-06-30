'use client';

import React, { useState } from 'react';
import { ModeToggle } from './ToggleMode';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Nav = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const handleNav = () => {
    setmenuOpen(!menuOpen);
  };
  return (
    <div className="flex flex-col items-center border-b border-secondary-foreground mb-5 py-5 px-7 bg-secondary fixed w-full bg-opacity-10 backdrop-blur-sm shadow-sm">
      <div className="flex justify-between items-center max-w-7xl w-full">
        <div>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:bg-none hover:border-none p-0 rounded-none "
          >
            <h1 className="font-extrabold text-xl">JCDev</h1>
          </Link>
        </div>

        <div className="flex gap-4 ">
          <div className=" gap-5 items-center hidden lg:flex">
            <Button variant="link">
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </Button>
            <Button variant="link">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </Button>
            <Button variant="link">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
            </Button>
            <Button variant="link">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Skills
              </Link>
            </Button>
            <Button variant="link">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </Button>
          </div>
          <div>
            <ModeToggle />
          </div>

          <div className="lg:hidden">
            <Button onClick={handleNav} variant={'secondary'}>
              <Menu />
            </Button>
          </div>

          <div
            className={
              menuOpen
                ? 'fixed w-[65%] h-screen sm:hidden bg-secondary bg-opacity-80 backdrop-blur-sm top-0 right-0 ease-in duration-500 py-5 px-6'
                : 'fixed w-[65%] h-screen sm:hidden bg-secondary bg-opacity-80 backdrop-blur-sm top-0 right-[-100%] ease-in duration-500 py-4 px-6'
            }
          >
            <div className="w-full flex flex-col items-center justify-end">
              <div className="flex justify-end w-full">
                <Button onClick={handleNav} variant={'ghost'}>
                  <X />
                </Button>
              </div>
              <div className="flex w-full mt-5">
                <div className="flex flex-col justify-end space-y-5 w-full">
                  <Button variant="default">
                    <Link
                      activeClass="active"
                      to="hero"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Home
                    </Link>
                  </Button>
                  <Button variant="default">
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      About
                    </Link>
                  </Button>
                  <Button variant="default">
                    <Link
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Projects
                    </Link>
                  </Button>
                  <Button variant="default">
                    <Link
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Skills
                    </Link>
                  </Button>
                  <Button variant="default">
                    <Link
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
