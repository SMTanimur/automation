"use client"
import Link from "next/link";
import { useState } from "react";
import OurTeamMembers from "~/components/our-team";

export const data = [
  {
    id: "1",
    title: "Perfect Introduction",
    discription:
      "Here’s a prompt to generate a general, unique opening one-liner for a cold email or LinkedIn message, utilizing information from lead’s LinkedIn profile such as their biography and latest post.",

    count: 222222,
    platform:"E-mail",
    user: {
      name: "Andrew Chen",
      imageUrl: "/img.jpeg",
    },
    isHeart: true,
  },
  {
    id: "2",
    title: "Perfect Introduction",
    discription:
      "Here’s a prompt to generate a general, unique opening one-liner for a cold email or LinkedIn message, utilizing information from lead’s LinkedIn profile such as their biography and latest post.",
    count: 222222,
    platform:"Linkedin",
    user: {
      name: "Andrew Chen",
      imageUrl: "/img.jpeg",
    },
    isHeart: true,
  },
  {
    id: "3",
    title: "Perfect Introduction",
    discription:
      "Here’s a prompt to generate a general, unique opening one-liner for a cold email or LinkedIn message, utilizing information from lead’s LinkedIn profile such as their biography and latest post.",
    count: 222222,
    platform:"Linkedin",
    user: {
      name: "Andrew Chen",
      imageUrl: "/img.jpeg",
    },
    isHeart: false,
  },
  {
    id: "4",
    title: "Perfect Introduction",
    discription:
      "Here’s a prompt to generate a general, unique opening one-liner for a cold email or LinkedIn message, utilizing information from lead’s LinkedIn profile such as their biography and latest post.",
    count: 222222,
    platform:"E-mail",
    user: {
      name: "Andrew Chen",
      imageUrl: "/img.jpeg",
    },
    isHeart: false,
  },
];

export default function Home() {
  return (
    <div>
    <div className="min-h-screen flex flex-col container ">
      <div className="py-4"></div>
      <section className="flex flex-col gap-[8px] justify-center items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="max-w-[422px] w-full border border-[#7455EC]/30 py-3 flex flex-col space-y-3 overflow-hidden  rounded-[8px]"
          >
            <div className="relative px-[12px]">
              <div className="flex flex-col space-y-2 max-w-[366px]">
                <h2 className="text-black text-sm font-medium">{item.title}</h2>
                <p className="text-sm font-light">{item.discription}</p>

                <div className="flex pt-1 gap-[7px]">
                  <p className="bg-[#F5F2FF] py-[3px] px-[7px] rounded-[2px] text-[12px] text-[#7455EC]">
                    {item.count} runs
                  </p>
                  <p className="bg-[#CBE9FF] py-[3px] px-[7px] rounded-[2px] text-[#007EBB] text-[12px]">
                    {item.platform}
                  </p>
                </div>
              </div>
              <button
                className={`absolute top-0 right-[12px]`}
              
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill={item.isHeart ? "#7455EC" : "none"}
                  stroke={item.isHeart ? "#7455EC" : "#B19DFF"}
                  xmlns="http://www.w3.org/2000/svg"
                  className=" transition-colors duration-200 hover:stroke-[#B19DFF]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9573 3.21915C8.94954 0.855351 5.59449 0.124836 3.07885 2.28936C0.563201 4.45389 0.209032 8.07284 2.18459 10.6329C3.82713 12.7613 8.79802 17.2504 10.4272 18.7034C10.6094 18.8659 10.7006 18.9472 10.8069 18.9791C10.8996 19.007 11.0012 19.007 11.094 18.9791C11.2004 18.9472 11.2914 18.8659 11.4737 18.7034C13.1029 17.2504 18.0737 12.7613 19.7163 10.6329C21.6919 8.07284 21.3809 4.43112 18.822 2.28936C16.2631 0.147605 12.9651 0.855351 10.9573 3.21915Z"
                    stroke="#B19DFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full border-t border-[#EAEAEA]" />
            <div className="flex items-center justify-between px-[12px]">
              <div className="flex items-center gap-[10px]">
                <img
                  src={item.user.imageUrl}
                  alt={item.user.name}
                  className="w-[23px] h-[23px] rounded-full"
                />
                <h3 className="text-sm text-black leading-5">
                  {item.user.name}
                </h3>
              </div>

              <Link href={"/"} className="text-[#7455EC] text-sm flex gap-[8px]">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1477 3.94322L14.5576 2.35247C14.5053 2.30017 14.4433 2.25869 14.375 2.23038C14.3067 2.20207 14.2335 2.1875 14.1596 2.1875C14.0857 2.1875 14.0125 2.20207 13.9442 2.23038C13.8759 2.25869 13.8139 2.30017 13.7616 2.35247L12.7052 3.40941L15.0914 5.79554L16.1489 4.73916C16.2012 4.68692 16.2427 4.62488 16.271 4.5566C16.2993 4.48831 16.3138 4.41511 16.3138 4.34119C16.3138 4.26727 16.2993 4.19407 16.271 4.12579C16.2427 4.0575 16.2012 3.99546 16.1489 3.94322H16.1477ZM2.64887 13.4652C2.5871 13.5268 2.5405 13.6019 2.51274 13.6846L1.71737 16.0713C1.68431 16.1704 1.67952 16.2768 1.70351 16.3784C1.72751 16.4801 1.77935 16.5731 1.85323 16.647C1.92711 16.7209 2.0201 16.7727 2.12178 16.7967C2.22346 16.8207 2.32982 16.8159 2.42893 16.7828L4.81562 15.9875C4.89831 15.9597 4.97341 15.9131 5.03499 15.8513L14.2954 6.59091L11.9093 4.20479L2.64887 13.4652Z"
                    fill="#7455EC"
                  />
                </svg>
                <span>Edit Prompt</span>
              </Link>
            </div>
          </div>
        ))}
      </section>
     
    </div>
    <section>
        <OurTeamMembers/>
      </section>
    </div>
  );
}
