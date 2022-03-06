import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";

export default function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(async () => {
    try {
      setLoading(true);
      const data = (await axios.get("/api/rooms/getallrooms")).data;
      setRooms(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error fetching details from API</h1>
      ) : (
        rooms.map((room) => {
          return (
            <div>
                <Room key={room._id} room={room}></Room>
            </div>
          );
        })
      )}
    </div>
  );
}
