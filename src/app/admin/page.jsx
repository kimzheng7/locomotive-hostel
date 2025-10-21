"use client";
import { useState } from "react";
import { hotels } from "@/lib/hotels";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [disabledDates, setDisabledDates] = useState([]);
  const [newDate, setNewDate] = useState("");

  // ---- Fake backend login ----
  const handleLogin = async (e) => {
    e.preventDefault();

    // Replace this with real backend later
    if (loginData.username === "admin" && loginData.password === "password") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  // ---- When hotel changes ----
  const handleHotelChange = (e) => {
    setSelectedHotel(e.target.value);
    setSelectedRoom("");
    setDisabledDates([]);
  };

  // ---- When room changes ----
  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);

    // Fetch disabled dates from backend later
    setDisabledDates(["2025-02-10", "2025-02-11"]); // just dummy
  };

  const addDisabledDate = () => {
    if (!newDate) return;
    setDisabledDates([...disabledDates, newDate]);
    setNewDate("");
  };

  const removeDisabledDate = (date) => {
    setDisabledDates(disabledDates.filter((d) => d !== date));
  };

  // ---- Fake backend save ----
  const updateDates = async () => {
    alert(`Saving disabled dates for ${selectedRoom}: \n${disabledDates.join(", ")}`);
  };

  // ---- Login Screen ----
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-20 bg-white p-6 shadow rounded">
        <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border p-2 rounded"
            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
          <button className="bg-black text-white px-4 py-2 rounded w-full">
            Login
          </button>
        </form>
      </div>
    );
  }

  // ---- Admin Interface ----
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>

      {/* Hotel selector */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Hotel</label>
        <select
          className="w-full border p-2 rounded"
          value={selectedHotel}
          onChange={handleHotelChange}
        >
          <option value="">-- Select Hotel --</option>
          {hotels.map((hotel) => (
            <option key={hotel.slug} value={hotel.slug}>
              {hotel.name}
            </option>
          ))}
        </select>
      </div>

      {/* Room selector */}
      {selectedHotel && (
        <div className="mb-4">
          <label className="block mb-1 font-medium">Select Room</label>
          <select
            className="w-full border p-2 rounded"
            value={selectedRoom}
            onChange={handleRoomChange}
          >
            <option value="">-- Select Room --</option>
            {hotels
              .find((h) => h.slug === selectedHotel)
              .rooms.map((room) => (
                <option key={room.slug} value={room.slug}>
                  {room.name}
                </option>
              ))}
          </select>
        </div>
      )}

      {/* Disabled Dates Manager */}
      {selectedRoom && (
        <div>
          <h2 className="text-lg font-medium mb-2">Disabled Dates</h2>
          <ul className="mb-3">
            {disabledDates.map((date) => (
              <li
                key={date}
                className="flex justify-between border p-2 rounded mb-2"
              >
                {date}
                <button
                  className="text-red-600"
                  onClick={() => removeDisabledDate(date)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 mb-4">
            <input
              type="date"
              className="border p-2 rounded"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
            <button
              className="bg-black text-white px-3 rounded"
              onClick={addDisabledDate}
            >
              Add
            </button>
          </div>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={updateDates}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
