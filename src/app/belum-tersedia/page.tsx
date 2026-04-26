"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SoonPage() {
  return (
    <div className="h-screen w-full m-auto flex items-center justify-center">
      <div>
        <h1 className="text-3xl font-bold mx-auto text-center text-white ">
          <div>
            <h1>Belum Tersedia</h1>
            <h1 className="py-5">Silahkan Kembali</h1>
            <Link href="/">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Kembali
              </button>
            </Link>
          </div>
        </h1>
      </div>
    </div>
  );
}
