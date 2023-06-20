import { memo } from "react";
import { ImageCard } from "@/components";
import { CardItem } from "@/components";
import { Config, ErrorData, Photo } from "@/types";
import { ErrorMsg } from "@/components";
import { isConfig } from "@/utils";

interface CardProps {
  data: Config | ErrorData;
  photo: Photo | ErrorData;
}

const Card = ({ data, photo }: CardProps) => {
  return (
    <div className="min-h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12 mx-4 md:mx-6 lg:mx-8 xl:mx-12">
        <ImageCard photo={photo} />
        {!isConfig(data) ? (
          <ErrorMsg name="card" message={data.error} />
        ) : (
          data.bots.map(
            (
              { title, username, url, image, alt, description, type },
              index
            ) => (
              <CardItem
                key={index}
                title={title}
                username={username}
                url={url}
                image={image}
                alt={alt}
                description={description}
                type={type}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default memo(Card);
