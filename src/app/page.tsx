import { Header, Card, Footer } from "@/components";
import { getConfig } from "@/services";

export default async function Home() {
  const res = await getConfig();
  if ("error" in res) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        {res.error}
      </div>
    );
  }
  const { header, bots, footer } = res;
  return (
    <div className="container mx-auto p-4">
      {header?.title && header?.logo && <Header header={header} />}
      {bots?.length && <Card data={bots} />}
      {footer?.text && <Footer footer={footer} />}
    </div>
  );
}
