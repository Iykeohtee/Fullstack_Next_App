import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>  
     <Link href="/" className={styles.logo}>I_Code</Link>

     <div>
      <Links/> 
     </div>

    </div>
  )
}

export default Navbar   