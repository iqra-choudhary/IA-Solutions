"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CalendlyButton from "./CalendlyButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image
            src="/logo.jpg"
            alt="IA Solutions logo"
            width={100}
            height={34}
            style={{ height: "34px", width: "auto" }}
          />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open navigation menu</span>
          <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
        </button>
        <div
          className={`navlinks ${isOpen ? "is-open" : ""}`}
          id="primary-navigation"
        >
          <Link href="/" className={pathname === "/" ? "active-link" : ""}>
            Home
          </Link>
          <Link href="/about" className={pathname === "/about" ? "active-link" : ""}>
            About
          </Link>
          <Link href="/services" className={pathname === "/services" ? "active-link" : ""}>
            Services
          </Link>
          <Link href="/projects" className={pathname === "/projects" ? "active-link" : ""}>
            Projects
          </Link>
          <Link href="/contact" className={pathname === "/contact" ? "active-link" : ""}>
            Contact
          </Link>
        </div>
        <CalendlyButton className="nav-cta">
          Book Free Consultation
        </CalendlyButton>
      </nav>
    </header>
  );
}
