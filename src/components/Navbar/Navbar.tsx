import React from "react"
import Options from "./Options";
import logo from '../../assets/icon.png'

export interface INavbarProps {
  title: string;
}

const Navbar: React.FC<INavbarProps> = ({ title }:INavbarProps) => {
  return <div className="w-full p-2 text-white bg-neutral">
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="max-h-7 mr-2"/>
        <div className="text-base font-medium">
          {title}
        </div>
      </div>
      <div>
        {/* <Options /> */}
      </div>
    </div>
  </div>
}

export default Navbar