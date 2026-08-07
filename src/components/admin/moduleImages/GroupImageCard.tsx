import { UploadSlot } from '@/components/admin/moduleImages/UploadSlot'
import { removeModuleImage, uploadModuleImage, type ModuleMediaDoc, type ModuleMediaSlot } from '@/services/moduleMedia.service'
import type { SubmoduleGroupMeta } from '@/data/seed-doctrine'

export type GroupImageCardProps = {
  groupId: string
  meta: SubmoduleGroupMeta
  media?: ModuleMediaDoc
}

const SLOTS: { key: ModuleMediaSlot; label: string; wide: boolean }[] = [
  { key: 'heroImage', label: 'Hero', wide: true },
  { key: 'iconImage', label: 'Ícono', wide: false },
  { key: 'patternImage', label: 'Patrón', wide: false },
  { key: 'conclusionImage', label: 'Conclusión', wide: true },
]

export function GroupImageCard({ groupId, meta, media }: GroupImageCardProps) {
  return (
    <div className="space-y-3 rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 shadow-sm">
      <div className="flex items-center gap-2.5">
        <span className="text-2xl" aria-hidden="true">{meta.icon}</span>
        <div className="min-w-0">
          <p className="truncate font-ui text-sm font-semibold text-parchment/90">{meta.title}</p>
          <p className="truncate font-ui text-[11px] text-parchment/40">{groupId}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {SLOTS.map(({ key, label, wide }) => (
          <UploadSlot
            key={key}
            label={label}
            previewUrl={media?.[key]}
            placeholderIcon={meta.icon}
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
