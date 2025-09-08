"use client";

import { motion } from "framer-motion";
import FramerHeader from "../components/FramerHeader";
import HeaderAnimated from "../components/HeaderAnimated";
import HeroSection from "../components/HeroSection";

export default function PortfolioText() {
  return (
    <section>
      <motion.img
        src="portfolio3d.png"
        alt="portfolio"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 0.75 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=""
      />
    </section>
  );
}
