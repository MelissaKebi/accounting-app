// Items table (Positionen) with German headers and net prices.

function eur(n) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(Number(n || 0));
}

export default function PositionsTable({ items = [], contract }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Positionen</h2>

      <div className="overflow-hidden rounded-lg border border-gray-300">
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="w-12 p-2">Pos</th>
              <th className="p-2">Bezeichnung</th>
              <th className="w-36 p-2">Anzahl ISA Nutzungen</th>
              <th className="w-40 p-2">Einzelpreis netto</th>
              <th className="w-40 p-2">Gesamtpreis netto</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, idx) => {
              const totalNet =
                (Number(it.quantity) || 0) * (Number(it.unitPriceNet) || 0);
              return (
                <tr key={idx} className="even:bg-gray-50">
                  <td className="p-2 align-top">{it.pos ?? idx + 1}</td>
                  <td className="p-2 align-top">
                    <div className="font-medium">{it.description}</div>
                    {/* Optional: show usage period under the first item */}
                    {idx === 0 && contract?.usagePeriod && (
                      <div className="mt-1 inline-block rounded bg-yellow-200 px-1 text-[12px]">
                        {contract.usagePeriod}
                      </div>
                    )}
                  </td>
                  <td className="p-2 align-top">{it.quantity}</td>
                  <td className="p-2 align-top">{eur(it.unitPriceNet)}</td>
                  <td className="p-2 align-top">{eur(totalNet)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
