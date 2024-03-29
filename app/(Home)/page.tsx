import { Card, ErrorMsg } from "@/components";
import { getEdgeConfig, getPhoto } from "@/services";
import { isEdgeConfig, isPhoto } from "@/utils";

export default async function Home() {
  const data = await getEdgeConfig();
  const photo = await getPhoto({ isClient: true });
  if (!isEdgeConfig(data) && !isPhoto(photo)) {
    return <ErrorMsg type="boundary" message={data.error || photo.error} />;
  }

  return (
    <div className="flex justify-between">
      <Card data={data} photo={photo} />
    </div>
  );
}
