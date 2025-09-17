"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "What can I use Sintra for?",
    answer:
      "Sintra provides AI-powered solutions for marketing, business automation, and customer support. It helps streamline operations and enhance your business overall efficiency.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, we offer a 30-day money-back guarantee on all our paid plans. If you are not satisfied, you can request a full refund within the first 30 days.",
  },
  {
    question: "Can I invite my team to use Sintra?",
    answer:
      "Absolutely. All paid plans allow you to invite and manage multiple team members, giving your whole organization access to Sintra's powerful tools.",
  },
  {
    question: "Does Sintra have an affiliate program?",
    answer:
      "Yes, we have a generous affiliate program. You can sign up on our 'Partners' page to start earning commissions for referring new customers to Sintra.",
  },
  {
    question: "Are there tutorials or guides to help me use Sintra?",
    answer:
      "We have an extensive library of tutorials, video guides, and documentation available in our help center to ensure you get the most out of Sintra.",
  },
  {
    question: "Can Sintra integrate with other software I use?",
    answer:
      "Sintra is designed for flexibility and offers native integrations with popular platforms like Slack, Salesforce, and Zapier, plus an open API for custom connections.",
  },
];

export default function FaqSection() {
  // ✅ Explicit type for state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // ✅ Explicit type for index
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-white md:py-16 py-10 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="md:text-5xl text-3xl md:leading-15 leading-10 ">
            Questions?
            <br/> Lets clear things up.
          </h2>
          <p className="text-[#A0A0A0] w-full max-w-lg">
            Yes, we understand—AI-powered solutions, business automation tools,
            AI for marketing, AI for customer support... a lot of big words can
            get confusing.
          </p>
          <p className="text-[#A0A0A0] w-full max-w-lg">
            Were here to make it clear—check out our FAQs, and if you still
            feel the need to ask, AI questions, <b>Cassie</b> is always ready to
            answer.
          </p>
        </div>

        <div className="divide-y divide-[#FFFFFF4D]">
          {faqData.map((item, index: number) => (
            <div key={index}>
              <button
                className="w-full text-left py-6 flex justify-between items-center transition-colors duration-200 hover:text-gray-300"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-header-${index}`}
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="pb-4 text-base text-white/60 pr-10">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
