"use client";

import { useEffect, useRef } from "react";
import { User, Mail, Clock, FileSpreadsheet, Globe } from "lucide-react";

// Size of each Lucide icon square; half used to centre the foreignObject
const SZ = 24;
const H  = SZ / 2;

const BRAND = "#234363";
const MUTED = "#9ca3af";
const MUTED_LINE = "#d1d5db";

const BY = 68;   // Before row y-centre
const AY = 148;  // After row y-centre

// Full cycle: ~4.1 s of animation + ~2.9 s hold = 7 s before replay
const CYCLE_MS = 7000;

export function WorkflowComparison() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    /*
      IMPORTANT: use setAttribute (SVG presentation attribute, specificity 0)
      NOT el.style (inline CSS, specificity 1000).
      Presentation attributes sit below any stylesheet rule in the cascade,
      so `svg[data-animate] .wfc-line { stroke-dashoffset: 0 }` can override
      them and trigger a CSS transition.  Inline styles cannot be overridden
      by stylesheets, which is why the original version's lines never drew.
    */
    const lines = [...svg.querySelectorAll<SVGGeometryElement>(".wfc-line")];
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
      // Freeze all transitions, snap everything to the hidden state
      svg!.classList.add("wfc-reset");
      svg!.removeAttribute("data-animate");
      /*
        No manual dashoffset reset needed: removing data-animate means the
        CSS override rule disappears, so the presentation attribute value
        (full length → hidden) automatically wins again.
        The wfc-reset class ensures transition:none so the snap is instant.
      */
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          svg!.classList.remove("wfc-reset");   // re-enable transitions
          requestAnimationFrame(() => {
            svg!.setAttribute("data-animate", "true"); // trigger forward anim
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
        svg.wfc-reset .wfc-icon,
        svg.wfc-reset .wfc-line,
        svg.wfc-reset .a-pop { transition: none !important; }

        /* ── base (hidden) states ──────────────────────────── */
        .wfc-icon {
          opacity: 0;
          transition: opacity 0.45s ease-out;
        }
        .wfc-line {
          fill: none;
          transition-property: stroke-dashoffset;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 0.4s;
        }

        /*
          Result circle spring-pop.
          Outer <g> carries the SVG translate; this inner <g class="a-pop">
          carries only the CSS scale so the two transforms don't collide.
        */
        .a-pop {
          transform-box: fill-box;
          transform-origin: center;
          transform: scale(0.5);
          opacity: 0;
          transition:
            opacity   0.25s ease-out                        1.2s,
            transform 0.4s  cubic-bezier(0.34,1.56,0.64,1) 1.2s;
        }

        /* ── triggered (visible) states ───────────────────── */
        svg[data-animate] .wfc-icon { opacity: 1; }
        svg[data-animate] .wfc-line { stroke-dashoffset: 0; }
        svg[data-animate] .a-pop    { opacity: 1; transform: scale(1); }

        /* ── BEFORE row timing ─────────────────────────────── */
        .b-person { transition-delay: 0.0s; }
        .b-ln1    { transition-duration: 0.3s;  transition-delay: 0.2s; }
        .b-env    { transition-delay: 0.5s; }
        .b-wait   { transition-duration: 2.6s;  transition-delay: 0.7s;
                    transition-timing-function: linear; }
        .b-dot1   { transition-delay: 1.05s; }
        .b-dot2   { transition-delay: 1.6s; }
        .b-dot3   { transition-delay: 2.15s; }
        .b-dot4   { transition-delay: 2.7s; }
        .b-clock  { transition-delay: 3.3s; }
        .b-ln2    { transition-duration: 0.3s;  transition-delay: 3.5s; }
        .b-sheet  { transition-delay: 3.8s; }

        /* ── AFTER row timing ──────────────────────────────── */
        .a-person { transition-delay: 0.3s; }
        .a-ln1    { transition-duration: 0.25s; transition-delay: 0.55s; }
        .a-query  { transition-delay: 0.8s; }
        .a-fast   { transition-duration: 0.2s;  transition-delay: 1.0s; }
        /* .a-pop delays baked into its transition shorthand above */
        .a-check  { transition-duration: 0.35s; transition-delay: 1.65s; }
      `}</style>

      <svg
        ref={svgRef}
        viewBox="0 0 580 190"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        aria-label="Before and after workflow comparison for Bunny cohort discovery"
      >
        {/* ── row labels ──────────────────────────────────── */}
        <text x={20} y={22} fontSize={8} fill={MUTED}
          fontFamily="ui-sans-serif,system-ui,sans-serif" letterSpacing={2}>
          BEFORE
        </text>
        <text x={20} y={120} fontSize={8} fill={BRAND}
          fontFamily="ui-sans-serif,system-ui,sans-serif"
          fontWeight={700} letterSpacing={2}>
          BUNNY
        </text>

        {/* ── divider ─────────────────────────────────────── */}
        <line x1={0} y1={104} x2={580} y2={104}
          stroke={MUTED_LINE} strokeWidth={1} />

        {/* ══════════ BEFORE ROW ══════════════════════════ */}

        {/* 1 · Researcher */}
        <foreignObject x={48-H} y={BY-H} width={SZ} height={SZ} className="wfc-icon b-person">
          <User size={SZ} color={MUTED} strokeWidth={1.5} />
        </foreignObject>

        {/* person → email */}
        <line x1={64} y1={BY} x2={122} y2={BY}
          stroke={MUTED} strokeWidth={1.5}
          className="wfc-line b-ln1" />

        {/* 2 · Email */}
        <foreignObject x={138-H} y={BY-H} width={SZ} height={SZ} className="wfc-icon b-env">
          <Mail size={SZ} color={MUTED} strokeWidth={1.5} />
        </foreignObject>

        {/*
          Long wait line: ends at x=352 (clock left edge is 374-14=360,
          giving an 8 px gap so the line doesn't run into the clock face).
        */}
        <line x1={156} y1={BY} x2={352} y2={BY}
          stroke={MUTED_LINE} strokeWidth={1.5}
          className="wfc-line b-wait" />

        {/*
          Tick dots evenly spread over the wait line.
          Offsets [45,90,135,175] → last dot at cx=331, right edge 334.
          Clock left edge = 360.  Gap ≈ 26 px — no crowding.
        */}
        {[45, 90, 135, 175].map((dx, i) => (
          <circle key={i}
            cx={156 + dx} cy={BY} r={3}
            fill="white" stroke={MUTED_LINE} strokeWidth={1.5}
            className={`wfc-icon b-dot${i + 1}`} />
        ))}

        {/* 3 · Clock */}
        <foreignObject x={374-H} y={BY-H} width={SZ} height={SZ} className="wfc-icon b-clock">
          <Clock size={SZ} color={MUTED} strokeWidth={1.5} />
        </foreignObject>

        {/* clock → spreadsheet */}
        <line x1={390} y1={BY} x2={462} y2={BY}
          stroke={MUTED} strokeWidth={1.5}
          className="wfc-line b-ln2" />

        {/* 4 · Spreadsheet */}
        <foreignObject x={478-H} y={BY-H} width={SZ} height={SZ} className="wfc-icon b-sheet">
          <FileSpreadsheet size={SZ} color={MUTED} strokeWidth={1.5} />
        </foreignObject>

        {/* ══════════ AFTER ROW ════════════════════════════ */}

        {/* 1 · Researcher */}
        <foreignObject x={48-H} y={AY-H} width={SZ} height={SZ} className="wfc-icon a-person">
          <User size={SZ} color={BRAND} strokeWidth={1.5} />
        </foreignObject>

        {/* person → browser */}
        <line x1={64} y1={AY} x2={122} y2={AY}
          stroke={BRAND} strokeWidth={1.5}
          className="wfc-line a-ln1" />

        {/* 2 · Web browser (Bunny's interface) */}
        <foreignObject x={138-H} y={AY-H} width={SZ} height={SZ} className="wfc-icon a-query">
          <Globe size={SZ} color={BRAND} strokeWidth={1.5} />
        </foreignObject>

        {/* terminal → result */}
        <line x1={156} y1={AY} x2={196} y2={AY}
          stroke={BRAND} strokeWidth={1.5}
          className="wfc-line a-fast" />

        {/*
          Result circle.
          Outer <g>: SVG translate (position only, no CSS transform).
          Inner <g class="a-pop">: CSS scale spring (no SVG transform).
          Separating them prevents CSS from clobbering the SVG translate.
        */}
        <g transform={`translate(212,${AY})`}>
          <g className="a-pop">
            <circle r={15} fill={BRAND} />
          </g>
        </g>

        {/*
          Checkmark as a standalone <path> in absolute SVG coordinates.
          Using class "wfc-line" means it gets the stroke-dashoffset
          draw animation via setAttribute (not inline style), so the
          stylesheet's svg[data-animate] rule can correctly override it.
          Coordinates = circle centre (212, AY) + relative offsets.
        */}
        <path
          d={`M${212 - 7},${AY + 1} L${212 - 1.5},${AY + 7} L${212 + 8},${AY - 6}`}
          fill="none"
          stroke="white"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="wfc-line a-check"
        />
      </svg>
    </div>
  );
}
