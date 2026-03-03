import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string;
  size: number;
}
export default function Logo({ className, href = "/", size = 100 }: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full border-2 border-white bg-black overflow-hidden",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/kib_logo.webp"
        alt="Logo"
        sizes={`(max-width: 768px) ${size / 2}px, ${size}px`}
        width={size}
        height={size}
        className={cn("object-contain w-3/4 h-3/4")}
        loading="eager"
        priority
      />
    </Link>
  );
}
