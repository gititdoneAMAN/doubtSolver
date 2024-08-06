"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { RecoilRoot } from "recoil";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <SessionProvider>{children}</SessionProvider>
    </RecoilRoot>
  );
};

export default Providers;
