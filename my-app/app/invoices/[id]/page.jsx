// Server Component: fetch invoice data (from your API) and render the document.
// For demo, we provide a fallback sample if the API is not available.

import InvoiceDocument from "../components/InvoiceDocument";
import PrintButton from "@/components/ui/PrintButton";

async function fetchInvoice(id) {
  // Try to read from your API route first
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL || "";
    const res = await fetch(`${base}/api/invoices/${id}`, {
      cache: "no-store",
    });
    if (res.ok) return await res.json();
  } catch {}
  // Fallback sample to make the page render during development
  return {
    seller: {
      name: "Deep Care GmbH",
      addressLines: ["Königsallee 43", "71638 Ludwigsburg"],
      website: "www.deep-care.de",
      contact: {
        name: "Simon Fiechtner",
        phone: "+49 151 29091956",
        email: "simon.fiechtner@deep-care.de",
      },
    },
    buyer: {
      name: "Swisscom (Schweiz) AG",
      lines: ["z.Hd. Susanne Schüpbach (HR)", "Genfergasse 14", "3006 Bern"],
    },
    meta: {
      number: "R-26614",
      offer: "A-35902 / 30.03.2022",
      order: "bestätigtes Angebot / 01.04.2022",
      customerVatId: "XXX",
      dateISO: "2025-09-29T00:00:00.000Z",
    },
    items: [
      {
        pos: 1,
        description: "Deep Care Isa Pilot im Zeitraum",
        period: "19.10.-17.11.2024", // yellow tag under description
        quantity: 1,
        unit: "Dienstleistung",
        unitPriceNet: 1000,
      },
    ],
    shippingNet: 120,
    taxRate: 0.19,
    notes:
      "Zahlung innerhalb 15 Tagen ab Rechnungseingang ohne Abzüge an untenstehende Bankverbindung. Bei Rückfragen stehen wir selbstverständlich jederzeit gerne zur Verfügung.",
    footer: {
      company: "Deep Care GmbH",
      address: ["Königsallee 43", "71638 Ludwigsburg"],
      managingDirector: "Dr. Milad Geravand",
      vatId: "DE326604972",
      hrb: "HRB 769943",
      court: "Amtsgericht Stuttgart",
      bank: {
        name: "Kreissparkasse Waiblingen",
        iban: "DE98 6025 0010 0015 1655 07",
        bic: "SOLADES1WBN",
      },
    },
  };
}

export default async function InvoicePage({ params }) {
  const invoice = await fetchInvoice(params.id);
  return (
    <main className="mx-auto max-w-a4 p-4">
      <div className="mb-4 flex justify-end">
        <PrintButton />
      </div>
      <InvoiceDocument invoice={invoice} />
    </main>
  );
}
