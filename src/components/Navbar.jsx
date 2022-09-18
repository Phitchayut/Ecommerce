import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const Navbar = () => {
    const style = 'text-[14px] cursor-pointer'
  return (
    <div className="navbar h-[60px] shadow-md relarive z-10">
        {/* search */}
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        <div className="left flex flex-1 items-center space-x-3">
          <div className="language cursor-pointer text-[16px]">EN</div>
          <div className="search flex border-[2px] border-solid border-lighgrey rounded-md items-center ml[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input type="text" className="outline-none"/>
            <SearchIcon className="cursor-pointer"/>
          </div>
        </div>


        {/* logo */}
        <div className="center flex-1 text-center  cursor-pointer">
            <div className="logo font-bold text-2xl">Summer Kings</div>
        </div>





        {/* cart */}
        <div className="right flex-1 flex items-center justify-end space-x-4">
            <div className={style}>Register</div>
            <div className={style}>Sign in</div>
            <div className={style}>
            <Badge badgeContent={2} color='primary'>
                <ShoppingCartOutlined />
            </Badge>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
