import { ReactNode } from 'react';

export type IModalPopType = {
  openModal: boolean;

  modalType: string;
};

export type IModalBox = {
  openModalBox: boolean;
  children?: ReactNode;
  onBackgroundClick?: () => void;
};
