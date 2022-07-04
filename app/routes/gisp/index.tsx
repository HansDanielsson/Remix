import { Form } from "@remix-run/react";

export default function Search() {
  return (
    <div className="container">
      <h2>Sök Kund</h2>
      <Form method="post">
        <input
          name="customer-input"
          id="customer-input"
          placeholder="Sök på namn?, adress? eller kundnummer"
          size={35}
        />
        <button className="customer-button">Sök</button>
      </Form>
      <br />
      <br />
      <br />
      <h2>Sök Accesspunkt</h2>
      <Form method="post">
        <input
          name="accesspoint-input"
          id="accesspoint-input"
          placeholder="Sök på adress, lgh#, AP-ID"
        />
        <button className="accesspoint-button">Sök</button>
      </Form>
    </div>
  );
}
