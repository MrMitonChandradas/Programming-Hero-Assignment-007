import React from "react";

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="container mx-auto px-4 mt-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-lg p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white  shadow">
          <div className="flex justify-between items-center ">
            <div>In-Progress</div>
            <div className="text-3xl font-bold">{inProgressCount}</div>
          </div>
        </div>

        <div className="rounded-lg p-6 bg-gradient-to-r from-green-400 to-teal-500 text-white shadow">
          <div className="flex justify-between items-center">
            <div>Resolved</div>
            <div className="text-3xl font-bold">{resolvedCount}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
