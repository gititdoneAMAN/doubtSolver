import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { getServerSession } from "next-auth";
import { authConfig } from "../lib/AuthConfig";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authConfig);

  if (session?.data?.user) {
    redirect("/feed");
  } else {
    redirect("/api/auth/signin");
  }
}
