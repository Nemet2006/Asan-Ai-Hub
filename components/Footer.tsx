import Link from "next/link";
import { contactChannels, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-mark brand-mark--footer">
            <span className="brand-mark__badge">AM</span>
            <span>
              ASAN muraciet Vision AI
              <small>Vizual muracietlerin analizi ve cavab dogrulamasi.</small>
            </span>
          </div>
          <p className="footer-copy">
            Demo platforma ASAN muraciet ucun AI-esasli vizual analiz, avtomatik
            kategoriyalashdirma, prioritetlesdirme ve audit mexanizmlerini gosterir.
          </p>
        </div>

        <div>
          <h3>Bolmeler</h3>
          <ul className="footer-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Elaqe</h3>
          <ul className="footer-links">
            {contactChannels.map((channel) => (
              <li key={channel.label}>
                <span>{channel.label}</span>
                <strong>{channel.value}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
