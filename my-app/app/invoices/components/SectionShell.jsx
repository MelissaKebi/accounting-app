// A small wrapper that gives consistent spacing and a title.
// Also shows a "Back" link to the invoices landing page.

import Link from "next/link";

export default function SectionShell({ title, children }) {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">{title}</h1>
        <Link href="/invoices" className="text-blue-600 hover:underline">← Back</Link>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-sm">{children}</div>
    </main>
  );
}
