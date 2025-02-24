import { useState, useEffect } from "react";
import Logo from './../assets/logoo.jpg';


const Header = () => {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <header className="pt-3 text-center">
    {showName ? (
      <h1 className="font-quicksand font-bold text-2xl text-gray-900">
        Rainbow Bridal Studio & Academy
      </h1>
    ) : (
      <img src={Logo} className="h-16 mx-auto" alt=" Rainbow Bridal Studio & Academy" />
    )}
  </header>
  );
};



export default Header;
