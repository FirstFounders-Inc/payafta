import upAccordion from '@assets/icons/upArrow.svg';
import downAccordion from '@assets/icons/downArrow.svg';
import { faqQuestions } from 'db/home';
import { useState } from 'react';

const Faq = () => {
  const [accordionOpen, setAccordionOpen] = useState<number>(0);
  function toggleAccordion(index: number) {
    setAccordionOpen(accordionOpen === index ? -1 : index);
  }
  return (
    <div className="pt-24 ">
      <h1 className="text-[#03045B] text-[64px] font-[Playfair] font-bold">
        FAQ
      </h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-[444px] text-[#333333]">
          <p className="text-[24px] font-[500] pb-2">
            (Frequently Asked Questions)
          </p>
          <p className="text-[16px] leading-5">
            Got questions about Payafta? We've got answers. Check out our
            frequently asked questions to find information about using Payafta
            for your online transactions. If you don't find the answer you're
            looking for, feel free to reach out to our support team. We're here
            to assist you.
          </p>
        </div>
        <div className="lg:w-[860px] lg:ml-16 text-[#282525]">
          {faqQuestions?.map(({ id, ques, answer, list }) => (
            <div key={id} className="border border-[#F2F2F2] p-[20px]">
              <div className="flex justify-between items-center  ">
                <h1 className=" text-[18px] lg:text-[20px] leading-[25px] font-[500]">
                  {ques}
                </h1>
                {accordionOpen === id ? (
                  <div
                    className="cursor-pointer"
                    onClick={() => toggleAccordion(id)}
                  >
                    <img src={upAccordion} alt="An accordion" />
                  </div>
                ) : (
                  <div
                    className="cursor-pointer"
                    onClick={() => toggleAccordion(id)}
                  >
                    <img src={downAccordion} alt="An accordion" />
                  </div>
                )}
              </div>
              {accordionOpen === id && (
                <div>
                  <p className="text-[16px] leading-[25px] pt-4">{answer}</p>
                  {list?.map((el, i) => (
                    <div key={i} className="flex items-baseline">
                      <div className="rounded-full bg-[#333] w-[4px] h-[4px] border-[2px] border-[#333]" />
                      <p className="text-[14px] pt-2 ml-2 ">{el}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
