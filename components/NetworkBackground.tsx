import { useEffect, useRef } from 'react'

interface NetworkBackgroundProps {
  fontSize?: number
  spacing?: number
  opacity?: number
}

const NetworkBackground: React.FC<NetworkBackgroundProps> = ({
  fontSize = 12,
  spacing = 15,
  opacity = 0.15,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef({ x: -1000, y: -1000 })
  const animationFrameRef = useRef<number | undefined>(undefined)
  const charsGridRef = useRef<string[][]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initializeGrid()
    }

    const getRandomCharacter = (): string => {
      const rand = Math.random()

      if (rand < 0.5) {
        return Math.random() < 0.5 ? '0' : '1'
      }

      if (rand < 0.625) {
        return Math.floor(Math.random() * 8).toString()
      }

      if (rand < 0.6875) {
        const hex = '0123456789ABCDEF'
        return hex[Math.floor(Math.random() * hex.length)]
      }

      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      return chars[Math.floor(Math.random() * chars.length)]
    }

    const initializeGrid = () => {
      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)
      charsGridRef.current = []
      for (let row = 0; row < rows; row++) {
        charsGridRef.current[row] = []
        for (let col = 0; col < cols; col++) {
          charsGridRef.current[row][col] = getRandomCharacter()
        }
      }
    }

    const drawPattern = (mx: number, my: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`

      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * spacing
          const y = row * spacing + fontSize

          const dx = x - mx
          const dy = y - my
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          let currentOpacity = opacity
          let color = '120, 140, 150'
          let char = charsGridRef.current[row]?.[col] || '0'

          if (distance < maxDistance) {
            const intensity = 1 - distance / maxDistance
            currentOpacity = opacity + intensity * 0.4
            const r = Math.floor(17 + intensity * 100)
            const g = Math.floor(109 + intensity * 85)
            const b = Math.floor(147 + intensity * 70)
            color = `${r}, ${g}, ${b}`

            if (Math.random() < intensity * 0.3) {
              char = getRandomCharacter()
              charsGridRef.current[row][col] = char
            }
          }

          ctx.fillStyle = `rgba(${color}, ${currentOpacity})`
          ctx.fillText(char, x, y)
        }
      }
    }

    const handleResize = () => {
      resizeCanvas()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      drawPattern(mousePosRef.current.x, mousePosRef.current.y)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [fontSize, spacing, opacity])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

export default NetworkBackground
