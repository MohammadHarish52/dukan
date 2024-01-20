import { GrHomeRounded } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { GiElectric } from "react-icons/gi";
import { BsBoxes } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { MdOutlineColorLens } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import "/src/App.css";
import { CiWallet } from "react-icons/ci";

export function Sidebar() {
  return (
    <div className="sidebar p-4  h-100vh text-white relative">
      <span className="flex flex-row upcard">
        <img src="/public/assets/Dukan.svg" className="mx-2 my-1" />
        <div className="upper flex flex-col ml-2 ">
          <h1>Nishyan</h1>
          <a href="" className="text-xs text-gray-400 underline">
            Visit Store
          </a>
        </div>
        <FaChevronDown className="absolute neeche" />
      </span>
      <ul className="mt-4 text-gray-300">
        <li>
          <GrHomeRounded />
          <h3>Home</h3>
        </li>
        <li>
          <FaClipboardList />
          <h3>Orders</h3>
        </li>
        <li>
          <BsBoxes />
          <h3>Products</h3>
        </li>
        <li>
          <CiDeliveryTruck />
          <h3>Delievery</h3>
        </li>
        <li>
          <HiOutlineSpeakerWave />
          <h3>Marketing</h3>
        </li>
        <li>
          <TbBrandGoogleAnalytics />
          <h3>Analytics</h3>
        </li>
        <li>
          <MdPayments />
          <h3>Payouts</h3>
        </li>
        <li>
          <CiDiscount1 />
          <h3>Discounts</h3>
        </li>
        <li>
          <IoPeopleOutline />
          <h3>Audience</h3>
        </li>
        <li>
          <MdOutlineColorLens />
          <h3>Appearnce</h3>
        </li>
        <li>
          <GiElectric />
          <h3>Plugins</h3>
        </li>
      </ul>
      <div className="downContainer mt-40 flex flex-row justify-center items-center shadow-lg  p-4 bg-opacity-50 ">
        <div className="card shadow-md">
          <CiWallet className="text-2xl downCard opacity-50 shadow-md " />
        </div>
        <div className="flex-1">
          <p className="text-gray-400 font-thin text-sm">Available credit</p>
          <h3>222.10</h3>
        </div>
      </div>
    </div>
  );
}
