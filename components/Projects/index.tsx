import React from 'react'
import Principal from './Principal'
import Secondary from './Secondary'
import styles from './Projects.module.scss'
const Projects = () => {
  return (
    <div className={styles.projectWrapper}>
      <Principal />
      <Secondary />
    </div>
  )
}

export default Projects