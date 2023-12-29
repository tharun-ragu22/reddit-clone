import React from "react";
import Navbar from "../Navbar/Navbar";
const Layout: React.FC = ({ children }) => (
  <div>
      <Navbar />
      {children}

  </div>
  // tried this out, but causes errors in bottom left corner
//   <html>
//     <body style={{overflow:'visible'}}>
//       <Navbar />
//       {children}
//     </body>
//   </html>
);

export default Layout;
