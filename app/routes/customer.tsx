import { Outlet } from "@remix-run/react";
import Menu from "~/menu";

export default function customer() {
  return (
    <>
      <Menu />
      <div className="container">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
