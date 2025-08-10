import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
            AI İLE KELİME ÖĞREN
          </h1>
          <p className="text-lg text-gray-300">
            Eğlenceli oyunlar ve akıllı asistan ile
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* WordBox Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">WordBox</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kariyer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  İş Ortaklarımız
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Eğitim Kurumları
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Basın ve Medya
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Öğrenme Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Öğrenme</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dil Kursları
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kelime Oyunları
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI Asistan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  İlerleme Takibi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sertifikalar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Öğretmen Paneli
                </a>
              </li>
            </ul>
          </div>

          {/* Gizlilik ve Politikalar Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Gizlilik ve Politikalar
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  KVKK
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Çerez Politikası
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Topluluk Kuralları
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Telif Hakları
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Güvenli Öğrenme Rehberi
                </a>
              </li>
            </ul>
          </div>

          {/* Kullanıcılar İçin Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kullanıcılar İçin</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nasıl Başlarım?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SSS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Özel Kampanyalar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Premium Üyelik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Öğretmen Olmak İstiyorum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  İçerik Üretici Olmak İstiyorum
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* App Store Links */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="group hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <div className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white rounded-xl px-6 py-4 min-w-[180px] shadow-lg hover:shadow-xl transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs opacity-90">GET IT ON</span>
                      <span className="text-sm font-semibold -mt-1">
                        Google Play
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="group hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <div className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-800 text-white rounded-xl px-6 py-4 min-w-[180px] shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs opacity-90">
                        Download on the
                      </span>
                      <span className="text-sm font-semibold -mt-1">
                        App Store
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex space-x-3 items-center">
              <div className="bg-white px-3 py-2 rounded flex items-center justify-center">
                <Image
                  src="/icons/ic-visa.svg"
                  alt="Visa"
                  width={32}
                  height={20}
                  className="h-5"
                />
              </div>
              <div className="bg-white px-3 py-2 rounded flex items-center justify-center">
                <Image
                  src="/icons/ic-mastercard.svg"
                  alt="Mastercard"
                  width={32}
                  height={20}
                  className="h-5"
                />
              </div>
              <div className="bg-white px-3 py-2 rounded flex items-center justify-center">
                <Image
                  src="/icons/ic-troy.svg"
                  alt="Troy"
                  width={32}
                  height={20}
                  className="h-5"
                />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              © 2025 tüm hakları saklıdır.
            </p>
          </div>

          {/* Wordbox branding */}
          <div className="text-center mt-4">
            <p className="text-lg font-semibold text-purple-400">wordbox</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
