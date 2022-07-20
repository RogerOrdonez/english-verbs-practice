import React, { FC, useContext, useEffect } from 'react'
import tw, { theme as twTheme } from 'twin.macro'
import { useMediaQuery } from '@material-ui/core'
import { ControlStateContext, CurrentVerbContext } from '../../shared/context'
import { ControlStateAction, CurrentVerbAction } from '../../shared/enums'
import { Link } from 'react-router-dom'
import { useKeyPress } from '../../shared/hooks'

export const InfoSection: FC = () => {
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`)
  const { state: currentVerb, dispatch: currentVerbDispatch } =
    useContext(CurrentVerbContext)
  const { state: controlState, dispatch: controlStateDispatch } =
    useContext(ControlStateContext)
  const showAnswer = () => {
    currentVerb.isShowingAnswer
      ? currentVerbDispatch({ type: CurrentVerbAction.HideAnswer })
      : currentVerbDispatch({ type: CurrentVerbAction.ShowAnswer })
  }
  const skipVerb = () => {
    controlStateDispatch({ type: ControlStateAction.IncrementSkipped })
  }
  const skipVerbCommand: boolean = useKeyPress('F1')
  const showAnswersCommand: boolean = useKeyPress('F2')
  useEffect(() => {
    if (skipVerbCommand) {
      skipVerb()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skipVerbCommand])
  useEffect(() => {
    if (
      showAnswersCommand &&
      !currentVerb.isVerbCorrect &&
      currentVerb.isVerbChecked
    ) {
      showAnswer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAnswersCommand])

  return (
    <div
      css={[
        tw`flex flex-col justify-around px-4 py-0 md:px-4 bg-gray-900 w-full`,
        isDesktop && { minHeight: '10rem' },
      ]}
    >
      <div css={tw`flex flex-col lg:items-start`}>
        <div
          css={tw`flex items-start justify-center  lg:justify-between mb-2 lg:flex-row-reverse w-full`}
        >
          <div css={tw`flex mb-0 lg:mb-2 self-end`}>
            <div css={tw`text-gray-200`}>
              <span
                css={tw`pt-0.5 pb-0.5 text-xs px-1.5 mr-1 bg-gray-200 text-gray-800 rounded-full`}
              >
                Total:{' '}
                {controlState.successCounter +
                  controlState.errorCounter +
                  controlState.skippedCounter}
              </span>
            </div>
            <div css={tw`text-gray-200`}>
              <span
                css={tw`pt-0.5 pb-0.5 text-xs px-1.5 mr-1 bg-green-200 text-gray-800 rounded-full`}
              >
                Success: {controlState.successCounter}
              </span>
            </div>
            <div css={tw`text-gray-200`}>
              <span
                css={tw`pt-0.5 pb-0.5 text-xs px-1.5 mr-1 bg-red-200 text-gray-800 rounded-full`}
              >
                Error: {controlState.errorCounter}
              </span>
            </div>
            <div css={tw`text-gray-200`}>
              <span
                css={tw`pt-0.5 pb-0.5 text-xs px-1.5 mr-1 bg-yellow-200 text-gray-800 rounded-full`}
              >
                Skipped: {controlState.skippedCounter}
              </span>
            </div>
          </div>
          <div
            css={tw`text-gray-400 uppercase tracking-wider text-lg hidden lg:block`}
          >
            verb
          </div>
        </div>
        <div css={tw`flex justify-between items-center w-full lg:mt-4`}>
          <div css={tw`w-1/5 hidden md:block`} />
          <div
            css={tw`text-white text-center text-3xl lg:text-5xl lg:font-bold mt-1 lg:mt-0 `}
          >
            {currentVerb.verbTense?.tenses.infinitive}
          </div>
          <div css={tw`flex justify-end lg:w-1/5`}>
            <div>
              <button
                css={[
                  tw`text-gray-400 text-lg mt-2 lg:mt-0 lg:hover:underline focus:outline-none`,
                ]}
                type="button"
                onClick={skipVerb}
              >
                Skip verb (F1)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        css={tw`flex flex-wrap lg:flex-row justify-between items-end lg:items-center`}
      >
        <Link to="/">
          <div>
            <div
              css={tw`text-gray-400 text-lg mt-2 lg:mt-0 lg:hover:underline`}
            >
              View all verbs{' '}
              <svg
                css={tw`inline w-2 h-2 fill-current`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
              </svg>
            </div>
          </div>
        </Link>
        <div>
          <button
            css={[
              currentVerb.isVerbChecked &&
                tw`text-gray-400 text-lg lg:text-lg mt-2 lg:mt-0 lg:hover:underline focus:outline-none`,
              !currentVerb.isVerbChecked && tw`hidden`,
              currentVerb.isVerbCorrect && tw`hidden`,
            ]}
            type="button"
            onClick={showAnswer}
          >
            {!currentVerb.isVerbCorrect &&
              !currentVerb.isShowingAnswer &&
              `Show Answer`}
            {!currentVerb.isVerbCorrect &&
              currentVerb.isShowingAnswer &&
              `Hide Answer`}{' '}
            (F2)
          </button>
        </div>
      </div>
    </div>
  )
}
