import * as React from 'react'
import { Link } from 'gatsby'

const GatsbyPage = () => {
  return (
    <main>
      <h1>Gatsby</h1>
      <Link to="/">Back to Home</Link>
      
    </main>
  )
}

export const Head = () => <title>Gatsby</title>

export default GatsbyPage