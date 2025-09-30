// app/invoices/components/InvoiceDoc.jsx

function eur(n) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(Number(n || 0));
}

function deDate(iso) {
  return iso
    ? new Date(iso).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";
}

export default function InvoiceDoc({ invoice }) {
  const { seller, buyer, meta, contract, items = [], taxRate = 0.19 } = invoice;
  const totalNet = items.reduce(
    (s, it) => s + (Number(it.quantity) || 0) * (Number(it.unitPriceNet) || 0),
    0
  );
  const tax = totalNet * taxRate;
  const grand = totalNet + tax;

  return (
    <div className="mx-auto max-w-[210mm] bg-white p-10 text-[13px] leading-6 text-gray-900 shadow-sm print:shadow-none">
      {/* --- HEADER --- */}
      <div className="flex justify-between">
        {/* Buyer block */}
        <div className="space-y-0.5">
          <div className="font-semibold">{buyer.name}</div>
          {buyer.lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>

        {/* Seller block */}
        <div className="text-right space-y-0.5">
          <div className="font-bold">{seller.name}</div>
          {seller.addressLines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
          <div className="text-blue-600">{seller.website}</div>

          {/* Ansprechpartner */}
          <div className="mt-3 border-t pt-2">
            <div className="font-medium text-red-700">Ihr Ansprechpartner</div>
            <div>{seller.contact.name}</div>
            <div>{seller.contact.phone}</div>
            <div className="text-blue-600">{seller.contact.email}</div>
          </div>

          <div className="mt-4">{deDate(meta.dateISO)}</div>
        </div>
      </div>

      {/* --- META INFO --- */}
      <div className="mt-8 grid max-w-md grid-cols-2 gap-y-1">
        <div className="font-semibold">Rechnung Nr.</div>
        <div className="font-bold text-red-700">{meta.number}</div>

        <div className="font-semibold">Angebot</div>
        <div className="text-yellow-600 font-medium">{contract.offer}</div>

        <div className="font-semibold">Bestellung</div>
        <div className="text-yellow-600 font-medium">{contract.order}</div>
      </div>

      {/* --- INTRO TEXT --- */}
      <div className="mt-8 space-y-3">
        <p>Sehr geehrte Damen und Herren,</p>
        <p>
          vereinbarungsgemäß stellen wir Ihnen folgende Lieferung und Leistung
          in Rechnung, welche im Zeitraum vom{" "}
          <span className="bg-yellow-200 px-1">{contract.usagePeriod}</span>{" "}
          fällig wurden:
        </p>
      </div>

      {/* --- POSITIONS TABLE --- */}
      <div className="mt-8 overflow-hidden rounded border border-gray-400">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-2 w-12">Pos</th>
              <th className="p-2">Bezeichnung</th>
              <th className="p-2 w-40">Anzahl ISA Nutzungen</th>
              <th className="p-2 w-36">Einzelpreis netto</th>
              <th className="p-2 w-40">Gesamtpreis netto</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i} className="even:bg-gray-50">
                <td className="p-2">{i + 1}</td>
                <td className="p-2">{it.description}</td>
                <td className="p-2">{it.quantity}</td>
                <td className="p-2">{eur(it.unitPriceNet)}</td>
                <td className="p-2">{eur(it.quantity * it.unitPriceNet)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- TOTALS --- */}
      <div className="mt-6 ml-auto w-full max-w-sm space-y-1 text-sm">
        <div className="flex justify-between">
          <div>Gesamtbetrag netto</div>
          <div>{eur(totalNet)}</div>
        </div>
        <div className="flex justify-between">
          <div>{Math.round(taxRate * 100)}% Umsatzsteuer</div>
          <div>{eur(tax)}</div>
        </div>
        <div className="flex justify-between border-t pt-1 font-semibold text-base">
          <div>Rechnungsbetrag</div>
          <div>{eur(grand)}</div>
        </div>
      </div>

      {/* --- FOOTER TEXT --- */}
      <div className="mt-8 space-y-3 text-sm">
        <p>
          Zahlung innerhalb 30 Tagen ab Rechnungseingang ohne Abzüge an
          untenstehende Bankverbindung.
        </p>
        <p>
          Bei Rückfragen stehen wir selbstverständlich jederzeit gerne zur
          Verfügung.
        </p>
        <p>
          Mit freundlichen Grüßen
          <br />
          {seller.name}
        </p>
      </div>

      {/* --- FOOTER 3 COLUMNS --- */}
      <div className="mt-10 grid grid-cols-1 gap-6 border-t pt-4 text-xs text-gray-700 md:grid-cols-3">
        <div>
          <div>{seller.name}</div>
          {seller.addressLines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
          {seller.website}
        </div>
        <div>
          Geschäftsführer: Dr. Milad Geravand
          <br />
          Ust-IdNr: DE326604972
          <br />
          Handelsregister-Nr: HRB 769943
          <br />
          Registergericht: Amtsgericht Stuttgart
        </div>
        <div>
          Bankverbindung: Kreissparkasse Waiblingen
          <br />
          IBAN: DE98 6025 0010 0015 1655 07
          <br />
          SWIFT: SOLADES1WBN
        </div>
      </div>
    </div>
  );
}
