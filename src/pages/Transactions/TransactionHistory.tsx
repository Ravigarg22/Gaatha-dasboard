import Breadcrumb from '../../components/Breadcrumb';
import DataTable from '../../components/DataTable/DataTable';

const TransactionHistory = () => {
  return (
    <>
      <Breadcrumb pageName="All Transactions" />
      <div className="flex flex-row flex-wrap w-full">
        <DataTable />
      </div>
    </>
  );
};

export default TransactionHistory;
