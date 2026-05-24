import { getCyclingImages } from "@/lib/getCyclingImages";
import EventsContent from "@/components/EventsContent";

export default function EventsPage() {
  const cyclingImages = getCyclingImages();
  return <EventsContent cyclingImages={cyclingImages} />;
}
