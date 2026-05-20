"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Assessment", href: "/assessment" },
  { label: "Company", href: "/admin" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand-mark">
          <span className="brand-mark__badge">JS</span>
          <span>
            JobSim AI
            <small>AI job simulation platform</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              className={pathname === item.href ? "is-active" : ""}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/admin" className="button button--ghost">
            Dashboard
          </Link>
          <Link href="/assessment" className="button">
            Start
          </Link>
        </div>
      </div>
    </header>
  );
}
