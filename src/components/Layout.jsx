// components/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="
      w-full mx-auto
      px-2         /* Basis-Padding für sehr kleine Bildschirme */
      sm:px-3      /* ab 640px */
      md:px-4      /* ab 768px */
      lg:px-6      /* ab 1024px */
      xl:px-8      /* ab 1280px */
      2xl:px-10    /* ab 1536px */
    ">
      {children}
    </div>
  );
};

export default Layout;
