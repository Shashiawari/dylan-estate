"use client"
import Navbar from "@/components/bootstrapclient/Navbar";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Preloader from "@/components/preloader/Preloader";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <Navbar />
      <div className="p-5">
        <h5 className="my-5">Thank you for listing your property with us,</h5>
        <p>Your listing will be reviewed and will go live within 24 hours.</p>
        <p>
          We will now manage your listing and get in touch with you after
          finding the best suitable tenant as per your preference.
        </p>
        <p>-Dylan Estates</p>
        <div className="btncont">
          <Link href={"/details"}>
            <button className="removebtn">Edit Property Listing</button>
          </Link>
          <Link href={"/preview"}>
            <button className="removebtn">Preview Property Listing</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
