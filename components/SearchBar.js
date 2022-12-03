
import styles from '../styles/SearchBar.module.css'
export default function SearchBar() {
    return (
        <div>
        <input type="search" className={styles.searchBar} placeholder="Search" />
        </div>
    )
}
