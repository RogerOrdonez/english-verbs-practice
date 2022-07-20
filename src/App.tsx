import { useContext, useEffect } from 'react'
import { ControlStateContext, CurrentVerbContext } from './shared/context'
import { ControlStateAction, CurrentVerbAction } from './shared/enums'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Play } from './features/Play'
import { Config } from './features/Config'
import { getSelectedVerbsOnStorage } from './services/storageService'

function App() {
  const { dispatch: controlStateDispatch } = useContext(ControlStateContext)
  const { dispatch: currentVerbDispatch } = useContext(CurrentVerbContext)
  useEffect(() => {
    controlStateDispatch({
      type: ControlStateAction.SetVerbsLenght,
      payload: getSelectedVerbsOnStorage().size,
    })
    currentVerbDispatch({
      type: CurrentVerbAction.SetCurrentVerb,
      payload: {
        newCurrentVerb: getSelectedVerbsOnStorage().toIndexedSeq().get(0),
      },
    })
  }, [controlStateDispatch, currentVerbDispatch])
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/play" element={<Play />} />
          <Route path="/" element={<Config />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
