import Image from "next/image";
import Link from "next/link";

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div
      className="
        max-w-[988px] 
        mx-auto 
        flex-1 
        w-full 
        flex 
        flex-col 
        lg:flex-row 
        items-center 
        justify-center
      "
    >
      <div
        className="
          relative
          w-[240px]
          h-[240px]
          lg:w-[424px]
          lg:h-[424px]
          mb-8
          lg:mb-0
        "
      >
        <Image fill alt="Hero" src="/hero.svg" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1
          className="
          text-xl
          lg:text-3xl
          font-bold
          text-neutral-600
          max-w-[480px]
          text-center
        "
        >
          Learn, pratice, and master new languages with Lingo.
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="size-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="sm" variant="secondary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedOut>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button asChild size="lg" variant="secondary" className="w-full">
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

export default Home;
