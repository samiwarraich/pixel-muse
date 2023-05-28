import { ImageCard } from "@/components";
import { CardItem } from "@/components";
import { Config, Error, Photo } from "@/types";
import { ErrorMsg } from "@/components";

interface CardProps {
  data: Config | Error;
  photo: Photo | Error;
}

const Card = ({ data, photo }: CardProps) => {
  const isError = "error" in data;
  return (
    <div className="min-h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        <ImageCard photo={photo} />
        {isError ? (
          <ErrorMsg name="card" message={data.error} />
        ) : (
          data.bots.map(
            ({ title, username, url, image, alt, description }, index) => (
              <CardItem
                key={index}
                title={title}
                username={username}
                url={url}
                image={image}
                alt={alt}
                description={description}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default Card;
