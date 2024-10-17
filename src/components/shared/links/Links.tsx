"use client";

import { links } from "@/config/links";
import React, { useEffect, useState } from "react";

export function Links() {
  const [activeSection, setActiveSection] = useState<null | string>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      const screenHeight = window.outerHeight;
      const scrollY = window.scrollY;

      const scrollYWithScreenHeight = scrollY + screenHeight;

      let topSectionId = null;
      let topSectionHeight = Infinity;

      sections.forEach((section) => {
        const sectionHeight = section.clientHeight;

        const heightOfTop =
          section.getBoundingClientRect().top + window.scrollY;

        if (
          scrollYWithScreenHeight >= heightOfTop &&
          scrollY <= heightOfTop + sectionHeight
        ) {
          if (heightOfTop < topSectionHeight) {
            topSectionId = section.id;
            topSectionHeight = heightOfTop;
          }
        }
      });

      setActiveSection(topSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {links.map(({ href, text, label }) => {
        return (
          <li key={href} className="font-medium text-sm">
            <a
              className={`hover:text-orange-100 ease-linear duration-100 ${
                activeSection === label ? "text-orange-100" : ""
              }`}
              href={href}
            >
              {text}
            </a>
          </li>
        );
      })}
    </>
  );
}
