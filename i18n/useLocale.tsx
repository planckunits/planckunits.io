import { useLanguageQuery } from 'next-export-i18n'
import en from './en'
import ja from './ja'

export const useLocale = () => {
  const [query] = useLanguageQuery()

  const t = query?.lang === 'ja' ? ja : en
  return { locale: query?.lang, t }
}
