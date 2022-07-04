import type { LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import type {
  Customer,
  Accesspoint,
  Contract,
} from "~/models/apimodels.server";
import { getApi } from "~/utils/api.server";

export const loader: LoaderFunction = ({ params }) => {
  const contractNr = params.singelcontractId as string;
  return getApi("contract/", contractNr);
};

export default async function SingelContract() {
  const contractId: Contract = useLoaderData();
  const customer: Customer = (await getApi(
    "customer/",
    contractId.customer
  )) as unknown as Customer;
  const accessPoint: Accesspoint = (await getApi(
    "accesspoint/",
    contractId.accessPoint
  )) as unknown as Accesspoint;

  function SetFakturaAdress() {
    return (
      <div>
        <h3>Fakturaadress</h3>
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
      </div>
    );
  }

  function SetLeveransAdress() {
    return (
      <div className="single">
        <h3>Leveransadress</h3>
        <label htmlFor="lstreet">Gata</label>
        <input
          name="lstreet"
          id="lstreet"
          defaultValue={accessPoint.address.street}
        />
        <label htmlFor="lstreetno">Nr</label>
        <input
          name="lstreetno"
          id="lstreetno"
          defaultValue={accessPoint.address.streetNo}
        />
        <br />
        <label htmlFor="lapartment">Lgh?</label>
        <br />
        <label htmlFor="lzipcode">Postnr</label>
        <input
          name="lzipcode"
          id="lzipcode"
          defaultValue={accessPoint.address.zipcode}
        />
        <br />
        <label htmlFor="lcity">Postort</label>
        <input
          name="lcity"
          id="lcity"
          defaultValue={accessPoint.address.city}
        />
        <br />
        <label htmlFor="fastbet">Fast.Betek.</label>
        <input name="fastbet" id="fastbet" defaultValue="Vad är detta?" />
        <br />
        <label htmlFor="accessid">AcessID</label>
        <input name="accessid" id="accessid" defaultValue={accessPoint.alias} />
        <br />
      </div>
    );
  }

  function SetProduktInfo() {
    return (
      <div>
        <h3>Produktinformation</h3>
        <label htmlFor="prod">Produkt</label>
        <input name="prod" id="prod" defaultValue="Vad är detta?" />
        <br />
        <label htmlFor="quantity">Antal</label>
        <input
          name="quantity"
          id="quantity"
          defaultValue={contractId.quantity}
        />
        <br />
        <label htmlFor="invoiceinterval">Faktura.Intervall</label>
        <input
          name="invoiceintervall"
          id="invoiceintervall"
          defaultValue={contractId.invoiceInterval}
        />
        <br />
      </div>
    );
  }

  function SetInkoppling() {
    return (
      <div>
        <h3>Inkoppling</h3>
        <label htmlFor="bestdat">Beställningsdatum</label>
        <input
          name="bestdat"
          id="bestdat"
          defaultValue={contractId.onboarding.ordered.getDate()}
        />
        <br />
        <label htmlFor="startdat">Önskat startdatum</label>
        <input
          name="startdat"
          id="startdat"
          defaultValue={contractId.onboarding.prefered.getDate()}
        />
        <br />
        <label htmlFor="inkontroll">Till kontroll</label>
        <input
          name="inkontroll"
          id="inkontroll"
          defaultValue={contractId.onboarding.metrorequest.getDate()}
        />
        <br />
        <label htmlFor="inbest">Beställd</label>
        <input
          name="inbest"
          id="inbest"
          defaultValue={contractId.onboarding.metroorder.getDate()}
        />
        <br />
        <label htmlFor="inaktiverad">Aktiverad</label>
        <input
          name="inaktiverad"
          id="inaktiverad"
          defaultValue={contractId.onboarding.completed.getDate()}
        />
        <br />
      </div>
    );
  }

  function SetUppsagning() {
    return (
      <div>
        <h3>Uppsägning</h3>
        <label htmlFor="uppdat">Uppsägningsdatum</label>
        <input
          name="uppdat"
          id="uppdat"
          defaultValue={contractId.offboarding.ordered.getDate()}
        />
        <br />
        <label htmlFor="stoppdat">Önskat stoppdatum</label>
        <input
          name="stoppdat"
          id="stoppdat"
          defaultValue={contractId.offboarding.prefered.getDate()}
        />
        <br />
        <label htmlFor="upkontroll">Till kontroll</label>
        <input
          name="upkontroll"
          id="upkontroll"
          defaultValue={contractId.offboarding.metrorequest.getDate()}
        />
        <br />
        <label htmlFor="upbest">Beställd</label>
        <input
          name="upbest"
          id="upbest"
          defaultValue={contractId.offboarding.metroorder.getDate()}
        />
        <br />
        <label htmlFor="avslutad">Avslutad</label>
        <input
          name="avslutad"
          id="avslutad"
          defaultValue={contractId.offboarding.completed.getDate()}
        />
        <br />
      </div>
    );
  }
  return (
    <div className="container">
      <h2>
        Avtal för Kund#{customer.alias} {customer.name}
      </h2>
      <Form method="post">
        <div className="single-container">
          <SetLeveransAdress />
          <SetFakturaAdress />
          <SetProduktInfo />
          <SetInkoppling />
          <SetUppsagning />
        </div>
        <h3>Kommentarer</h3>
        <textarea
          name="singlecomment"
          id="singlecomment"
          defaultValue={contractId.comment}
        />
        <br />
        <br />
        <button type="submit" className="contract-change">
          Uppdatera (inte aktiverat)
        </button>
      </Form>
    </div>
  );
}
