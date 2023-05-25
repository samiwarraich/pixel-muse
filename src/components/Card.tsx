import ImageCard from "./ImageCard";
import CardItem from "./CardItem";
import { IConfig, IError, IPhoto } from "@/types";

export default function Card({
  data,
  photo,
}: {
  data: IConfig | IError;
  photo: IPhoto | IError;
}) {
  return (
    <div className="min-h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        <ImageCard photo={photo} />
        {"error" in data ? (
          <div className="max-w-sm rounded overflow-hidden shadow-lg border-1 border-line">
            <div className="relative h-80 w-full">
              <div className="flex items-center justify-center h-full">
                <p>{data?.error}</p>
              </div>
            </div>
          </div>
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
}
