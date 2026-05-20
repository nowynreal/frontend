import { Table, TableCell, TableHead, TableRow } from "@/components/ui/Table";
import { sampleCompanies } from "@/lib/constants";

export default function CompaniesPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-ink">Companies</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Industry</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {sampleCompanies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.industry}</TableCell>
              <TableCell>{company.country}</TableCell>
              <TableCell>{company.contactPerson}</TableCell>
              <TableCell>{company.status}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
