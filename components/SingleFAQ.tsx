"use client";
import Image from "next/image";

function SingleFAQ({
  id,
  question,
  answer,
  isOpen,
  toggleFAQ,
}: {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  toggleFAQ: Function;
}) {
  const handleClick = () => {
    toggleFAQ(id);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleFAQ(id);
    }
  };

  const handleNavigation = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextId = e.key === "ArrowUp" ? id - 1 : id + 1;
      const nextElement = document.getElementById(nextId.toString());
      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  return (
    <div
      id={id.toString()}
      className="border-b"
      onKeyDown={(e) => {
        handleKeyDown(e);
        handleNavigation(e);
      }}
      tabIndex={0}
    >
      <div tabIndex={-1} className="flex justify-between items-center gap-2">
        <h2
          className="text-base font-bold tracking-wide py-6"
          id={`panel${id}-title`}
          tabIndex={-1}
        >
          {question}
        </h2>

        <Image
          className="img hover:opacity-75 active:opacity-100 transition-opacity"
          src={isOpen ? "/icon-minus.svg" : "/icon-plus.svg"}
          alt={isOpen ? "Minus icon" : "Plus icon"}
          width={25}
          height={25}
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-controls={`panel${id}-content`}
        />
      </div>

      <div
        className="answer"
        role="region"
        aria-labelledby={`panel${id}-content`}
        aria-hidden={!isOpen}
      >
        <div>
          <p className="text-base mb-6">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleFAQ;
