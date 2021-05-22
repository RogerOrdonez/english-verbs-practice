/** @jsxImportSource @emotion/react */
import { FC } from "react";
import tw from "twin.macro";

type Props = {
  id: string;
  label: string;
  formValue: string;
  isVerbChecked: boolean;
  isTenseCorrect: boolean;
  isShowingAnswer: boolean;
  handleInputChange: Function;
};

export const PracticeFormField: FC<Props> = ({
  id,
  label,
  formValue,
  isVerbChecked,
  isTenseCorrect,
  isShowingAnswer,
  handleInputChange,
}) => {
  return (
    <div
      css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5 w-full`}
    >
      <div css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}>
        <label htmlFor={id}>{label}</label>
      </div>
      <div css={tw`block w-full`}>
        <input
          id={id}
          type="text"
          name={id}
          value={formValue}
          readOnly={isTenseCorrect || isShowingAnswer}
          css={[
            tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`,
            isVerbChecked &&
              isTenseCorrect &&
              tw`border rounded text-gray-900 leading-tight focus:outline-none ring-2 ring-gray-600`,
            isVerbChecked &&
              !isTenseCorrect &&
              !isShowingAnswer &&
              tw`border rounded text-gray-900 leading-tight focus:outline-none ring-2 ring-red-600`,
          ]}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
};
