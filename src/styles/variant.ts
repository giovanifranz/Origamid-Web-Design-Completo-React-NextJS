export const introVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,

    transition: {
      type: 'tween',
      delay: 0.1,
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
      delay: 0.2
    }
  }
}

export const childVariantsFadeInDown = {
  hidden: {
    opacity: 0,
    y: '-100%'
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.2
    }
  }
}

export const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.8,
      duration: 1.2,
      when: 'beforeChildren'
    }
  }
}

export const fadeInFadeOut = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 0.2,
      duration: 0.6
    }
  }
}
