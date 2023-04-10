import CardItem from "./CardItem";
import { IBotData } from "@/utils/data";

export default function Card({ data }: { data: IBotData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map(({ title, username, url, image, description }, index) => (
        <CardItem
          key={index}
          title={title}
          username={username}
          url={url}
          image={image}
          description={description}
        />
      ))}
    </div>
  );
}
