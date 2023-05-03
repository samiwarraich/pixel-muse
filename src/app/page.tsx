import { Card } from "@/components";
import { getConfig } from "@/services";

export default async function Home() {
  const res = await getConfig();
  if ("error" in res) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        {res.error}
      </div>
    );
  }

  return (
    <div className="flex justify-around">
      <Card data={res.bots} />
    </div>
  );
}
