import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import AccessibleAccordion from "../components/AccessibleAccordion";

function Components() {
  // Copy to clipboard function
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  // Central registry: add a new card entry to showcase a component.
  // Each entry renders inside a uniform "box" so you just need to add the component JSX inside the preview field.

  // HOW TO ADD A NEW COMPONENT CARD:
  // 1) Import your component at the top of this file.
  // 2) Copy the object below, give it a unique id, title, description, contributor, and code.
  // 3) Put your component JSX inside the preview field.
  // 4) Keep previews simple and focused.
  // {
  //     id: 'your-unique-id',
  //     title: 'Your Component Name',
  //     description: 'Short helpful description for beginners.',
  //     contributor: 'Your Name',
  //     code: 'Your component code here...',
  //     preview: (
  //         <YourComponent propA="..." />
  //     )
  // },

  // Note: keep the code in the code and preview fields same.

  const componentCards = [
    {
      id: "button",
      title: "Button",
      description: "Versatile button with variants and sizes.",
      contributor: "Shubham",
      code: `<div className="flex flex-wrap items-center gap-2">
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer" onClick={() => alert('Primary clicked')}>Primary</button>
                    <button className="px-4 py-2 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer" onClick={() => alert('Outline clicked')}>Outline</button>
                    <button className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors cursor-pointer" onClick={() => alert('Small clicked')}>Small</button>
                </div>`,
      preview: (
        <div className="flex flex-wrap items-center gap-2">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
            onClick={() => alert("Primary clicked")}
          >
            Primary
          </button>
          <button
            className="px-4 py-2 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer"
            onClick={() => alert("Outline clicked")}
          >
            Outline
          </button>
          <button
            className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors cursor-pointer"
            onClick={() => alert("Small clicked")}
          >
            Small
          </button>
        </div>
      ),
    },
    {
      id: "card",
      title: "Card",
      description: "Interactive card component with hover effects.",
      contributor: "Elementorix Team",
      code: `<motion.div
                    className="bg-zinc-800 rounded-lg p-4 border border-zinc-700 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <h3 className="text-white font-semibold mb-2">Example Card</h3>
                    <p className="text-zinc-400 text-sm">This is a sample card component with hover animations.</p>
                </motion.div>`,
      preview: (
        <motion.div
          className="bg-zinc-800 rounded-lg p-4 border border-zinc-700 cursor-pointer"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-white font-semibold mb-2">Example Card</h3>
          <p className="text-zinc-400 text-sm">
            This is a sample card component with hover animations.
          </p>
        </motion.div>
      ),
    },
    {
      id: "input",
      title: "Input Field",
      description: "Styled input with focus states and validation.",
      contributor: "Elementorix Team",
      code: `<div className="space-y-3">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>`,
      preview: (
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      ),
    },
    {
      id: "badge",
      title: "Badge",
      description: "Status badges with different variants.",
      contributor: "Elementorix Team",
      code: `<div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-600 text-green-100 text-xs rounded-full">Success</span>
                    <span className="px-2 py-1 bg-yellow-600 text-yellow-100 text-xs rounded-full">Warning</span>
                    <span className="px-2 py-1 bg-red-600 text-red-100 text-xs rounded-full">Error</span>
                    <span className="px-2 py-1 bg-blue-600 text-blue-100 text-xs rounded-full">Info</span>
                </div>`,
      preview: (
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-green-600 text-green-100 text-xs rounded-full">
            Success
          </span>
          <span className="px-2 py-1 bg-yellow-600 text-yellow-100 text-xs rounded-full">
            Warning
          </span>
          <span className="px-2 py-1 bg-red-600 text-red-100 text-xs rounded-full">
            Error
          </span>
          <span className="px-2 py-1 bg-blue-600 text-blue-100 text-xs rounded-full">
            Info
          </span>
        </div>
      ),
    },
    {
      id: "avatar",
      title: "Avatar",
      description: "User avatar with fallback initials.",
      contributor: "Elementorix Team",
      code: `<div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                        JD
                    </div>
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                        AB
                    </div>
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        SM
                    </div>
                </div>`,
      preview: (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
            AB
          </div>
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            SM
          </div>
        </div>
      ),
    },
    {
      id: "toggle-switch",
      title: "Toggle Switch",
      description:
        "A digital on/off control to quickly change the state of a single setting or feature",
      contributor: "Surya Prakash Mallah",
      code: `<div className="flex gap-6 items-center justify-center p-4 rounded-lg">
          <label className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500">
            <input
              className="peer sr-only"
              id="AcceptConditions"
              type="checkbox"
            />
            <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
          </label>
          <label
            className="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
            for="switch"
          >
            <input className="peer sr-only" id="switch" type="checkbox" />

            <span className="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>

            <span className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&amp;_>_*]:scale-0">
              <span className="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition"></span>
            </span>
          </label>
        </div>`,
      preview: (
        <div className="flex gap-6 items-center justify-center p-4 rounded-lg">
          <label className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500">
            <input
              className="peer sr-only"
              id="AcceptConditions"
              type="checkbox"
            />
            <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"></span>
          </label>
          <label
            className="relative h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
            for="switch"
          >
            <input className="peer sr-only" id="switch" type="checkbox" />

            <span className="absolute inset-0 m-auto h-2 rounded-full bg-stone-400"></span>

            <span className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&amp;_>_*]:scale-0">
              <span className="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition"></span>
            </span>
          </label>
        </div>
      ),
    },
    {
      id: "loader",
      title: "Loader",
      description:
        "Circle loader, DNA loader, and Premium Infinity loader combined.",
      contributor: "Ashutosh Kesarwani",
      code: `<div className="flex gap-6 items-center justify-center bg-gray-900 p-4 rounded-lg">
      
      {/* Circle Loader */}
      <svg
        className="animate-spin h-8 w-8 text-indigo-500"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>

      {/* DNA Loader */}
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        aria-label="dna-loader"
      >
        <circle cx="15" cy="15" r="5" fill="#4fa94d">
          <animate
            attributeName="cy"
            values="15;45;15"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="45" cy="45" r="5" fill="#3fc8ef">
          <animate
            attributeName="cy"
            values="45;15;45"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <line
          x1="15"
          y1="15"
          x2="45"
          y2="45"
          stroke="#ccc"
          strokeWidth="2"
        />
        <line
          x1="45"
          y1="15"
          x2="15"
          y2="45"
          stroke="#ccc"
          strokeWidth="2"
        />
      </svg>

      {/* Premium Infinity Spin Loader */}
      <svg
        width="80"
        height="40"
        viewBox="0 0 80 40"
        aria-label="infinity-spin-loading"
      >
        <defs>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4fa94d">
              <animate
                attributeName="stop-color"
                values="#4fa94d;#3fc8ef;#4fa94d"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#3fc8ef">
              <animate
                attributeName="stop-color"
                values="#3fc8ef;#4fa94d;#3fc8ef"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        {/* Rotating group */}
        <g>
          {/* Faded Infinity Outline */}
          <path
            d="M10,20 C10,10 30,10 40,20 C50,30 70,30 70,20 C70,10 50,10 40,20 C30,30 10,30 10,20 Z"
            fill="none"
            stroke="#e6f4ea"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Gradient Infinity Path */}
          <path
            d="M10,20 C10,10 30,10 40,20 C50,30 70,30 70,20 C70,10 50,10 40,20 C30,30 10,30 10,20 Z"
            fill="none"
            stroke="url(#infinityGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>`,
      preview: (
        <div className="flex gap-6 items-center justify-center bg-gray-900 p-4 rounded-lg">
          {/* Circle Loader */}
          <svg
            className="animate-spin h-8 w-8 text-indigo-500"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>

          {/* DNA Loader */}
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            aria-label="dna-loader"
          >
            <circle cx="15" cy="15" r="5" fill="#4fa94d">
              <animate
                attributeName="cy"
                values="15;45;15"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="45" cy="45" r="5" fill="#3fc8ef">
              <animate
                attributeName="cy"
                values="45;15;45"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
            <line
              x1="15"
              y1="15"
              x2="45"
              y2="45"
              stroke="#ccc"
              strokeWidth="2"
            />
            <line
              x1="45"
              y1="15"
              x2="15"
              y2="45"
              stroke="#ccc"
              strokeWidth="2"
            />
          </svg>

          {/* Premium Infinity Spin Loader */}
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            aria-label="infinity-spin-loading"
          >
            <defs>
              <linearGradient
                id="infinityGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#4fa94d">
                  <animate
                    attributeName="stop-color"
                    values="#4fa94d;#3fc8ef;#4fa94d"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#3fc8ef">
                  <animate
                    attributeName="stop-color"
                    values="#3fc8ef;#4fa94d;#3fc8ef"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>

            {/* Rotating group */}
            <g>
              {/* Faded Infinity Outline */}
              <path
                d="M10,20 C10,10 30,10 40,20 C50,30 70,30 70,20 C70,10 50,10 40,20 C30,30 10,30 10,20 Z"
                fill="none"
                stroke="#e6f4ea"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Gradient Infinity Path */}
              <path
                d="M10,20 C10,10 30,10 40,20 C50,30 70,30 70,20 C70,10 50,10 40,20 C30,30 10,30 10,20 Z"
                fill="none"
                stroke="url(#infinityGradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      ),
    },
    {
      id: "accessible-accordion",
      title: "Accessible Accordion",
      description:
        "A lightweight and accessible accordion component for displaying collapsible content.",
      contributor: "Tilak Jain",
      code: `
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
        const contentId = \`accordion-content-\${index}\`;
        const buttonId = \`accordion-button-\${index}\`;

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
                  className={\`w-5 h-5 transform transition-transform duration-300 \${isOpen ? "rotate-180" : "rotate-0"}\`}
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
              className={\`transition-all duration-300 ease-in-out \${isOpen ? "max-h-40 p-4 opacity-100" : "max-h-0 opacity-0 p-0"} overflow-hidden text-gray-600 dark:text-gray-300\`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
`,
      preview: <AccessibleAccordion />,
    },
  ];

  return (
    <>
      <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">
            React Basic Component Library
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            Add your component by appending a new card entry to the registry
            below.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentCards.map(
            ({ id, title, description, contributor, code, preview }) => (
              <article
                key={id}
                className="rounded-lg border border-gray-800 bg-neutral-900 shadow-sm p-4 hover:border-gray-700 transition-colors"
              >
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-medium text-white">{title}</h2>
                    <button
                      onClick={() => copyToClipboard(code)}
                      className="flex cursor-pointer items-center gap-1 px-2 py-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded transition-colors"
                      title="Copy component code"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Copy
                    </button>
                  </div>
                  {description ? (
                    <p className="text-sm text-gray-300 mb-2">{description}</p>
                  ) : null}
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>by</span>
                    <span className="font-medium text-indigo-400">
                      {contributor}
                    </span>
                  </div>
                </div>
                <div className="rounded-md bg-neutral-800 p-4">{preview}</div>
              </article>
            )
          )}
        </section>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
    </>
  );
}

export default Components;
