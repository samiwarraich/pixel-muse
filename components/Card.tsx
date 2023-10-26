import { memo } from "react";
import { ImageCard } from "@/components";
import { CardItem } from "@/components";
import { IConfig, IError, IPhoto } from "@/types";
import { ErrorMsg } from "@/components";
import { isConfig } from "@/utils";

interface CardProps {
  data: IConfig | IError;
  photo: IPhoto | IError;
}

const Card = ({ data, photo }: CardProps) => {
  return (
    <div className="min-h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-8 mx-4 md:mx-6 lg:mx-8 xl:mx-8">
        <ImageCard photo={photo} />
        {!isConfig(data) ? (
          <ErrorMsg name="card" message={data.error} />
        ) : (
          data.bots.map(
            (
              { title, username, url, description, image, imageAlt, ariaLabel },
              index
            ) => (
              <CardItem
                key={index}
                title={title}
                username={username}
                url={url}
                description={description}
                image={image}
                imageAlt={imageAlt}
                ariaLabel={ariaLabel}
              />
            )
          )
        )}
      </div>
    </div>
  );
};

export default memo(Card);
