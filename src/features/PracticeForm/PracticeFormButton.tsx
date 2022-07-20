import { FC } from 'react'
import tw from 'twin.macro'

type Props = {
  isVerbChecked: boolean
  isVerbCorrect: boolean
  counter: number
  verbsLength: number
  isShowingAnswer: boolean
}

export const PracticeFormButton: FC<Props> = ({
  isVerbChecked,
  isVerbCorrect,
  counter,
  verbsLength,
  isShowingAnswer,
}) => {
  return (
    <div css={tw`flex justify-end`}>
      <button
        css={[
          tw`px-6 py-1 lg:px-12 lg:py-2 bg-gray-900 dark:bg-gray-100 rounded-full text-gray-100 dark:text-gray-900 text-lg shadow-md hover:bg-gray-800 dark:hover:bg-gray-300 focus:outline-none`,
          isShowingAnswer && tw`cursor-not-allowed`,
        ]}
        type="submit"
        disabled={isShowingAnswer}
      >
        {counter <= verbsLength - 1 &&
          (!isVerbChecked || !isVerbCorrect) &&
          `Check`}
        {counter < verbsLength - 1 && isVerbChecked && isVerbCorrect && `Next`}
        {counter >= verbsLength - 1 &&
          isVerbChecked &&
          isVerbCorrect &&
          `Finish`}
      </button>
    </div>
  )
}
