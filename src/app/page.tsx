import { Card } from "@/components";
import { getConfig, getPhoto } from "@/services";

export default async function Home() {
  const res = await getConfig();
  const photo = await getPhoto();
  if ("error" in res && "error" in photo) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        {res.error || photo.error}
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <Card data={res} photo={photo} />
    </div>
  );
}
