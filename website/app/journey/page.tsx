import { Journey } from "@/components/core/journey";

export default function Page() {
  return (
    <div className="w-full relative bg-brand">
      <div className="absolute inset-0 flex items-center justify-start z-10">
        <div className="px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-5xl">

              <h1>Journey</h1>
              <Journey />
            
          </div>
        </div>
      </div>
    </div>
  );
}
