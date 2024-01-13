import styles from './about.module.css'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and
              better
           </h1>
          <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We 
          believe in good, flexible and precise ideas. Our special team best
          consulting & finance solution provider. Wide range of Web and software
          development services.
          </p>

          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>13 K+</h1>
              <p>Years of Experience</p>
            </div>
          </div>

        </div>
        <div className={styles.imgContainer}>
          <Image 
           src="/about.png"
           alt='About Image'
          fill
          />
        </div>
      </div>
  )
}

export default AboutPage 