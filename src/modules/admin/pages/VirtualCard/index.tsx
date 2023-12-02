import PageHeader from '@components/shared/PageHeader';
import CreateCard from './components/CreateCard';

const VirtualCard = () => {
  return (
    <div className="bg-[#fff] p-6 rounded-[8px]">
      <PageHeader bigText="Virtual Card" />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-red-500 ">a</div>
        <div className=" col-span-2 rounded-[16px] border-[2px] border-[#f2f2f2] p-2  h-[466px]">
          <CreateCard />
        </div>
      </div>
    </div>
  );
};

export default VirtualCard;
