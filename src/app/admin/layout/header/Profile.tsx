"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

const Profile = () => {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
    router.refresh();
  };

  return (
    <div className="relative group/menu">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="h-10 w-10 bg-black text-white rounded-full flex justify-center items-center cursor-pointer hover:bg-zinc-800 transition-colors shadow-sm">
            <Icon icon="solar:user-circle-bold-duotone" width={28} height={28} />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-44 rounded-sm shadow-md p-2"
        >
          <div className="p-3">
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="w-full text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100 font-bold"
            >
              Cerrar Sesión
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
