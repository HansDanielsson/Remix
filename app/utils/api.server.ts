import axios from "axios";
import { processApiUrlKey, processApiXKey } from "~/utils/process.server";

export async function getApi(tail: string, opt: string): Promise<string | null> {
  var dataPost = null;
  const urlCustomer = processApiUrlKey().concat(tail, opt);

  await axios
    .get(urlCustomer, {
      headers: {
        "x-api-key": processApiXKey(),
      },
    })
    .then((res) => {
      if (res.status === 200) {
        if (res.data) {
          dataPost = res.data; 
        } else {
          console.log("404: Kund finns inte")   // TODO: Byt ut till lämplig händelse om kund inte existerar       
        }
      }
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
  return dataPost;
}
