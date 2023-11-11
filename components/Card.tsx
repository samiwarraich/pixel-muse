import { memo } from "react";
import { ImageCard, CardItem, ErrorMsg } from "@/components";
import { IEdgeConfig, IError, IPhoto } from "@/types";
import { isEdgeConfig } from "@/utils";

interface CardProps {
  data: IEdgeConfig | IError;
  photo: IPhoto | IError;
}

const Card = ({ data, photo }: CardProps) => {
  return (
    <div className="min-h-screen w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-8 mx-4 md:mx-6 lg:mx-8 xl:mx-8">
        <ImageCard photo={photo} />
        {!isEdgeConfig(data) ? (
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
