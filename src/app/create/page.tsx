// Components
import PageTitle from "@/components/page-title";
import CreateUserForm from "@/components/create-user-form";

export default function Create() {
  return (
    <section className="main-container">
      <PageTitle title="Create New User" />

      <CreateUserForm />
    </section>
  );
}
