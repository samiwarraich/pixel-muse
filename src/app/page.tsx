import { getAll } from "@vercel/edge-config";
import { Header, Card, Footer } from "@/components";
import { IBots, ISocialLinks } from "@/types";

interface IEdgeConfig {
  bots: IBots[];
  socialLinks: ISocialLinks;
}

export default async function Home() {
  const { bots, socialLinks }: IEdgeConfig = (await getAll()) as IEdgeConfig;
  return (
    <div className="container mx-auto p-4">
      <Header socialLinks={socialLinks} />
      <Card data={bots} />
      <Footer />
    </div>
  );
}
