/** @jsxImportSource @emotion/react */
import { FC } from "react";
import tw from "twin.macro";

type Props = {
  id: string;
  label: string;
  additionalLabel?: string;
  formValue: string;
  isVerbChecked: boolean;
  isTenseCorrect: boolean;
  isShowingAnswer: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  marginTop?: boolean;
  marginBottom?: boolean;
};

export const PracticeFormField: FC<Props> = ({
  id,
  label,
  additionalLabel,
  formValue,
  isVerbChecked,
  isTenseCorrect,
  isShowingAnswer,
  handleInputChange,
  marginTop,
  marginBottom,
}) => {
  return (
    <div
      css={[
        tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 mt-1 items-center w-full`,
        additionalLabel && tw`lg:mb-0`,
        !additionalLabel && tw`lg:mb-5`,
        marginTop && tw`mt-0 lg:mt-7`,
        marginBottom && tw`mb-0 lg:mb-4`,
      ]}
    >
      <div
        css={tw`flex flex-row flex-wrap lg:items-end lg:flex-col w-full lg:w-1/2 text-gray-700 lg:mr-4 font-bold py-1 text-sm lg:text-lg`}
      >
        <div>
          <label htmlFor={id}> {label}</label>
        </div>
        <div css={tw`mt-0 ml-1 lg:ml-0`}>
          <span css={tw`text-xs italic align-middle lg:align-top p-0`}>
            {additionalLabel}
          </span>
        </div>
      </div>
      <div css={tw`block w-full`}>
        <input
          id={id}
          type="text"
          name={id}
          value={formValue}
          readOnly={isTenseCorrect || isShowingAnswer}
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          autoCapitalize="off"
          css={[
            tw`w-full p-1 lg:p-2 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`,
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
