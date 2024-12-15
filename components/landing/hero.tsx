import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { BsStars } from "react-icons/bs";
import { BackgroundBeams } from "../ui/background-beams";
import Link from "next/link";

export const Hero = () => {
  const handleScroll = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full relative bg-gradient-to-b dark:to-black dark:from-neutral-900 from-neutral-300 to-white px-4">
      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Build your ATS Proof Resume Now <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              Land Your Dream Job with a Tailored Resume
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Optimize your resume to match job descriptions and stand out to
              recruiters. Increase your ATS score and get noticed faster.
            </p>
          </div>
          <div className="flex justify-center sm:flex-row flex-col gap-3 w-full">
            <Button
              variant={"secondary"}
              size="lg"
              className="gap-4"
              onClick={handleScroll}
            >
              Learn How It Works
            </Button>
            <Button size="lg" className="gap-4">
              <Link className="flex gap-4 items-center justify-start" href="/auth/login">
                Try Resume Forage for Free <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <p className="flex items-center justify-center text-muted-foreground text-sm max-w-2xl text-center gap-2">
            <BsStars /> Powered by AI, trusted by job seekers, built to help you
            succeed.
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};
