"use client";
import Image from "next/image";
import SingleFAQ from "@/components/SingleFAQ";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      id: 2,
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      id: 3,
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      id: 4,
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  const handleToggleFAQ = (clickedId: number) => {
    setOpenId((prevOpenId) => (prevOpenId === clickedId ? null : clickedId));
  };

  return (
    <>
      <div className="bg-[url('/background-pattern-desktop.svg')] bg-no-repeat bg-cover h-80"></div>
      <div
        className="bg-white absolute w-[90%] md:w-[38rem]   sm:top-40 top-[2.5%] left-[50%] translate-x-[-50%]
      p-10 rounded-xl  md:rounded-3xl "
      >
        <div className="flex gap-4 mb">
          <Image
            className="img"
            src="/icon-star.svg"
            alt="Star icon"
            width="30"
            height="30"
          />
          <h1 className="text-lg font-bold">FAQs</h1>
        </div>
        {faqs.map((faq) => (
          <SingleFAQ
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            toggleFAQ={handleToggleFAQ}
          />
        ))}
      </div>
    </>
  );
}
