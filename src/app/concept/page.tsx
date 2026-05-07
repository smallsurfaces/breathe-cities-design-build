/**
 * Concept page — design concept from Figma
 *
 * Purpose: renders a left-aligned, single-column layout demonstrating
 * BC design tokens applied to Title Large text, shadcn Card and Button
 * components, and AQI severity badges. This is not a production page —
 * it validates design-system token usage in a concept layout context.
 *
 * Key exports: default (ConceptPage)
 * Dependencies: Nav, Button (shadcn), Card/CardContent/CardDescription/
 *   CardHeader/CardTitle (shadcn)
 */

import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ConceptPage() {
  return (
    <main className="min-h-screen bg-bc-surface-default">
      <Nav />
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-12 lg:px-20">
        <div className="flex flex-col gap-5">

          {/* Title: "hello" */}
          <h1
            className="font-medium text-bc-brand-primary"
            style={{
              fontSize: "var(--bc-typography-title-large-base-font-size)",
              lineHeight: "var(--bc-typography-title-large-base-line-height)",
            }}
          >
            hello
          </h1>

          {/* Card — Air Quality Index */}
          <Card className="max-w-[448px]">
            <CardHeader>
              <CardTitle>Air Quality Index</CardTitle>
              <CardDescription>
                Real-time AQI monitoring for urban environments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                This card uses shadcn/ui with its CSS variables mapped to BC
                design-system tokens. The background, text colour, and border
                all resolve through the token chain.
              </p>
            </CardContent>
          </Card>

          {/* Title: "Air quality" */}
          <h2
            className="font-medium text-bc-brand-primary"
            style={{
              fontSize: "var(--bc-typography-title-large-base-font-size)",
              lineHeight: "var(--bc-typography-title-large-base-line-height)",
            }}
          >
            Air quality
          </h2>

          {/* AQI badges — 4x "Very Unhealthy" */}
          <div className="flex gap-2.5">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-lg bg-bc-aqi-very-unhealthy-bg px-3 py-1.5"
              >
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-bc-aqi-very-unhealthy" />
                <span className="text-sm font-medium text-bc-aqi-very-unhealthy-text">
                  Very Unhealthy
                </span>
              </div>
            ))}
          </div>

          {/* Title: "Act now" */}
          <h2
            className="font-medium text-bc-brand-primary"
            style={{
              fontSize: "var(--bc-typography-title-large-base-font-size)",
              lineHeight: "var(--bc-typography-title-large-base-line-height)",
            }}
          >
            Act now
          </h2>

          {/* Buttons — Primary + 2x Secondary */}
          <div className="flex gap-2.5">
            <Button variant="default">Button</Button>
            <Button variant="secondary">Button</Button>
            <Button variant="secondary">Button</Button>
          </div>

        </div>
      </div>
    </main>
  );
}
