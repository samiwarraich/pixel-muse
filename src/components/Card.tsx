import CardItem from "./CardItem";
import { IBot, IRandomImage } from "@/types";
import ImageCard from "./ImageCard";

export default function Card({
  data,
  randomImage,
}: {
  data: IBot[];
  randomImage: IRandomImage;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ImageCard randomImage={randomImage} />
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
