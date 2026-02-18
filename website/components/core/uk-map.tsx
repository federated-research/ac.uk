"use client";

import { useState } from "react";

const SKY = "#03A9F4";

const cities: { name: string; x: number; y: number }[] = [
  { name: "Dundee", x: 640, y: 410 },
  { name: "London", x: 1060, y: 1700 },
  { name: "Swansea", x: 270, y: 1510 },
  { name: "Nottingham", x: 780, y: 1280 },
  { name: "Oxford", x: 770, y: 1550 },
  { name: "Bristol", x: 540, y: 1570 },
  { name: "Cambridge", x: 940, y: 1430 },
  { name: "Canterbury", x: 1120, y: 1660 },
  { name: "Birmingham", x: 680, y: 1370 },
  { name: "Manchester", x: 640, y: 1160 },
  { name: "Yorkshire", x: 730, y: 1090 },
];

const MARKER_R = 18;
const TOOLTIP_OFFSET = 32;

export function UKMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <img
        src="/images/uk.svg"
        alt="Map of the United Kingdom"
        className="w-full h-auto block"
      />
      <svg
        viewBox="0 0 1438 2091"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {cities.map((city) => (
          <g
            key={city.name}
            onMouseEnter={() => setActive(city.name)}
            onMouseLeave={() => setActive(null)}
            className="cursor-pointer"
          >
            {/* Pulse ring */}
            <circle cx={city.x} cy={city.y} r={MARKER_R + 8} fill={SKY} opacity={0.15}>
              <animate
                attributeName="r"
                from={String(MARKER_R)}
                to={String(MARKER_R + 16)}
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.4"
                to="0"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Marker dot */}
            <circle
              cx={city.x}
              cy={city.y}
              r={MARKER_R}
              fill={SKY}
              stroke="white"
              strokeWidth={4}
            />

            {/* Larger invisible hit area */}
            <circle
              cx={city.x}
              cy={city.y}
              r={MARKER_R + 12}
              fill="transparent"
            />

            {/* Tooltip */}
            {active === city.name && (
              <g>
                <rect
                  x={city.x - 100}
                  y={city.y - TOOLTIP_OFFSET - 52}
                  width={200}
                  height={48}
                  rx={0}
                  className="fill-foreground"
                />
                {/* Arrow */}
                <polygon
                  points={`${city.x - 8},${city.y - TOOLTIP_OFFSET - 4} ${city.x + 8},${city.y - TOOLTIP_OFFSET - 4} ${city.x},${city.y - TOOLTIP_OFFSET + 6}`}
                  className="fill-foreground"
                />
                <text
                  x={city.x}
                  y={city.y - TOOLTIP_OFFSET - 34}
                  textAnchor="middle"
                  className="fill-background text-[20px] font-semibold"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  Bunny install
                </text>
                <text
                  x={city.x}
                  y={city.y - TOOLTIP_OFFSET - 14}
                  textAnchor="middle"
                  className="fill-background/70 text-[16px]"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {city.name}
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
