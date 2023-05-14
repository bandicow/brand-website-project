import React, { useState } from "react";
// import logo from "./img/35mm_logo_bg_remove.png";
import mainImg from "./img/mainpage.jpg";

import "./App.css";
import Store from "./Store/Store";
import { Address, Item } from "./model/item";
import BestMenu from "./BestMenu";

let data: Item = {
  name: "35mm Products",
  category: "tester",
  address: {
    city: "gwangju",
    detail: "gawngsangu",
    zipCode: 12345,
  },
  menu: [
    { name: "T-shirt", price: 30000, category: "top" },
    { name: "jean", price: 50000, category: "bottom" },
  ],
};

const App: React.FC = () => {
  const [productInfo, setProductInfo] = useState<Item>(data);
  const changeAddress = (address: Address) => {
    setProductInfo({ ...productInfo, address: address });
  };
  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={mainImg} className="main-img" alt="logo" />
        <Store info={productInfo} changeAddress={changeAddress} />
        <BestMenu
          name="35mm맨투맨"
          category="상의"
          // price={30000}
          showBestMenuName={showBestMenuName}
        />
      </header>
    </div>
  );
};

export default App;
