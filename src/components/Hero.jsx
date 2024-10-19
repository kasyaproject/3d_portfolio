import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import TypeIt from "typeit-react";

const Hero = () => {
  const [isH1Visible, setIsH1Visible] = useState(false);
  const [isH2Visible, setIsH2Visible] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);

  // Timer "Andika
  useEffect(() => {
    const h1Timer = setTimeout(() => {
      setIsH1Visible(true); // Mengubah state setelah 2 detik untuk h1
    }, 2000);

    return () => clearTimeout(h1Timer); // Membersihkan timer saat komponen di-unmount
  }, []);

  // TImer "Syamsiana"
  useEffect(() => {
    const h2Timer = setTimeout(() => {
      setIsH2Visible(true); // Mengubah state setelah 3 detik untuk h2
    }, 3000); // Total waktu 2 detik + 3 detik = 5 detik

    return () => clearTimeout(h2Timer); // Membersihkan timer saat komponen di-unmount
  }, []);

  // Timer "a WEb Developer"
  useEffect(() => {
    const pTimer = setTimeout(() => {
      setIsPVisible(true); // Mengubah state setelah 3 detik untuk h2
    }, 4000); // Total waktu 2 detik + 3 detik = 5 detik

    return () => clearTimeout(pTimer); // Membersihkan timer saat komponen di-unmount
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 sm:top-32 top-20 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Line */}
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 rounded-full h-60 sm:h-80 violet-gradient" />
        </div>

        {/* Name + Tittle */}
        <div>
          <h1 className="mt-10 text-3xl font-semibold">
            <TypeIt
              options={{
                strings: ["Hi, I`m"],
                speed: 100,
                waitUntilVisible: true,
                afterComplete: (instance) => {
                  // Menghilangkan kursor setelah pengetikan selesai
                  const cursorElement =
                    instance.element.querySelector(".ti-cursor");
                  if (cursorElement) {
                    cursorElement.style.display = "none"; // Sembunyikan kursor
                  }
                },
              }}
            />
          </h1>
          {isH1Visible && (
            <h1 className={`${styles.heroHeadText} -mt-1`}>
              <TypeIt
                options={{
                  strings: ["Andika"],
                  speed: 100,
                  waitUntilVisible: true,
                  afterComplete: (instance) => {
                    // Menghilangkan kursor setelah pengetikan selesai
                    const cursorElement =
                      instance.element.querySelector(".ti-cursor");
                    if (cursorElement) {
                      cursorElement.style.display = "none"; // Sembunyikan kursor
                    }
                  },
                }}
              />
            </h1>
          )}
          {isH2Visible && (
            <h1 className={`${styles.heroHeadText} -mt-4 text-[#915eff]`}>
              <TypeIt
                options={{
                  strings: ["Syamsiana"],
                  speed: 100,
                  waitUntilVisible: true,
                  afterComplete: (instance) => {
                    // Menghilangkan kursor setelah pengetikan selesai
                    const cursorElement =
                      instance.element.querySelector(".ti-cursor");
                    if (cursorElement) {
                      cursorElement.style.display = "none"; // Sembunyikan kursor
                    }
                  },
                }}
              />
            </h1>
          )}
          {isPVisible && (
            <p
              className={`${styles.heroSubText} mt-4 uppercase tracking-[6px] sm:tracking-[14px]`}
            >
              <TypeIt
                options={{
                  strings: ["a web developer."],
                  speed: 100,
                  waitUntilVisible: true,
                }}
              />
            </p>
          )}
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
