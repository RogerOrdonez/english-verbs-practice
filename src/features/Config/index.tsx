/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React, { useContext, useEffect } from "react";
import { VerbsContext } from "../../shared/context";
import { SelectedVerbsAction } from "../../shared/enums";
import { VerbType } from "../../shared/types";
import { setVerbsOnStorage } from "../../services/storageService";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { checkBoxesDivider } from "../../shared/constants";
import { useHistory } from "react-router-dom";

export const Config = () => {
  const { state: verbs, dispatch: verbsDispatch } = useContext(VerbsContext);
  const history = useHistory();
  const verbsBySection = verbs.groupBy((verb) => verb?.section);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    verb: VerbType | undefined
  ) => {
    if (event.target.checked) {
      verbsDispatch({
        type: SelectedVerbsAction.SelectVerb,
        payload: { verb },
      });
    } else {
      verbsDispatch({
        type: SelectedVerbsAction.UnselectVerb,
        payload: { verb },
      });
    }
  };
  useEffect(() => {
    setVerbsOnStorage(verbs);
  }, [verbs]);
  return (
    <div css={[tw`flex justify-center items-center h-screen bg-gray-600`]}>
      <div
        className="animate__animated animate__fadeIn"
        css={[
          tw`rounded-lg bg-white shadow-md w-full md:mx-8 lg:w-4/5 xl:w-3/5 md:h-3/5 `,
        ]}
      >
        <div
          css={[
            tw`flex flex-wrap overflow-y-auto rounded-lg bg-white w-full h-screen md:h-full pt-2.5`,
          ]}
        >
          <div css={tw`w-full p-2 md:p-8 mb-5`}>
            <div css={tw`text-2xl lg:text-3xl`}>
              Selected verbs to practice:
            </div>
            <div css={tw`flex flex-col justify-between min-h-full`}>
              <CheckboxGroup>
                <div css={tw`flex flex-col`}>
                  {verbsBySection?.keySeq().map((section) => {
                    return (
                      <div key={section ? `${section}:` : "No Section:"}>
                        <div css={tw`text-lg font-bold mt-4 mb-2`}>
                          {section ? `${section}:` : "No Section:"}
                        </div>
                        <div css={tw`flex flex-wrap justify-start`}>
                          {verbsBySection
                            .get(section)
                            ?.keySeq()
                            .map((verbKey, idx) => {
                              const verb = verbsBySection
                                .get(section)
                                ?.get(verbKey);
                              return (
                                <React.Fragment key={verb?.name}>
                                  <div
                                    css={tw`text-gray-900 text-base lg:text-lg w-1/2 md:w-36 mt-2.5`}
                                  >
                                    <Checkbox
                                      isChecked={verb?.isSelected}
                                      colorScheme="gray"
                                      size="lg"
                                      name={verb?.name}
                                      onChange={(e) => handleChange(e, verb)}
                                    >
                                      {verb?.name}
                                    </Checkbox>
                                  </div>
                                  {(idx + 1) % checkBoxesDivider === 0 && (
                                    <>
                                      <br />
                                      <div
                                        css={tw`w-full mt-3 border-b border-gray-200`}
                                      />
                                    </>
                                  )}
                                </React.Fragment>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CheckboxGroup>
              <div
                css={tw`flex flex-col md:flex-row items-center content-center justify-center lg:justify-start`}
              >
                <button
                  css={[
                    verbs?.filter((verb) => verb?.isSelected).size > 0 &&
                      tw`px-12 py-3 mb-5 lg:py-2 bg-gray-900 rounded-full text-gray-100 text-lg shadow-md hover:bg-gray-800 focus:outline-none`,
                    verbs?.filter((verb) => verb?.isSelected).size === 0 &&
                      tw`px-12 py-3 mb-5 lg:py-2 bg-gray-50 rounded-full text-gray-500 text-lg shadow-md hover:cursor-not-allowed focus:outline-none`,
                  ]}
                  type="button"
                  disabled={
                    verbs?.filter((verb) => verb?.isSelected).size === 0
                  }
                  onClick={() => history.push("/play")}
                >
                  Play pratice
                </button>
                {verbs?.filter((verb) => verb?.isSelected).size === 0 && (
                  <p css={tw`ml-0 md:ml-2 text-center mb-4 text-red-700`}>
                    Select at least one verb from the list.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
