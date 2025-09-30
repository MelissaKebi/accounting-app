// Shows the responsible person/team block clearly with small styling.
// Often repeated in the header, but you might want a dedicated section too.

export default function CompanyResponsible({ contact }) {
  if (!contact) return null;
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold">Our company responsible</h2>
      <div className="rounded border p-4">
        <div className="font-medium">{contact.name}</div>
        {contact.phone && (
          <div className="text-gray-700">Phone: {contact.phone}</div>
        )}
        {contact.email && (
          <div className="text-blue-600">Email: {contact.email}</div>
        )}
      </div>
    </section>
  );
}
