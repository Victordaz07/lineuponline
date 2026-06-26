import { useEffect, useState } from 'react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import {
  subscribeCharacters,
  addCharacter,
  updateCharacter,
  deleteCharacter,
} from '@/services/characters.service'
import type { Character } from '@/types/music'

const EMPTY_FORM = {
  name: '',
  book: '',
  people: '',
  season: 1,
  genre: '',
  instruments: '',
  colorPalette: '',
  signatureSound: '',
}

function NewCharacterForm({ onCreated }: { onCreated: () => void }) {
  const [open, setOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState(EMPTY_FORM)

  function set<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [k]: v }))
  }

  async function handleSave() {
    if (!form.name.trim() || !form.book.trim()) return
    setSaving(true)
    try {
      await addCharacter({
        name: form.name.trim(),
        book: form.book.trim(),
        people: form.people.trim(),
        season: form.season,
        musicIdentity: {
          genre: form.genre.trim(),
          instruments: form.instruments.split(',').map((s) => s.trim()).filter(Boolean),
          colorPalette: form.colorPalette.split(',').map((s) => s.trim()).filter(Boolean),
          signatureSound: form.signatureSound.trim(),
        },
      })
      setOpen(false)
      setForm(EMPTY_FORM)
      onCreated()
    } catch (e) {
      console.error(e)
      alert('Error al crear personaje')
    } finally {
      setSaving(false)
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full rounded-xl border border-dashed border-sg-gold/30 py-3 font-ui text-sm font-semibold text-sg-gold/70 transition hover:border-sg-gold/60 hover:bg-sg-gold/5 hover:text-sg-gold"
      >
        + Nuevo personaje
      </button>
    )
  }

  return (
    <Card>
      <p className="mb-3 font-ui text-sm font-semibold text-parchment/80">Nuevo personaje (interno)</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Nombre (interno, nunca público)" value={form.name} onChange={(v) => set('name', v)} placeholder="ej. Nefi" />
        <Field label="Libro" value={form.book} onChange={(v) => set('book', v)} placeholder="ej. 1 Nefi" />
        <Field label="Pueblo" value={form.people} onChange={(v) => set('people', v)} placeholder="ej. Nefitas" />
        <div className="space-y-1">
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">Temporada</label>
          <select
            value={form.season}
            onChange={(e) => set('season', Number(e.target.value))}
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment outline-none ring-1 ring-sg-gold/20"
          >
            {[1, 2, 3, 4, 5].map((s) => (
              <option key={s} value={s}>Temporada {s}</option>
            ))}
          </select>
        </div>
        <Field label="Género musical" value={form.genre} onChange={(v) => set('genre', v)} placeholder="ej. Gospel épico" />
        <Field label="Sonido distintivo" value={form.signatureSound} onChange={(v) => set('signatureSound', v)} placeholder="ej. Coro masivo + cuerno de carnero" />
        <Field label="Instrumentos (separados por coma)" value={form.instruments} onChange={(v) => set('instruments', v)} placeholder="arpa, percusión, coro" />
        <Field label="Paleta de color (separada por coma)" value={form.colorPalette} onChange={(v) => set('colorPalette', v)} placeholder="dorado, azul profundo" />
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button onClick={() => setOpen(false)} className="rounded-xl px-4 py-2 font-ui text-xs text-parchment/50 hover:text-parchment">
          Cancelar
        </button>
        <Button onClick={handleSave} loading={saving} disabled={!form.name.trim() || !form.book.trim()}>
          Crear personaje
        </Button>
      </div>
    </Card>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <div className="space-y-1">
      <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment placeholder:text-parchment/30 outline-none ring-1 ring-sg-gold/20 focus:ring-sg-gold/50"
      />
    </div>
  )
}

function CharacterRow({ character, onChanged }: { character: Character; onChanged: () => void }) {
  async function remove() {
    if (!confirm(`¿Eliminar "${character.name}"? Esto no elimina sus tracks.`)) return
    await deleteCharacter(character.id)
    onChanged()
  }

  async function setSeason(season: number) {
    await updateCharacter(character.id, { season })
  }

  return (
    <div className="flex items-center justify-between gap-3 border-t border-sg-gold/10 px-5 py-4 first:border-t-0">
      <div className="min-w-0 flex-1">
        <p className="font-ui text-sm font-semibold text-parchment/85">{character.name}</p>
        <p className="font-ui text-xs text-parchment/45">
          {character.book} · {character.people} · {character.musicIdentity.genre || 'sin género'}
        </p>
      </div>
      <select
        value={character.season}
        onChange={(e) => setSeason(Number(e.target.value))}
        className="rounded-lg bg-navy-deep px-2 py-1 font-ui text-xs text-parchment/70 outline-none ring-1 ring-sg-gold/20"
      >
        {[1, 2, 3, 4, 5].map((s) => (
          <option key={s} value={s}>T{s}</option>
        ))}
      </select>
      <button onClick={remove} className="font-ui text-xs text-red-400/70 hover:text-red-400">
        Eliminar
      </button>
    </div>
  )
}

export function CharacterManager() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = subscribeCharacters((cs) => {
      setCharacters(cs)
      setLoading(false)
    })
    return unsub
  }, [])

  return (
    <div className="space-y-4">
      <NewCharacterForm onCreated={() => {}} />
      <Card className="p-0">
        {loading ? (
          <p className="py-10 text-center font-ui text-sm text-parchment/40">Cargando…</p>
        ) : characters.length === 0 ? (
          <p className="py-10 text-center font-ui text-sm text-parchment/40">Sin personajes todavía.</p>
        ) : (
          characters.map((c) => <CharacterRow key={c.id} character={c} onChanged={() => {}} />)
        )}
      </Card>
    </div>
  )
}
