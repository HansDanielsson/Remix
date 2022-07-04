import type { LinksFunction } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";

import stylesUrl from "./../styles/login.css";
import Input from "./../components/input"
import Button from "./../components/button"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Login() {
  const [searchParams] = useSearchParams();
  return (
    <div className="container">
      <div className="content" data-light="">
        <h1>Login</h1>
        <form method="post">
          <input
            type="hidden"
            name="redirectTo"
            value={
              searchParams.get("redirectTo") ?? undefined
            }
          />
 
          <div>
            <label htmlFor="username-input">Username</label>
            <br/>
            <Input
              type="text"
              id="username-input"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password-input">Password</label>
            <br/>
            <Input
              id="password-input"
              name="password"
              type="password"
            />
          </div>
          <br/>
          <Button className="button">Submit</Button>
        </form>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}