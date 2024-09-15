import PageTitle from "@/components/page-title";
import UserTable from "@/components/user-table";

export default function Home() {
  return (
    <section className="main-container">
      <PageTitle title="Users" />

      <UserTable />
    </section>
  );
}
