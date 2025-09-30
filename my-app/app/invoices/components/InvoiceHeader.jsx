// Renders the classic top part: seller (top-right), buyer (left), and basic meta.
// Tailwind v4 syntax is used in globals.css. This component is purely presentational.

function deDate(iso) {
  return iso
    ? new Date(iso).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";
}

export default function InvoiceHeader({ seller, buyer, meta }) {
  return (
    <section className="space-y-6">
      {/* Top line: small return address (left) and seller block (right) */}
      <div className="flex items-start justify-between">
        <div className="text-gray-500">
          <div>{seller?.name}</div>
          {seller?.addressLines?.slice(0, 1).map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>

        <div className="text-right">
          <div className="font-semibold">{seller?.name}</div>
          {seller?.addressLines?.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
          {seller?.website && (
            <div className="text-blue-600">{seller.website}</div>
          )}
          {seller?.contact && (
            <div className="mt-3">
              <div className="font-medium">Ihr Ansprechpartner</div>
              <div>{seller.contact.name}</div>
              {seller.contact.phone && <div>{seller.contact.phone}</div>}
              {seller.contact.email && (
                <div className="text-blue-600">{seller.contact.email}</div>
              )}
            </div>
          )}
          {meta?.dateISO && <div className="mt-4">{deDate(meta.dateISO)}</div>}
        </div>
      </div>

      {/* Buyer address */}
      <div>
        <div className="font-medium">{buyer?.name}</div>
        {buyer?.lines?.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      {/* Meta rows */}
      <div className="grid w-full grid-cols-2 gap-y-1 sm:max-w-md">
        <div className="font-semibold">Rechnung Nr.</div>
        <div>{meta?.number}</div>
      </div>
    </section>
  );
}
