import { useSubscription } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let DetailProyek = (props) => {
  const getDataById = gql`
    subscription MySubscription {
      campaign_project(where: { id: { _eq: ${parseInt(
        props.match.params.id
      )} } }) {
        alamat_mitra
        atas_nama_rekening
        bank_mitra
        dana_campaigns_aggregate {
          aggregate {
            sum {
              total_donasi
            }
          }
        }
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
      }
    }
  `;
  const { data } = useSubscription(getDataById);
  let [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    setDataCard(data?.campaign_project[0]);
  }, [data]);

  let persentase = (
    (dataCard?.dana_campaigns_aggregate?.aggregate?.sum.total_donasi /
      dataCard?.target_total_dana) *
    100
  ).toFixed(2);
  return (
    <>
      <section className="detail-proyek py-5">
        <div className="container pt-5">
          <div className="row pt-5">
            <div className="col-md-4">
              <img
                src={dataCard?.link_foto_proyek}
                alt="info"
                className="w-100 m-0 p-0 rounded img-shadow"
                style={{
                  maxWidth: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />
              <div className="row pt-4 pb-2">
                <div
                  className="col-md-6 text-left text-green"
                  style={{ fontSize: "90%" }}
                >
                  Rp.{" "}
                  {Intl.NumberFormat(["ban", "id"]).format(
                    dataCard?.dana_campaigns_aggregate?.aggregate?.sum
                      .total_donasi
                  )}
                </div>
                <div
                  className="col-md-6 text-right"
                  style={{ fontSize: "90%" }}
                >
                  dari Rp.{" "}
                  {Intl.NumberFormat(["ban", "id"]).format(
                    dataCard?.target_total_dana
                  )}
                </div>
              </div>
              <div className="col-md-12 m-0 p-0">
                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${persentase}%` }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="col-md-12 p-0 mt-2 text-right">
                <span className="text-percentage align-middle">
                  {persentase}%
                </span>
              </div>
            </div>
            <div className="col-md-8">
              <span className="card-tag p-2">{dataCard?.sektor_pengajuan}</span>
              <h5 className="card-title mt-4">{dataCard?.nama_proyek}</h5>
              <div className="row">
                <div className="col-md-12">
                  <div className="detail-title p-0 m-0">
                    <p className="p-0 m-0">Lama Waktu :</p>
                    <p className="p-0 m-0 mb-3 text-green">
                      {dataCard?.periode_panen} Bulan
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="detail-title p-0 m-0 mb-2">
                    <p className="p-0 m-0">Status :</p>
                    <p className="p-0 m-0 text-green">
                      {persentase >= 100 ? "Selesai" : "Sedang Berjalan"}
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="detail-title p-0 m-0 mb-2">
                    <p className="p-0 m-0">Estimasi Bagi Hasil :</p>
                    <p className="p-0 m-0 text-green">
                      {dataCard?.persentase_bagi_hasil}%
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="detail-title p-0 m-0 mb-2">
                    <p className="p-0 m-0">Pengalaman :</p>
                    <p className="p-0 m-0 text-green">
                      {dataCard?.pengalaman_bertani} tahun
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="detail-title p-0 m-0 mb-2">
                    <p className="p-0 m-0">Pelaku Budidaya :</p>
                    <p className="p-0 m-0 text-green">
                      {dataCard?.nama_kelompok_tani}
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="detail-title p-0 m-0 mb-2 text-center">
                    <a
                      href={dataCard?.link_dokumen}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-custom w-100"
                    >
                      <i className="fa fa-download" />
                      &nbsp;&nbsp;Unduh Rincian Budidaya
                    </a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="detail-title p-0 m-0 mb-2 text-center">
                    <Link
                      to={`/investasi/${parseInt(props.match.params.id)}`}
                      className="btn btn-primary btn-custom-light-open w-100"
                    >
                      <i className="fa fa-holly-berry" />
                      &nbsp;&nbsp;Ikut Investasi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <h5 className="card-title mt-4">Mengenal Tentang Proyek.</h5>
              <p>{dataCard?.deskripsi_proyek}</p>
            </div>
            <div className="col-md-12">
              <h5 className="card-title mt-4">Prospek Proyek</h5>
              <p>{dataCard?.prospek_proyek}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DetailProyek;
