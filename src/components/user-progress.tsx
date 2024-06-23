import Link from "next/link";
import Image from "next/image";

import { InfinityIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { courses } from "@/db/schema";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            width={32}
            height={32}
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            alt="Points"
            width={28}
            height={28}
            src="/points.svg"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/hearts">
        <Button variant="ghost" className="text-rose-500">
          <Image
            alt="Hearts"
            width={22}
            height={22}
            src="/heart.svg"
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="size-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
