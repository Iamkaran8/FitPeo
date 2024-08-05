import TotalLists from "../components/TotalLists";
import Tasks from "../components/Tasks";
import TotalProfits from "../components/TotalProfits";
import CustomerFeedBack from "../components/CustomerFeedBack";
import Activity from "../components/Activity";
import Orders from "../components/Orders";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <h2 className="px-3 pt-3">Dashboard</h2>
      <div className="row justify-content-around py-2 gy-1">
        <div className="col-lg-8  px-2">
          <div className="row Insights justify-content-between">
            <TotalLists />
          </div>
        </div>
        <div className="col-lg-4 px-2">
          <TotalProfits />
        </div>
      </div>
      <div className="row align-items-center justify-content-around gy-2">
        <div className="col-lg-8  px-2">
          <div className="row bg-dark activity justify-content-between gx-3 p-3">
            <Activity />
          </div>
        </div>
        <div className="col-lg-4 px-2">
          <div className="bg-dark tasks py-2">
            <Tasks />
          </div>
        </div>
      </div>
      <div className="row align-items-center justify-content-around py-2 gy-2">
        <div className="col-lg-8  px-2">
          <div className="row bg-dark orders gx-3 px-3">
            <Orders />
          </div>
        </div>
        <div className="col-lg-4 px-2">
          <div className="bg-dark comments px-2">
            <CustomerFeedBack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
