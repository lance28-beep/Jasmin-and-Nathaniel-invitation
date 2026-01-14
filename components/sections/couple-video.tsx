"use client"

import { useState, useRef, useEffect } from "react"
import { Section } from "@/components/section"
import { motion } from "motion/react"
import { useAudio } from "@/contexts/audio-context"

export function CoupleVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { pauseMusic, resumeMusic } = useAudio()
  const [isPlaying, setIsPlaying] = useState(false)

  // Handle video play/pause
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => {
      setIsPlaying(true)
      pauseMusic()
    }

    const handlePause = () => {
      setIsPlaying(false)
      resumeMusic()
    }

    const handleEnded = () => {
      // Loop the video
      video.currentTime = 0
      video.play()
    }

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handleEnded)
    }
  }, [pauseMusic, resumeMusic])

  const handleVideoClick = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  return (
    <Section
      id="couple-video"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#187153]"
    >
      {/* Background image - matching narrative section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/Details/newBackground.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Header with sweet marriage proposal theme */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4">
        <motion.div 
          className="space-y-2 sm:space-y-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-white mb-2"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            Our Proposal Story
          </p>
          
          <h2 className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-1.5 sm:mb-3 md:mb-4" style={{ textShadow: "0 4px 18px rgba(0,0,0,0.9)" }}>
            Will You Marry Me?
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-white/90 font-light max-w-2xl mx-auto px-2 leading-relaxed" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}>
            A precious moment captured—when two hearts became one promise
          </p>

          {/* Decorative flourish */}
          <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-[#327B72]/80 to-transparent" />
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white/80"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-[#327B72]/80 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Video Container */}
      <div className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Enhanced glow effect with green motif - matching narrative */}
            <div className="absolute -inset-2 bg-gradient-to-br from-[#327B72]/35 via-[#A98634]/24 to-[#FACBC5]/32 blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500" />
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#187153]/30 via-transparent to-[#327B72]/26 blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-500" />
            
            {/* Elegant video frame with green motif styling */}
            <div className="relative bg-gradient-to-br from-[#187153]/90 via-[#327B72]/80 to-[#187153]/90 overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.4),0_16px_64px_rgba(0,0,0,0.35),0_0_0_1px_rgba(50,123,114,0.3)] group-hover:shadow-[0_14px_52px_rgba(0,0,0,0.5),0_26px_100px_rgba(0,0,0,0.4),0_0_0_1px_rgba(50,123,114,0.4)] transition-all duration-500">
              {/* Decorative border with green gradient */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl md:rounded-[2rem] border-2 border-[#327B72]/50 group-hover:border-[#FACBC5]/60 transition-colors duration-500 pointer-events-none z-20" />
              
              {/* Inner glow for depth */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none z-10" />
              
              {/* Elegant corner accents - top left */}
              <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 pointer-events-none z-20">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#FACBC5]/60 via-[#327B72]/40 to-transparent" />
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#FACBC5]/60 via-[#327B72]/40 to-transparent" />
              </div>
              
              {/* Elegant corner accents - top right */}
              <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 pointer-events-none z-20">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-[#FACBC5]/60 via-[#327B72]/40 to-transparent" />
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-[#FACBC5]/60 via-[#327B72]/40 to-transparent" />
              </div>
              
              {/* Elegant corner accents - bottom left */}
              <div className="absolute bottom-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 pointer-events-none z-20">
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#FACBC5]/60 via-[#327B72]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-[#FACBC5]/60 via-[#327B72]/40 to-transparent" />
              </div>
              
              {/* Elegant corner accents - bottom right */}
              <div className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 pointer-events-none z-20">
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[#FACBC5]/60 via-[#327B72]/40 to-transparent" />
                <div className="absolute bottom-0 right-0 w-px h-full bg-gradient-to-t from-[#FACBC5]/60 via-[#327B72]/40 to-transparent" />
              </div>
              
              {/* Video wrapper with 16:9 aspect ratio */}
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <video
                  ref={videoRef}
                  src="/background_music/9F84759F-E2E0-453E-9C8D-18F5F4E46AC0.mp4"
                  poster="/desktop-background/couple (6).jpg"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl md:rounded-[2rem] cursor-pointer"
                  loop
                  playsInline
                  onClick={handleVideoClick}
                  onLoadedMetadata={(e) => {
                    // Auto-play the video when loaded
                    const video = e.currentTarget
                    video.play().catch(() => {
                      // Auto-play was prevented, that's okay
                    })
                  }}
                />
                
                {/* Play/Pause overlay indicator */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl sm:rounded-3xl md:rounded-[2rem] pointer-events-none z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl border-2 border-[#FACBC5]/40">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#187153] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* Sweet caption below video */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mt-8 sm:mt-10 space-y-2 sm:space-y-3"
          >
            <p
              className="text-sm sm:text-base md:text-lg text-white/90 font-light italic max-w-2xl mx-auto px-4 leading-relaxed"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
            >
              "Will you marry me?" — The moment that sealed our forever
            </p>
            <p
              className="text-xs sm:text-sm md:text-base text-white/85 font-light max-w-2xl mx-auto px-4 leading-relaxed"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
            >
              Under the cherry blossoms of Nabana no Sato Flower Garden, Mie-ken, Japan, I asked forever and she said YES.
            </p>
            <p
              className="text-[0.7rem] sm:text-xs md:text-sm tracking-[0.18em] uppercase text-white/80 max-w-2xl mx-auto px-4"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
            >
              March 25, 2024
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

