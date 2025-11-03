import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-semibold text-[#5C6BC0]">
          Smart Study Planner
        </h1>
        <nav className="space-x-6">
          <button className="text-gray-700 hover:text-[#5C6BC0]">Home</button>
          <button className="text-gray-700 hover:text-[#5C6BC0]">Features</button>
          <button className="text-gray-700 hover:text-[#5C6BC0]">About</button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-[#A3C4F3] to-[#D7BCE8] text-white px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-[#E8F0FF] to-[#FAFAFA]">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Plan Smarter. Study Better.
        </h2>
        <p className="text-gray-600 max-w-xl mb-6">
          Organize your study goals, track your progress, and achieve your
          academic dreams with ease. Your personalized planner is just a click
          away.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="bg-gradient-to-r from-[#A3C4F3] to-[#D7BCE8] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
        >
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="flex flex-wrap justify-center gap-6 py-14 px-4">
        {[
          {
            title: "📅 Smart Scheduling",
            desc: "Create study sessions that adapt to your productivity patterns.",
          },
          {
            title: "📊 Progress Tracking",
            desc: "Visualize your learning journey and stay motivated every day.",
          },
          {
            title: "🎯 Goal Planner",
            desc: "Set daily, weekly, and long-term goals with AI-powered insights.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-6 w-72 text-center hover:shadow-lg transition"
          >
            <h3 className="text-[#5C6BC0] text-lg font-semibold mb-2">
              {f.title}
            </h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-[#F3F4F8] text-center py-5 text-gray-600 text-sm">
        <p>© 2025 Smart Study Planner | Designed with 💡 and ☕</p>
        <p className="space-x-2 mt-1">
          <a href="#" className="text-[#5C6BC0] hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="text-[#5C6BC0] hover:underline">
            Terms
          </a>
          <span>|</span>
          <a href="#" className="text-[#5C6BC0] hover:underline">
            Contact
          </a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
