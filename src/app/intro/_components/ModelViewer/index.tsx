'use client'
import React, { useEffect, FC, CSSProperties } from 'react'

interface ModelViewerProps {
  src: string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': MyElementAttributes
    }
    interface MyElementAttributes {
      className?: string
      src: string
      poster?: string
      alt?: string
      ar?: boolean
      scale?: string
      style?: React.CSSProperties
      'auto-rotate'?: boolean
      'camera-controls'?: boolean
    }
  }
}

const ModelViewer: FC<ModelViewerProps> = ({ src }) => {
  const [style, setStyle] = React.useState<CSSProperties>({})

  useEffect(() => {
    import('@google/model-viewer').catch((error) => {
      console.error('Failed to load model-viewer:', error)
    })
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setStyle({ width: '320px', height: '300px' })
      } else if (window.innerWidth < 900) {
        setStyle({ width: '320px', height: '300px' }) // Fixed width value
      } else {
        setStyle({ width: '100%', height: '300px' })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <model-viewer style={style} className="h-full w-full" src={src} auto-rotate camera-controls ar></model-viewer>
}

export default ModelViewer
