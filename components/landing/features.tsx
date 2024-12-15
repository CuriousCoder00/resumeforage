import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { features } from "@/lib/data/features";

export const Feature = () => (
  <div className="w-full py-20 lg:py-40 sm:px-12 px-4 max-w-screen-xl">
    <div className="flex gap-4 py-20 lg:py-40 flex-col mx-auto w-full">
      <div className="flex flex-col mx-auto gap-3">
        <div className="flex gap-2 flex-col items-start">
          <h2 className="text-3xl md:text-5xl tracking-tighter font-regular">
            Why Choose Resume Forage?
          </h2>
        </div>
      </div>
      <div className="flex gap-10 pt-12 flex-col w-full items-center">
        <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-row gap-6 w-full items-start border rounded-xl p-4 shadow-inner shadow-neutral-500 h-full">
              <Check size={40} className="w-20  text-primary" />
              <div className="flex flex-col gap-1">
                <p className="font-bold text-xl">{feature.title}</p>
                <p className="dark:text-neutral-300 text-neutral-700 text-md font-semibold">
                  {feature.subT}
                </p>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
