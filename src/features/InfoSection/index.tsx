/** @jsxImportSource @emotion/react */
import React, { FC, useContext } from "react";
import tw, { theme as twTheme } from "twin.macro";
import { useMediaQuery } from "@material-ui/core";
import { CurrentVerbContext } from "../../shared/context";
import { CurrentVerbAction } from "../../shared/enums";
import { Link } from "react-router-dom";

export const InfoSection: FC = () => {
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`);
  const { state: currentVerb, dispatch: currentVerbDispatch } =
    useContext(CurrentVerbContext);
  const showAnswer = () => {
    currentVerb.isShowingAnswer
      ? currentVerbDispatch({ type: CurrentVerbAction.HideAnswer })
      : currentVerbDispatch({ type: CurrentVerbAction.ShowAnswer });
  };
  return (
    <div
      css={[
        tw`flex flex-col justify-between  p-4 bg-gray-900 w-full lg:w-1/3`,
        isDesktop && { minHeight: "10rem" },
        !isDesktop && { minHeight: "8rem" },
      ]}
    >
      <div css={tw`flex flex-col lg:items-center`}>
        <div css={tw`flex items-center justify-center mb-2 lg:flex-col`}>
          <div css={tw`flex mb-0 lg:mb-8`}>
            <div css={tw`text-gray-200`}>
              <span
                css={tw`pt-0.5 pb-0.5 text-sm lg:text-xs px-2 mr-1 bg-green-200 text-gray-800 rounded-full`}
              >
                Success: 999
              </span>
            </div>
            <div css={tw`text-gray-200`}>
              <span
                css={tw`pt-0.5 pb-0.5 text-sm lg:text-xs px-2 mr-1 bg-red-200 text-gray-800 rounded-full`}
              >
                Error: 999
              </span>
            </div>
            <div css={tw`text-gray-200`}>
              <span
                css={tw`pt-0.5 pb-0.5 text-sm lg:text-xs px-2 mr-1 bg-yellow-200 text-gray-800 rounded-full`}
              >
                Skipped: 999
              </span>
            </div>
          </div>
          <div
            css={tw`text-gray-400 uppercase tracking-wider text-lg hidden lg:block`}
          >
            verb
          </div>
        </div>
        <div css={tw`flex justify-between lg:justify-center lg:flex-col`}>
          <div
            css={tw`text-white text-center text-3xl lg:text-4xl mt-2 lg:mt-4`}
          >
            {currentVerb.verbTense?.tenses.infinitive}
          </div>
          <div css={tw`lg:pt-5`}>
            <button
              css={[
                currentVerb.isVerbChecked &&
                  tw`px-10 py-1 lg:px-16 lg:py-2 lg:mb-8  bg-gray-100 text-gray-900 text-lg rounded-full shadow-md hover:bg-gray-300 focus:outline-none`,
                !currentVerb.isVerbChecked && tw`hidden`,
                currentVerb.isVerbCorrect && tw`hidden`,
              ]}
              type="button"
              onClick={showAnswer}
            >
              Skip verb
            </button>
          </div>
        </div>
      </div>
      <div
        css={tw`flex flex-wrap lg:flex-col-reverse justify-between items-end lg:items-center`}
      >
        <Link to="/">
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
        </Link>
        <div>
          <div>
            <button
              css={[
                currentVerb.isVerbChecked &&
                  tw`px-6 py-1 lg:px-12 lg:py-2 lg:mb-8  bg-gray-100 text-gray-900 text-lg rounded-full shadow-md hover:bg-gray-300 focus:outline-none`,
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
                `Hide Answer`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
