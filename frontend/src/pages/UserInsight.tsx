import React from 'react';

const UserInsight = () => {
  const stats = [
    { label: 'Total Buku Dibaca', value: 9, icon: '📚', color: 'bg-blue-100' },
    { label: 'Waktu Membaca', value: '52 jam', icon: '⏱️', color: 'bg-green-100' },
    { label: 'Halaman Minggu Ini', value: 642, icon: '📄', color: 'bg-purple-100' },
    { label: 'Rata-rata Harian', value: '78 hlm', icon: '📊', color: 'bg-yellow-100' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">📈 Insight Pengguna</h1>

      {/* Highlight Box */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-4 text-white shadow-md mb-6">
        <h2 className="text-lg font-semibold">Hebat!🔥</h2>
        <p className="text-sm mt-1">Kamu membaca 642 halaman minggu ini!</p>
        <div className="mt-3 bg-white h-2 rounded-full">
          <div className="bg-orange-500 h-2 rounded-full w-[80%]" />
        </div>
      </div>

      {/* Statistik Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 shadow-md flex items-center gap-3 ${stat.color}`}
          >
            <span className="text-3xl">{stat.icon}</span>
            <div>
              <div className="text-sm text-gray-700">{stat.label}</div>
              <div className="text-xl font-bold">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Graph, Recent Reads, etc. */}
      {/* You could add a bar chart here later with Chart.js or Recharts */}
    </div>
  );
};

export default UserInsight;
