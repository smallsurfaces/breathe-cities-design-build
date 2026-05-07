/**
 * Proof-of-concept landing page
 *
 * Purpose: visually confirm that the BC design-system token pipeline works
 * end-to-end — tokens flow from the design-system repo into Tailwind utilities
 * and shadcn components in this build.
 *
 * This is not a production page. It exists solely to validate:
 * - Söhne font loading (all 4 weights)
 * - BC colour tokens via Tailwind utilities (bg-bc-*, text-bc-*)
 * - shadcn components (Button, Card) styled with BC brand colours
 * - Responsive type scale tokens from the design system
 * - AQI severity band colours (6 bands)
 * - Regional colours (4 regions)
 */

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/** AQI severity bands — sourced from design-system tokens */
const AQI_BANDS = [
  { label: "Good", range: "0–50", bgClass: "bg-bc-aqi-good-bg", textClass: "text-bc-aqi-good-text", indicatorClass: "bg-bc-aqi-good" },
  { label: "Moderate", range: "51–100", bgClass: "bg-bc-aqi-moderate-bg", textClass: "text-bc-aqi-moderate-text", indicatorClass: "bg-bc-aqi-moderate" },
  { label: "USG", range: "101–150", bgClass: "bg-bc-aqi-unhealthy-sensitive-bg", textClass: "text-bc-aqi-unhealthy-sensitive-text", indicatorClass: "bg-bc-aqi-unhealthy-sensitive" },
  { label: "Unhealthy", range: "151–200", bgClass: "bg-bc-aqi-unhealthy-bg", textClass: "text-bc-aqi-unhealthy-text", indicatorClass: "bg-bc-aqi-unhealthy" },
  { label: "Very Unhealthy", range: "201–300", bgClass: "bg-bc-aqi-very-unhealthy-bg", textClass: "text-bc-aqi-very-unhealthy-text", indicatorClass: "bg-bc-aqi-very-unhealthy" },
  { label: "Hazardous", range: "301+", bgClass: "bg-bc-aqi-hazardous-bg", textClass: "text-bc-aqi-hazardous-text", indicatorClass: "bg-bc-aqi-hazardous" },
] as const;

/** Regional colours — sourced from design-system tokens */
const REGIONS = [
  { label: "Asia-Pacific", colorClass: "bg-bc-region-asia-pacific" },
  { label: "Europe", colorClass: "bg-bc-region-europe" },
  { label: "Latin America", colorClass: "bg-bc-region-latin-america" },
  { label: "Africa", colorClass: "bg-bc-region-africa" },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-bc-surface-default px-6 py-12 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl space-y-16">

        {/* --- Hero section --- */}
        <section className="space-y-4">
          <h1
            className="text-bc-text-default font-medium"
            style={{
              fontSize: "var(--bc-typography-title-large-base-font-size)",
              lineHeight: "var(--bc-typography-title-large-base-line-height)",
            }}
          >
            Breathe Cities
          </h1>
          <p
            className="text-bc-text-default max-w-2xl"
            style={{
              fontSize: "var(--bc-typography-body-base-font-size)",
              lineHeight: "var(--bc-typography-body-base-line-height)",
            }}
          >
            Air quality data for every city on earth. This page proves that
            the design-system token pipeline is working — colours, type scale,
            and font all flow from the BC design system into the build.
          </p>
        </section>

        {/* --- Font weight specimens --- */}
        <section className="space-y-4">
          <h2
            className="text-bc-text-default"
            style={{
              fontSize: "var(--bc-typography-title-small-base-font-size)",
              lineHeight: "var(--bc-typography-title-small-base-line-height)",
              fontWeight: "var(--bc-font-weight-semibold)",
            }}
          >
            Font Specimens
          </h2>
          <div className="space-y-2 text-bc-text-default">
            <p style={{ fontWeight: "var(--bc-font-weight-regular)" }}>
              Sohne Buch (400) — The quick brown fox jumps over the lazy dog
            </p>
            <p style={{ fontWeight: "var(--bc-font-weight-medium)" }}>
              Sohne Kraftig (500) — The quick brown fox jumps over the lazy dog
            </p>
            <p style={{ fontWeight: "var(--bc-font-weight-semibold)" }}>
              Sohne Halbfett (600) — The quick brown fox jumps over the lazy dog
            </p>
            <p style={{ fontWeight: "var(--bc-font-weight-bold)" }}>
              Sohne Fett (800) — The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </section>

        {/* --- shadcn Button specimens --- */}
        <section className="space-y-4">
          <h2
            className="text-bc-text-default"
            style={{
              fontSize: "var(--bc-typography-title-small-base-font-size)",
              lineHeight: "var(--bc-typography-title-small-base-line-height)",
              fontWeight: "var(--bc-font-weight-semibold)",
            }}
          >
            Button Components
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="default" size="lg">
              Primary Action
            </Button>
            <Button variant="secondary" size="lg">
              Secondary
            </Button>
            <Button variant="outline" size="lg">
              Outline
            </Button>
            <Button variant="ghost" size="lg">
              Ghost
            </Button>
            <Button variant="destructive" size="lg">
              Destructive
            </Button>
          </div>
        </section>

        {/* --- shadcn Card specimen --- */}
        <section className="space-y-4">
          <h2
            className="text-bc-text-default"
            style={{
              fontSize: "var(--bc-typography-title-small-base-font-size)",
              lineHeight: "var(--bc-typography-title-small-base-line-height)",
              fontWeight: "var(--bc-font-weight-semibold)",
            }}
          >
            Card Component
          </h2>
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Air Quality Index</CardTitle>
              <CardDescription>
                Real-time AQI monitoring for urban environments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p
                style={{
                  fontSize: "var(--bc-typography-body-base-font-size)",
                  lineHeight: "var(--bc-typography-body-base-line-height)",
                }}
              >
                This card uses shadcn/ui with its CSS variables mapped to BC
                design-system tokens. The background, text colour, and border
                all resolve through the token chain.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* --- AQI severity bands --- */}
        <section className="space-y-4">
          <h2
            className="text-bc-text-default"
            style={{
              fontSize: "var(--bc-typography-title-small-base-font-size)",
              lineHeight: "var(--bc-typography-title-small-base-line-height)",
              fontWeight: "var(--bc-font-weight-semibold)",
            }}
          >
            AQI Severity Bands
          </h2>
          <div className="flex flex-wrap gap-3">
            {AQI_BANDS.map((band) => (
              <div
                key={band.label}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 ${band.bgClass}`}
              >
                <span
                  className={`inline-block h-3 w-3 rounded-full ${band.indicatorClass}`}
                />
                <span className={`text-sm font-medium ${band.textClass}`}>
                  {band.label}
                </span>
                <span className={`text-xs ${band.textClass} opacity-70`}>
                  {band.range}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- Regional colours --- */}
        <section className="space-y-4">
          <h2
            className="text-bc-text-default"
            style={{
              fontSize: "var(--bc-typography-title-small-base-font-size)",
              lineHeight: "var(--bc-typography-title-small-base-line-height)",
              fontWeight: "var(--bc-font-weight-semibold)",
            }}
          >
            Regional Colours
          </h2>
          <div className="flex gap-0 overflow-hidden rounded-lg">
            {REGIONS.map((region) => (
              <div
                key={region.label}
                className={`flex h-16 flex-1 items-center justify-center ${region.colorClass}`}
              >
                <span className="text-xs font-semibold text-white drop-shadow-sm">
                  {region.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* --- BC Blue accent bar --- */}
        <section className="space-y-4">
          <h2
            className="text-bc-text-default"
            style={{
              fontSize: "var(--bc-typography-title-small-base-font-size)",
              lineHeight: "var(--bc-typography-title-small-base-line-height)",
              fontWeight: "var(--bc-font-weight-semibold)",
            }}
          >
            Brand Colour
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-lg bg-bc-brand-primary" />
            <div>
              <p className="text-sm font-medium text-bc-text-default">
                BC Blue
              </p>
              <p className="text-xs text-bc-text-default opacity-60">
                --bc-color-brand-primary
              </p>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="border-t border-bc-border-default pt-6 text-xs text-bc-text-default opacity-40">
          Token proof page — breathe-cities-design-build
        </footer>
      </div>
    </main>
  );
}
