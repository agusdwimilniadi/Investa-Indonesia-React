import { useQuery, useSubscription } from "@apollo/client";
import gql from "graphql-tag";
import Card from "../card/Card";
import Jumbotron from "./Jumbotron";

const getAll = gql`
  subscription MySubscription {
    campaign_project(order_by: { id: desc }) {
      atas_nama_rekening
      bank_mitra
      deskripsi_proyek
      id
      link_dokumen
      link_foto_proyek
      nama_kelompok_tani
      nama_proyek
      nomor_rekening_mitra
      pengalaman_bertani
      periode_panen
      persentase_bagi_hasil
      prospek_proyek
      sektor_pengajuan
      selesai
      target_total_dana
      alamat_mitra
      user_perwakilan_tani_id
      dana_campaigns_aggregate {
        aggregate {
          sum {
            total_donasi
          }
        }
      }
    }
  }
`;
const countInvestor = gql`
  query MyQuery {
    dana_campaign_investor_aggregate {
      aggregate {
        count(columns: user_investor_id)
      }
    }
  }
`;

let Proyek = () => {
  const { data } = useSubscription(getAll);
  const { dataInvestor } = useQuery(countInvestor);
  console.log("data investor", dataInvestor);

  return (
    <>
      <section className="sec-proyek mt-0 ">
        <Jumbotron />

        <div className="sec-proyek-container">
          <div className="proyek-title text-center">
            <span>Proyek</span>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-4">
              <select class="custom-select custom-select-md">
                <option value="">Urutkan berdasarkan sektor</option>
                <option value="Sektor Bahan Pokok">Bahan Pokok</option>
                <option value="Sektor Buah">Buah Buahan</option>
                <option value="Sektor Sayuran">sa</option>
              </select>
            </div>
            <div className="col-md-2" style={{ padding: 0 }}>
              <button type="button" class="btn btn-success btn-custom">
                Success
              </button>
            </div>
          </div>
        </div>
        {}
        <div className="container mt-2 pb-5">
          <div className="row">
            {data?.campaign_project.map((value) => (
              <div className="col-md-4">
                <Card
                  key={value.id}
                  idCard={value.id}
                  sektor_pengajuan={value.sektor_pengajuan}
                  nama_proyek={value.nama_proyek}
                  lama_waktu={value.periode_panen}
                  target_dana={value.target_total_dana}
                  total_bagi_hasil={value.persentase_bagi_hasil}
                  dana_terkumpul={
                    value.dana_campaigns_aggregate.aggregate.sum.total_donasi
                  }
                  link_foto={value.link_foto_proyek}
                  alamat_mitra={value.alamat_mitra}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Proyek;
