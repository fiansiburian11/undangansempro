"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Invitation() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#6b0f1a] to-[#8a1538] p-6">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white shadow-xl rounded-3xl p-8 text-center max-w-md border border-gray-200 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 font-semibold text-sm">13 / 03 / 2025</span>
        </div>
        <h2 className="text-sm text-gray-500 mt-10">INVIT YOU</h2>
        <h1 className="text-4xl font-serif font-bold text-gray-800 mt-2">Tessi Landira</h1>
        <p className="text-gray-600 mt-2 text-lg">Kepada Yth.</p>
        <p className="text-gray-500 text-lg font-semibold">Tamu Undangan</p>
        <Link href="/undangan">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mt-6 px-8 py-3 bg-brown-500 text-gray-800 font-semibold rounded-full shadow-md hover:bg-brown-600 transition">
            Buka Undangan
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
