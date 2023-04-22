import "./globals.css";

export const metadata = {
  title: "Grapple Sensei",
  description: "Supplement your BJJ learning with an AI jiu jitsu second brain",
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
