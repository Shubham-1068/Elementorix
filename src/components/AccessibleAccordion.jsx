import { useState } from "react";

export default function AccessibleAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces using reusable components.",
    },
    {
      title: "What is Tailwind CSS?",
      content:
        "Tailwind CSS is a utility-first CSS framework for creating modern, responsive designs quickly.",
    },
    {
      title: "What is an Accordion?",
      content:
        "An accordion lets users expand and collapse sections to view or hide related content.",
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `accordion-content-${index}`;
        const buttonId = `accordion-button-${index}`;

        return (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm"
          >
            <h2>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <span>{item.title}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </h2>

            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              className={`transition-all duration-300 ease-in-out ${
                isOpen
                  ? "max-h-40 p-4 opacity-100"
                  : "max-h-0 opacity-0 p-0"
              } overflow-hidden text-gray-600 dark:text-gray-300`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
