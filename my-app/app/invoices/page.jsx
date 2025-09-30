// Shows links to each section sub-page and a "Full" page.

import Link from "next/link";

export default function InvoicesIndex() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-4 text-xl font-semibold">Invoice sections</h1>
      <ul className="space-y-2">
        <li>
          <Link
            className="text-blue-600 hover:underline"
            href="/invoices/header"
          >
            Rechnungskopf
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 hover:underline"
            href="/invoices/responsible"
          >
            Our company responsible
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 hover:underline"
            href="/invoices/contract"
          >
            Contract data & Usage period
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-600 hover:underline"
            href="/invoices/positions"
          >
            Positionen
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/invoices/full">
            Full invoice page
          </Link>
        </li>
      </ul>
    </main>
  );
}
