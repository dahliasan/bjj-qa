import "./globals.css";

export const metadata = {
  title: "Grapple Sensei",
  description: "your bjj coach and second brian",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
