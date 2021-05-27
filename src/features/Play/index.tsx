/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { InfoSection } from "../InfoSection";
import { PracticeForm } from "../PracticeForm";

export const Play = () => {
  return (
    <div>
      <div css={tw`flex justify-center items-center h-screen bg-gray-600`}>
        <div
          className="animate__animated animate__fadeIn"
          css={tw`flex flex-wrap rounded-lg h-screen md:h-auto bg-white shadow-md overflow-hidden w-full md:mx-8 lg:w-4/5 xl:w-3/5`}
        >
          <InfoSection />
          <PracticeForm />
        </div>
      </div>
    </div>
  );
};
