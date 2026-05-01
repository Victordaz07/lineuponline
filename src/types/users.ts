export type UserProfile = {
  userId: string
  displayName: string
  email: string
  role: 'student' | 'teacher' | 'admin'
  lastAccessAt: string
  createdAt: string
  updatedAt: string
}
