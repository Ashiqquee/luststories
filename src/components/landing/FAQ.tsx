"use client";

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-bold">{question}</h3>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-white/70">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What type of content is available on Lust Stories?",
      answer: "Lust Stories offers a curated collection of adult-oriented fiction that focuses on sensuality, passion, and desire. All our content is tastefully crafted to appeal to sophisticated readers who appreciate quality storytelling alongside the sensual themes."
    },
    {
      question: "Is my reading activity private?",
      answer: "Absolutely. We take privacy very seriously. Your reading history, preferences, and account details are kept completely confidential. We employ industry-leading encryption and privacy measures to ensure your experience remains personal and secure."
    },
    {
      question: "Can I switch between subscription plans?",
      answer: "Yes, you can easily upgrade or downgrade your subscription at any time. Changes to your plan will take effect at the start of your next billing cycle. There are no penalties or hidden fees for changing your subscription."
    },
    {
      question: "How often is new content added?",
      answer: "We add new stories daily across various categories. Premium and Standard subscribers get access to new releases immediately, while Free users can access selected new content each month."
    },
    {
      question: "Are there mobile apps available?",
      answer: "Yes, Lust Stories is available as a mobile app for both iOS and Android devices. The app offers additional features like offline reading, personalized notifications, and an immersive reading mode."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay. All transactions are processed securely, and no sensitive payment information is stored on our servers."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time through your account settings. After cancellation, you'll continue to have access to your subscription benefits until the end of your current billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 7-day money-back guarantee for new subscribers. If you're not satisfied with the service within your first week, contact our support team, and we'll process a full refund."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Frequently <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about Lust Stories. If you need further assistance, our support team is always here to help.
          </p>
        </div>
        
        <div className="bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70">
            Still have questions? Contact our support team at
          </p>
          <a href="mailto:support@luststories.com" className="text-pink-400 hover:text-pink-300 font-bold">
            support@luststories.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 