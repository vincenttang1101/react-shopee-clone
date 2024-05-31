import { User } from '@/types/user.type'

export const LocalStorageEventTarget = new EventTarget()

const AuthUtil = {
  setAccessTokenToLS: (access_token: string) => localStorage.setItem('access_token', access_token),
  getAccessTokenFromLS: () => localStorage.getItem('access_token'),

  setProfileToLS: (profile: User) => localStorage.setItem('profile', JSON.stringify(profile)),
  getProfileFromLS: () => {
    const profile = localStorage.getItem('profile')
    if (profile) {
      return JSON.parse(profile)
    }
  },

  clearLS: () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('profile')

    const clearLSEvent = new Event('clearLS')
    LocalStorageEventTarget.dispatchEvent(clearLSEvent)
  }
}

export { AuthUtil }
