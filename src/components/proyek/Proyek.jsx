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
const UpdateMitraById = gql`
  mutation MyMutation(
    $_eq: Int = 10
    $nama_kelompok_tani: String = ""
    $alamat_mitra: String = ""
    $sektor_pengajuan: String = ""
    $nama_proyek: String = ""
    $pengalaman_bertani: Int = 10
    $persentase_bagi_hasil: Int = 10
    $target_total_dana: bigint = ""
    $periode_panen: Int = 10
    $bank_mitra: String = ""
    $nomor_rekening_mitra: String = ""
    $atas_nama_rekening: String = ""
    $link_dokumen: String = ""
    $link_foto_proyek: String = ""
    $deskripsi_proyek: String = ""
    $prospek_proyek: String = ""
  ) {
    update_campaign_project(
      where: { id: { _eq: $_eq } }
      _set: {
        nama_kelompok_tani: $nama_kelompok_tani
        alamat_mitra: $alamat_mitra
        sektor_pengajuan: $sektor_pengajuan
        nama_proyek: $nama_proyek
        pengalaman_bertani: $pengalaman_bertani
        persentase_bagi_hasil: $persentase_bagi_hasil
        target_total_dana: $target_total_dana
        periode_panen: $periode_panen
        bank_mitra: $bank_mitra
        nomor_rekening_mitra: $nomor_rekening_mitra
        atas_nama_rekening: $atas_nama_rekening
        link_dokumen: $link_dokumen
        link_foto_proyek: $link_foto_proyek
        deskripsi_proyek: $deskripsi_proyek
        prospek_proyek: $prospek_proyek
      }
    ) {
      returning {
        id
      }
    }
  }
`;
let Proyek = () => {
  const [subQuery, setSubQuery] = useState({ variables: { where: {} } });
  const { data } = useSubscription(getAll, subQuery);

  const [sektor, setSektor] = useState([]);
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
  /* eslint-disable */
  useEffect(() => {
    if (sektor == "") {
      setSubQuery({ variables: { where: {} } });
    } else {
      getDataBySektor();
    }
  }, [sektor]);

  const onChangeSektor = (e) => {
    if (e.target) {
      setSektor(e.target.value);
    }
  };

  //UPDATE

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
                <option value="Budidaya">Sektor Budidaya</option>
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
                  alamat_mitra={value.alamat_mitra}
                  sektor_pengajuan={value.sektor_pengajuan}
                  pengalaman_bertani={value.pengalaman_bertani}
                  persentase_bagi_hasil={value.persentase_bagi_hasil}
                  total_bagi_hasil={value.persentase_bagi_hasil}
                  periode_panen={value.periode_panen}
                  bank_mitra={value.bank_mitra}
                  nomor_rekening_mitra={value.nomor_rekening_mitra}
                  atas_nama_rekening={value.atas_nama_rekening}
                  link_dokumen={value.link_dokumen}
                  link_foto_proyek={value.link_foto_proyek}
                  deskripsi_proyek={value.deskripsi_proyek}
                  prospek_proyek={value.prospek_proyek}
                  nama_kelompok_tani={value.nama_kelompok_tani}
                  UpdateMitraById={UpdateMitraById}
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
