"use client";
import { memo } from "react";
import RLottie, { Options } from "react-lottie";

interface LottieProps {
  options: Options;
  height: number | string;
  width: number | string;
}

const Lottie: React.FC<LottieProps> = ({ options, height, width }) => {
  return (
    <div className="pointer-events-none cursor-default">
      <RLottie options={options} height={height} width={width} />
    </div>
  );
};

export default memo(Lottie);
