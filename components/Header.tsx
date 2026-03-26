"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand-mark">
          <span className="brand-mark__badge">AM</span>
          <span>
            ASAN muraciet Vision AI
            <small>Vizual triage. Prioritet. Dogrulama.</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "is-active" : ""}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <Link href="/dashboard" className="button button--ghost">
            Demo paneller
          </Link>
          <Link href="/contact" className="button">
            Pilot elaqesi
          </Link>
        </div>
      </div>
    </header>
  );
}
