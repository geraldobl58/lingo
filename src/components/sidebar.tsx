import Link from "next/link";
import Image from "next/image";

import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

import { Loader } from "lucide-react";

import { SidebarItem } from "@/components/sidebar-item";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        `
          flex 
          h-full 
          lg:w-[256px] 
          lg:fixed
          left-0
          top-0
          px-4
          flex-col
        `,
        className
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pt-8 pl-4 pb-7">
          <Image alt="Mascot" width={40} height={40} src="/mascot.svg" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="size-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
