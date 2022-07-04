import { Outlet } from "@remix-run/react";
import Menu from "~/menu";

export default function singelcontract() {
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
