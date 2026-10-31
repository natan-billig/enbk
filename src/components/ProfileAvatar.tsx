"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProfileAvatarProps {
  className?: string;
  size?: number;
}

export function ProfileAvatar({ className = "", size = 160 }: ProfileAvatarProps) {
  // Use profile.jpg as primary; avatar.svg as fallback on error
  const [usePhoto, setUsePhoto] = useState(true);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer ambient futuristic glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 via-emerald-500/20 to-cyan-400/40 rounded-full blur-md opacity-75 animate-pulse-subtle pointer-events-none" />

      {/* Cybernetic Tech Frame border */}
      <div className="relative p-1 rounded-full bg-gradient-to-b from-cyan-400/50 via-slate-800 to-emerald-400/40 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
        <div className="relative rounded-full overflow-hidden bg-slate-950 flex items-center justify-center w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] border border-cyan-500/20">
          {usePhoto ? (
            <Image
              src="/images/profile.jpg"
              alt="Natan Billig"
              width={size}
              height={size}
              priority
              sizes="(max-width: 640px) 140px, 160px"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              onError={() => setUsePhoto(false)}
            />
          ) : (
            <Image
              src="/images/avatar.svg"
              alt="Natan Billig - NB Avatar"
              width={size}
              height={size}
              priority
              sizes="(max-width: 640px) 140px, 160px"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          )}
        </div>
      </div>

      {/* Decorative cyber corner accents */}
      <div className="absolute top-0 right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400 rounded-tr-sm pointer-events-none" />
      <div className="absolute bottom-0 left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-400 rounded-bl-sm pointer-events-none" />
    </div>
  );
}
