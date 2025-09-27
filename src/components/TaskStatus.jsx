import React from "react";

export default function TaskStatus({ tasks, onComplete, resolved }) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold mb-2">Task Status</h4>
        {tasks.length === 0 && (
          <div className="text-sm text-gray-500">No task selected.</div>
        )}
        {tasks.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between p-2 border rounded mt-2"
          >
            <div className="text-sm">{t.title}</div>
            <button
              onClick={() => onComplete(t)}
              className="bg-green-600 text-white px-2 py-1 rounded text-sm"
            >
              Complete
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-semibold mb-2">Resolved</h4>
        {resolved.length === 0 && (
          <div className="text-sm text-gray-500">No resolved yet.</div>
        )}
        {resolved.map((r) => (
          <div key={r.id} className="text-sm bg-blue-50 p-2 rounded mt-2">
            {r.title}
          </div>
        ))}
      </div>
    </div>
  );
}
