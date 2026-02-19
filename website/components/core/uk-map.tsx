"use client";

import { useState } from "react";

const SKY = "#03A9F4";

const cities: { name: string; x: number; y: number }[] = [
  { name: "Dundee", x: 740, y: 610 },
  { name: "London SDE", x: 1170, y: 1730 },
  { name: "CPRD", x: 1200, y: 1730 },
  { name: "SERP", x: 570, y: 1710 },
  { name: "East Midlands SDE", x: 1040, y: 1400 },
  { name: "Thames Valley & Surrey SDE", x: 1010, y: 1670 },
  { name: "East of England SDE", x: 1210, y: 1600 },
  { name: "Kent, Medway & Wessex SDE", x: 1220, y: 1840 },
  { name: "West Midlands SDE", x: 870, y: 1510 },
  { name: "North West SDE", x: 790, y: 1240 },
  { name: "Yorkshire & Humber SDE", x: 960, y: 1130 },
  { name: "North East & North Cumbria SDE", x: 830, y: 950 },
];

const MARKER_R = 18;
const TOOLTIP_OFFSET = 32;

const TOOLTIP_PAD_X = 40;
const TOOLTIP_PAD_Y = 24;
const PX_PER_CHAR = 40;
const LINE_HEIGHT_RATIO = 1.2;

function getTooltipSize(text: string, fontSize: number) {
  const width = TOOLTIP_PAD_X * 2 + text.length * (PX_PER_CHAR * (fontSize / 70));
  const lineHeight = fontSize * LINE_HEIGHT_RATIO;
  const height = TOOLTIP_PAD_Y * 2 + lineHeight;
  return { width, height, lineHeight };
}

export function UKMap({ tooltipTitleFontSize = 70 }: { tooltipTitleFontSize?: number } = {}) {
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
            <circle cx={city.x} cy={city.y} r={MARKER_R + 10} fill={SKY} opacity={0.15}>
              <animate
                attributeName="r"
                from={String(MARKER_R)}
                to={String(MARKER_R + 16)}
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.4"
                to="0.1"
                dur="1s"
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
            {active === city.name && (() => {
              const { width, height, lineHeight } = getTooltipSize(
                city.name,
                tooltipTitleFontSize
              );
              const top = city.y - TOOLTIP_OFFSET - height;
              const textY = top + TOOLTIP_PAD_Y + lineHeight * 0.8;
              const arrowY = city.y - TOOLTIP_OFFSET;
              return (
                <g>
                  <rect
                    x={city.x - width / 2}
                    y={top}
                    width={width}
                    height={height}
                    rx={10}
                    className="fill-foreground z-100"
                  />
                  <polygon
                    points={`${city.x - 16},${arrowY - 10} ${city.x + 16},${arrowY - 10} ${city.x},${arrowY + 12}`}
                    className="fill-foreground z-100"
                  />
                  <text
                    x={city.x}
                    y={textY}
                    textAnchor="middle"
                    className="fill-background font-semibold"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: `${tooltipTitleFontSize}px`,
                    }}
                  >
                    {city.name}
                  </text>
                </g>
              );
            })()}
          </g>
        ))}
      </svg>
    </div>
  );
}
