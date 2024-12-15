import { getHotelById } from "@/actions/get/hotelById";
import AddHotelForm, { HotelWithRooms } from "@/components/hotel/AddHotelForm";
import { useAuth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";

interface HotelPageProps {
  params: {
    hotelId: string;
  };
}

const Hotel = async ({ params }: HotelPageProps) => {
    const hotel = await getHotelById(params.hotelId) as HotelWithRooms | null;
    const {userId} = useAuth()
    if(!userId) return <div>Not authenticated...</div>

    if(hotel && hotel.userId !== userId) return <div>Access Denide...</div>

  return (
    <div>
      <AddHotelForm hotel={hotel} />
    </div>
  );
};

export default Hotel;
