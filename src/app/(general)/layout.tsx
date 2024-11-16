import { decodeUserCookie } from "../lib/actions/cookies";
import Header from "../shared/Header";

export default async function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = (await decodeUserCookie("accessToken")) || null;
  console.log(user, "check user");
  return (
    <section>
      <Header user={user} />

      {children}
    </section>
  );
}
