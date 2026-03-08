import { Link } from "@/i18n/routing";
import { cn } from "@/utils/cn";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Logo from "./logo";

interface FooterLink {
  label: string;
  href: string;
}

export default async function Footer() {
  const t = await getTranslations("footer");
  const locale = await getLocale();
  const isRTL = locale === "ar";

  const contact = {
    title: t("contact.title"),
    phone: t("contact.phone"),
    email: t("contact.email"),
    location: t("contact.location"),
  };

  const quickLinksRaw = t.raw("quickLinks.links");
  const quickLinks: FooterLink[] = Array.isArray(quickLinksRaw)
    ? quickLinksRaw
        .map((link: unknown) => {
          const l = link as { label?: unknown; href?: unknown };
          return {
            label: String(l.label || ""),
            href: String(l.href || ""),
          };
        })
        .filter((link) => link.href && link.href !== "[object Object]")
    : [];

  const socialLinks = [
    { name: t("socialMedia.linkedin"), icon: Linkedin, href: "https://linkedin.com", ariaLabel: t("socialMedia.linkedin") },
    { name: t("socialMedia.twitter"), icon: Twitter, href: "https://twitter.com", ariaLabel: t("socialMedia.twitter") },
    { name: t("socialMedia.instagram"), icon: Instagram, href: "https://instagram.com", ariaLabel: t("socialMedia.instagram") },
    { name: t("socialMedia.facebook"), icon: Facebook, href: "https://facebook.com", ariaLabel: t("socialMedia.facebook") },
  ];

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#0a0a0f] text-white"
    >
      {/* Background geometric accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Faint grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#c9a96e 1px, transparent 1px), linear-gradient(90deg, #c9a96e 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Large diagonal accent shape */}
        <div
          className="absolute -top-40 -end-40 h-[600px] w-[600px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-60 -start-20 h-[500px] w-[500px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #c9a96e 0%, transparent 70%)",
          }}
        />
        {/* Horizontal rule accent */}
        <div
          className="absolute top-0 inset-x-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #c9a96e 30%, #c9a96e 70%, transparent 100%)",
            opacity: 0.4,
          }}
        />
      </div>

      {/* ── Main grid ── */}
      <div className="relative z-10 mx-auto px-[5%]">
        <div
          className="grid grid-cols-1 gap-16 py-20 md:grid-cols-2 xl:grid-cols-[1.6fr_1fr_1fr]"
        >
          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col items-center gap-8 text-center md:items-start md:text-start">
            {/* Logo */}
            <div className="transition-opacity duration-300 hover:opacity-80">
              <Logo size={120} className="w-fit" />
            </div>

            {/* Description */}
            {t("description") && (
              <p className="text-fluid-body leading-relaxed text-white/50">
                {t("description")}
              </p>
            )}

            {/* Social row */}
            <div className="flex items-center justify-center gap-3 pt-2 md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className={cn(
                      "group flex h-9 w-9 items-center justify-center rounded-full border border-white/10",
                      "text-white/40 transition-all duration-300",
                      "hover:border-[#c9a96e]/60 hover:bg-[#c9a96e]/10 hover:text-[#c9a96e]",
                    )}
                  >
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-start">
            {/* Section label */}
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span
                className="h-[1px] w-6 bg-[#c9a96e]"
                aria-hidden="true"
              />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase text-[#c9a96e]">
                {t("quickLinks.title")}
              </h3>
            </div>

            <ul className="flex flex-col items-start gap-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-label={link.label}
                    className={cn(
                      "group relative inline-flex items-center gap-2 py-1.5",
                      "text-white/55 transition-colors duration-200 hover:text-white",
                      "text-fluid-body font-light",
                    )}
                  >
                    {/* Animated underline */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 start-0 h-[1px] w-0 bg-[#c9a96e] transition-all duration-300 group-hover:w-full"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact (full width centered on md, 1 col on xl) ── */}
          <div className="flex flex-col items-center gap-6 text-center md:col-span-2 md:items-center md:text-center xl:col-span-1 xl:items-start xl:text-start">
            {/* Section label */}
            <div className="flex items-center justify-center gap-3 xl:justify-start">
              <span className="h-[1px] w-6 bg-[#c9a96e]" aria-hidden="true" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold uppercase  text-[#c9a96e]">
                {contact.title}
              </h3>
            </div>

            <div className="flex flex-col items-start gap-4">
              {/* Phone */}
              <Link
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                aria-label={`Call us: ${contact.phone}`}
                className="group flex items-center justify-center gap-3 text-white/55 transition-colors duration-200 hover:text-white xl:items-start xl:justify-start"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/8 bg-white/4 group-hover:border-[#c9a96e]/40 group-hover:bg-[#c9a96e]/8 transition-colors duration-300">
                  <Phone className="h-3.5 w-3.5 text-[#c9a96e]" />
                </span>
                <span className="text-fluid-body font-light leading-relaxed pt-1">
                  {contact.phone}
                </span>
              </Link>

              {/* Email */}
              <Link
                href={`mailto:${contact.email}`}
                aria-label={`Email us: ${contact.email}`}
                className="group flex items-center justify-center gap-3 text-white/55 transition-colors duration-200 hover:text-white xl:items-start xl:justify-start"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/8 bg-white/4 group-hover:border-[#c9a96e]/40 group-hover:bg-[#c9a96e]/8 transition-colors duration-300">
                  <Mail className="h-3.5 w-3.5 text-[#c9a96e]" />
                </span>
                <span className="break-all text-fluid-body font-light leading-relaxed pt-1">
                  {contact.email}
                </span>
              </Link>

              {/* Location */}
              <div className="flex items-center justify-center gap-3 text-white/55 xl:items-start xl:justify-start">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/8 bg-white/4">
                  <MapPin className="h-3.5 w-3.5 text-[#c9a96e]" />
                </span>
                <span className="text-fluid-body font-light leading-relaxed pt-1">
                  {contact.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Copyright bar ── */}
        <div
          className="relative flex flex-col items-center justify-center border-t py-6 sm:flex-row"
          style={{ borderColor: "rgba(201,169,110,0.12)" }}
        >
          {/* Thin gold accent line above */}
          <div
            aria-hidden="true"
            className="absolute -top-[1px] start-1/2 h-[1px] w-24 -translate-x-1/2 rtl:translate-x-1/2"
            style={{ background: "#c9a96e", opacity: 0.5 }}
          />

          <p className="text-fluid-label font-light tracking-wide text-white/30">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}