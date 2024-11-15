import Header from "../shared/Header";

export default async function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />

      {children}
    </section>
  );
}
