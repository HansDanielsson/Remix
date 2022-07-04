import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const knr = formData.get("knr") as string;
  const urlSearch = "/contract/".concat(knr);
  return redirect(urlSearch);
};

export default function SearchContract() {
  return (
    <div className="container">
      <h2>Sök Kund</h2>
      <Form method="post">
        <input name="knr" id="knr" placeholder="Sök på kundnummer" />
        <button type="submit" className="customer-button">
          Sök
        </button>
      </Form>
    </div>
  );
}
