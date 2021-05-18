/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { verbs } from "./data/verbs";
import tw, { theme as twTheme } from "twin.macro";
import { useMediaQuery } from "@material-ui/core";

function App() {
  const [counter, setCounter] = useState(0);
  const [isVerbCorrect, setIsVerbCorrect] = useState(false);
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);
  const [isVerbChecked, setIsVerbChecked] = useState(false);
  const [formValue, setFormValue] = useState({
    present: "",
    past: "",
    pastParticiple: "",
    presentParticiple: "",
    meaning: "",
  });
  const [checkedVerb, setCheckedVerb] = useState({
    isPresentCorrect: false,
    isPastCorrect: false,
    isPastParticipleCorrect: false,
    isPresentParticipleCorrect: false,
    isMeaningCorrect: false,
  });
  const [currentVerb, setCurrentVerb] = useState({
    verb: "",
    type: "",
    tenses: {
      infinitive: "",
      present: [""],
      past: [""],
      pastParticiple: [""],
      presentParticiple: [""],
      meaning: [""],
    },
  });
  const [inputVerb, setInputVerb] = useState({
    present: "",
    past: "",
    pastParticiple: "",
    presentParticiple: "",
    meaning: "",
  });
  const isDesktop = useMediaQuery(`(min-width: ${twTheme`screens.lg`})`);
  const checkPresentVerb = () => {
    const inputPresent = formValue.present
      .toLowerCase()
      .split(",")
      .map((presentVerb) => presentVerb.trim());
    const correctPresentVerb = currentVerb.tenses.present.map((presentVerb) =>
      presentVerb.trim().toLowerCase()
    );
    let validInput = 0;
    correctPresentVerb.forEach((presentVerb) => {
      if (inputPresent.includes(presentVerb)) validInput++;
    });
    return validInput === correctPresentVerb.length;
  };
  const checkPastVerb = () => {
    const inputPast = formValue.past
      .toLowerCase()
      .split(",")
      .map((verbTense) => verbTense.trim());
    const correctPastVerb = currentVerb.tenses.past.map((verbTense) =>
      verbTense.trim().toLowerCase()
    );
    let validInput = 0;
    correctPastVerb.forEach((verbTense) => {
      if (inputPast.includes(verbTense)) validInput++;
    });
    return validInput === correctPastVerb.length;
  };
  const checkPresentParticipleVerb = () => {
    const inputPresentParticiple = formValue.presentParticiple
      .toLowerCase()
      .split(",")
      .map((verbTense) => verbTense.trim());
    const correctPresentParticipleVerb =
      currentVerb.tenses.presentParticiple.map((verbTense) =>
        verbTense.trim().toLowerCase()
      );
    let validInput = 0;
    correctPresentParticipleVerb.forEach((verbTense) => {
      if (inputPresentParticiple.includes(verbTense)) validInput++;
    });
    return validInput === correctPresentParticipleVerb.length;
  };
  const checkPastParticipleVerb = () => {
    const inputPastParticiple = formValue.pastParticiple
      .toLowerCase()
      .split(",")
      .map((verbTense) => verbTense.trim());
    const correctPastParticipleVerb = currentVerb.tenses.pastParticiple.map(
      (verbTense) => verbTense.trim().toLowerCase()
    );
    let validInput = 0;
    correctPastParticipleVerb.forEach((verbTense) => {
      if (inputPastParticiple.includes(verbTense)) validInput++;
    });
    return validInput === correctPastParticipleVerb.length;
  };
  const checkVerbMeaning = () => {
    const inputMeaningParticiple = formValue.meaning
      .toLowerCase()
      .split(",")
      .map((verbTense) => verbTense.trim());
    const correctMeaningParticipleVerb = currentVerb.tenses.meaning.map(
      (verbTense) => verbTense.trim().toLowerCase()
    );
    let validInput = 0;
    correctMeaningParticipleVerb.forEach((verbTense) => {
      if (inputMeaningParticiple.includes(verbTense)) validInput++;
    });
    return validInput === correctMeaningParticipleVerb.length;
  };
  const checkVerb = () => {
    if (!isVerbChecked) {
      setCheckedVerb(() => {
        const verb = {
          isPresentCorrect: checkPresentVerb(),
          isPastCorrect: checkPastVerb(),
          isPastParticipleCorrect: checkPastParticipleVerb(),
          isPresentParticipleCorrect: checkPresentParticipleVerb(),
          isMeaningCorrect: checkVerbMeaning(),
        };
        setIsVerbCorrect(
          verb.isPresentCorrect &&
            verb.isPastCorrect &&
            verb.isPastParticipleCorrect &&
            verb.isPresentParticipleCorrect &&
            verb.isMeaningCorrect
        );
        return verb;
      });
      setIsVerbChecked(true);
    }
    if (isVerbChecked) {
      if (counter < verbs.length - 1) {
        setCounter((counter) => counter + 1);
        setFormValue({
          present: "",
          past: "",
          pastParticiple: "",
          presentParticiple: "",
          meaning: "",
        });
        setIsVerbChecked(false);
      } else {
        reset();
      }
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkVerb();
  };
  useEffect(() => {
    setCurrentVerb(verbs[counter]);
  }, [counter]);
  const reset = () => {
    setCounter(0);
  };
  const showAnswer = () => {
    setIsShowingAnswer(() => {
      if (!isShowingAnswer) {
        setInputVerb(formValue);
        setFormValue({
          present: !checkedVerb.isPresentCorrect
            ? currentVerb.tenses.present.join(", ")
            : formValue.present,
          past: !checkedVerb.isPastCorrect
            ? currentVerb.tenses.past.join(", ")
            : formValue.past,
          pastParticiple: !checkedVerb.isPastParticipleCorrect
            ? currentVerb.tenses.pastParticiple.join(", ")
            : formValue.pastParticiple,
          presentParticiple: !checkedVerb.isPresentParticipleCorrect
            ? currentVerb.tenses.presentParticiple.join(", ")
            : formValue.presentParticiple,
          meaning: !checkedVerb.isMeaningCorrect
            ? currentVerb.tenses.meaning.join(", ")
            : formValue.meaning,
        });
      } else {
        setFormValue(inputVerb);
      }
      return !isShowingAnswer;
    });
  };
  return (
    <div>
      <div css={tw`flex justify-center items-center h-screen bg-gray-600`}>
        <div
          css={tw`flex flex-wrap rounded-lg h-screen md:h-auto bg-white shadow-md overflow-hidden w-full md:mx-8 lg:w-4/5 xl:w-3/5`}
        >
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
                  ]}
                  type="button"
                  onClick={showAnswer}
                >
                  {counter < verbs.length - 1 && !isVerbChecked && `Check`}
                  {counter < verbs.length - 1 && isVerbChecked && `Show Answer`}
                  {counter >= verbs.length - 1 && `Finish`}
                </button>
              </div>
            </div>
          </div>
          <div css={tw`px-4 pt-1 lg:pt-4 w-full lg:w-2/3`}>
            <div css={tw`flex justify-between`}>
              <div css={tw`text-gray-400 uppercase tracking-wider text-base`}>
                Complete the following fields
              </div>
              <div css={tw`hidden pt-1 pl-32`}>
                <div
                  css={tw`bg-gray-200 rounded-full h-2 w-4/5 overflow-hidden`}
                >
                  <div css={tw`h-2 bg-gray-900 w-1/5`}></div>
                </div>
                <div css={tw`text-xs text-gray-400 text-right uppercase`}>
                  6/9 Verbs
                </div>
              </div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div
                css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5 w-full`}
              >
                <div
                  css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}
                >
                  <label htmlFor="present">Present: </label>
                </div>
                <div css={tw`block w-full`}>
                  <input
                    id="present"
                    type="text"
                    name="present"
                    value={formValue.present}
                    readOnly={isVerbChecked && !isVerbCorrect}
                    css={[
                      tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`,
                      isVerbChecked &&
                        checkedVerb.isPresentCorrect &&
                        tw`border rounded text-gray-900 leading-tight focus:outline-none ring-2 ring-gray-600`,
                      isVerbChecked &&
                        !checkedVerb.isPresentCorrect &&
                        tw`border rounded text-gray-900 leading-tight focus:outline-none ring-2 ring-red-600`,
                    ]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div
                css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5`}
              >
                <div
                  css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}
                >
                  <label htmlFor="past">Past: </label>
                </div>
                <div css={tw`block w-full`}>
                  <input
                    id="past"
                    type="text"
                    name="past"
                    value={formValue.past}
                    readOnly={isVerbChecked && !isVerbCorrect}
                    css={[
                      !isVerbChecked &&
                        tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`,
                      isVerbChecked &&
                        !isVerbCorrect &&
                        tw`w-full p-1 border rounded text-gray-900 leading-tight focus:outline-none ring-2 ring-red-600`,
                    ]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div
                css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5`}
              >
                <div
                  css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}
                >
                  <label htmlFor="pastParticiple">Past Participle:</label>
                </div>
                <div css={tw`block w-full`}>
                  <input
                    id="pastParticiple"
                    type="text"
                    name="pastParticiple"
                    value={formValue.pastParticiple}
                    readOnly={isVerbChecked && !isVerbCorrect}
                    css={[
                      !isVerbChecked &&
                        tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`,
                      isVerbChecked &&
                        !isVerbCorrect &&
                        tw`w-full p-1 border rounded text-gray-900 leading-tight focus:outline-none ring-2 ring-red-600`,
                    ]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div
                css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5`}
              >
                <div
                  css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}
                >
                  <label htmlFor="presentParticiple">Present Participle:</label>
                </div>
                <div css={tw`block w-full`}>
                  <input
                    id="presentParticiple"
                    type="text"
                    name="presentParticiple"
                    value={formValue.presentParticiple}
                    readOnly={isVerbChecked && !isVerbCorrect}
                    css={[
                      !isVerbChecked &&
                        tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`,
                      isVerbChecked &&
                        !isVerbCorrect &&
                        tw`w-full p-1 border rounded text-gray-900 leading-tight focus:outline-none ring-2 ring-red-600`,
                    ]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
              <div
                css={tw`flex flex-wrap lg:flex-nowrap text-lg text-gray-900 items-center mt-1 lg:mt-5`}
              >
                <div
                  css={tw`block w-full lg:w-1/2 text-gray-700 mr-2 font-bold py-1`}
                >
                  <label htmlFor="meaning">Meaning</label>
                </div>
                <div css={tw`block w-full`}>
                  <input
                    id="meaning"
                    type="text"
                    name="meaning"
                    value={formValue.meaning}
                    readOnly={isVerbChecked && !isVerbCorrect}
                    css={[
                      !isVerbChecked &&
                        tw`w-full p-1 shadow border rounded text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-gray-600`,
                      isVerbChecked &&
                        !isVerbCorrect &&
                        tw`w-full p-1 border rounded text-gray-900 leading-tight focus:outline-none ring-2 ring-red-600`,
                    ]}
                    onChange={(e) => handleInputChange(e)}
                  />
                </div>
              </div>
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
                    {counter < verbs.length - 1 && !isVerbChecked && `Check`}
                    {counter < verbs.length - 1 && isVerbChecked && `Next`}
                    {counter >= verbs.length - 1 && `Finish`}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
