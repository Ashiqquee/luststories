import React from 'react';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading">
          Ready to <span className="gradient-text">Indulge</span> in Our Stories?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Join thousands of readers exploring the depths of desire through our curated collection of premium adult fiction.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/signup" className="btn-primary">
            Start Your Free Trial
          </Link>
          <Link href="#stories" className="btn-secondary">
            Explore Stories
          </Link>
        </div>
        
        <div className="mt-8 p-4 bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-lg inline-block">
          <p className="text-white/60 text-sm">
            <span className="text-pink-400 font-bold">No credit card required</span> for free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA; 