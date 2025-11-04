import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

export default function CalendarPage() {
  const navigate = useNavigate();

  // Sample tasks and deadlines
  const [tasks, setTasks] = useState([
    { name: "Complete Chapter 3 Notes", deadline: "2025-11-06", completed: true },
    { name: "Solve Physics Problems", deadline: "2025-11-05", completed: false },
    { name: "Revise Algorithms", deadline: "2025-11-07", completed: false },
  ]);

  const [todayTasks, setTodayTasks] = useState([
    { name: "Math Practice Test", done: false },
    { name: "1 Hour Coding", done: true },
  ]);

  const [quote] = useState("Focus on progress, not perfection.");
  const [date, setDate] = useState(new Date());

  const toggleTodayTask = (index) => {
    const updated = [...todayTasks];
    updated[index].done = !updated[index].done;
    setTodayTasks(updated);
  };

  // Check if a date has a task/deadline
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const taskDates = tasks.map(t => new Date(t.deadline).toDateString());
      if (taskDates.includes(date.toDateString())) {
        return "bg-indigo-100 rounded-full text-indigo-600 font-semibold";
      }
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* ===== NAVBAR ===== */}
      <header className="flex items-center justify-between px-6 py-4 bg-indigo-600 text-white shadow-md">
        <h2 className="text-2xl font-bold">Smart Study Planner</h2>
        <nav className="space-x-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="hover:text-indigo-200"
          >
            Dashboard
          </button>
          <button className="text-indigo-200 cursor-default font-semibold">Calendar</button>
          <button className="hover:text-indigo-200">Add Subject</button>
          <button className="hover:text-indigo-200">Add Task</button>
          <button className="hover:text-indigo-200">Focus Timer</button>
          <button className="hover:text-indigo-200">Profile</button>
          <button className="hover:text-indigo-200">Logout</button>
        </nav>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 p-6 grid md:grid-cols-3 gap-6">
        {/* Big Calendar Section */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Study Planner Calendar
          </h3>
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={tileClassName}
            className="rounded-xl p-4 text-lg"
          />
          <p className="mt-4 text-sm text-gray-500">
            Selected date: <span className="font-semibold">{date.toDateString()}</span>
          </p>
        </div>

        {/* Sidebar Section */}
        <div className="flex flex-col space-y-6">
          {/* Upcoming Deadlines */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold mb-3 text-gray-700">Upcoming Deadlines</h4>
            <ul className="space-y-2">
              {tasks.map((t, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center border-b pb-1 text-sm"
                >
                  <span>{t.name}</span>
                  <span className="text-gray-500">{t.deadline}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}
