import { Header, Card, Footer } from "@/components";
import { botData } from "@/utils/data";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {botData.map(({ title, username, url, image, description }, index) => (
          <Card
            key={index}
            title={title}
            username={username}
            url={url}
            image={image}
            description={description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
