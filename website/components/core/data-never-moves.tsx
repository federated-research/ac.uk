"use client";

import { useEffect, useRef } from "react";
import { User, Database, Lock, Network } from "lucide-react";

const SZ  = 24;
const H   = SZ / 2;
const SZS = 16;

const BRAND      = "#234363";
const MUTED      = "#9ca3af";
const MUTED_LINE = "#d1d5db";

// Full cycle: ~4.2 s animation + ~2.8 s hold = 7 s before replay
const CYCLE_MS = 7000;

// ── Layout ──────────────────────────────────────────────────
const CY = 72; // researcher / hub row

// Researchers
const UK_RX = 55;
const SG_RX = 525;

// Central hub circle
const HUB_CX = 290, HUB_CY = CY, HUB_R = 15;

// TRE boxes
const UK_TX = 105, UK_TY = 132, UK_TW = 100, UK_TH = 58;
const UK_TCX = UK_TX + UK_TW / 2; // 155
const UK_TCY = UK_TY + UK_TH / 2; // 161

const SG_TX = 375, SG_TY = 132, SG_TW = 100, SG_TH = 58;
const SG_TCX = SG_TX + SG_TW / 2; // 425
const SG_TCY = SG_TY + SG_TH / 2; // 161

// Query lines run slightly above centre to separate from result lines
const Q_Y = CY - 4; // 68
// Result lines run slightly below
const R_Y = CY + 4; // 76

// Query line endpoints (researcher → hub)
const UK_Q_X1 = UK_RX + H + 3;       // 70
const UK_Q_X2 = HUB_CX - HUB_R - 1; // 274
const SG_Q_X1 = SG_RX - H - 3;       // 510
const SG_Q_X2 = HUB_CX + HUB_R + 1; // 306

// Result line endpoints (hub → researcher, brand, drawn after TRE results arrive)
const UK_R_X1 = UK_Q_X2; // 274
const UK_R_X2 = UK_Q_X1; // 70
const SG_R_X1 = SG_Q_X2; // 306
const SG_R_X2 = SG_Q_X1; // 510

// Dispatch arcs: hub bottom → TRE top (separated left/right within box)
const UK_DISP_SX = HUB_CX - 8,    UK_DISP_SY = HUB_CY + HUB_R + 1; // 282, 88
const UK_DISP_EX = UK_TX + 32,    UK_DISP_EY = UK_TY;               // 137, 132

const SG_DISP_SX = HUB_CX + 8,    SG_DISP_SY = HUB_CY + HUB_R + 1; // 298, 88
const SG_DISP_EX = SG_TX + SG_TW - 32, SG_DISP_EY = SG_TY;         // 443, 132

// Result arcs: TRE top → hub bottom (offset to separate from dispatch)
const UK_RES_SX = UK_TX + UK_TW - 32, UK_RES_SY = UK_TY;  // 173, 132
const UK_RES_EX = HUB_CX - 5,         UK_RES_EY = UK_DISP_SY; // 285, 88

const SG_RES_SX = SG_TX + 32,         SG_RES_SY = SG_TY;  // 407, 132
const SG_RES_EX = HUB_CX + 5,         SG_RES_EY = SG_DISP_SY; // 295, 88

export function DataNeverMoves() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lines = [...svg.querySelectorAll<SVGGeometryElement>(".dnm-line")];
    lines.forEach((el) => {
      try {
        const len = Math.ceil(el.getTotalLength());
        el.setAttribute("stroke-dasharray", String(len));
        el.setAttribute("stroke-dashoffset", String(len));
      } catch {
        /* skip if getTotalLength unavailable (SSR) */
      }
    });

    function play() {
      svg!.classList.add("dnm-reset");
      svg!.removeAttribute("data-animate");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          svg!.classList.remove("dnm-reset");
          requestAnimationFrame(() => {
            svg!.setAttribute("data-animate", "true");
          });
        })
      );
    }

    let timer: ReturnType<typeof setInterval>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
          timer = setInterval(play, CYCLE_MS);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(svg);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 py-8 md:py-12">
      <style>{`
        /* ── freeze during loop reset ──────────────────────── */
        svg.dnm-reset .dnm-icon,
        svg.dnm-reset .dnm-line { transition: none !important; }

        /* ── base (hidden) states ──────────────────────────── */
        .dnm-icon {
          opacity: 0;
          transition: opacity 0.4s ease-out;
        }
        .dnm-line {
          fill: none;
          transition-property: stroke-dashoffset;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 0.4s;
        }

        /* ── triggered (visible) states ───────────────────── */
        svg[data-animate] .dnm-icon { opacity: 1; }
        svg[data-animate] .dnm-line { stroke-dashoffset: 0; }

        /* ── timing ────────────────────────────────────────── */

        /* Phase 1: both researchers appear */
        .d-researcher { transition-delay: 0.2s; }

        /* Phase 2: query lines draw in (researchers → hub) */
        .d-query {
          transition-duration: 0.35s;
          transition-delay: 0.55s;
        }

        /* Phase 3: dispatch arcs draw (hub → TREs) simultaneously */
        .d-dispatch {
          transition-duration: 1.0s;
          transition-delay: 1.1s;
          transition-timing-function: linear;
        }

        /* Phase 4: result arcs draw (TREs → hub) simultaneously */
        .d-result-arc {
          transition-duration: 0.8s;
          transition-delay: 2.4s;
          transition-timing-function: linear;
        }

        /* Phase 5: result lines draw back to researchers */
        .d-result-line {
          transition-duration: 0.35s;
          transition-delay: 3.45s;
        }
      `}</style>

      <svg
        ref={svgRef}
        viewBox="0 0 580 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        aria-label="Both researchers submit queries to a central hub, which dispatches to each TRE. TREs run the analysis and return only aggregate results."
      >
        {/* ── Researcher labels ────────────────────────────── */}
        <text x={UK_RX} y={28} fontSize={8} fill={MUTED}
          fontFamily="ui-sans-serif,system-ui,sans-serif"
          letterSpacing={2} textAnchor="middle">
          UNITED KINGDOM
        </text>
        <text x={SG_RX} y={28} fontSize={8} fill={MUTED}
          fontFamily="ui-sans-serif,system-ui,sans-serif"
          letterSpacing={2} textAnchor="middle">
          SINGAPORE
        </text>

        {/* ── TRE labels ───────────────────────────────────── */}
        <text x={UK_TCX} y={UK_TY - 9} fontSize={8} fill={BRAND}
          fontFamily="ui-sans-serif,system-ui,sans-serif"
          fontWeight={700} letterSpacing={1.5} textAnchor="middle">
          UK TRE
        </text>
        <text x={SG_TCX} y={SG_TY - 9} fontSize={8} fill={BRAND}
          fontFamily="ui-sans-serif,system-ui,sans-serif"
          fontWeight={700} letterSpacing={1.5} textAnchor="middle">
          SINGAPORE TRE
        </text>

        {/* ══════════ ALWAYS-VISIBLE ELEMENTS ════════════════ */}

        {/* Central hub circle */}
        <circle cx={HUB_CX} cy={HUB_CY} r={HUB_R} fill={BRAND} />
        <foreignObject
          x={HUB_CX - SZS / 2} y={HUB_CY - SZS / 2}
          width={SZS} height={SZS}>
          <Network size={SZS} color="white" strokeWidth={1.5} />
        </foreignObject>

        {/* UK TRE box */}
        <rect x={UK_TX} y={UK_TY} width={UK_TW} height={UK_TH}
          fill="none" stroke={MUTED_LINE} strokeWidth={1} rx={3} />
        <foreignObject x={UK_TCX - H} y={UK_TCY - H} width={SZ} height={SZ}>
          <Database size={SZ} color={MUTED} strokeWidth={1.5} />
        </foreignObject>
        <foreignObject x={UK_TX + UK_TW - SZS - 5} y={UK_TY + 5} width={SZS} height={SZS}>
          <Lock size={SZS} color={BRAND} strokeWidth={1.5} />
        </foreignObject>

        {/* Singapore TRE box */}
        <rect x={SG_TX} y={SG_TY} width={SG_TW} height={SG_TH}
          fill="none" stroke={MUTED_LINE} strokeWidth={1} rx={3} />
        <foreignObject x={SG_TCX - H} y={SG_TCY - H} width={SZ} height={SZ}>
          <Database size={SZ} color={MUTED} strokeWidth={1.5} />
        </foreignObject>
        <foreignObject x={SG_TX + SG_TW - SZS - 5} y={SG_TY + 5} width={SZS} height={SZS}>
          <Lock size={SZS} color={BRAND} strokeWidth={1.5} />
        </foreignObject>

        {/* ══════════ ANIMATED ELEMENTS ════════════════════════════════════ */}

        {/* Phase 1 — Researchers */}
        <foreignObject x={UK_RX - H} y={CY - H} width={SZ} height={SZ} className="dnm-icon d-researcher">
          <User size={SZ} color={BRAND} strokeWidth={1.5} />
        </foreignObject>
        <foreignObject x={SG_RX - H} y={CY - H} width={SZ} height={SZ} className="dnm-icon d-researcher">
          <User size={SZ} color={BRAND} strokeWidth={1.5} />
        </foreignObject>

        {/* Phase 2 — Query lines: researchers → hub (muted, above centre) */}
        <line x1={UK_Q_X1} y1={Q_Y} x2={UK_Q_X2} y2={Q_Y}
          stroke={MUTED} strokeWidth={1.5}
          className="dnm-line d-query" />
        <line x1={SG_Q_X1} y1={Q_Y} x2={SG_Q_X2} y2={Q_Y}
          stroke={MUTED} strokeWidth={1.5}
          className="dnm-line d-query" />

        {/* Phase 3 — Dispatch arcs: hub → TREs (muted) */}
        <path
          d={`M ${UK_DISP_SX},${UK_DISP_SY} Q ${UK_TCX - 10},${UK_TY - 16} ${UK_DISP_EX},${UK_DISP_EY}`}
          fill="none" stroke={MUTED} strokeWidth={1.5}
          className="dnm-line d-dispatch" />
        <path
          d={`M ${SG_DISP_SX},${SG_DISP_SY} Q ${SG_TCX + 10},${SG_TY - 16} ${SG_DISP_EX},${SG_DISP_EY}`}
          fill="none" stroke={MUTED} strokeWidth={1.5}
          className="dnm-line d-dispatch" />

        {/* Phase 4 — Result arcs: TREs → hub (brand) */}
        <path
          d={`M ${UK_RES_SX},${UK_RES_SY} Q ${UK_TCX + 10},${UK_TY - 16} ${UK_RES_EX},${UK_RES_EY}`}
          fill="none" stroke={BRAND} strokeWidth={1.5}
          className="dnm-line d-result-arc" />
        <path
          d={`M ${SG_RES_SX},${SG_RES_SY} Q ${SG_TCX - 10},${SG_TY - 16} ${SG_RES_EX},${SG_RES_EY}`}
          fill="none" stroke={BRAND} strokeWidth={1.5}
          className="dnm-line d-result-arc" />

        {/* Phase 5 — Result lines: hub → researchers (brand, below centre) */}
        <line x1={UK_R_X1} y1={R_Y} x2={UK_R_X2} y2={R_Y}
          stroke={BRAND} strokeWidth={1.5}
          className="dnm-line d-result-line" />
        <line x1={SG_R_X1} y1={R_Y} x2={SG_R_X2} y2={R_Y}
          stroke={BRAND} strokeWidth={1.5}
          className="dnm-line d-result-line" />
      </svg>
    </div>
  );
}
