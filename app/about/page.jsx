"use client";

import HeroSection from "../../components/HeroSection";

export default function About() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Hero Section */}
      <section className="h-screen snap-start flex items-center justify-center">
        <HeroSection />
      </section>

      {/* About Me Section */}
      <section className="h-screen snap-start flex items-center justify-center ">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl shadow-lg bg-white">
          {/* Picture */}
          <img
            src="/CODYHEADER.png"
            alt="About Cody"
            className="w-48 h-48 object-cover rounded-xl shadow-md flex-none"
          />

          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Hey, I’m Cody McLeod. I’m a graphic designer and web developer
              passionate about creating visually striking and user-friendly
              designs. I love experimenting with new technologies, especially
              when it comes to blending motion and interaction into websites.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
