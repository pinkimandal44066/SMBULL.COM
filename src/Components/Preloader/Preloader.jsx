import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`box box-${i + 1}`}></div>
          ))}
        </div>
      ) : (
        <div className="home-page"></div>
      )}
    </>
  );
};

export default Preloader;
