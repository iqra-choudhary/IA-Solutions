import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <Link href="/" className="logo">
          <Image
            src="/logo.jpg"
            alt="IA Solutions logo"
            width={100}
            height={32}
            style={{
              height: "32px",
              width: "auto",
              background: "#fff",
              borderRadius: "8px",
              padding: "4px 8px",
            }}
          />
        </Link>
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        &copy; {new Date().getFullYear()} IA Solutions. All rights reserved.
      </div>
    </footer>
  );
}
