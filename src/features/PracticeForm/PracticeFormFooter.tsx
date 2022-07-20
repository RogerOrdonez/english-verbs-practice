import { FC } from 'react'
import tw from 'twin.macro'
import { PracticeFormMessage } from './PracticeFormMessage'
import { PracticeFormButton } from './PracticeFormButton'

type Props = {
  isVerbChecked: boolean
  isVerbCorrect: boolean
  counter: number
  verbsLength: number
  isShowingAnswer: boolean
}

export const PracticeFormFooter: FC<Props> = ({
  isVerbChecked,
  isVerbCorrect,
  counter,
  verbsLength,
  isShowingAnswer,
}) => {
  return (
    <div css={tw`flex justify-between items-center py-2 lg:pt-0 mt-0 lg:mt-0`}>
      <PracticeFormMessage
        isVerbChecked={isVerbChecked}
        isVerbCorrect={isVerbCorrect}
      />
      <PracticeFormButton
        isVerbChecked={isVerbChecked}
        isVerbCorrect={isVerbCorrect}
        counter={counter}
        verbsLength={verbsLength}
        isShowingAnswer={isShowingAnswer}
      />
    </div>
  )
}
