"use client"

import Lenis from "lenis"
import { usePathname } from "next/navigation"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react"
import type { ReactNode } from "react"

type LenisProviderProps = {
  children: ReactNode
}

type SetLerpOptions = {
  durationMs?: number
}

type LenisContextValue = {
  getLenis: () => Lenis | null
  defaultLerp: number
  setLerp: (nextLerp: number, options?: SetLerpOptions) => void
}

const DEFAULT_LERP = 0.1
const LenisContext = createContext<LenisContextValue | null>(null)

export default function LenisProvider({ children }: LenisProviderProps) {
  const pathname = usePathname()
  const lenisRef = useRef<Lenis | null>(null)
  const lerpAnimationFrameRef = useRef<number | null>(null)
  const getLenis = useCallback(() => lenisRef.current, [])

  const setLerp = useCallback((nextLerp: number, options?: SetLerpOptions) => {
    const lenis = lenisRef.current
    if (!lenis) return

    const durationMs = options?.durationMs ?? 260
    const safeLerp = Math.max(0, Math.min(1, nextLerp))
    const startLerp = lenis.options.lerp ?? DEFAULT_LERP

    if (lerpAnimationFrameRef.current) {
      cancelAnimationFrame(lerpAnimationFrameRef.current)
      lerpAnimationFrameRef.current = null
    }

    if (durationMs <= 0 || Math.abs(startLerp - safeLerp) < 0.0001) {
      lenis.options.lerp = safeLerp
      return
    }

    const startTime = performance.now()
    const delta = safeLerp - startLerp

    const animate = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      lenis.options.lerp = startLerp + delta * eased

      if (progress < 1) {
        lerpAnimationFrameRef.current = requestAnimationFrame(animate)
      } else {
        lerpAnimationFrameRef.current = null
      }
    }

    lerpAnimationFrameRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const lenis = lenisRef.current
    if (!lenis) return

    lenis.scrollTo(0, { immediate: true })
  }, [pathname])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: DEFAULT_LERP,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    let rafId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // motion/react useScroll benzeri scroll dinleyicilerinin her frame senkron kalmasina yardimci olur.
    const syncMotionScroll = () => {
      window.dispatchEvent(new Event("scroll"))
    }

    lenis.on("scroll", syncMotionScroll)

    return () => {
      cancelAnimationFrame(rafId)
      if (lerpAnimationFrameRef.current) {
        cancelAnimationFrame(lerpAnimationFrameRef.current)
      }
      lenis.off("scroll", syncMotionScroll)
      lenis.destroy()
      lenisRef.current = null
      lerpAnimationFrameRef.current = null
    }
  }, [])

  const contextValue = useMemo<LenisContextValue>(
    () => ({
      getLenis,
      defaultLerp: DEFAULT_LERP,
      setLerp,
    }),
    [getLenis, setLerp],
  )

  return <LenisContext.Provider value={contextValue}>{children}</LenisContext.Provider>
}

export function useLenis() {
  const context = useContext(LenisContext)
  if (!context) {
    throw new Error("useLenis must be used inside <LenisProvider />")
  }
  return context
}
