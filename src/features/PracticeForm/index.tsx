import { FC, useContext, useEffect, useState, useRef } from 'react'
import tw, { theme as twTheme } from 'twin.macro'
import { useMediaQuery } from '@material-ui/core'
import { checkVerb } from '../../services/checkService'
import { FormType } from '../../shared/types'
import { PracticeFormField } from './PracticeFormField'
import { PracticeFormFooter } from './PracticeFormFooter'
import { PracticeFormHeader } from './PracticeFormHeader'
import { CurrentVerbContext, ControlStateContext } from '../../shared/context'
import { ControlStateAction, CurrentVerbAction } from '../../shared/enums'

export const PracticeForm: FC = () => {
  const { state: controlState, dispatch: controlStateDispatch } =
    useContext(ControlStateContext)
  const { state: currentVerb, dispatch: currentVerbDispatch } =
    useContext(CurrentVerbContext)
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`)
  const progressBarWidth = isDesktop ? 15 : 18
  const [practiceForm, setPracticeForm] = useState<FormType>({
    present: '',
    past: '',
    pastParticiple: '',
    presentParticiple: '',
    meaning: '',
  })
  const firstInputRef = useRef<HTMLInputElement>(null)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPracticeForm({
      ...practiceForm,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    checkVerb(
      practiceForm,
      setPracticeForm,
      currentVerb,
      controlState,
      controlStateDispatch,
      currentVerbDispatch,
      firstInputRef,
    )
  }
  useEffect(() => {
    if (currentVerb.isVerbChecked) {
      if (currentVerb.isShowingAnswer) {
        currentVerbDispatch({
          type: CurrentVerbAction.SetUserInput,
          payload: { userInputVerb: practiceForm },
        })
        setPracticeForm({
          present: !currentVerb.isPresentCorrect
            ? currentVerb.verbTense?.tenses.present.join(', ') || ''
            : practiceForm.present,
          past: !currentVerb.isPastCorrect
            ? currentVerb.verbTense?.tenses.past.join(', ') || ''
            : practiceForm.past,
          pastParticiple: !currentVerb.isPastParticipleCorrect
            ? currentVerb.verbTense?.tenses.pastParticiple.join(', ') || ''
            : practiceForm.pastParticiple,
          presentParticiple: !currentVerb.isPresentParticipleCorrect
            ? currentVerb.verbTense?.tenses.presentParticiple.join(', ') || ''
            : practiceForm.presentParticiple,
          meaning: !currentVerb.isMeaningCorrect
            ? currentVerb.verbTense?.tenses.meaning.join(', ') || ''
            : practiceForm.meaning,
        })
      } else {
        setPracticeForm(currentVerb.userInputVerb)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVerb.isShowingAnswer])
  useEffect(() => {
    if (controlState.skippedCounter > 0) {
      if (controlState.counter < controlState.verbsLength - 1) {
        controlStateDispatch({ type: ControlStateAction.IncrementCounter })
        currentVerbDispatch({ type: CurrentVerbAction.HideAnswer })
        setPracticeForm({
          present: '',
          past: '',
          pastParticiple: '',
          presentParticiple: '',
          meaning: '',
        })
        currentVerbDispatch({ type: CurrentVerbAction.MarkVerbUnchecked })
      } else {
        controlStateDispatch({ type: ControlStateAction.IncrementCycles })
        controlStateDispatch({ type: ControlStateAction.ResetCounter })
        currentVerbDispatch({ type: CurrentVerbAction.MarkVerbUnchecked })
        currentVerbDispatch({ type: CurrentVerbAction.HideAnswer })
        setPracticeForm({
          present: '',
          past: '',
          pastParticiple: '',
          presentParticiple: '',
          meaning: '',
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlState.skippedCounter])
  useEffect(() => {
    firstInputRef.current?.focus()
  }, [])
  return (
    <div css={tw`px-4 pt-1 lg:pt-4 w-full`}>
      <PracticeFormHeader
        progressBarWidth={progressBarWidth}
        counter={controlState.counter}
        totalVerbsCount={controlState.verbsLength}
        isVerbChecked={currentVerb.isVerbChecked}
        cycles={controlState.cycles}
      />
      <form
        onSubmit={e => handleSubmit(e)}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        autoCapitalize="off"
      >
        <PracticeFormField
          id="present"
          label="Present Tense:"
          additionalLabel="(1st, 2nd & 3rd person)"
          formValue={practiceForm.present}
          isVerbChecked={currentVerb.isVerbChecked}
          isTenseCorrect={currentVerb.isPresentCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={currentVerb.isShowingAnswer}
          ref={firstInputRef}
        />
        <PracticeFormField
          id="past"
          label="Past Tense:"
          additionalLabel="(1st, 2nd & 3rd person)"
          formValue={practiceForm.past}
          isVerbChecked={currentVerb.isVerbChecked}
          isTenseCorrect={currentVerb.isPastCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={currentVerb.isShowingAnswer}
          marginBottom={true}
        />
        <PracticeFormField
          id="pastParticiple"
          label="Past Participle:"
          formValue={practiceForm.pastParticiple}
          isVerbChecked={currentVerb.isVerbChecked}
          isTenseCorrect={currentVerb.isPastParticipleCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={currentVerb.isShowingAnswer}
        />
        <PracticeFormField
          id="presentParticiple"
          label="Present Participle:"
          formValue={practiceForm.presentParticiple}
          isVerbChecked={currentVerb.isVerbChecked}
          isTenseCorrect={currentVerb.isPresentParticipleCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={currentVerb.isShowingAnswer}
          marginTop={true}
        />
        <PracticeFormField
          id="meaning"
          label="Spanish Meanings:"
          additionalLabel="(Maybe more than 1 meaning)"
          formValue={practiceForm.meaning}
          isVerbChecked={currentVerb.isVerbChecked}
          isTenseCorrect={currentVerb.isMeaningCorrect}
          handleInputChange={handleInputChange}
          isShowingAnswer={currentVerb.isShowingAnswer}
        />
        <PracticeFormFooter
          isVerbChecked={currentVerb.isVerbChecked}
          isVerbCorrect={currentVerb.isVerbCorrect}
          counter={controlState.counter}
          verbsLength={controlState.verbsLength}
          isShowingAnswer={currentVerb.isShowingAnswer}
        />
      </form>
    </div>
  )
}
