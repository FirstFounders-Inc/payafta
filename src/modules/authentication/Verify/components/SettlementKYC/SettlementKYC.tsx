import RightArrow from '@assets/icons/rightAccordion.svg?react';
import Button from '@components/shared/Button';

import { useAppDispatch } from 'redux/hooks';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import Check from '@assets/icons/grrenCheck.svg?react';
import { IFormCheck } from '../../GetStarted';

type Props = {
  formCheck: IFormCheck;
};

const SettlementKYC = ({ formCheck }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className=" m-4">
      <div className="flex justify-between  bg-[#FFFFFF] border-[1px] rounded-[8px] p-6 border-[#f2f2f2] w-[606px] h-[96px]">
        <div>
          <h3 className="text-[#333333] text-[16px] font-semibold leading-5">
            Settlement KYC
          </h3>
          <p className="text-[#666666] text-[14px] leading-4">
            Add bank account for payout
          </p>
        </div>
        <div>
          {formCheck.isDone.includes(2) ? (
            <Check />
          ) : (
            <Button
              className="bg-[#03045B] rounded-[40px] px-10 py-2"
              onClick={() => {
                dispatch(
                  setOpenModal({
                    openModal: true,
                    modalType: 'settlementKYC',
                  }),
                );
              }}
              disabled={formCheck.isActive !== 2}
            >
              Submit <RightArrow />{' '}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettlementKYC;