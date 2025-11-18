import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile(breakpoint: number = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window === 'undefined') return false
    return window.innerWidth < breakpoint
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = `(max-width: ${breakpoint - 1}px)`
    const mql = window.matchMedia(mediaQuery)

    const onChange = () => setIsMobile(mql.matches)
    onChange()

    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    }

    // Fallback for older browsers
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof mql.addListener === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      mql.addListener(onChange)
      return () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mql.removeListener(onChange)
      }
    }
  }, [breakpoint])

  return isMobile
}
