import CreatePayment from '@assets/icons/createPayment.svg?react';
import FundWallet from '@assets/icons/fundWallet.svg?react';
import Withdraw from '@assets/icons/withdrawFunds.svg?react';

export const balance = [
  {
    type: 'Wallet Balance',
    amount: 0.0,
    id: 1,
  },
  {
    type: 'Escrow Balance',
    amount: 0.0,
    id: 2,
  },
  {
    type: 'Card Balance',
    amount: 0.0,
    id: 3,
  },
];

type SvgInHtml = typeof FundWallet;

export type walletServices = {
  Icon: SvgInHtml;
  service: string;
  id: number;
};
export const walletServices: walletServices[] = [
  {
    Icon: FundWallet,
    service: 'Fund Wallet',
    id: 1,
  },
  {
    Icon: CreatePayment,
    service: 'Create Payment',
    id: 2,
  },
  {
    Icon: Withdraw,
    service: 'Withdraw Fund',
    id: 3,
  },
];
