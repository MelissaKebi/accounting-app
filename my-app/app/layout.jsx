import "./globals.css";

export const metadata = { title: "Invoice", description: "Invoice page" };

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="bg-neutral-100 text-[13px] text-gray-900">
        {children}
      </body>
    </html>
  );
}
