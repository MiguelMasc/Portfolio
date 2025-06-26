"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function TopBar() {
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [shadowStyle, setShadowStyle] = useState({ width: 0, left: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  useEffect(() => {
    if (hoveredIndex !== null && linkRefs.current[hoveredIndex]) {
      const element = linkRefs.current[hoveredIndex];
      const parent = element.parentElement;
      if (parent) {
        setShadowStyle({
          width: element.offsetWidth,
          left: element.offsetLeft - parent.offsetLeft
        });
      }
      
    }
  }, [hoveredIndex]);

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 rounded-full backdrop-blur-sm border">
      <div className={`rounded-full py-2 flex items-center relative transition-all duration-300`}>
        {/* Sliding background */}
        <div 
          className={`absolute rounded-full h-full transition-all duration-200 ease-out ${
            hoveredIndex !== null ? 'bg-white/5' : 'bg-transparent'
          }`}
          style={{
            width: `${shadowStyle.width}px`,
            left: `${shadowStyle.left}px`
          }}
        />
        
        {navItems.map((item, index) => (
          <Link 
            key={item.href}
            href={item.href} 
            ref={(el) => { linkRefs.current[index] = el; }}
            className="relative px-5 py-2 text-white text-md font-extralight rounded-full transition-all duration-200"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};