import { Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: `${profile.name} — Full Stack Developer, Dubai`,
  description: profile.summary,
  authors: [{ name: profile.name, url: `mailto:${profile.email}` }],
  openGraph: {
    title: `${profile.name} — Full Stack Developer`,
    description: profile.headline,
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg text-ink font-sans">{children}</body>
    </html>
  );
}
