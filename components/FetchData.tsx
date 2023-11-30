"use client";
import React, { useEffect, useState } from "react";
import supabase from "@/supabase";
import Image from "next/image";

type dataCars = {
  id: string;
  avatar: string;
  image: string;
  webName: string;
  author: string;
};

const Fetchdata = () => {
  const [cars, setCars] = useState<dataCars[]>([]);
  useEffect(() => {
    const fetchCars = async () => {
      let { data, error } = await supabase.from("cars").select("*");
      setCars(data);
      console.log(data);
    };
    fetchCars();
  }, []);
  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          <p>{car.author}</p>

          <Image className="rounded-2xl h-70 w-50" src={car.image} alt={car.webName} width={300} height={200} />
          <Image className="object-contain rounded-full" src={car.avatar} alt={car.webName} width={30} height={30} />
        </div>
      ))}
    </div>
  );
};

export default Fetchdata;
