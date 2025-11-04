import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddSubject() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    priority: "Medium",
    targetHours: "",
    dailyGoal: "",
    notes: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subject Added:", formData);
    alert("✅ Subject added successfully!");
    // Later: send this to backend (POST request)
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">➕ Add New Subject</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6"
      >
        {/* Subject Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Subject Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g., Mathematics"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Priority
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {/* Target Hours per Week */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Target Hours per Week
          </label>
          <input
            type="number"
            name="targetHours"
            placeholder="e.g., 10"
            value={formData.targetHours}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Daily Goal */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Daily Goal (hours/day)
          </label>
          <input
            type="number"
            name="dailyGoal"
            placeholder="e.g., 2"
            value={formData.dailyGoal}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Notes / Description
          </label>
          <textarea
            name="notes"
            placeholder="Optional notes about this subject..."
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Start & End Dates */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-semibold p-3 rounded-lg hover:bg-indigo-600 transition-all duration-200"
        >
          Add Subject
        </button>
      </form>
    </div>
  );
}
