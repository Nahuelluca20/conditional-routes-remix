import { useOutletContext } from "@remix-run/react";

export default function Route() {
  const role: string = useOutletContext();
  return (
    <div>
      {role === "admin" ? (
        <h1>Hello you are a Admin</h1>
      ) : (
        <h1>Hello you are a User</h1>
      )}
    </div>
  );
}
