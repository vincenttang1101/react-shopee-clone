import { User } from '@/types/user.type'

const authUtils = {
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
  }
}

export { authUtils }
