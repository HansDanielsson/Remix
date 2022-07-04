import type { LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import type { Customer } from "~/models/apimodels.server";
import { getApi } from "~/utils/api.server";

export const loader: LoaderFunction = ({ params }) => {
  const customerNr = params.customerId as string;
  return getApi("customer/", customerNr);
};

export default function CustomerId() {
  const customer: Customer = useLoaderData();

  function SetFakturaadress() {
    return (
      <div className="customer">
        <h3>Fakturaadress</h3>
        <label htmlFor="ccareof">C/O</label>
        <input
          name="ccareof"
          id="ccareof"
          defaultValue={customer.address.careOf}
        />
        <br />
        <label htmlFor="cstreet">Gata</label>
        <input
          name="cstreet"
          id="cstreet"
          defaultValue={customer.address.street}
        />
        <br />
        <label htmlFor="cstreetno">Nr</label>
        <input
          name="cstreetno"
          id="cstreetno"
          defaultValue={customer.address.streetNo}
        />
        <br />
        <label htmlFor="centrance">Port</label>
        <input
          name="centrance"
          id="centrance"
          defaultValue={customer.address.entrance}
        />
        <br />
        <label htmlFor="capartment">Lgh</label>
        <input
          name="capartment"
          id="capartment"
          defaultValue={customer.address.apartment}
        />
        <br />
        <label htmlFor="czipcode">Postnr</label>
        <input
          name="czipcode"
          id="czipcode"
          defaultValue={customer.address.zipcode}
        />
        <br />
        <label htmlFor="ccity">Postort</label>
        <input name="ccity" id="ccity" defaultValue={customer.address.city} />
        <br />
        <label htmlFor="ccountry">Land</label>
        <input
          name="ccountry"
          id="ccountry"
          defaultValue={customer.address.country}
        />
        <br />
      </div>
    );
  }

  function SetCyberleverans() {
    return (
      <div>
        <h3>Cyberleverans</h3>
        <label htmlFor="cemail">Epost</label>
        <input
          name="cemail"
          id="cemail"
          defaultValue={customer.contacts[0].email}
        />
        <br />
        <label htmlFor="ccellph">Mobil</label>
        <input
          name="ccellph"
          id="ccellph"
          defaultValue={customer.contacts[0].cellphone}
        />
        <br />
        <label htmlFor="cphone">Telefon</label>
        <input
          name="cphone"
          id="cphone"
          defaultValue={customer.contacts[0].phone}
        />
        <br />
      </div>
    );
  }

  function SetIdInformation() {
    return (
      <div>
        <h3>ID-information</h3>
        <label htmlFor="cpnr">Personnr./ Org.nr.</label>
        <input name="cpnr" id="cpnr" defaultValue={customer.ssn} />
        <br />
      </div>
    );
  }

  function SetEmail() {
    if (customer.invoiceMethod === 0) {
      return (
        <>
          <input
            type="checkbox"
            name="email"
            id="email"
            value="email"
            defaultChecked
          />
        </>
      );
    } else {
      return (
        <>
          <input type="checkbox" name="email" id="email" value="email" />
        </>
      );
    }
  }

  function SetSms() {
    if (customer.invoiceMethod === 1) {
      return (
        <>
          <input
            type="checkbox"
            name="sms"
            id="sms"
            value="sms"
            defaultChecked
          />
        </>
      );
    } else {
      return (
        <>
          <input type="checkbox" name="sms" id="sms" value="sms" />
        </>
      );
    }
  }

  function SetBrev() {
    if (customer.invoiceMethod === 2) {
      return (
        <>
          <input
            type="checkbox"
            name="brev"
            id="brev"
            value="brev"
            defaultChecked
          />
        </>
      );
    } else {
      return (
        <>
          <input type="checkbox" name="brev" id="brev" value="brev" />
        </>
      );
    }
  }

  function SetTemplat() {
    if (customer.invoiceTemplate === 0) {
      return (
        <>
          <label htmlFor="ctemplat">Templat</label>
          <br />
          <input
            type="radio"
            name="ctemplat"
            id="modern"
            value="modern"
            defaultChecked
          />
          <label htmlFor="modern">Modern</label>
          <br />
          <input type="radio" name="ctemplat" id="classic" value="classic" />
          <label htmlFor="classic">Classic</label>
        </>
      );
    } else {
      return (
        <>
          <label htmlFor="ctemplat">Templat</label>
          <br />
          <input type="checkbox" name="ctemplat" id="modern" value="modern" />
          <label htmlFor="modern">Modern</label>
          <br />
          <input
            type="checkbox"
            name="ctemplat"
            id="classic"
            value="classic"
            defaultChecked
          />
          <label htmlFor="classic">Classic</label>
        </>
      );
    }
  }

  function SetFakturaInfo() {
    return (
      <div>
        <h3>Fakturainformation</h3>
        <p>Lev.Metod</p>
        <SetEmail />
        <label htmlFor="email">Epost</label>
        <SetSms />
        <label htmlFor="sms">SMS</label>
        <SetBrev />
        <label htmlFor="brev">Brev</label>
        <br />
        <SetTemplat />
      </div>
    );
  }

  function SetCustomerType() {
    if (customer.customerType === 0) {
      return (
        <div>
          <h3>Kundtyp</h3>
          <input type="radio" name="ccustomer" id="business" value="business" />
          <label htmlFor="business">Företag</label>
          <br />
          <input
            type="radio"
            name="ccustomer"
            id="individual"
            value="individual"
            defaultChecked
          />
          <label htmlFor="individual">Privat</label>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Kundtyp</h3>
          <input
            type="radio"
            name="ccustomer"
            id="business"
            value="business"
            defaultChecked
          />
          <label htmlFor="business">Företag</label>
          <br />
          <input
            type="radio"
            name="ccustomer"
            id="individual"
            value="individual"
          />
          <label htmlFor="individual">Privat</label>
        </div>
      );
    }
  }

  if (customer === null) {
    return null;
  }

  return (
    <div className="container">
      <h2>
        Kundnummer {customer.alias} {customer.name}
      </h2>

      <Form method="post">
        <input
          type="hidden"
          name="_id"
          id="_id"
          value={customer._id ?? undefined}
        />
        <label htmlFor="cname">Namn</label>
        <input name="cname" id="cname" defaultValue={customer.name} />
        <div className="grid-container">
          <SetFakturaadress />
          <SetCyberleverans />
          <SetIdInformation />
          <SetFakturaInfo />
          <SetCustomerType />
        </div>
        <h3>Kommentarer</h3>
        <textarea
          name="ccomment"
          id="ccomment"
          defaultValue={customer.comment}
        />
        <br />
        <br />
        <button type="submit" className="customer-change">
          Spara (inte aktiverad)
        </button>
      </Form>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}
