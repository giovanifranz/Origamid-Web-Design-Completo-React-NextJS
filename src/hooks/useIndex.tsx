import { useEffect, useState } from 'react'

interface useIndexProps {
  array: Array<any>
  interval: number
}

export function useIndex({ array, interval }: useIndexProps) {
  const [slide, setSlide] = useState(array[0])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const newSlideIndex = index >= array.length - 1 ? 0 : index + 1

      setIndex(newSlideIndex)
    }, interval)

    return () => clearTimeout(timer)
  })
  useEffect(() => {
    setSlide(array[index])
  }, [index, array])

  return [slide]
}
