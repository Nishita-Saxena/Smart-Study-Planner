import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const navigate = useNavigate();

  // In a real app, this will come from backend (list of added subjects)
  const subjects = ["Mathematics", "Physics", "Chemistry", "English"];

  const [formData, setFormData] = useState({
    taskName: "",
    relatedSubject: "",
    deadline: "",
    estimatedTime: "",
    importance: "Medium",
    status: "Pending",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Added:", formData);
    alert("✅ Task added successfully!");
    // Later connect with backend (POST request)
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📝 Add New Task</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6"
      >
        {/* Task Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Task Name
          </label>
          <input
            type="text"
            name="taskName"
            placeholder="e.g., Complete Chapter 3 Notes"
            value={formData.taskName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Related Subject */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Related Subject
          </label>
          <select
            name="relatedSubject"
            value={formData.relatedSubject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Subject</option>
            {subjects.map((subj, index) => (
              <option key={index} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Estimated Time */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Estimated Time (hours)
          </label>
          <input
            type="number"
            name="estimatedTime"
            placeholder="e.g., 3"
            value={formData.estimatedTime}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Importance */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Importance Level
          </label>
          <select
            name="importance"
            value={formData.importance}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-semibold p-3 rounded-lg hover:bg-indigo-600 transition-all duration-200"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
