import { LuArrowDownUp } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import "/src/App.css"; // Make sure to adjust the path based on your project structure
import { ordersArray } from "./Constants";

const Payments = () => {
  return (
    <div>
      <div className="TopSesrch">
        <div className="topArea relative flex items-center justify-between">
          <input
            type="text"
            placeholder="Order ID or transaction ID"
            className="bg-white pl-10 pr-4 py-2 rounded-sm m-2 border-2 text-sm"
          />{" "}
          <CiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-xl text-gray-400 font-extrabold" />
          <div className="sort keys flex flex-row justify-center items-center m-2">
            <div className="sortdabba flex justify-center items-center flex-row h-full w-full border-2 rounded-sm p-">
              <span className="text-gray-500 pl-2 pr-2">Sort</span>
              <LuArrowDownUp className="text-gray-500" />{" "}
            </div>
            <FiDownload className="download border-2 text-3xl rounded-sm text-gray-500 m-2" />
          </div>
        </div>
      </div>
      <PaymentTable />
    </div>
  );
};

export const PaymentTable = () => {
  return (
    <div className="contents bg-gray-600 p-7">
      <ul className="flex justify-between items-center text-sm font-medium text-gray-600 p-3 m-2 bg-gray-200">
        <li className="w-1/5">Order ID</li>
        <li className="w-1/5">Status</li>
        <li className="w-1/5">Transaction ID</li>
        <li className="w-1/5">Refund Date</li>
        <li className="w-1/5">Order Amount</li>
      </ul>

      {ordersArray.map((order, index) => (
        <div
          key={index}
          className={`flex justify-between items-center text-sm p-3 m-2 bg-gray-${
            index % 2 === 0 ? "white" : "white"
          } border-b-2 border-b-gray-200`}
        >
          <span className="w-1/5 text-sky-400">{order.orderId}</span>
          <div className="flex items-center w-1/5">
            {order.status === "paid" ? (
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            ) : (
              <div className="w-3 h-3 bg-gray-300  rounded-full mr-2"></div>
            )}
            <span className="text-left">
              {order.status === "paid" ? "Successful" : "Processing"}
            </span>
          </div>
          <span className="w-1/5 text-gray-500">{order.transactionId}</span>
          <span className="w-1/5 text-gray-500">{order.refundDate}</span>
          <span className="w-1/5 text-gray-500">{order.orderAmount}</span>
        </div>
      ))}
    </div>
  );
};

export default Payments;
