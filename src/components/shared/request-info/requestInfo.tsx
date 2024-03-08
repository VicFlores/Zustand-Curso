import { useEffect, useState } from "react";
import { tesloApi } from "../../../api/tesloApi";

export const RequestInfo = () => {
  const [info, setInfo] = useState<unknown>("");

  useEffect(() => {
    tesloApi
      .get("/auth/private")
      .then((resp) => {
        setInfo(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2>Informacion</h2>

      <pre>{JSON.stringify(info, null, 2)}</pre>
    </>
  );
};
