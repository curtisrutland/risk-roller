"use client";

import { useEffect, useState } from "react";
import {
  title,
  generateUniqueColorPair,
  ColorName,
} from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Title() {
  const [colors, setColors] = useState<ColorName[]>(generateUniqueColorPair());

  useEffect(() => {
    if (typeof window !== undefined) {
      const interval = setInterval(() => {
        setColors(generateUniqueColorPair());
      }, siteConfig.colorChangeInterval);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="inline-block max-w-xl text-center justify-center">
      <span suppressHydrationWarning className={title({ color: colors[0], size: "lg" })}>
        RISK
      </span>
      <span suppressHydrationWarning className={title({ color: colors[1], size: "lg" })}>
        ROLLER
      </span>
    </div>
  );
}
