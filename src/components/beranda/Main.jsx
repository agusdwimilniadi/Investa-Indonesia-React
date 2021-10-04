import { useSubscription } from "@apollo/client";
import gql from "graphql-tag";
import LoadingSvg from "../asset/img/Loading";
import Card from "../card/Card";
import Introduction from "./Introduction";
import JoinInvesta from "./JoinInvesta";
import Testimonial from "./Testimonial";

const getAll = gql`
  subscription MySubscription {
    campaign_project(order_by: { id: desc }, limit: 3) {
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

let Main = () => {
  const { data, loading } = useSubscription(getAll);

  return (
    <>
      <section
        className="jumbotron jumbotron-fluid jumbotron-poly"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="h-100 d-flex justify-content-center jumbotron-content">
          <div className="my-auto">
            <p className="jumbotron-title tes-jumbo">Investa</p>
            <span className="jumbotron-text">"Investasi Tani Nusantara"</span>
            <div className="to-down">
              <div className="arrow bounce">
                <i
                  className="fa fa-angle-down fa-4x clicked"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Introduction />
      <section className="proyek">
        <div className="proyek-container">
          <div className="container">
            <div className="proyek-title text-center">
              <span>Proyek</span>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="row">
                {data?.campaign_project.map((value) => (
                  <>
                    <div className="col-md-4">
                      {loading ? (
                        <LoadingSvg />
                      ) : (
                        <Card
                          key={value.id}
                          idCard={value.id}
                          sektor_pengajuan={value.sektor_pengajuan}
                          nama_proyek={value.nama_proyek}
                          lama_waktu={value.periode_panen}
                          target_dana={value.target_total_dana}
                          total_bagi_hasil={value.persentase_bagi_hasil}
                          dana_terkumpul={
                            value.dana_campaigns_aggregate.aggregate.sum
                              .total_donasi
                          }
                          link_foto={value.link_foto_proyek}
                          alamat_mitra={value.alamat_mitra}
                        />
                      )}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="row align-items-center justify-content-center text-center mt-3">
              <div className="col-md-12">
                <p>
                  <a href="proyek.html">
                    Lihat Semua Proyek{" "}
                    <i className="fa fa-arrow-alt-circle-right" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <JoinInvesta />
      <Testimonial />
    </>
  );
};

export default Main;
