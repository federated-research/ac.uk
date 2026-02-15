"use client";

import { ArrowUpRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FadeIn } from "@/components/core/fade-in";

/* ── Header ─────────────────────────────────────────────── */

export function CaseStudyHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-brand text-white py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
            {label}
          </p>
          <h1 className="mt-4 text-white">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-xl text-white/70 leading-relaxed">{subtitle}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Metrics ─────────────────────────────────────────────── */

export function Metrics({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12 md:py-16">
      <FadeIn>
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, 1fr)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`py-2 ${i > 0 ? "border-l pl-6 md:pl-8" : ""}`}
            >
              <p className="text-4xl font-bold tracking-tight md:text-5xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}

/* ── Figure ──────────────────────────────────────────────── */

export function Figure({
  src,
  alt = "",
  caption,
  aspect = "21/9",
}: {
  src: string;
  alt?: string;
  caption?: string;
  aspect?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 py-8 md:py-12">
      <FadeIn>
        <figure>
          <img
            src={src}
            alt={alt}
            className="w-full object-cover border"
            style={{ aspectRatio: aspect }}
          />
          {caption && (
            <figcaption className="mt-3 text-xs text-muted-foreground">
              {caption}
            </figcaption>
          )}
        </figure>
      </FadeIn>
    </div>
  );
}

/* ── Quote ────────────────────────────────────────────────── */

export function Quote({
  text,
  attribution,
}: {
  text: string;
  attribution?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 py-10 md:py-16">
      <FadeIn>
        <blockquote className="border-l-2 border-brand pl-6 md:pl-8">
          <p className="text-2xl font-semibold leading-relaxed tracking-tight md:text-3xl">
            {text}
          </p>
          {attribution && (
            <footer className="mt-4 text-sm text-muted-foreground">
              {attribution}
            </footer>
          )}
        </blockquote>
      </FadeIn>
    </div>
  );
}

/* ── Summary ─────────────────────────────────────────────── */

export function Summary({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 py-8 md:py-12">
      <FadeIn>
        <p className="text-xl leading-relaxed text-muted-foreground">
          {children}
        </p>
      </FadeIn>
    </div>
  );
}

/* ── Prose ────────────────────────────────────────────────── */

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 py-6 md:py-8">
      <FadeIn>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {children}
        </div>
      </FadeIn>
    </div>
  );
}

/* ── Section break ───────────────────────────────────────── */

export function SectionBreak({ label }: { label?: string }) {
  if (label) {
    return (
      <div className="mx-auto max-w-3xl px-6 lg:px-8 pt-12 md:pt-16">
        <FadeIn>
          <Separator />
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {label}
          </p>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 py-4">
      <Separator />
    </div>
  );
}

/* ── Resources ──────────────────────────────────────────── */

export function Resources({
  title = "Further reading",
  description,
  links,
}: {
  title?: string;
  description?: string;
  links: {
    href: string;
    title: string;
    description?: string;
    label?: string;
  }[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12 md:py-16">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </p>
        {description && (
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </FadeIn>
      <div className="mt-6">
        {links.map((link, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 border-t py-5 transition-colors hover:text-brand"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-semibold tracking-tight">
                    {link.title}
                  </span>
                  {link.label && (
                    <span className="shrink-0 border px-2 py-0.5 text-xs text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </div>
                {link.description && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {link.description}
                  </p>
                )}
              </div>
              <ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
