import { FaChevronDown } from "react-icons/fa";
import paymentsArray from "./Constants";

import Payments from "./Payments";

const RightCard = () => {
  return (
    <div className="h-full w-full">
      <div className="overview flex searchBar border-0 justify-between items-center absolute bg-gray-100 p-6 py-8 ">
        <h1 className="text-lg font-medium">Overview</h1>
        <span className="flex justify-center items-center border-2 p-2 border-b-gray-300 text-gray-500 p-auto rounded-md">
          <h1>This Month</h1>
          <FaChevronDown className="text-sm ml-2" />
        </span>
      </div>

      <div className="cards flex justify-between align-top w-auto flex-wrap absolute  ">
        {paymentsArray.map((payment, index) => (
          <div
            key={index}
            className={`card m-4 ${
              payment.status === "Next Payout"
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            } shadow-md rounded-md flex flex-col h-auto `}
          >
            <h2 className="text-base font-light p-2 m-1">{payment.status}</h2>
            <div className="amount flex items-center justify-between mx-1 mb-1 p-2  ">
              <p className="text-3xl  tracking-wide"> {payment.amount}</p>
              <p
                className={`text-underline text-sm underline pl-16 pr-4 ${
                  payment.nextPaymentDate ? "text-gray-300" : "text-blue-500"
                }`}
              >
                {payment.numberOfOrders} >
              </p>
            </div>

            {payment.nextPaymentDate ? (
              <>
                {" "}
                <div className="down flex flex-row justify-between items-center ">
                  <p className="text-xs w-full  bg-blue-800  p-2 rounded-bl-md ">
                    Next Payment Date:
                  </p>
                  <p className="text-xs text-right w-full bg-blue-800  p-2 rounded-br-md  ">
                    {payment.nextPaymentDate}
                  </p>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className="transaction absolute">
        <h1 className="text-xl font-medium ">Transaction | This Month </h1>
      </div>
      <div className="button absolute ">
        <button className="pay bg-gray-200 text-gray-400  px-3 py-1 text-sm">
          Payouts 22
        </button>
        <button className="ref bg-blue-500 text-gray-100 m-2 px-3 py-1 text-sm">
          {" "}
          Refunds (6)
        </button>
      </div>
      <Payments />
    </div>
  );
};

export default RightCard;
