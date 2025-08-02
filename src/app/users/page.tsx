"use client";

import { useUsers, useCurrentUser, useLogout } from "@/lib/hooks/api-hooks";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Loader2,
  RefreshCw,
  LogOut,
  Users,
  Crown,
  Coins,
  Trophy,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function UsersPage() {
  const { data: users, isLoading, error, refetch, isRefetching } = useUsers();
  const { user, isAuthenticated } = useCurrentUser();
  const logoutMutation = useLogout();

  const handleRefresh = () => {
    refetch();
    toast.info("Kullanıcılar yenileniyor...");
  };

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      toast.success("Çıkış yapıldı!");
    } catch (error) {
      toast.error("Çıkış yaparken hata oluştu!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
        <Card className="w-full max-w-md bg-gray-900/80 backdrop-blur-lg border border-gray-800/50 text-white">
          <CardHeader className="text-center">
            <CardTitle>Erişim Engellendi</CardTitle>
            <CardDescription className="text-gray-400">
              Bu sayfayı görüntülemek için giriş yapmanız gerekiyor.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <Link href="/login">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Giriş Yap
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Kayıt Ol
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-blue-400" />
            <div>
              <h1 className="text-3xl font-bold text-white">Kullanıcılar</h1>
              <p className="text-gray-400">
                Tüm kayıtlı kullanıcıları görüntüleyin
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <div className="flex items-center space-x-3 bg-gray-800/60 rounded-lg px-4 py-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.profile_image || ""} />
                  <AvatarFallback className="bg-blue-600 text-white">
                    {user.username?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="text-white font-medium">{user.username}</span>
              </div>
            )}

            <Button
              onClick={handleRefresh}
              disabled={isRefetching}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${isRefetching ? "animate-spin" : ""}`}
              />
              Yenile
            </Button>

            <Button
              onClick={handleLogout}
              disabled={logoutMutation.isPending}
              variant="destructive"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Çıkış
            </Button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-blue-400 mx-auto mb-4" />
              <p className="text-gray-400">Kullanıcılar yükleniyor...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-red-400 font-semibold mb-2">Hata Oluştu</h3>
              <p className="text-gray-400 mb-4">
                {(error as any)?.response?.data?.message ||
                  "Kullanıcılar yüklenirken bir hata oluştu."}
              </p>
              <Button
                onClick={handleRefresh}
                variant="outline"
                className="border-red-600 text-red-400 hover:bg-red-900/30"
              >
                Tekrar Dene
              </Button>
            </div>
          </div>
        )}

        {/* Users Grid */}
        {users && users.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {users.map((user) => (
              <Card
                key={user.id}
                className="bg-gray-900/80 backdrop-blur-lg border border-gray-800/50 hover:border-gray-700/70 transition-colors"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={user.profile_image || ""} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                        {user.username?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-white text-lg truncate">
                        {user.username}
                      </CardTitle>
                      <CardDescription className="text-gray-400 truncate">
                        {user.email}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Status Badges */}
                  <div className="flex flex-wrap gap-2">
                    {user.is_premium && (
                      <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                        <Crown className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                    <Badge
                      variant={user.isActive ? "default" : "secondary"}
                      className={
                        user.isActive
                          ? "bg-green-600/20 text-green-400 border-green-600/30"
                          : "bg-gray-600/20 text-gray-400 border-gray-600/30"
                      }
                    >
                      {user.isActive ? "Aktif" : "Pasif"}
                    </Badge>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-600/30">
                      {user.role}
                    </Badge>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Trophy className="h-4 w-4 text-blue-400" />
                      <span>Level {user.current_level}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Coins className="h-4 w-4 text-yellow-400" />
                      <span>{user.coins}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-gray-400">
                      <span className="block">XP</span>
                      <span className="text-blue-400 font-medium">
                        {user.xp}
                      </span>
                    </div>
                    <div className="text-gray-400">
                      <span className="block">Streak</span>
                      <span className="text-orange-400 font-medium">
                        {user.streak}
                      </span>
                    </div>
                  </div>

                  {user.last_login && (
                    <div className="text-xs text-gray-500 pt-2 border-t border-gray-800">
                      Son giriş:{" "}
                      {new Date(user.last_login).toLocaleDateString("tr-TR")}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {users && users.length === 0 && !isLoading && (
          <div className="text-center py-20">
            <Users className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">
              Kullanıcı Bulunamadı
            </h3>
            <p className="text-gray-500">
              Henüz kayıtlı kullanıcı bulunmamaktadır.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
