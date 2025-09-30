import SectionShell from "../components/SectionShell";
import PositionsTable from "../components/PositionTable";
import sampleInvoice from "../data/sample";

export default function PositionsPage() {
  return (
    <SectionShell title="Positionen">
      <PositionsTable
        items={sampleInvoice.items}
        contract={sampleInvoice.contract}
      />
    </SectionShell>
  );
}
