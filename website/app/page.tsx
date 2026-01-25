import { Map } from "@/components/core/map";

export default function Page() {
  return (
    <div className="w-full relative h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-start z-10">
        <div className="px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-5xl">
              <Map />

          </div>
        </div>
      </div>
    </div>
  );
}