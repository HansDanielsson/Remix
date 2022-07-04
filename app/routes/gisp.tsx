import { Outlet } from "@remix-run/react";
import Menu from "~/menu";

export default function gisp() {
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
