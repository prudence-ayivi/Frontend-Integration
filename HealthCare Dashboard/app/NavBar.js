import React from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";

const navigation = [
  { name: "Overview", href: "#", current: false },
  { name: "Patients", href: "#", current: true },
  { name: "Schedule", href: "#", current: false },
  { name: "Message", href: "#", current: false },
  { name: "Transaction", href: "#", current: false },
];

const NavBar = () => {
  return (
    <NavBar className={styles.Navbar}>      
      <div >
        <div className="NavBarImg">
          <Image src={"/TestLogo.svg"} alt="TestLogo" width={211} height={48} />
        </div>
        <div>NavBar</div>
        <div>NavBar</div>
      </div>
    </NavBar>
  );
};

export default NavBar;
