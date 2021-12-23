// Built for /portfolio
// To change image and mask, refer to /styles/MaskedHeader.module.css
// Change lines 7, 12, and 13 accordingly
// Line 7 is the image, background: url("/pathtofile")
// Line 12 and 13 is the mask

import styles from '../styles/MaskedHeader.module.scss'

export default function MaskedHeader() {
  return (
    <header className={styles.header}>
      <h1>
        <span className="mt-0 sm:mt-12">Portfolio</span>
      </h1>
    </header>
  )
}