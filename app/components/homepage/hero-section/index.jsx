// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex  items-center justify-between py-8 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid  grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2   lg:order-1 flex flex-col items-start justify-center p-2  pb-10 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-15 mx-5 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
          Unlock Growth with  {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {` Our Senior `}
            <span className=" text-[#16f2b3]">Marketing Expert</span>
            
          </h1>

          <div className="my-10 px-10 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsInstagram  size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsWhatsapp size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center ">
            {/* <Link href="#contact" className="bg-gradient-to-r item-centre to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3  text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium  tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact us</span>
                
              </button>
            </Link> */}

            <Link href="https://calendly.com/noxizfromfuture" className="bg-gradient-to-r mx-4 to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-8 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none  text-center md:text-sm font-medium  tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span className="text-lg">Schedule Consultation</span>
               
              </button>
            </Link>
          </div>

        </div>
        <div className="order-1 pt-5px    relative rounded-lg  bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4  lg:py-8">
          <Image
            src="/yogesh-img2.jpeg"
            width={320}
            height={500}
            alt="Yogesh"
            className="rounded-lg  transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;