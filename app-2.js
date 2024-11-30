import React, { useState } from 'react';

// Komponen CounterButton menerima prop judul dan memiliki state untuk menghitung klik
const CounterButton = ({ title }) => {
  // Menggunakan useState hook untuk menyimpan jumlah klik
  // Struktur data yang digunakan adalah angka (number)
  const [clickCount, setClickCount] = useState(0);

  // Fungsi untuk menangani klik tombol
  const handleClick = () => {
    // Menambah jumlah klik setiap kali tombol diklik
    setClickCount(clickCount + 1);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-xs mx-auto mt-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <button 
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Klik Saya
      </button>
      <p className="mt-2 text-gray-700">
        Jumlah Klik: {clickCount}
      </p>
    </div>
  );
};

// Contoh penggunaan komponen dengan prop judul berbeda
const App = () => {
  return (
    <div className="p-4">
      <CounterButton title="Tombol Pertama" />
      <CounterButton title="Tombol Kedua" />
    </div>
  );
};

export default App;