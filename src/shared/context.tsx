import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  ControlStateType,
  CurrentVerbType,
  ControlStateActionType,
  CurrentVerbActionType,
  VerbType,
  SelectedVerbsActionType,
} from './types'
import {
  controlStateReducer,
  currentVerbReducer,
  verbsReducer,
} from './reducers'
import { getVerbs } from '../services/verbService'
import { OrderedMap } from 'immutable'

const initialCurrentVerb: CurrentVerbType = {
  verbTense: {
    name: '',
    type: '',
    tenses: {
      infinitive: '',
      present: [''],
      past: [''],
      pastParticiple: [''],
      presentParticiple: [''],
      meaning: [''],
    },
  },
  userInputVerb: {
    present: '',
    past: '',
    pastParticiple: '',
    presentParticiple: '',
    meaning: '',
  },
  isVerbCorrect: false,
  isVerbChecked: false,
  isPresentCorrect: false,
  isPastCorrect: false,
  isPastParticipleCorrect: false,
  isPresentParticipleCorrect: false,
  isMeaningCorrect: false,
  isShowingAnswer: false,
}

const initialControlState: ControlStateType = {
  counter: 0,
  verbsLength: 0,
  successCounter: 0,
  errorCounter: 0,
  skippedCounter: 0,
  cycles: 0,
}

const initialVerbs: OrderedMap<string, VerbType | undefined> = getVerbs()

const CurrentVerbContext = createContext<{
  state: CurrentVerbType
  dispatch: Dispatch<CurrentVerbActionType>
}>({
  state: initialCurrentVerb,
  dispatch: () => null,
})

const ControlStateContext = createContext<{
  state: ControlStateType
  dispatch: Dispatch<ControlStateActionType>
}>({
  state: initialControlState,
  dispatch: () => null,
})

const VerbsContext = createContext<{
  state: OrderedMap<string, VerbType | undefined>
  dispatch: Dispatch<SelectedVerbsActionType>
}>({
  state: initialVerbs,
  dispatch: () => null,
})

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'light'
}

export const ThemeContext = createContext<{
  theme: string
  setTheme: Dispatch<string>
}>({
  theme: getInitialTheme(),
  setTheme: () => null,
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)

    localStorage.setItem('color-theme', rawTheme)
  }

  if (getInitialTheme()) {
    rawSetTheme(getInitialTheme())
  }

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentVerb, currentVerbDispatch] = useReducer(
    currentVerbReducer,
    initialCurrentVerb,
  )
  const [controlState, controlStateDispatch] = useReducer(
    controlStateReducer,
    initialControlState,
  )
  const [verbs, verbsDispatch] = useReducer(verbsReducer, initialVerbs)

  return (
    <ControlStateContext.Provider
      value={{ state: controlState, dispatch: controlStateDispatch }}
    >
      <VerbsContext.Provider value={{ state: verbs, dispatch: verbsDispatch }}>
        <CurrentVerbContext.Provider
          value={{ state: currentVerb, dispatch: currentVerbDispatch }}
        >
          {children}
        </CurrentVerbContext.Provider>
      </VerbsContext.Provider>
    </ControlStateContext.Provider>
  )
}

export {
  CurrentVerbContext,
  ControlStateContext,
  VerbsContext,
  AppProvider,
  ThemeProvider,
}
