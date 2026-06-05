export type MessageType = 'comment' | 'suggestion' | 'concern' | 'topic_request'
export type MessageStatus = 'pending' | 'read' | 'replied' | 'resolved'

export const MESSAGE_TYPE_LABELS: Record<MessageType, string> = {
  comment: 'Comentario',
  suggestion: 'Sugerencia',
  concern: 'Inquietud',
  topic_request: 'Solicitar tema',
}

export const MESSAGE_STATUS_LABELS: Record<MessageStatus, string> = {
  pending: 'Pendiente',
  read: 'Visto',
  replied: 'Respondido',
  resolved: 'Resuelto',
}

export const MESSAGE_STATUS_COLORS: Record<MessageStatus, string> = {
  pending: 'bg-amber-100 text-amber-700',
  read: 'bg-blue-100 text-blue-700',
  replied: 'bg-green-100 text-green-700',
  resolved: 'bg-gray-100 text-gray-500',
}

export type CommunityMessage = {
  id: string
  type: MessageType
  content: string
  topicName?: string
  userId: string
  userName: string
  status: MessageStatus
  adminResponse?: string
  adminRespondedAt?: string
  createdAt: string
  updatedAt: string
}

export type AnnouncementType = 'announcement' | 'update' | 'new_content'

export const ANNOUNCEMENT_TYPE_LABELS: Record<AnnouncementType, string> = {
  announcement: 'Aviso',
  update: 'Actualización',
  new_content: 'Nuevo contenido',
}

export const ANNOUNCEMENT_TYPE_COLORS: Record<AnnouncementType, string> = {
  announcement: 'bg-sg-gold text-navy-deep',
  update: 'bg-sg-gold-light text-navy-deep',
  new_content: 'bg-emerald-600 text-white',
}

export type AdminAnnouncement = {
  id: string
  type: AnnouncementType
  title: string
  content: string
  isPinned: boolean
  createdAt: string
  updatedAt: string
}
