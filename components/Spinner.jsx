import React from 'react';
import spin from "../public/loading-gif.gif";
import Image from 'next/image';

export default function Spinner() {
  return (
      <>
          <Image src={spin} alt={"spin"} className="w-[200px] m-auto block"/>
      </>
  )
}
