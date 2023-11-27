'use client'
import React from "react";
import CropList from "../location/CropList";
import Button from "./Button";
import { LocationSvg } from "../_components/AuthSvgs";


function Location() {
  return (
    <div className="h-screen w-screen bg-primary-main flex flex-col items-center justify-center gap-y-[25px]">
      <div className="w-full max-w-[562px] flex flex-col items-center justify-center gap-y-[16px] mx-2 px-[1.5rem] md:px-[2rem] py-[2.5rem] bg-[#043023] rounded-[8px]">
        <div>
          <h2 className="text-white text-center">Select your location</h2>
          <label>
            <select
              type="select"
              className="bg-[#043023] text-white p-3 my-2 rounded-md border border-solid border-white md:ml-32 "
            >
                <LocationSvg />
              <option selected>Where are you located</option>
              <option>others</option>
            </select>
          </label>

          <p className="text-white  text-center my-2">
            What kind of crops do you grow?
          </p>
          <CropList />
        </div>
      </div>

      <Button />
    </div>
  );
}

export default Location;
