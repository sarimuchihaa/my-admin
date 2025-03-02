import React from "react";

const Dashboard = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/admin/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        window.location.href = "/login"; // Redirect to login page
      } else {
        alert("Logout failed: " + data.error);
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="relative h-screen p-5">
      <h1 className="text-3xl text-rose-400 font-bold">Dashboard 🖼️⭐</h1>
      <button
        onClick={handleLogout}
        className="absolute top-5 right-5 bg-white text-black border border-gray-400 px-5 py-2 rounded-lg shadow-md hover:bg-gray-200 transition-all font-bold"
      >
        Logout
      </button>
      <h1 className="text-xl font-semibold">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
