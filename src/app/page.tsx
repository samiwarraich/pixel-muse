import { Header, Card, Footer } from "@/components";
import { botData } from "@/utils/data";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <Card data={botData} />
      <Footer />
    </div>
  );
}
