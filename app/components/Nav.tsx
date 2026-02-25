"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("#");

  useEffect(() => {
    // initialize from current hash
    if (typeof window !== "undefined") {
      setActive(window.location.hash || "#");

      const onHashChange = () => setActive(window.location.hash || "#");
      window.addEventListener("hashchange", onHashChange);
      return () => window.removeEventListener("hashchange", onHashChange);
    }
  }, []);

  return (
    <div className="sticky top-0 w-full bg-white py-4 border-b border-gray-200 z-10">
    <nav className=" lg:w-[50%] w-[95%] mx-auto flex min-h-full items-center justify-between md:px-4 bg-gray-100 rounded-lg shadow-md/30">
      {links.map((l) => {
        const isActive = active === l.href;
        const base = "py-2 md:px-3 px-1 text-red-300 font-bold text-sm md:text-lg rounded-lg text-center flex-1";
        const activeClasses = "bg-red-300 text-white";
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`${base} ${isActive ? activeClasses : ""}`}
            onClick={() => setActive(l.href)}
          >
            {l.label}
          </Link>
        );
      })}
    </nav></div>
  );
}
