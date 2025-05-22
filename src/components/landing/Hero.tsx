import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent"></div>
      
      {/* Animated shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              <span className="block">Immerse Yourself in</span>
              <span className="gradient-text">Passion & Desire</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl mx-auto md:mx-0">
              Experience the most captivating collection of sensual stories crafted for the sophisticated reader. Where imagination meets desire.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/signup" className="btn-primary">
                Start Reading Free
              </Link>
              <Link href="#pricing" className="btn-secondary">
                View Plans
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-dark-900 flex items-center justify-center text-xs font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/70">
                <span className="font-bold text-white">10,000+</span> readers already joined
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src="https://i.pinimg.com/736x/82/80/1a/82801a5ff03442e60efd5e6f962644bc.jpg"
                alt="Intimate couple embracing in bed"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-dark-800/80 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h3 className="font-heading text-xl font-bold text-white">Latest Story</h3>
                  <p className="mt-1 text-white/80 text-sm">Whispers in the Twilight</p>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <Link href="/stories" className="text-xs text-pink-400 hover:text-pink-300 font-bold">
                      Read Now →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 