import {
  EarnWithUsSection,
  HelpFooterSection,
} from "../../footerdata";
import facebook from "../assets/icons/facebook.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Instgram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter.svg";
import Pinterest from "../assets/icons/pinterest.svg";

import Logo from '../assets/icons/whitelogo.svg';
import CallLogo from '../assets/icons/calllogo.svg';
import EmailLogo from '../assets/icons/emaillogo.svg';
import locationLogo from '../assets/icons/locationlogo.svg';

const Footer = () => {
  return (
    <footer className="mt-12 bg-orangered text-white">
      <div className="flex sm:w-[90vw] sm:m-auto flex-row justify-between">
        <div className="text-sm">
          <h4 className="font-bold text-xl mb-3 mt-5">HELP</h4>
          {HelpFooterSection.map((item) => (
            <div className="mt-1" key={item.label}>
              <a className="font-medium cursor-pointer">{item.label}</a>
            </div>
          ))}
        </div>
        <div className="text-sm">
          <h4 className="font-bold text-xl mb-3 mt-5">EARN WITH US</h4>
          {EarnWithUsSection.map((item) => (
            <div className="mt-1" key={item.label}>
              <a className="font-medium cursor-pointer">{item.label}</a>
            </div>
          ))}
        </div>
        <div className="text-sm">
          <div className="flex gap-2 mt-4 justify-center ">
            <img src={facebook} alt="logo" className="cursor-pointer" width={30} height={30} />
            <img src={Linkedin} alt="logo" className="cursor-pointer" width={30} height={30} />
            <img src={Instgram} alt="logo" className="cursor-pointer" width={30} height={30} />
            <img src={Twitter} alt="logo" className="cursor-pointer" width={30} height={30} />
            <img src={Pinterest} alt="logo" className="cursor-pointer" width={30} height={30} />
          </div>
          <div className="mt-4"><img src={Logo} width={200} /></div>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex w-[200px]  gap-3"><img src={CallLogo} alt="logo" width={20} height={20} className="ml-4" /><p className="text-xs font-medium">+91 93375 59575</p></div>
            <div className="flex w-[200px] gap-3"><img src={EmailLogo} alt="logo" width={20} height={20} className="ml-4" /><p className="text-xs font-medium">support@emoment.in</p></div>
            <div className="flex w-[200px] gap-4"><div><img src={locationLogo} alt="logo" width={70} height={70} className="ml-3 mr-4"/></div><p className="text-xs font-medium">DCB-324, 3rd Floor, DLF Cyber City, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024</p></div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-screen flex justify-center"><p className="font-medium text-base">Powered By eMoment.in © 2024</p></div>
    </footer>
  );
};

export default Footer;
