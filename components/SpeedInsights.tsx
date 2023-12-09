import { SpeedInsights as NextSpeedInsight } from "@vercel/speed-insights/next";
import type { ComponentProps } from "react";

type SpeedInsightsProps = ComponentProps<typeof NextSpeedInsight>;

const SpeedInsights: React.FC<SpeedInsightsProps> = (props) => (
  <NextSpeedInsight {...props} />
);

export default SpeedInsights;
