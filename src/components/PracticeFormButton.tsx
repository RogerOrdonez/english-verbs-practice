/** @jsxImportSource @emotion/react */
import { FC } from "react";
import tw from "twin.macro";

type Props = {
  isVerbChecked: boolean;
  isVerbCorrect: boolean;
  counter: number;
  verbsLength: number;
};

export const PracticeFormButton: FC<Props> = ({
  isVerbChecked,
  isVerbCorrect,
  counter,
  verbsLength,
}) => {
  return (
    <div
      css={tw`flex flex-wrap justify-between items-center py-2 lg:pt-12 mt-5 lg:mt-0`}
    >
      <div
        css={[
          isVerbChecked && isVerbCorrect && tw`text-gray-700`,
          isVerbChecked && !isVerbCorrect && tw`text-red-700`,
          tw`text-lg lg:text-2xl`,
        ]}
      >
        {isVerbChecked && isVerbCorrect && `Correct`}
        {isVerbChecked && !isVerbCorrect && `Incorrect`}
      </div>
      <div css={tw`flex justify-end`}>
        <button
          css={tw`px-6 py-1 lg:px-12 lg:py-2 bg-gray-900 rounded-full text-gray-100 text-lg shadow-md hover:bg-gray-800 focus:outline-none`}
          type="submit"
        >
          {counter <= verbsLength - 1 &&
            (!isVerbChecked || !isVerbCorrect) &&
            `Check`}
          {counter < verbsLength - 1 &&
            isVerbChecked &&
            isVerbCorrect &&
            `Next`}
          {counter >= verbsLength - 1 &&
            isVerbChecked &&
            isVerbCorrect &&
            `Finish`}
        </button>
      </div>
    </div>
  );
};
