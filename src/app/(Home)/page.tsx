import { Metadata } from "next";
import { Card, ErrorMsg } from "@/components";
import { getConfig, getPhoto } from "@/services";
import { isConfig, isPhoto } from "@/utils";

export const metadata: Metadata = {
  title: "Home",
  twitter: {
    title: "Home",
  },
  openGraph: {
    title: "Home",
  },
};

async function Home() {
  const config = await getConfig();
  const photo = await getPhoto({ isClient: true });
  if (!isConfig(config) && !isPhoto(photo)) {
    return <ErrorMsg name="boundary" message={config.error || photo.error} />;
  }

  return (
    <div className="flex justify-between">
      <Card data={config} photo={photo} />
    </div>
  );
}

export default Home;
