import CardItem from "./CardItem";
import { IBot } from "@/types";

export default function Card({ data }: { data: IBot[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map(
        ({ title, username, url, image, imageAlt, description }, index) => (
          <CardItem
            key={index}
            title={title}
            username={username}
            url={url}
            image={image}
            imageAlt={imageAlt}
            description={description}
          />
        )
      )}
    </div>
  );
}
