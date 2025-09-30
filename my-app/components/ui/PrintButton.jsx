// Simple print/download button shown only on screen (hidden in print)

"use client"; // 👈 tell Next.js this is a Client Component

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print rounded border px-3 py-2 shadow-sm hover:bg-gray-50"
    >
      🖨️ Print / Save PDF
    </button>
  );
}
