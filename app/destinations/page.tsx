import DestinationPage from "@/components/DestinationPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations",
};

export default function Page() {
  return <DestinationPage />;
}
