// Contract metadata: contract number and usage period.

export default function ContractData({ contract }) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold">Contract data & Usage period</h2>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="rounded border p-4">
          <div className="font-medium">Contract No.</div>
          <div>{contract?.contractNo || "—"}</div>
        </div>
        <div className="rounded border p-4">
          <div className="font-medium">Usage period</div>
          <div className="inline-block rounded bg-yellow-200 px-1">{contract?.usagePeriod || "—"}</div>
        </div>
      </div>
    </section>
  );
}
