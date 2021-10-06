import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useHistory } from "react-router";
import Loading from "../asset/img/Loading.svg";
import { useLocation } from "react-router";

const DELETE_BY_ID = gql`
  mutation MyMutation($_eq: Int = 10) {
    delete_campaign_project(where: { id: { _eq: $_eq } }) {
      returning {
        id
      }
    }
  }
`;
let Card = ({
  /* eslint-disable */
  idCard = { idCard },
  link_foto = { link_foto },
  sektor_pengajuan = { sektor_pengajuan },
  nama_proyek = { nama_proyek },
  lama_waktu = { lama_waktu },
  total_bagi_hasil = { total_bagi_hasil },
  target_dana = { target_dana },
  dana_terkumpul = { dana_terkumpul },
  alamat_mitra = { alamat_mitra },
}) => {
  const location = useLocation();
  const nowLocation = location.pathname;

  let presentasi = (dana_terkumpul / target_dana) * 100;

  const history = useHistory();
  const detailProyek = () => {
    history.push({
      pathname: `/proyek/${idCard}`,
    });
  };
  const editProyek = () => {
    history.push({
      pathname: `/edit/${idCard}`,
    });
  };

  // DELETE
  const [deleteProyek, { loading: loadingDelete }] = useMutation(DELETE_BY_ID);
  const deleteClick = () => {
    deleteProyek({
      variables: {
        _eq: idCard,
      },
    });
  };
  // END DELETE
  return (
    <>
      <div data-aos="fade-down">
        <div className="card mt-4">
          {nowLocation == "/" ? null : (
            <>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn bg-transparent"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    position: "absolute",
                    right: 0,
                  }}
                >
                  <i
                    className="fas fa-caret-square-down"
                    style={{ color: "white" }}
                  ></i>
                </button>
                <div class="dropdown-menu dropdown-menu-left">
                  {presentasi >= 100 ? (
                    <>
                      {" "}
                      <button
                        class="dropdown-item"
                        type="button"
                        style={{ cursor: "pointer" }}
                        data-toggle="modal"
                        onClick={detailProyek}
                      >
                        Detail
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        style={{ cursor: "pointer" }}
                        data-toggle="modal"
                        data-target={`#staticBackdrop${nama_proyek}`}
                        // onClick={editProyek}
                      >
                        Sunting
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        data-target="#exampleModalCenter"
                        style={{ cursor: "pointer" }}
                        onClick={deleteClick}
                      >
                        Hapus
                      </button>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <button
                        class="dropdown-item"
                        type="button"
                        style={{ cursor: "pointer" }}
                        data-toggle="modal"
                        data-target={`#staticBackdrop${nama_proyek}`}
                        // onClick={editProyek}
                      >
                        Sunting
                      </button>
                      <button
                        class="dropdown-item"
                        type="button"
                        data-target="#exampleModalCenter"
                        style={{ cursor: "pointer" }}
                        onClick={deleteClick}
                      >
                        Hapus
                      </button>{" "}
                    </>
                  )}
                </div>
              </div>{" "}
            </>
          )}

          <img
            className="card-img-top"
            src={loadingDelete ? Loading : link_foto}
            alt={`Gambar ${link_foto}`}
            style={{ maxWidth: "100%", height: "250px", objectFit: "cover" }}
          />
          <div
            className="modal fade"
            id="staticBackdrop"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">HALOOOOO {nama_proyek}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body text-center">
            <p className="card-tag">{sektor_pengajuan}</p>
            <h5 className="card-title">{nama_proyek}</h5>
            <p className="card-text"></p>
            <div className="row card-text-content">
              <div className="col-md-6 text-left">
                <p className="text-no-space">Lama Waktu :</p>
                <p className="text-green">{lama_waktu} Bulan</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="text-no-space">Total Bagi Hasil :</p>
                <p className="text-green">{total_bagi_hasil} %</p>
              </div>
              <div className="col-md-6 text-left">
                <p className="text-no-space">Target Dana :</p>
                <p className="text-green">
                  Rp. {Intl.NumberFormat(["ban", "id"]).format(target_dana)}
                </p>
              </div>
              <div className="col-md-6 text-right">
                <p className="text-no-space">Dana Terkumpul :</p>
                <p className="text-green">
                  Rp. {Intl.NumberFormat(["ban", "id"]).format(dana_terkumpul)}
                </p>
              </div>
              <div className="col-md-7 text-left">
                <p className="text-no-space">
                  <i className="fa fa-map-marked-alt" />
                  <span> {alamat_mitra}</span>
                </p>
              </div>
              <div className="col-md-5 pt-2 text-right">
                <span className="text-percentage align-middle">
                  {presentasi.toFixed(2)} %
                </span>
              </div>
            </div>
            <p />
            {presentasi >= 100 ? (
              <button class="btn btn-custom-light">Dana Terpenuhi</button>
            ) : (
              <button class="btn btn-primary btn-custom" onClick={detailProyek}>
                Investasi
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
