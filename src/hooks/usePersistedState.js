import React from 'react'

function usePersistedState(key, initialState) {
  const [state, setState] = React.useState(() => {
    const storageValue = window.localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
