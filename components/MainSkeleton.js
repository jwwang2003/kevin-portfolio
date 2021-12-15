import styles from './MainSkeleton.module.scss'

export default function MainSkeleton({ children, home }) {
  return (<>
    <div className={styles.background}></div>
    <div className={styles.container} style={{ minHeight: home ? "100vh" : "initial" }}>
      <div className={styles.content}>
        { children }
      </div>
      <div className={styles.navigation}>
        somthing
      </div>
    </div>
    <div className={styles.mask}>
      
    </div>
    <div className={styles.popout}>
    
    </div>
    <div className={styles.footer}>
      This is a footer
    </div>
  </>)
}