import { useSubscription } from "@apollo/client";
import gql from "graphql-tag";

let DetailProyek = (props) => {
  const getDataById = gql`
    subscription MySubscription {
      campaign_project(where: { id: { _eq: ${parseInt(
        props.match.params.id
      )} } }) {
        alamat_mitra
        atas_nama_rekening
        bank_mitra
      }
    }
  `;
  const { data, loading, error } = useSubscription(getDataById);
  console.log("Data,", data);
  console.log(props.allData);
  console.log(parseInt(props.match.params.id));
  return <h1>Ini detail Proyek</h1>;
};
export default DetailProyek;
