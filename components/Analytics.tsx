import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import type { ComponentProps } from "react";

type AnalyticsProps = ComponentProps<typeof VercelAnalytics>;

const Analytics: React.FC<AnalyticsProps> = (props) => (
  <VercelAnalytics {...props} />
);

export default Analytics;
