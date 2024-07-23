import { useOutletContext } from "@remix-run/react";
import Admin from "./admin";
import User from "./user";

export default function Route() {
  const role: string = useOutletContext();
  return <div>{role === "admin" ? <Admin /> : <User />}</div>;
}
