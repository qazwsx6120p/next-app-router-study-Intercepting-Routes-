import React from 'react'
import Link from 'next/link'
import { css, StyleSheet } from 'next/css'

export default ({ id }) => (
  <div className={css(styles.photo)}>
    <div className={css(styles.image)}>
      {id}
    </div>

    <div className={css(styles.sidebar)}>
      <ul className={css(styles.sidebarList)}>
        <li>
          <Link href="/profile?id=nkzawa">@nkzawa</Link>
          - Great photo!
        </li>
      </ul>
    </div>
  </div>
)

const styles = StyleSheet.create({
  photo: {
    width: '800px',
    overflow: 'hidden',
    height: '500px',
    display: 'inline-block'
  },

  image: {
    float: 'left',
    width: '600px',
    height: '500px',
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '500px',
    fontSize: '40px'
  },

  sidebar: {
    float: 'right',
    background: '#fff',
    width: '200px',
    height: '500px',
    textAlign: 'left',
    boxSizing: 'border-box',
    padding: '20px',
    fontFamily: 'Monaco',
    fontSize: '11px'
  },

  sidebarList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  }
})