"use client";
import WorldMap from "@/components/ui/world-map";

export function Map() {
  return (
    <div className="w-full">
      <WorldMap
        dots={[
          {
            start: { lat: 46.5074, lng: -0.1378 },
            end: { lat: -14.6139, lng: 103.209 },
          },
          {
            start: { lat: -14.6139, lng: 103.209 },
            end: { lat: 46.5074, lng: -0.1378 },
          },
        ]}
        lineColor="#F1BD44"
      />
    </div>
  );
}
