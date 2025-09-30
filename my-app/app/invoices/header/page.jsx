import SectionShell from "../components/SectionShell";
import InvoiceHeader from "../components/InvoiceHeader";
import sampleInvoice from "../data/sample";

export default function HeaderPage() {
  return (
    <SectionShell title="Rechnungskopf">
      <InvoiceHeader
        seller={sampleInvoice.seller}
        buyer={sampleInvoice.buyer}
        meta={sampleInvoice.meta}
      />
    </SectionShell>
  );
}
