import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-mark brand-mark--footer">
            <span className="brand-mark__badge">JS</span>
            <span>
              JobSim AI
              <small>Assessment MVP</small>
            </span>
          </div>
          <p className="footer-copy">
            Junior namizədləri real case-lər, structured scoring və company ranking ilə
            qiymətləndirmək üçün hazırlanmış işlək demo.
          </p>
        </div>

        <div>
          <h3>Demo</h3>
          <ul className="footer-links">
            <li>
              <Link href="/">Overview</Link>
            </li>
            <li>
              <Link href="/assessment">Assessment flow</Link>
            </li>
            <li>
              <Link href="/admin">Company dashboard</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>MVP layer</h3>
          <ul className="footer-links">
            <li>
              <span>Scoring</span>
              <strong>Rubric + keyword mock</strong>
            </li>
            <li>
              <span>Data</span>
              <strong>Static + localStorage</strong>
            </li>
            <li>
              <span>Next step</span>
              <strong>PostgreSQL + AI API</strong>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
