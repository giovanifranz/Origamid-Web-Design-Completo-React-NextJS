export const variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,

    transition: {
      type: 'tween',
      delay: 0.2,
      when: 'beforeChildren'
    }
  }
}

export const childVariantsTopDown = {
  hidden: {
    opacity: 0,
    y: '-100%'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      delay: 0.6
    }
  }
}

export const childVariantsFadeInDown = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.6
    }
  }
}
