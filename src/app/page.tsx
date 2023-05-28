import { Card, ErrorMsg } from "@/components";
import { getConfig, getPhoto } from "@/services";

export default async function Home() {
  const res = await getConfig();
  const photo = await getPhoto(true);
  if ("error" in res && "error" in photo) {
    return <ErrorMsg name="boundary" message={res.error || photo.error} />;
  }

  return (
    <div className="flex justify-between">
      <Card data={res} photo={photo} />
    </div>
  );
}
