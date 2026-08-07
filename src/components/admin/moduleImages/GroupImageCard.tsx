import { UploadSlot } from '@/components/admin/moduleImages/UploadSlot'
import { removeModuleImage, uploadModuleImage, type ModuleMediaDoc, type ModuleMediaSlot } from '@/services/moduleMedia.service'

/** Forma mínima que cubre tanto SubmoduleGroupMeta (54 personajes/temas) como DoctrinalModule (10 módulos). */
export type GroupImageCardMeta = {
  title: string
  icon?: string
}

export type GroupImageCardProps = {
  groupId: string
  meta: GroupImageCardMeta
  media?: ModuleMediaDoc
  /** Qué slots mostrar — los 10 módulos principales solo usan hero + ícono. */
  slots?: { key: ModuleMediaSlot; label: string; wide: boolean }[]
}

const DEFAULT_SLOTS: { key: ModuleMediaSlot; label: string; wide: boolean }[] = [
  { key: 'heroImage', label: 'Hero', wide: true },
  { key: 'iconImage', label: 'Ícono', wide: false },
  { key: 'patternImage', label: 'Patrón', wide: false },
  { key: 'conclusionImage', label: 'Conclusión', wide: true },
]

export function GroupImageCard({ groupId, meta, media, slots = DEFAULT_SLOTS }: GroupImageCardProps) {
  const icon = meta.icon ?? '📖'
  return (
    <div className="space-y-3 rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 shadow-sm">
      <div className="flex items-center gap-2.5">
        <span className="text-2xl" aria-hidden="true">{icon}</span>
        <div className="min-w-0">
          <p className="truncate font-ui text-sm font-semibold text-parchment/90">{meta.title}</p>
          <p className="truncate font-ui text-[11px] text-parchment/40">{groupId}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {slots.map(({ key, label, wide }) => (
          <UploadSlot
            key={key}
            label={label}
            previewUrl={media?.[key]}
            placeholderIcon={icon}
            wide={wide}
            onUpload={async (file) => {
              await uploadModuleImage(groupId, key, file)
            }}
            onRemove={async () => {
              await removeModuleImage(groupId, key, media?.[key])
            }}
          />
        ))}
      </div>
    </div>
  )
}
