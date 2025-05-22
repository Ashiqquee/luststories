"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface PlanFeature {
  title: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  ctaText: string;
  storiesLimit: string;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  ctaText,
  storiesLimit,
}) => {
  return (
    <div className={`relative rounded-2xl ${isPopular ? 'bg-gradient-to-b from-dark-800 to-dark-900 border-2 border-pink-500' : 'bg-dark-800/50 border border-white/10'} overflow-hidden`}>
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center text-sm font-bold py-1">
          Most Popular
        </div>
      )}
      
      <div className={`p-8 ${isPopular ? 'pt-12' : 'pt-8'}`}>
        <h3 className="text-2xl font-bold font-heading">{name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Free' && <span className="ml-1 text-white/60">/month</span>}
        </div>
        
        <p className="mt-2 text-white/70">{description}</p>
        
        <div className="mt-6 py-4 border-t border-white/10">
          <div className="flex items-center gap-2 font-heading font-bold text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span>{storiesLimit}</span>
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              {feature.included ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/30 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              <span className={`ml-3 text-sm ${feature.included ? 'text-white/80' : 'text-white/40'}`}>
                {feature.title}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <Link 
            href="/signup" 
            className={`w-full block text-center py-3 px-6 rounded-lg font-bold ${
              isPopular ? 'btn-primary' : 'bg-white/10 hover:bg-white/15 text-white transition-colors duration-300'
            }`}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  
  const plans = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for casual readers exploring our collection.",
      storiesLimit: "3 stories/month",
      features: [
        { title: "Access to free stories", included: true },
        { title: "Basic reading features", included: true },
        { title: "Mobile reading", included: true },
        { title: "Personalized recommendations", included: false },
        { title: "Ad-free experience", included: false },
        { title: "Exclusive content", included: false },
        { title: "Audio versions", included: false },
        { title: "Download for offline", included: false },
      ],
      ctaText: "Start Free",
      isPopular: false,
    },
    {
      name: "Standard",
      price: "$10",
      description: "Our most popular plan for dedicated readers.",
      storiesLimit: "30 stories/month",
      features: [
        { title: "Access to premium stories", included: true },
        { title: "Enhanced reading features", included: true },
        { title: "Mobile reading", included: true },
        { title: "Personalized recommendations", included: true },
        { title: "Ad-free experience", included: true },
        { title: "Exclusive content", included: true },
        { title: "Audio versions", included: false },
        { title: "Download for offline", included: false },
      ],
      ctaText: "Get Started",
      isPopular: true,
    },
    {
      name: "Premium",
      price: "$20",
      description: "Ultimate experience for the most passionate readers.",
      storiesLimit: "Unlimited stories",
      features: [
        { title: "Unlimited access to all stories", included: true },
        { title: "All reading features", included: true },
        { title: "Mobile reading", included: true },
        { title: "Advanced personalized recommendations", included: true },
        { title: "Ad-free experience", included: true },
        { title: "Exclusive & early access content", included: true },
        { title: "Audio versions", included: true },
        { title: "Download for offline", included: true },
      ],
      ctaText: "Get Premium",
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding relative">
      <div className="absolute inset-0 max-w-7xl mx-auto h-3/4 my-auto bg-gradient-to-b from-pink-500/5 to-purple-600/5 rounded-3xl blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Select the subscription that best suits your reading appetite. Cancel or change plans anytime.
          </p>
          
          <div className="mt-8 inline-flex items-center p-1 rounded-lg bg-dark-800/80 border border-white/10">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`py-2 px-4 rounded-lg text-sm font-bold transition-all duration-300 ${
                billingPeriod === 'monthly' 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`py-2 px-4 rounded-lg text-sm font-bold transition-all duration-300 relative ${
                billingPeriod === 'yearly' 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Yearly Billing
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={index}
              name={plan.name}
              price={billingPeriod === 'yearly' && plan.price !== 'Free' 
                ? `$${parseFloat(plan.price.replace('$', '')) * 0.8 * 12}` 
                : plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              ctaText={plan.ctaText}
              storiesLimit={plan.storiesLimit}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            All plans include a 7-day free trial. You can cancel anytime during the trial period without being charged. No hidden fees or commitments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 