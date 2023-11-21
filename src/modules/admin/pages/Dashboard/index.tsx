import Bell from '@assets/icons/bell.svg?react';
import DashboardSettings from '@assets/icons/dashboardSettings.svg?react';
import { balance } from 'db/dashboard';
import EyeOpen from '@assets/icons/eye.svg?react';
import Warning from '@assets/icons/warning.svg?react';
import WalletService from './components/WalletService';
import RecentPaymentLink from './components/RecentPaymentLink';
import RecentTransactionLink from './components/RecentTransactionLink';

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between bg-[#fff] p-4">
        <p>Hi Paul</p>
        <div className="flex">
          <Bell className="mr-4" />
          <DashboardSettings />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-2 pt-6">
        {balance.map(({ type, amount, id }) => {
          return (
            <div
              key={id}
              className={`${
                id === 3
                  ? 'bg-[#fff]'
                  : id === 2
                  ? 'bg-[#4043f8] text-[#fff]'
                  : 'bg-[#0b0c60] text-[#fff]'
              } h-[120px] border-[1px] rounded-[8px] border-[#f2f2f2] shadow-sm p-8`}
            >
              <div className="flex items-center">
                <p className="pr-2 text-[14px] leading-4">{type}</p>
                {id === 3 ? <Warning /> : <EyeOpen className="text-[#fff]" />}
              </div>
              <h3 className="font-[600] leading-7 text-[24px] mt-4">
                {' '}
                ₦{amount.toFixed(2)}
              </h3>
            </div>
          );
        })}
      </div>

      {/* wallet service */}

      <WalletService />
      <div className="grid lg:grid-cols-2 gap-2 mt-4">
        <RecentPaymentLink />
        <RecentTransactionLink />
      </div>
    </div>
  );
};

export default Dashboard;
