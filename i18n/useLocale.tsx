import { useRouter } from 'next/router'
import en from './en'
import ja from './ja'

export const useLocale = () => {
  const router = useRouter()
  const locale = router.asPath.includes('en') ? 'en' : 'ja'

  const t = { ja, en }[locale]
  return { locale, t }
}
