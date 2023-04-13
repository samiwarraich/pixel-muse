import { Header, Card, Footer } from "@/components";
import { getConfig } from "@/services";

export default async function Home() {
  const result = await getConfig();
  if ("error" in result) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        {result.error}
      </div>
    );
  }
  const { header, bots, footer } = result;
  return (
    <div className="container mx-auto p-4">
      {header?.title && header?.logo && <Header header={header} />}
      {bots?.length && <Card data={bots} />}
      {footer?.text && <Footer footer={footer} />}
    </div>
  );
}
