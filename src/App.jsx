import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";

import initialTickets from "./data/tickets";
import "./index.css";

export default function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  function handleSelect(ticket) {
    if (
      inProgress.some((t) => t.id === ticket.id) ||
      resolved.some((r) => r.id === ticket.id)
    ) {
      toast.info("Already added or resolved.");
      return;
    }
    setInProgress((prev) => [...prev, { ...ticket, status: "in-progress" }]);
    toast.success("Added to Task Status");
  }

  function handleComplete(ticket) {
    setInProgress((prev) => prev.filter((t) => t.id !== ticket.id));

    setResolved((prev) => [...prev, { ...ticket, status: "resolved" }]);

    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.success("Marked as Resolved");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="grid lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Customer Tickets</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {tickets.length === 0 ? (
                <div className="text-gray-500">No customer tickets left.</div>
              ) : (
                tickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onSelect={handleSelect}
                  />
                ))
              )}
            </div>
          </section>

          <aside>
            <TaskStatus
              tasks={inProgress}
              onComplete={handleComplete}
              resolved={resolved}
            />
          </aside>
        </div>
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
