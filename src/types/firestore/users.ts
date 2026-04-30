export type UserRole = 'student' | 'teacher' | 'admin'

export type UserProfile = {
  userId: string
  displayName: string
  email: string
  role: UserRole
  lastAccessAt: string
  createdAt: string
  updatedAt: string
}
