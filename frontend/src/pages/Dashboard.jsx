import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard() {
  const navigate = useNavigate();

  const [subjects] = useState([
    { name: "Math", weeklyHours: 8 },
    { name: "Physics", weeklyHours: 5 },
    { name: "CS", weeklyHours: 10 },
  ]);

  const [tasks, setTasks] = useState([
    { name: "Complete Chapter 3 Notes", completed: true, deadline: "2025-11-06" },
    { name: "Solve Physics Problems", completed: false, deadline: "2025-11-05" },
    { name: "Revise Algorithms", completed: false, deadline: "2025-11-07" },
  ]);

  const [todayTasks, setTodayTasks] = useState([
    { name: "Read 10 pages of Math", done: false },
    { name: "1 Hour Coding Practice", done: true },
  ]);

  const totalSubjects = subjects.length;
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const productivity = Math.round((completedTasks / totalTasks) * 100);

  const barData = {
    labels: subjects.map((s) => s.name),
    datasets: [
      {
        label: "Weekly Study Hours",
        data: subjects.map((s) => s.weeklyHours),
        backgroundColor: ["#CDE5E3", "#FBD5DC", "#BFD9E5"],
        borderRadius: 8,
      },
    ],
  };

  const donutData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completedTasks, totalTasks - completedTasks],
        backgroundColor: ["#CDE5E3", "#FBD5DC"],
        borderWidth: 1,
      },
    ],
  };

  const toggleTodayTask = (index) => {
    const updated = [...todayTasks];
    updated[index].done = !updated[index].done;
    setTodayTasks(updated);
  };

  return (
    <div className="flex min-h-screen bg-[#EFE1D6] text-[#3F3F46] font-sans">
      {/* ===== SIDEBAR ===== */}
      <aside className="w-64 bg-[#FCE4EC] text-[#3F3F46] flex flex-col p-6 space-y-6 shadow-md rounded-r-3xl">
        <h2 className="text-2xl font-extrabold text-center mb-4 tracking-wide">
          Study Planner
        </h2>
        <nav className="flex flex-col space-y-2">
          {[
            ["🏠 Dashboard", "/dashboard"],
            ["📅 Calendar", "/calendar"],
            ["➕ Add Subject", "/add-subject"],
            ["📝 Add Task", "/add-task"],
            ["⏱ Focus Timer", "/focus-timer"],
            ["👤 Profile", "/profile"],
          ].map(([label, path], i) => (
            <button
              key={i}
              onClick={() => navigate(path)}
              className="text-left px-3 py-2 rounded-lg hover:bg-[#FBD5DC] transition-all duration-200"
            >
              {label}
            </button>
          ))}
          <button className="text-left px-3 py-2 rounded-lg mt-4 hover:bg-[#FAD4D8] text-[#B91C1C]">
             Logout
          </button>
        </nav>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 p-10 space-y-10">
        {/* HEADER */}
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#5A7184]">
            University Dashboard 🎓
          </h1>
          <p className="text-gray-500 text-sm">{new Date().toDateString()}</p>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ["Total Subjects", totalSubjects, "bg-[#F9F9F9] border-l-4 border-[#BFD9E5]"],
            ["Total Tasks", totalTasks, "bg-[#F9F9F9] border-l-4 border-[#FBD5DC]"],
            ["Completed Tasks", completedTasks, "bg-[#F9F9F9] border-l-4 border-[#CDE5E3]"],
            ["Productivity", `${productivity}%`, "bg-[#F9F9F9] border-l-4 border-[#A9CCE3]"],
          ].map(([title, value, color], i) => (
            <div key={i} className={`p-5 rounded-2xl shadow-sm ${color} text-center font-medium`}>
              <p className="text-sm opacity-80">{title}</p>
              <h3 className="text-2xl font-bold mt-1">{value}</h3>
            </div>
          ))}
        </div>

        {/* TASKS SECTION */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-semibold mb-3 text-[#5A7184]">📅 Upcoming Deadlines</h4>
            <ul className="space-y-3">
              {tasks.map((t, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-[#EAF3F2] p-3 rounded-lg shadow-sm"
                >
                  <span>{t.name}</span>
                  <span className="text-sm text-gray-500">{t.deadline}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-semibold mb-3 text-[#5A7184]">✅ Today’s Tasks</h4>
            <ul className="space-y-3">
              {todayTasks.map((task, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 bg-[#EAF3F2] p-3 rounded-lg shadow-sm"
                >
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTodayTask(index)}
                    className="w-4 h-4 accent-[#BFD9E5]"
                  />
                  <span
                    className={`${task.done ? "line-through text-gray-400" : ""}`}
                  >
                    {task.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CHARTS SECTION */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-semibold mb-2 text-[#5A7184]">📊 Weekly Study Hours</h4>
            <Bar data={barData} />
          </div>

          <div className="bg-[#F9F9F9] p-6 rounded-2xl shadow-md border border-gray-100">
            <h4 className="font-semibold mb-2 text-[#5A7184]">🎯 Task Completion</h4>
            <Doughnut data={donutData} />
          </div>
        </div>
      </main>
    </div>
  );
}
