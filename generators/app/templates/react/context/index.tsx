import React, { createContext, useState } from 'react'

interface IContextProvider {
  children?: React.ReactNode
}

interface IAppContext {
  showMessage: boolean
  toggleMessage(): void
}

export const AppContext = createContext<IAppContext>(
  {} as IAppContext
)

export const AppContextProvider = ({ children }: IContextProvider) => {
  const [showMessage, setShowMessage] = useState<boolean>(false)

  function toggleMessage() {
    setShowMessage(!showMessage)
  }

  const values = {
    showMessage,
    toggleMessage,
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}
