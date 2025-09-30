import SectionShell from "../components/SectionShell";
import CompanyResponsible from "../components/CompanyResponsible";
import sampleInvoice from "../data/sample";

export default function ResponsiblePage() {
  return (
    <SectionShell title="Our company responsible">
      <CompanyResponsible contact={sampleInvoice.seller.contact} />
    </SectionShell>
  );
}
