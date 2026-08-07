import { UploadSlot } from '@/components/admin/moduleImages/UploadSlot'
import { removeLessonImage, uploadLessonImage, type LessonMediaDoc, type LessonMediaSlot } from '@/services/lessonMedia.service'
import type { Lesson } from '@/types/doctrine'

export type LessonImageRowProps = {
  lesson: Lesson
  media?: LessonMediaDoc
}

const SLOTS: { key: LessonMediaSlot; label: string; wide: boolean }[] = [
  { key: 'heroImage', label: 'Hero', wide: true },
  { key: 'iconImage', label: 'Ícono', wide: false },
]

export function LessonImageRow({ lesson, media }: LessonImageRowProps) {
  const icon = lesson.icon ?? '📖'

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-sg-gold/15 bg-navy-mid p-3">
      <div className="min-w-0 flex-1">
        <p className="truncate font-ui text-sm font-semibold text-parchment/90">{lesson.title}</p>
        <p className="truncate font-ui text-[11px] text-parchment/40">{lesson.id}</p>
      </div>
      <div className="flex shrink-0 gap-3">
        {SLOTS.map(({ key, label, wide }) => (
          <div key={key} className={wide ? 'w-32' : 'w-16'}>
            <UploadSlot
              label={label}
              previewUrl={media?.[key]}
              placeholderIcon={icon}
              wide={wide}
              onUpload={async (file) => {
                await uploadLessonImage(lesson.id, key, file)
              }}
              onRemove={async () => {
                await removeLessonImage(lesson.id, key, media?.[key])
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
