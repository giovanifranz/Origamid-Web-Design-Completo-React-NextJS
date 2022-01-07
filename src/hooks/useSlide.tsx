import { useEffect, useState } from 'react'

interface useSlideProps {
  array: Array<unknown>
  interval: number
}

export function useSlide({ array, interval }: useSlideProps) {
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
