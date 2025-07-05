import type { Metadata } from "next";
import Wave from "@/components/transitions/Wave";

export const metadata: Metadata = {
  title: "Home ✷ Atzin Escandia",
  description: "Welcome to Atzin Escandia’s creative web portfolio and lab ✷",
};

export default function HomePage() {
  return (
    <Wave>
      <h1 className="text-4xl font-bold text-center flex gap-2">
        <div className="w-fit h-fit animate-spin">✷</div>
        Welcome, Creative Human!
      </h1>
    </Wave>
  );
}
