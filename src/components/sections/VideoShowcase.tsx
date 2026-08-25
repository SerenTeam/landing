"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export default function VideoShowcase({ lang = "fr" }: { lang?: Locale }) {
  const t = getDictionary(lang).videoShowcase;
  const videoRef = useRef<HTMLVideoElement>(null);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!userPausedRef.current) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  if (hasError) return null;

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      video.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  };

  return (
    <section id="video-demo" className="scroll-mt-[100px] bg-white pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <Reveal y={24} className="relative aspect-video w-full overflow-hidden rounded-card bg-surface shadow-card">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src="/videos/seren-demo.mp4"
            poster="/videos/seren-demo-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={t.ariaLabel}
            onError={() => setHasError(true)}
          />

          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? t.pauseLabel : t.playLabel}
            className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center text-text-muted drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] transition-colors hover:text-text"
          >
            {isPlaying ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="9" y1="5" x2="9" y2="19" />
                <line x1="15" y1="5" x2="15" y2="19" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            )}
          </button>
        </Reveal>
      </Container>
    </section>
  );
}
