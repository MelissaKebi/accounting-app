// app/page.jsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center p-6">
      <h1 className="mb-6 text-3xl font-bold text-blue-600">
        Welcome to Accounting App 🎉
      </h1>

      <p className="mb-6 text-center text-gray-700">
        This is the homepage. From here you can navigate to different parts of
        the invoice demo.
      </p>

      <ul className="w-full space-y-3">
        <li>
          <Link
            href="/invoices"
            className="block rounded-lg border px-4 py-2 text-center text-blue-600 hover:bg-blue-50"
          >
            📄 Go to Invoice Sections
          </Link>
        </li>
        <li>
          <Link
            href="/invoices/full"
            className="block rounded-lg border px-4 py-2 text-center text-green-600 hover:bg-green-50"
          >
            🧾 View Full Invoice
          </Link>
        </li>
      </ul>
    </main>
  );
}
