import Head from "next/head";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "@/components/Weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus()
  },[])

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=6f9e759689d71f9ca6fd139fcda568c0`;

  const fetchData = (e) => {
    e.preventDefault();
    axios.get(url).then((res) => {
      setWeather(res.data);
    })
    setCity("")
  }

    return (
  <>
      <Head>
        <title>Weather app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/5 z-[1]" />
      {/* bg image */}
      {/* <Image src={"https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} fill={true} alt={"bg"} className={'object-cover imgHeight'}/> */}
      
      {/* search */}
      <div className="relative flex justify-between items-center w-full m-auto pt-4 text-white z-[10] inpt">
        <form action="" className="flex justify-between items-center w-full m-auto bg-transparent border border-gray-300 rounded-2xl forminput">
          <div>
            <input type="text" placeholder="Search City" className="bg-transparent border-none outline-none text-2xl text-black focus:outline-none placeholder:text-white" value={city} onChange={(e) => {
              setCity(e.target.value)
            }} ref={ inputEl} />
          </div>
            <div>
            <button onClick={fetchData}>
            <BsSearch size={30}/>
          </button>
         </div>
        </form>
      </div>

      {/* weather */}
      {weather.main && <Weather data={weather} />}

    </>
  );
  }
