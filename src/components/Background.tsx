import { useMemo } from "react";

type Theme = "light" | "dark";

interface BackgroundProps {
  theme: Theme;
  bubbleCount?: number;
}

interface Bubble {
  color: string;
  top: string;
  left: string;
  duration: string;
  delay: string;
  origin: string;
  shadow: string;
}

const DARK_PALETTE = [
  "#3f1c3c",
  "#362258",
  "#352353",
  "#291946",
  "#2d1555",
  "#153447",
  "#1d3646",
  "#184a69",
];

function generateBubbles(count: number): Bubble[] {
  return Array.from({ length: count }).map(() => ({
    color: DARK_PALETTE[Math.floor(Math.random() * DARK_PALETTE.length)],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 250 + 80}s`,
    delay: `-${Math.random() * 300}s`,
    origin: `${Math.random() * 40 - 20}vw ${Math.random() * 40 - 20}vh`,
    shadow: `${Math.random() > 0.5 ? "-" : ""}100vmin 0 ${
      12 + Math.random() * 2
    }vmin`,
  }));
}

export default function Background({
  theme,
  bubbleCount = 18,
}: BackgroundProps) {
  const bubbles = useMemo(
    () => (theme === "dark" ? generateBubbles(bubbleCount) : []),
    [theme, bubbleCount]
  );

  return (
    <div
      className={`background background-${theme}`}
      aria-hidden="true"
    >
      {theme === "dark" &&
        bubbles.map((bubble, i) => (
          <span
            key={i}
            style={{
              color: bubble.color,
              top: bubble.top,
              left: bubble.left,
              animationDuration: bubble.duration,
              animationDelay: bubble.delay,
              transformOrigin: bubble.origin,
              boxShadow: `${bubble.shadow} currentColor`,
            }}
          />
        ))}
    </div>
  );
}