import Link from "next/link";
import { TbSteeringWheel } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { siteConfig } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/fleet", label: "Fleet" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "#", icon: FaFacebookF, label: "Facebook" },
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaTwitter, label: "Twitter" },
  { href: "#", icon: FaYoutube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-background">
                <TbSteeringWheel size={18} />
              </span>
              <span className="font-display text-lg font-bold text-foreground">
                Riksha<span className="text-primary">Agency</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Trusted auto rickshaw rental, leasing and fleet management —
              connecting drivers, businesses and riders across the city, every
              single day.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>{siteConfig.address}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Frontend preview — booking &amp; payments coming soon.</p>
        </div>
      </div>
    </footer>
  );
}
