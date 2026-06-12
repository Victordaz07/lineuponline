/** Entrada del código de sala: 6 casillas individuales (no un campo de texto). */
import { useRef } from 'react'
import { ROOM_CODE_LENGTH } from '../utils/roomCodeGenerator'

type Props = {
  value: string
  onChange: (code: string) => void
  onComplete?: (code: string) => void
}

export function CodeInput({ value, onChange, onComplete }: Props) {
  const refs = useRef<(HTMLInputElement | null)[]>([])
  const chars = Array.from({ length: ROOM_CODE_LENGTH }, (_, i) => value[i] ?? '')

  const update = (next: string) => {
    const clean = next
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '')
      .slice(0, ROOM_CODE_LENGTH)
    onChange(clean)
    if (clean.length === ROOM_CODE_LENGTH) onComplete?.(clean)
  }

  const handleChange = (index: number, char: string) => {
    const c = char.toUpperCase().replace(/[^A-Z0-9]/g, '')
    if (!c) return
    const next = (value.slice(0, index) + c[c.length - 1] + value.slice(index + 1)).slice(
      0,
      ROOM_CODE_LENGTH,
    )
    update(next)
    refs.current[Math.min(index + 1, ROOM_CODE_LENGTH - 1)]?.focus()
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault()
      const next = value.slice(0, Math.max(0, index)) + value.slice(index + 1)
      onChange(next)
      refs.current[Math.max(0, index - 1)]?.focus()
    }
    if (e.key === 'ArrowLeft') refs.current[Math.max(0, index - 1)]?.focus()
    if (e.key === 'ArrowRight') refs.current[Math.min(ROOM_CODE_LENGTH - 1, index + 1)]?.focus()
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    update(e.clipboardData.getData('text'))
  }

  return (
    <div className="flex justify-center gap-2" onPaste={handlePaste}>
      {chars.map((char, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el
          }}
          type="text"
          inputMode="text"
          autoCapitalize="characters"
          maxLength={1}
          value={char}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onFocus={(e) => e.target.select()}
          className="sq-code-box"
          aria-label={`Carácter ${i + 1} del código`}
        />
      ))}
    </div>
  )
}
