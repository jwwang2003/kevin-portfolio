import styles from '../styles/MaskedHeader.module.scss'
import { useTranslation } from 'next-i18next'

function MaskedHeader ():JSX.Element {
  const { t } = useTranslation('portfolio')

  return (
    <header className={styles.header}>
      <h1><span className="mt-0 sm:mt-12">{t('test')}</span></h1>
    </header>
  )
}

export default MaskedHeader
