import { memo } from "react";
import { Lottie } from "@/components";
import animationData from "../../public/lottie/loader.json";

interface LoaderProps {
  height: number | string;
  width: number | string;
}

const Loader = ({ height, width }: LoaderProps) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData,
  };
  return (
    <div className="flex items-center justify-center h-full">
      <Lottie options={options} height={height} width={width} />
    </div>
  );
};

export default memo(Loader);
