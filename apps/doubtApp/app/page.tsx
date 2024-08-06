import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <div>
      <h1>Doubt App</h1>
      <Button className="bg-red-500 text-lg" appName="web">
        Click me!
      </Button>
    </div>
  );
}
