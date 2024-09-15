import PageTitle from "@/components/page-title";
import { serverClient } from "@/server/server-client";
import Profile from "@/components/profile";

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const [user] = await serverClient.getUser({ id });

  if (!user) {
    return null;
  }

  return (
    <section className="main-container">
      <PageTitle title={user.firstName + " " + user.lastName} />

      <Profile user={user} />
    </section>
  );
}
