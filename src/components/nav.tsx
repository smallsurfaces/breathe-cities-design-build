/**
 * Navigation bar — shared across all pages
 *
 * Purpose: provides horizontal navigation between Proof and Concept pages.
 * Uses Next.js usePathname to detect the active route and apply visual
 * distinction (semibold + BC Blue for active, default text for inactive).
 *
 * This is a client component because static export requires usePathname
 * for runtime route detection.
 *
 * Key exports: Nav
 * Dependencies: next/link, next/navigation
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Navigation link definition */
interface NavLink {
  href: string;
  label: string;
}

/** All navigation destinations — add new pages here */
const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Proof Page" },
  { href: "/concept", label: "Concept" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 border-b border-bc-border-default px-6 py-4 text-sm">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive
                ? "font-semibold text-bc-brand-primary"
                : "text-bc-text-default"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
