
import React from "react";
import { cn, getColorClass } from "~/lib/utils";

type IColor =
  | "rose"
  | "green"
  | "blue"
  | "yellow"
  | "red"
  | "gray"
  | "purple"
  | "indigo"
  | "pink"
  | "orange"
  | "teal"
  | "cyan"
  | "violet";

interface ProgressBarProps {
  value: number;
  color?: IColor;
  animated?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color = "rose",
  animated = false,
}) => {
  
  return (
    <div className="h-3 bg-gray-300 rounded-[0.25rem] overflow-hidden">
      <div
       className={cn(getColorClass(color), "h-full")}

        style={{
          width: `${value}%`,
          animation: animated ? "stripes 1s linear infinite" : "none",
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)`,
          backgroundSize: "1rem 1rem",
        }}
      ></div>
    </div>
  );
};

interface MultiProgressBarProps {
  bars: { value: number; color?: IColor; animated?: boolean }[];
}

const MultiProgressBar: React.FC<MultiProgressBarProps> = ({ bars }) => {
  return (
    <div>
      {bars.map((bar, index) => (
        <div key={index} className="h-3 bg-gray-300 rounded-[0.25rem] overflow-hidden my-4">
          <div
            className={cn(
              bar.color ? `bg-${bar.color}-500` : "bg-gray-500",
              "h-full",
            )}
            style={{
              width: `${bar.value}%`,
              animation: bar.animated ? "stripes 1s linear infinite" : "none",
              backgroundImage: `linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)`,
              backgroundSize: "1rem 1rem",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export { MultiProgressBar, ProgressBar };
