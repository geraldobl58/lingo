"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      asChild
      className="justify-start h-[52px]"
      variant={active ? "sidebarOutline" : "sidebar"}
    >
      <Link href={href}>
        <Image
          alt={label}
          width={32}
          height={32}
          src={iconSrc}
          className="mr-5"
        />
        {label}
      </Link>
    </Button>
  );
};
