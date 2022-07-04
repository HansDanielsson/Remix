import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import type { Customer, Contract } from "~/models/apimodels.server";
import { getApi } from "~/utils/api.server";

export const loader: LoaderFunction = ({ params }) => {
  const customerNr = params.contractId as string;
  return getApi("customer/", customerNr);
};

export default async function ContractId() {
  const customerInfo: Customer = useLoaderData();
  console.log("func ContractId");
  console.log(customerInfo);
  /*
  const contracts = await getApi("contract", "") as unknown as Contract[];

  const listan: Contract[] = contracts.filter((obj) => {
    return obj.customer === customerInfo._id;
  });
  */
  var contracts = (await getApi("contract", "")) as unknown as Contract[];
  console.log(contracts);

  const listan = contracts.filter((obj) => {
    return obj.customer === customerInfo._id;
  });
  console.log(listan);

  function PContract(contract: Contract) {
    const urlAdress = "/singelcontract/".concat(String(contract.alias));
    return (
      <div>
        <Link to={urlAdress}>{contract.alias}</Link>
      </div>
    );
  }

  function PrintContracts() {
    for (const element of listan) {
      PContract(element);
    }
    return null;
  }

  return (
    <div className="container">
      <h2>
        Kundnummer {customerInfo.alias} {customerInfo.name}
      </h2>
      <PrintContracts />
    </div>
  );
}
