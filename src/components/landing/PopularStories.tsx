import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface StoryCardProps {
  title: string;
  author: string;
  category: string;
  rating: number;
  reads: string;
  image: string;
  index: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ 
  title, author, category, rating, reads, image, index 
}) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 opacity-30 blur-sm group-hover:opacity-100 transition-all duration-500"></div>
      <div className="relative h-96 rounded-xl overflow-hidden card-hover">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
        
        <div className="absolute top-4 left-4 bg-pink-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
          {category}
        </div>
        
        {index <= 2 && (
          <div className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur-sm text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
            #{index + 1}
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg 
                key={i} 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 ${i < rating ? 'text-pink-500' : 'text-gray-400'}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white/70 text-xs ml-1">{reads} reads</span>
          </div>
          
          <h3 className="text-xl font-bold font-heading">{title}</h3>
          <p className="text-white/60 text-sm mt-1">By {author}</p>
          
          <Link href="/stories" className="mt-4 inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 text-sm font-bold">
            Read Story
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const PopularStories: React.FC = () => {
  const stories = [
    {
      title: "Whispers in the Twilight",
      author: "Elena Blackwood",
      category: "Romance",
      rating: 5,
      reads: "24.5k",
      image: "https://i.pinimg.com/736x/70/2d/9b/702d9bf14750a299e46916fa485f63fe.jpg"
    },
    {
      title: "Forbidden Desires",
      author: "Michael Rivers",
      category: "Fantasy",
      rating: 4,
      reads: "18.3k",
      image: "https://preview.redd.it/fanart-of-lust-i-did-a-while-ago-hope-you-like-it-v0-by2npny5aj7a1.jpg?auto=webp&s=51c2a1b2b8a4ff821b3c97a731d6e5d33767c17d"
    },
    {
      title: "Midnight Rendezvous",
      author: "Sophia Chen",
      category: "Drama",
      rating: 5,
      reads: "15.7k",
      image: "https://cdna.artstation.com/p/assets/images/images/033/391/770/large/malveda-lust.jpg?1609426521"
    },
    {
      title: "The Red Silk Affair",
      author: "James Montgomery",
      category: "Mystery",
      rating: 4,
      reads: "12.9k",
      image: "https://wallup.net/wp-content/uploads/2016/05/14/46781-Lust-748x561.jpg"
    },
    {
      title: "Passionate Secrets",
      author: "Olivia Winters",
      category: "Romance",
      rating: 5,
      reads: "10.2k",
      image: "https://cdn.inprnt.com/thumbs/eb/05/eb053e0e37f145ec8a7af2061b3c53be.jpg"
    },
    {
      title: "Velvet Temptations",
      author: "Daniel Wright",
      category: "Historical",
      rating: 4,
      reads: "8.7k",
      image: "https://images3.alphacoders.com/107/107987.jpg"
    },
  ];

  return (
    <section id="stories" className="section-padding relative">
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Most <span className="gradient-text">Popular</span> Stories
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Our readers&apos; favorite selections, crafted to ignite your imagination and awaken your desires.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <StoryCard 
              key={index}
              index={index}
              title={story.title}
              author={story.author}
              category={story.category}
              rating={story.rating}
              reads={story.reads}
              image={story.image}
            />
          ))}
        </div>
        
        <div className="text-center mt-14">
          <Link href="/stories" className="btn-primary inline-flex items-center gap-2">
            Explore All Stories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularStories; 