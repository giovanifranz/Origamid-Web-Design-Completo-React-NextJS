import { useState, useEffect } from 'react'

export function useWhiteBlack(hover: 'black' | 'white') {
  const [theme, setTheme] = useState({
    color: 'var(--white)'
  })
  useEffect(() => {
    if (hover === 'black') {
      setTheme({
        color: 'var(--black)'
      })
    } else {
      setTheme({
        color: 'var(--white)'
      })
    }
  }, [hover])

  return theme
}
