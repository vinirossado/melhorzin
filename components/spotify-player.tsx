"use client"

import { useEffect, useRef, useState } from "react"

interface SpotifyPlayerProps {
  trackId: string
  showCover?: boolean
  theme?: "dark" | "light"
  className?: string
  size?: "compact" | "normal"
  autoPlay?: boolean
}

export default function SpotifyPlayer({
  trackId,
  showCover = true,
  theme = "dark",
  className = "",
  size = "normal",
  autoPlay = false,
}: SpotifyPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Verificar se o script do Spotify já foi carregado
    if (!document.getElementById("spotify-player-script")) {
      const script = document.createElement("script")
      script.id = "spotify-player-script"
      script.src = "https://open.spotify.com/embed/iframe-api/v1"
      script.async = true

      script.onload = () => {
        setIsLoaded(true)
      }

      document.body.appendChild(script)
    } else {
      setIsLoaded(true)
    }
  }, [])

  // Altura do player baseada no tamanho
  const height = size === "compact" ? 80 : 152

  return (
    <div className={`spotify-player ${className}`}>
      {trackId && (
        <iframe
          ref={iframeRef}
          src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator${showCover ? "" : "&view=list"}&theme=${theme}${autoPlay ? "&autoplay=1" : ""}`}
          width="100%"
          height={height}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      )}
    </div>
  )
}

