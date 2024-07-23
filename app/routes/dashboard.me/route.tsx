import { useOutletContext } from "@remix-run/react";

export default function Route() {
  const role: string = useOutletContext();
  return <div>{role}</div>;
}
