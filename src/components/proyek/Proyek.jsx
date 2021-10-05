import { useSubscription } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import EditMitra from "../mitra/EditMitra";
import Jumbotron from "./Jumbotron";

const getAll = gql`
  subscription MySubscription($where: campaign_project_bool_exp = {}) {
    campaign_project(order_by: { id: desc }, where: $where) {
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
let Proyek = () => {
  const [subQuery, setSubQuery] = useState({ variables: { where: {} } });
  const { data } = useSubscription(getAll, subQuery);

  const [sektor, setSektor] = useState([]);

  useEffect(() => {
    if (sektor == "") {
      setSubQuery({ variables: { where: {} } });
    } else {
      getDataBySektor();
    }
  }, [sektor]);
  const getDataBySektor = () => {
    setSubQuery({
      variables: {
        where: {
          sektor_pengajuan: {
            _eq: sektor,
          },
        },
      },
    });
  };
  const onChangeSektor = (e) => {
    if (e.target) {
      setSektor(e.target.value);
    }
  };

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
              <select
                class="custom-select custom-select-md"
                onChange={onChangeSektor}
              >
                <option value="" selected>
                  Urutkan berdasarkan sektor
                </option>
                <option value="Pertanian">Sektor Pertanian</option>
                <option value="Perkebunan">Sektor Perkebunan</option>
                <option value="Buah Buahan">Sektor Buah-Buahan</option>
              </select>
            </div>
            <div className="col-md-2" style={{ padding: 0 }}>
              <div class="btn btn-primary btn-custom p-2 mx-2">
                {" "}
                <i className="fas fa-filter"></i>{" "}
              </div>
            </div>
          </div>
        </div>

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
                <EditMitra
                  key={value.id}
                  id={value.id}
                  nama_proyek={value.nama_proyek}
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
