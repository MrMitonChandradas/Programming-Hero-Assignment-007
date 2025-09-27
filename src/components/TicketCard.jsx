import React from "react";

function PriorityBadge({ p }) {
  const cls =
    p === "High"
      ? "bg-red-100 text-red-800"
      : p === "Medium"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-green-100 text-green-800";
  return <span className={`text-xs px-2 py-1 rounded ${cls}`}>{p}</span>;
}

export default function TicketCard({ ticket, onSelect }) {
  return (
    <div
      onClick={() => onSelect(ticket)}
      className="cursor-pointer bg-white p-4 rounded shadow hover:shadow-lg transition"
    >
      <div className="flex justify-between">
        <div>
          <div className="text-sm text-gray-500">{ticket.id}</div>
          <h3 className="font-semibold">{ticket.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{ticket.description}</p>
        </div>
        <div className="text-right">
          <PriorityBadge p={ticket.priority} />
          <div className="text-xs text-gray-400 mt-2">{ticket.createdAt}</div>
        </div>
      </div>
      <div className="mt-3 text-sm text-gray-600">
        Customer: {ticket.customer}
      </div>
    </div>
  );
}
