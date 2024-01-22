import Breadcrumb from '../../../components/Breadcrumb';
import CardOne from '../../../components/CardOne';

const PlansList = () => {
  return (
    <>
      <Breadcrumb pageName="Subscription Plans" />
      <div className="flex flex-row flex-wrap w-full">
        {[0, 1, 2, 3, 4]?.map((item) => (
          <div className="w-1/3" key="item">
            <CardOne />
          </div>
        ))}
      </div>
    </>
  );
};

export default PlansList;
