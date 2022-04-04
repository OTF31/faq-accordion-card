import { useState } from "react";

import IconArrowDown from "./assets/icon-arrow-down.svg";
import { ReactComponent as Icon } from "./assets/illustration-woman-online-mobile.svg";

const App = () => {
  const [qOne, setQOne] = useState(false);
  const [qTwo, setQTwo] = useState(false);
  const [qThree, setQThree] = useState(false);
  const [qFour, setQFour] = useState(false);
  const [qFive, setQFive] = useState(false);

  const handleClick = (qNumber) => {
    switch (qNumber) {
      case 1:
        setQOne(!qOne);
        setQTwo(false);
        setQThree(false);
        setQFour(false);
        setQFive(false);
        break;
      case 2:
        setQOne(false);
        setQTwo(!qTwo);
        setQThree(false);
        setQFour(false);
        setQFive(false);
        break;
      case 3:
        setQOne(false);
        setQTwo(false);
        setQThree(!qThree);
        setQFour(false);
        setQFive(false);
        break;
      case 4:
        setQOne(false);
        setQTwo(false);
        setQThree(false);
        setQFour(!qFour);
        setQFive(false);
        break;
      case 5:
        setQOne(false);
        setQTwo(false);
        setQThree(false);
        setQFour(false);
        setQFive(!qFive);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex min-h-screen min-w-full flex-col items-center justify-center bg-gradient-to-b from-[#AE67E9] to-[#6464E6] px-10 pt-[120px] pb-[50px] lg:pt-[80px]">
        <div className="flex h-[535px] w-[330px] min-w-[330px] flex-col items-center rounded-3xl bg-white px-7 font-kumbhSans shadow-[0px_25px_60px_0px_rgba(28,29,52,1)] lg:w-[920px] lg:flex-row lg:justify-between">
          <Icon
            height={200}
            width={230}
            className="relative bottom-[115px] drop-shadow-[0px_30px_0px_rgba(192,192,192,0.4)] lg:bottom-[10px] lg:right-[60px] lg:h-[390px] lg:w-[430px]"
          />

          <div className="lg- flex w-full flex-col gap-4 lg:w-[430px] lg:px-8">
            <h1 className="-mt-[72px] mb-[17px] text-center text-3xl font-bold lg:-mt-[45px] lg:text-left">
              FAQ
            </h1>
            {/* Question 1 */}
            <div className="flex items-center justify-between text-[14px]">
              <p
                className={`${
                  qOne ? "font-bold" : "font-normal hover:text-[#E0876C]"
                } text-[#4A4B5E] hover:cursor-pointer`}
                onClick={() => handleClick(1)}
              >
                How many team members can I invite?
              </p>
              <img
                src={IconArrowDown}
                alt="Arrow Down"
                className={`block h-[8px] w-[12px] hover:cursor-pointer ${
                  qOne ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => handleClick(1)}
              />
            </div>
            {qOne && (
              <p className="relative bottom-2 transform pr-[5px] text-[12px] text-[#787887] lg:pr-[30px]">
                You can invite up to 2 additional users on the Free plan. There
                is no limit on team members for the Premium plan.
              </p>
            )}
            <div
              className={`h-[1px] w-full bg-[#E7E7E9] ${
                qOne ? "relative -mt-3" : ""
              }`}
            ></div>

            {/* Question 2 */}
            <div className="flex items-center justify-between text-[14px]">
              <p
                className={`${
                  qTwo ? "font-bold" : "font-normal hover:text-[#E0876C]"
                } text-[#4A4B5E] hover:cursor-pointer`}
                onClick={() => handleClick(2)}
              >
                What is the maximum file upload size?
              </p>
              <img
                src={IconArrowDown}
                alt="Arrow Down"
                className={`block h-[8px] w-[12px] hover:cursor-pointer ${
                  qTwo ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => handleClick(2)}
              />
            </div>
            {qTwo && (
              <p className="relative bottom-2 transform pr-[5px] text-[12px] text-[#787887] lg:pr-[30px]">
                No more than 2GB. All files in your account must fit your
                allotted storage space.
              </p>
            )}
            <div
              className={`h-[1px] w-full bg-[#E7E7E9] ${
                qTwo ? "relative -mt-3" : ""
              }`}
            ></div>

            {/* Question 3 */}
            <div className="flex items-center justify-between text-[14px]">
              <p
                className={`${
                  qThree ? "font-bold" : "font-normal hover:text-[#E0876C]"
                } text-[#4A4B5E] hover:cursor-pointer`}
                onClick={() => handleClick(3)}
              >
                How do I reset my password?
              </p>
              <img
                src={IconArrowDown}
                alt="Arrow Down"
                className={`block h-[8px] w-[12px] hover:cursor-pointer ${
                  qThree ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => handleClick(3)}
              />
            </div>
            {qThree && (
              <p className="relative bottom-2 transform pr-[5px] text-[12px] text-[#787887] lg:pr-[30px]">
                Click “Forgot password” from the login page or “Change password”
                from your profile page. A reset link will be emailed to you.
              </p>
            )}
            <div
              className={`h-[1px] w-full bg-[#E7E7E9] ${
                qThree ? "relative -mt-3" : ""
              }`}
            ></div>

            {/* Question 4 */}
            <div className="flex items-center justify-between text-[14px]">
              <p
                className={`${
                  qFour ? "font-bold" : "font-normal hover:text-[#E0876C]"
                } text-[#4A4B5E] hover:cursor-pointer`}
                onClick={() => handleClick(4)}
              >
                Can I cancel my subscription?
              </p>
              <img
                src={IconArrowDown}
                alt="Arrow Down"
                className={`block h-[8px] w-[12px] hover:cursor-pointer ${
                  qFour ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => handleClick(4)}
              />
            </div>
            {qFour && (
              <p className="relative bottom-2 transform pr-[5px] text-[12px] text-[#787887] lg:pr-[30px]">
                Yes! Send us a message and we'll process your request no
                questions asked.
              </p>
            )}
            <div
              className={`h-[1px] w-full bg-[#E7E7E9] ${
                qFour ? "relative -mt-3" : ""
              }`}
            ></div>

            {/* Question 5 */}
            <div className="flex items-center justify-between text-[14px]">
              <p
                className={`${
                  qFive ? "font-bold" : "font-normal hover:text-[#E0876C]"
                } text-[#4A4B5E] hover:cursor-pointer`}
                onClick={() => handleClick(5)}
              >
                Do you provide additional support?
              </p>
              <img
                src={IconArrowDown}
                alt="Arrow Down"
                className={`block h-[8px] w-[12px] hover:cursor-pointer ${
                  qFive ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => handleClick(5)}
              />
            </div>
            {qFive && (
              <p className="relative bottom-2 transform pr-[5px] text-[12px] text-[#787887] lg:pr-[30px]">
                Chat and email support is available 24/7. Phone lines are open
                during normal business hours.
              </p>
            )}
            <div
              className={`h-[1px] w-full bg-[#E7E7E9] ${
                qFive ? "relative -mt-3" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
