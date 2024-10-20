import { FaChartSimple, FaGlobe } from "react-icons/fa6";
import { RiVipDiamondFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

export const navItem = [
  {
    id: 1,
    icon: <FaChartSimple className="text-xl text-blue-500" />,
    title: 'Charts',
    path: '/charts',
  },
  {
    id: 2,
    icon: <FaGlobe className="text-xl text-blue-500" />,
    title: 'Maps',
    path: '/maps',
  },
  {
    id: 3,
    icon: <RiVipDiamondFill className="text-xl text-blue-500" />,
    title: 'Components',
    path: '/components',
  },
  {
    id: 4,
    icon: <IoMdCart className="text-xl text-blue-500" />,
    title: 'E-Commerce',
    path: '/e-commerce',
  },
  {
    id: 5,
    icon: <FaCalendarAlt className="text-xl text-blue-500" />,
    title: 'Calendar',
    path: '/calendar',
  },
];
