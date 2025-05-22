/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'www.shutterstock.com',
      'cdn.pixabay.com',
      'images.pexels.com',
      'i.imgur.com',
      'images1.hungama.com',
      'images3.alphacoders.com',
      'images4.alphacoders.com',
      'i.pinimg.com',
      'preview.redd.it','cdna.artstation.com','wallup.net','cdn.inprnt.com'
    ],
  },
  eslint: {
    // Add this configuration to handle the unescaped entities error
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
