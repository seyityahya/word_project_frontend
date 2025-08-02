"use client";

import { useCurrentUser } from "@/lib/hooks/api-hooks";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, LogIn, UserPlus, Home } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const { user, isAuthenticated, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Word Project
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            React Query ve NextAuth ile güçlendirilmiş modern web uygulaması
          </p>
        </div>

        {isAuthenticated && user ? (
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/80 backdrop-blur-lg border border-gray-800/50 mb-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Home className="h-6 w-6 mr-2 text-blue-400" />
                  Hoş Geldiniz, {user.username}!
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Hesabınıza başarıyla giriş yaptınız. Aşağıdaki özelliklerden
                  faydalanabilirsiniz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/60 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-2">
                      Profil Bilgileri
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-400">
                        Email:{" "}
                        <span className="text-blue-400">{user.email}</span>
                      </p>
                      <p className="text-gray-400">
                        Level:{" "}
                        <span className="text-green-400">
                          {user.current_level}
                        </span>
                      </p>
                      <p className="text-gray-400">
                        XP: <span className="text-purple-400">{user.xp}</span>
                      </p>
                      <p className="text-gray-400">
                        Coins:{" "}
                        <span className="text-yellow-400">{user.coins}</span>
                      </p>
                      <p className="text-gray-400">
                        Streak:{" "}
                        <span className="text-orange-400">{user.streak}</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800/60 rounded-lg p-6">
                    <h3 className="text-white font-semibold mb-4">
                      Hızlı Erişim
                    </h3>
                    <div className="space-y-3">
                      <Link href="/users">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 justify-start">
                          <Users className="h-4 w-4 mr-2" />
                          Tüm Kullanıcıları Görüntüle
                        </Button>
                      </Link>
                      <Link href="/playground">
                        <Button
                          variant="outline"
                          className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 justify-start"
                        >
                          Playground'a Git
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-900/80 backdrop-blur-lg border border-gray-800/50">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl mb-2">
                  Başlamaya Hazır mısınız?
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Uygulamanın tüm özelliklerinden faydalanmak için giriş yapın
                  veya yeni hesap oluşturun.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/login">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
                      <LogIn className="h-5 w-5 mr-2" />
                      Giriş Yap
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 h-12"
                    >
                      <UserPlus className="h-5 w-5 mr-2" />
                      Kayıt Ol
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-800/40 rounded-lg p-4">
                    <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="text-white font-medium mb-1">
                      Kullanıcı Yönetimi
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Tüm kullanıcıları görüntüleyin ve yönetin
                    </p>
                  </div>
                  <div className="bg-gray-800/40 rounded-lg p-4">
                    <div className="h-8 w-8 bg-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">RQ</span>
                    </div>
                    <h4 className="text-white font-medium mb-1">React Query</h4>
                    <p className="text-gray-400 text-sm">
                      Güçlü veri yönetimi ve cache sistemi
                    </p>
                  </div>
                  <div className="bg-gray-800/40 rounded-lg p-4">
                    <div className="h-8 w-8 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">NA</span>
                    </div>
                    <h4 className="text-white font-medium mb-1">NextAuth</h4>
                    <p className="text-gray-400 text-sm">
                      Güvenli kimlik doğrulama sistemi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
