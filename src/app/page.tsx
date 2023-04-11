import { Header, Card, Footer } from "@/components";
import { getData } from "@/utils/getData";

export default async function Home() {
  const result = await getData();
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
