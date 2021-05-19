/** @jsxImportSource @emotion/react */
import { FC, MouseEventHandler } from "react";
import { verbs } from "../data/verbs";
import tw, { theme as twTheme } from "twin.macro";
import { useMediaQuery } from "@material-ui/core";
import { VerbType } from "../shared/Types";

type Props = {
  currentVerb: VerbType;
  counter: number;
  isVerbChecked: boolean;
  isVerbCorrect: boolean;
  isShowingAnswer: boolean;
  showAnswer: MouseEventHandler<HTMLButtonElement>;
};

export const InfoSection: FC<Props> = ({
  currentVerb,
  counter,
  isVerbChecked,
  isVerbCorrect,
  isShowingAnswer,
  showAnswer,
}) => {
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`);
  return (
    <div
      css={[
        tw`flex flex-col justify-between p-4 bg-gray-900 w-full lg:w-1/3`,
        isDesktop && { minHeight: "10rem" },
        !isDesktop && { minHeight: "8rem" },
      ]}
    >
      <div css={tw`flex flex-col lg:items-center`}>
        <div
          css={tw`text-gray-400 uppercase tracking-wider text-sm lg:text-lg`}
        >
          verb
        </div>
        <div css={tw`text-white text-2xl lg:text-4xl mt-2 lg:mt-4`}>
          {currentVerb.tenses.infinitive}
        </div>
      </div>

      <div
        css={tw`flex flex-wrap lg:flex-col-reverse justify-between items-end lg:items-center`}
      >
        <div>
          <div css={tw`text-gray-400 text-base lg:text-lg mt-2 lg:mt-0`}>
            View all verbs{" "}
            <svg
              css={tw`inline w-2 h-2 fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </svg>
          </div>
        </div>
        <div>
          <button
            css={[
              counter < verbs.length - 1 &&
                isVerbChecked &&
                tw`px-6 py-1 lg:px-12 lg:py-2 lg:mb-8  bg-gray-100 text-gray-900 text-lg rounded-full shadow-md hover:bg-gray-300 focus:outline-none`,
              counter < verbs.length - 1 && !isVerbChecked && tw`hidden`,
              isVerbCorrect && tw`hidden`,
            ]}
            type="button"
            onClick={showAnswer}
          >
            {counter < verbs.length - 1 &&
              isVerbChecked &&
              !isShowingAnswer &&
              `Show Answer`}
            {counter < verbs.length - 1 &&
              isVerbChecked &&
              isShowingAnswer &&
              `Hide Answer`}
          </button>
        </div>
      </div>
    </div>
  );
};
