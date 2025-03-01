import React, { useEffect, useRef } from "react";
type SoundEffect = {
  hover: HTMLAudioElement;
  click: HTMLAudioElement;
  success: HTMLAudioElement;
};
export const useSoundEffects = () => {
  const sounds = useRef<SoundEffect>({
    hover: new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"),
    click: new Audio("https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3"),
    success: new Audio("https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3")
  });
  useEffect(() => {
    // Pre-load sounds
    Object.values(sounds.current).forEach(audio => {
      audio.volume = 0.2;
      audio.load();
    });
  }, []);
  return {
    playHover: () => sounds.current.hover.play().catch(() => {}),
    playClick: () => sounds.current.click.play().catch(() => {}),
    playSuccess: () => sounds.current.success.play().catch(() => {})
  };
};