import { Outlet } from "@remix-run/react";

export default function index() {
  const role = "admin";
  return (
    <section className="max-w-[1200px] mx-auto mt-20">
      <h1 className="text-2xl font-bold">Welcome to Dasboard</h1>
      <Outlet context={role} />
    </section>
  );
}
