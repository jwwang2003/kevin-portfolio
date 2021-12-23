import styles from '../styles/MaskedHeader.module.scss'

function MaskedHeader():JSX.Element {
  return (
    <header className={styles.header}>
      <h1><span className="mt-0 sm:mt-12">Portfolio</span></h1>
    </header>
  )
}

export default MaskedHeader