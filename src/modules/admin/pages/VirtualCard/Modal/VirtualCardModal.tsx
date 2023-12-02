import ModalBoxLayout from '@components/shared/ModalBoxLayout';
import RenderIf from '@components/shared/RenderIf';
import { useAppSelector } from 'redux/hooks';
import CreateVirtualCardModal from './CreateVirtualCardModal';
import { IVirtualCardModalProps } from '@interfaces/virtualCard.interface';

const VirtualCardModal = ({ setCreateCard }: IVirtualCardModalProps) => {
  const { modalType, openModal } = useAppSelector(state => state.modal);
  return (
    <div>
      <ModalBoxLayout openModalBox={openModal}>
        <RenderIf condition={modalType === 'createVirtualCard'}>
          <CreateVirtualCardModal setCreateCard={setCreateCard} />
        </RenderIf>
      </ModalBoxLayout>
    </div>
  );
};

export default VirtualCardModal;
