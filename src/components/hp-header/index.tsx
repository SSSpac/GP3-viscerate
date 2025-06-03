import Link from 'next/link';
import styles from './header.module.css';

const HpHeader = () => {
    return (
        <header className={styles.header}>
             <Link href="/developers" className={styles.link}>ABOUT DEVELOPERS</Link>
        </header>
    )
}
export default HpHeader;