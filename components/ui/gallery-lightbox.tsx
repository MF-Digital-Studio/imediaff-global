"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

interface GalleryLightboxProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

// A simple solid gray base64 image for the blur placeholder
const BLUR_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

export function GalleryLightbox({ images, currentIndex, isOpen, onClose, onNavigate }: GalleryLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  // Reset zoom when navigating
  useEffect(() => {
    setIsZoomed(false)
  }, [currentIndex])

  // Handle Keyboard Navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return
    if (e.key === "Escape") {
      onClose()
    } else if (e.key === "ArrowLeft") {
      onNavigate((currentIndex - 1 + images.length) % images.length)
    } else if (e.key === "ArrowRight") {
      onNavigate((currentIndex + 1) % images.length)
    }
  }, [isOpen, currentIndex, images.length, onClose, onNavigate])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    onNavigate((currentIndex + 1) % images.length)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    onNavigate((currentIndex - 1 + images.length) % images.length)
  }

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsZoomed((prev) => !prev)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image Gallery Lightbox"
        >
          {/* Top Bar Controls */}
          <div className="absolute top-0 inset-x-0 flex justify-between items-center p-4 md:p-6 z-10 bg-gradient-to-b from-black/60 to-transparent">
            <span className="text-white/60 font-mono text-xs tracking-widest uppercase">
              {currentIndex + 1} / {images.length}
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleZoom}
                className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
              >
                {isZoomed ? <ZoomOut size={24} /> : <ZoomIn size={24} />}
              </button>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Close lightbox"
              >
                <X size={28} />
              </button>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10 z-10 hidden md:block"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10 z-10 hidden md:block"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>

          {/* Image Container with Swipe */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center p-4 md:p-12"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                drag={isZoomed ? true : "x"}
                dragConstraints={isZoomed ? undefined : { left: 0, right: 0 }}
                dragElastic={isZoomed ? 0.2 : 0.8}
                onDragEnd={(e, { offset, velocity }) => {
                  if (isZoomed) return
                  const swipe = offset.x
                  if (swipe < -50 || velocity.x < -500) {
                    onNavigate((currentIndex + 1) % images.length)
                  } else if (swipe > 50 || velocity.x > 500) {
                    onNavigate((currentIndex - 1 + images.length) % images.length)
                  }
                }}
                onClick={(e) => {
                  if (isZoomed) e.stopPropagation()
                }}
                onDoubleClick={toggleZoom}
              >
                <motion.div
                  className={`relative ${isZoomed ? "w-[150vw] h-[150vh]" : "w-full h-full max-w-7xl max-h-[85vh]"}`}
                  animate={{ scale: isZoomed ? 1.5 : 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`Gallery Image ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    draggable={false}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
