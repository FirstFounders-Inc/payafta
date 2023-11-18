import { IModalPopType } from '@interfaces/modal.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  openModal: false,
  modalType: '',
} as IModalPopType;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenModal(
      state: IModalPopType,
      { payload }: PayloadAction<{ openModal: boolean; modalType: string }>,
    ) {
      state.openModal = payload.openModal;
      state.modalType = payload.modalType;
    },
  },
});

export const { setOpenModal } = modalSlice.actions;

export default modalSlice.reducer;
