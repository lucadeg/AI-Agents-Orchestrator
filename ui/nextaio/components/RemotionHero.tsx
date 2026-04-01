"use client";

import { Player } from "@remotion/player";
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from "remotion";

const HeroComposition = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sec = frame / fps;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172b, #17233f)",
        color: "white",
        fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      }}
    >
      <Sequence from={0}>
        <h2 style={{ margin: 0 }}>MVX Apocalypse</h2>
      </Sequence>
      <Sequence from={8}>
        <p style={{ opacity: 0.7, marginTop: 8 }}>Unified Agent Control - t={sec.toFixed(1)}s</p>
      </Sequence>
    </AbsoluteFill>
  );
};

export function RemotionHero() {
  return <Player component={HeroComposition} durationInFrames={120} fps={30} compositionWidth={600} compositionHeight={180} controls loop />;
}
