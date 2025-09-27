import React from "react";

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="container mx-auto px-4 mt-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative rounded-lg overflow-hidden shadow h-48 md:h-60 lg:h-64">
          <img
            src="/images/vector1.png"
            alt="In Progress"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-500/80"></div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
            <div className="text-lg font-medium">In-Progress</div>
            <div className="text-3xl font-bold">{inProgressCount}</div>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow h-48 md:h-60 lg:h-64">
          <img
            src="/images/vector2.png"
            alt="Resolved"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-teal-500/80"></div>

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
            <div className="text-lg font-medium">Resolved</div>
            <div className="text-3xl font-bold">{resolvedCount}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
