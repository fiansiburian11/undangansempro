"use client"
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Undangan() {
     useEffect(() => {
       AOS.init({
         duration: 2000, // Durasi animasi dalam ms
         once: false, // Animasi hanya berjalan sekali saat scroll
       });
     }, []);
  return (
    <div data-aos="fade-up" className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="relative bg-gradient-to-r from-[#6b0f1a] to-[#8a1538] p-6 text-white">
          {/* Logo */}
          <div className="absolute top-2 left-2">
            <Image src="/IMG_7343.PNG?height=50&width=50" width={50} height={50} alt="University Logo" className="rounded-full" />
          </div>

          {/* Title */}
          <div className="text-center pt-24 pb-6">
            <h1 className="text-2xl md:text-3xl font-serif font-bold">Seminar Proposal</h1>
            <h2 className="text-2xl md:text-3xl font-serif mt-1">Tessi Landira </h2>
          </div>

          {/* Thesis Title */}
          <div className="text-center px-4 md:px-16 pb-6">
            <p className="text-sm md:text-sm italic">&quot;Faktor-Faktor Yang Mempengaruhi Penerapan Rekam Medis Elektronik Di RSUD Petala Bumi Provinsi Riau Tahun 2025&quot;</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Section - Details */}
          <div className="p-2 md:w-2/3">
            {/* Date, Time, Location */}
            <div className="grid row-span-2">
              <div className="space-y-2 mb-8 ">
                <div className="flex items-center gap-1">
                  <Calendar className="w-6 h-6 text-[#6b0f1a]" />
                  <div>
                    <p className="font-semibold text-sm">Kamis,</p>
                    <p className="text-sm">13 Maret 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Clock className="w-6 h-6 text-[#6b0f1a]" />
                  <p className="text-sm">11:30 s.d Selesai</p>
                </div>

                <div className="flex items-center gap-1">
                  <MapPin className="w-6 h-6 text-[#6b0f1a]" />
                  <Link href="https://maps.app.goo.gl/QHSwcPSE3A7d4wpHA">
                    <p className="hover:underline text-sm">Labor lantai 3,</p>
                    <p className="hover:underline text-sm">Kampus 2</p>
                  </Link>
                </div>
              </div>

              {/* Examiners & Picture */}
              <div className="flex justify-between items-start">
                {/* Dewan Penguji */}
                <div className="space-y-2 md:w-1/2">
                  <h3 className="text-md font-bold text-[#6b0f1a] mb-3">Dewan Penguji</h3>
                  <div>
                    <p className="font-semibold text-sm">Ketua:</p>
                    <p className="text-sm">Haryani Octaria,A.Md,PK.SKM,M.Kes</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Penguji 1:</p>
                    <p className="text-sm">Azlina,A.Md.PK,SKM,M.K.M</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Penguji 2:</p>
                    <p className="text-sm">Fitriani Astika,Amd,PK,SKM,M.K.M</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Penguji 3:</p>
                    <p className="text-sm">Rizer Fahlepi ST, M.Kom</p>
                  </div>
                </div>

                {/* Gambar Tessi Landira */}
                <div className="relative bg-gradient-to-t from-[#6b0f1a] to-[#8a1538]/60  text-white -mt-40 rounded-b-full">
                  <Image src="/photoTessilandira.png" alt="Tessi Landira" width={200} height={220} className="rounded-b-full shadow-lg" />
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-gradient-to-r from-[#6b0f1a] to-[#8a1538] p-3 rounded-r-full text-sm mb-6 text-white w-[18rem] mt-20">
              <p className="text-xs">Mohon doanya agar dilancarkan dan dipermudahkan. Jika ada waktu luang, ditunggu kehadirannya.</p>
            </div>

            {/* Thank You */}
            <div className="text-left ml-3">
              <p className="font-semibold text-sm">Terimakasih semua.</p>
              <p className=" italic text-xs">Wassalamualaikum Wr. Wb.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-3 text-center text-xs text-gray-500">
          <p>©{new Date().getFullYear()} Firman. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
