import ImageCard from "./ImageCard";
import CardItem from "./CardItem";
import { IBot, IError, IPhoto } from "@/types";

export default function Card({
  data,
  photo,
}: {
  data: IBot[];
  photo: IPhoto | IError;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
      <ImageCard photo={photo} />
      {data.map(({ title, username, url, image, alt, description }, index) => (
        <CardItem
          key={index}
          title={title}
          username={username}
          url={url}
          image={image}
          alt={alt}
          description={description}
        />
      ))}
    </div>
  );
}
