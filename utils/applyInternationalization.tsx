import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface Props {
  locale: string;
  namespaces: string[];
}

const applyInternationalization = async ({ locale, namespaces }: Props) => {
  return serverSideTranslations(locale, ['common', ...namespaces])
}

export default applyInternationalization
