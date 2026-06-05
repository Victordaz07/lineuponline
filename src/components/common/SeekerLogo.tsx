interface SeekerLogoProps {
  size?: number
  variant?: 'dark' | 'light' | 'parchment'
  rounded?: 'square' | 'rounded' | 'circle'
}

const STROKE: Record<NonNullable<SeekerLogoProps['variant']>, string> = {
  dark: '#D4AF62',
  light: '#E8C87A',
  parchment: '#B8923A',
}

const BG: Record<NonNullable<SeekerLogoProps['variant']>, string> = {
  dark: '#0D1B2A',
  light: '#1A2E45',
  parchment: '#F5EFE0',
}

const RADIUS: Record<NonNullable<SeekerLogoProps['rounded']>, number> = {
  square: 0,
  rounded: 80,
  circle: 250,
}

export function SeekerLogo({ size = 40, variant = 'dark', rounded = 'rounded' }: SeekerLogoProps) {
  const stroke = STROKE[variant]
  const bg = BG[variant]
  const rx = RADIUS[rounded]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Seeker Gospel"
    >
      <rect width="500" height="500" rx={rx} fill={bg} />
      <g transform="translate(250,250)" stroke={stroke} strokeWidth="6" strokeLinecap="round">
        {/* Arch left */}
        <path d="M -150,70 A 160,160 0 0,1 -15,-155" fill="none" />
        {/* Arch right */}
        <path d="M 15,-155 A 160,160 0 0,1 150,70" fill="none" />
        {/* Book */}
        <path
          d="M 0,90 C -35,75 -85,75 -130,95 L -130,-75 C -85,-95 -35,-95 0,-75 C 35,-95 85,-95 130,-75 L 130,95 C 85,75 35,75 0,90 Z"
          fill="none"
        />
        <line x1="0" y1="-75" x2="0" y2="90" />
        {/* Needle */}
        <g transform="rotate(-38)">
          <polygon points="0,-190 22,0 0,190 -22,0" fill={stroke} opacity="0.9" />
          <circle cx="0" cy="0" r="14" fill={bg} stroke={stroke} />
        </g>
      </g>
    </svg>
  )
}
