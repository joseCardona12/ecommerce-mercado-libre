"use client";
import { HERO_SLIDE_DATA } from "@/utils/constants/heroSliderData";
import ContentImage from "../atoms/ContentImage";
import Button from "../atoms/Button";
import { IconArrowLeft, IconArrowRight } from "../../../public/icons";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection(): React.ReactNode {
  const [indexImage, setIndexImage] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexImage((prev) => {
        return prev + 1 < HERO_SLIDE_DATA.length ? prev + 1 : 0;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-center items-center bg-gradient-to-b from-[var(--color-main)] to-[var(--color-gray-light)]">
      <AnimatePresence mode="wait">
        <motion.div
          className="flex items-center w-[94vw] h-[200px] md:h-[400px] lg:h-[500px] relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.2 }}
          key={indexImage}
        >
          <ContentImage
            alt={HERO_SLIDE_DATA[indexImage]?.alt}
            url={HERO_SLIDE_DATA[indexImage]?.url}
            url_view=""
          />
          <div className="absolute w-full flex justify-between items-center p-2">
            <Button
              variant="secondary"
              className="shadow-sm"
              onClick={() => {
                setIndexImage((prev) =>
                  prev === 0 ? HERO_SLIDE_DATA.length - 1 : prev - 1
                );
              }}
              disabled={indexImage === 0}
            >
              <IconArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              className="shadow-sm"
              onClick={() => {
                setIndexImage((prev) => (prev + 1) % HERO_SLIDE_DATA.length);
              }}
            >
              <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-2 left-0 w-full flex justify-center">
            <div className="flex items-center gap-2">
              {HERO_SLIDE_DATA.map((_, index: number) => (
                <div
                  key={index}
                  className={`w-[6px] h-[6px] rounded-full ${
                    indexImage === index ? "bg-red-400" : "bg-white"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
