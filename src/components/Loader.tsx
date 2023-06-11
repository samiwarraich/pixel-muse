import { memo } from "react";
import { Lottie } from "@/components";
import animationData from "../../public/lottie/loader.json";

const Loader = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData,
  };
  return (
    <div className="flex items-center justify-center h-full">
      <Lottie options={options} height={"70%"} width={"70%"} />
    </div>
  );
};

export default memo(Loader);
