'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  disabled?: boolean
}

export function SplineScene({ scene, className, disabled = false }: SplineSceneProps) {
  if (disabled) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-zinc-950 to-black text-white ${className ?? ''}`}>
        <div className="text-center px-6">
          <p className="text-lg font-semibold">Fast mode enabled</p>
          <p className="mt-2 text-sm text-zinc-300">3D scene is hidden to improve page speed.</p>
        </div>
      </div>
    )
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader border-4 border-t-transparent border-white w-8 h-8 rounded-full animate-spin"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
