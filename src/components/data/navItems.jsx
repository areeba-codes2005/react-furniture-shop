import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const menuItems = [
  { label: "Home", link: "/" },
  { label: "Shop", link: "/shop", icon: <MdOutlineKeyboardArrowDown /> },
  { label: "Pages", link: "/pages", icon: <MdOutlineKeyboardArrowDown /> },
  {
    label: "Collections",
    link: "/collections",
    icon: <MdOutlineKeyboardArrowDown />,
  },
  { label: "Blog", link: "/blog", icon: <MdOutlineKeyboardArrowDown /> },
  { label: "Contact", link: "/contact-us" },
];

export const socialIcons = [
  { icon: <IoPersonOutline /> },
  { icon: <RiShoppingBagLine /> },
  { icon: <IoMdSearch /> },
];
