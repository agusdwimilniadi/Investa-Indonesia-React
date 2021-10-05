import { useMutation, useSubscription } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { storage } from "../firebase";
let Investasi = (props) => {
  const getData = gql`
  subscription MySubscription {
    campaign_project(where: { id: { _eq: ${parseInt(
      props.match.params.id
    )} } }) {
        link_foto_proyek
        dana_campaigns_aggregate {
          aggregate {
            sum {
              total_donasi
            }
          }
        }
        target_total_dana
        nomor_rekening_mitra
        bank_mitra
        atas_nama_rekening
      }
    }
  `;
  const INVESTOR_INPUT = gql`
    mutation MyMutation(
      $nama: String = ""
      $total_donasi: bigint = ""
      $campaign_project_id: Int = 10
      $telepon: String = ""
      $bukti_transfer: String = ""
      $email: String = ""
    ) {
      insert_user(
        objects: {
          nama: $nama
          role: "investor"
          telepon: $telepon
          email: $email
          bukti_transfer: $bukti_transfer
          dana_campaigns: {
            data: {
              total_donasi: $total_donasi
              campaign_project_id: $campaign_project_id
            }
          }
        }
      ) {
        returning {
          nama
          id
          email
          role
          telepon
          bukti_transfer
          dana_campaigns {
            total_donasi
          }
        }
      }
    }
  `;
  const { data } = useSubscription(getData);
  let [dataCampaign, setDataCampaign] = useState([]);

  //DATA CATCH
  const [i_nama, setNama] = useState([]);
  const [i_email, setEmail] = useState([]);
  const [i_noTelepon, setNoTelepon] = useState([]);
  const [i_nominal, setNominal] = useState([]);
  const [i_url, setUrl] = useState("");
  const [i_image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  // END DATA CATCH
  const history = useHistory();

  const detailProyek = () => {
    history.push({
      pathname: `/proyek/${parseInt(props.match.params.id)}`,
    });
  };
  // INSERT DANA INVESTOR
  const [insertDana] = useMutation(INVESTOR_INPUT);

  const handleInput = (event) => {
    insertDana({
      variables: {
        nama: i_nama,
        telepon: i_noTelepon,
        email: i_email,
        total_donasi: i_nominal,
        bukti_transfer: i_url,
        campaign_project_id: parseInt(props.match.params.id),
      },
    });
    detailProyek();
    return false;
  };
  console.log("Image,", i_image);
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${i_image.name}`).put(i_image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(i_image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  // END INSERT DANA INVESTOR

  // ONCHANGE
  const onChangeNama = (e) => {
    if (e.target) {
      setNama(e.target.value);
    }
  };
  const onChangeEmail = (e) => {
    if (e.target) {
      setEmail(e.target.value);
    }
  };
  const onChangeNoTelepon = (e) => {
    if (e.target) {
      setNoTelepon(e.target.value);
    }
  };
  const onChangeNominal = (e) => {
    if (e.target) {
      setNominal(e.target.value);
    }
  };
  const onChangeImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // END ONCHANGE

  useEffect(() => {
    setDataCampaign(data?.campaign_project[0]);
  }, [data]);

  let persentase = (
    (dataCampaign?.dana_campaigns_aggregate?.aggregate?.sum.total_donasi /
      dataCampaign?.target_total_dana) *
    100
  ).toFixed(2);

  return (
    <>
      <div>
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Konfirmasi
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
              <div className="modal-body">
                Apakah anda yakin ingin menginvestasikan dana sebesar Rp.{" "}
                {Intl.NumberFormat(["ban", "id"]).format(i_nominal)} ?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Batal
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={handleInput}
                >
                  Yakin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <br />
        <br />
        <div className="row">
          <div
            className="col-md-12 "
            style={{ textAlign: "center", display: "block" }}
          >
            <img
              src={dataCampaign?.link_foto_proyek}
              alt={`gambar-info ${dataCampaign?.link_foto_proyek}`}
              className="w-100 m-0 p-0 rounded img-shadow"
              style={{
                maxWidth: "40%",
                height: "220px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className="row py-2">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 py-2">
                <div className="text-left text-green">
                  Rp.{" "}
                  {Intl.NumberFormat(["ban", "id"]).format(
                    dataCampaign?.dana_campaigns_aggregate?.aggregate?.sum
                      .total_donasi
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-right">
                  dari Rp.
                  {Intl.NumberFormat(["ban", "id"]).format(
                    dataCampaign?.target_total_dana
                  )}
                </div>
              </div>
            </div>

            <div className="progress">
              <div
                className="progress-bar bg-investa"
                role="progressbar"
                style={{ width: `${persentase}%` }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="pt-2 text-right">
              <span className="text-percentage align-middle">
                {persentase} %
              </span>
            </div>
          </div>
        </div>
        <div className="my-3" style={{ textAlign: "center" }}>
          Nomor Rekening: {dataCampaign?.bank_mitra} -{" "}
          {dataCampaign?.nomor_rekening_mitra} atas nama{" "}
          {dataCampaign?.atas_nama_rekening}
        </div>
        <form className="form-group">
          <div className="box-form">
            <label htmlFor="nama">Nama Lengkap :</label>
            <input
              type="text"
              name="nama"
              id="nama"
              placeholder="ex: Agus DM"
              autoComplete="off"
              onChange={onChangeNama}
              required
            />
          </div>
          <div className="box-form">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ex: agusdwimill@gmail.com"
              autoComplete="off"
              onChange={onChangeEmail}
              required
            />
          </div>
          <div className="box-form">
            <label htmlFor="nominal">Nominal :</label>
            <input
              type="number"
              name="nominal"
              id="nominal"
              placeholder="ex: hanya masukkan angka"
              autoComplete="off"
              onChange={onChangeNominal}
              required
            />
          </div>
          <div className="box-form">
            <label htmlFor="noTelepon">Nomor Telepon :</label>
            <input
              type="text"
              name="noTelepon"
              id="noTelepon"
              placeholder="ex: hanya masukkan angka"
              autoComplete="off"
              onChange={onChangeNoTelepon}
              required
            />
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-investa"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="box-form">
                <label htmlFor="fileTransfer">Upload file transfer :</label>
                <input
                  type="file"
                  name="fileTransfer"
                  id="fileTransfer"
                  placeholder="ex: hanya masukkan angka"
                  autoComplete="off"
                  onChange={onChangeImage}
                  required
                />
              </div>
            </div>
            <div className="col-md-4 text-left" style={{ paddingTop: "2.5%" }}>
              <span className="text-percentage align-middle mr-4">
                {progress.toFixed(2)} %
              </span>
              <div className="btn btn-primary" onClick={handleUpload}>
                Upload Image
              </div>
              {console.log(i_url)}
              <div>{i_url}</div>
            </div>
          </div>
          <br />
          <br />

          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Investasi
          </button>
        </form>

        {/* <h1>Haloo Container {props.match.params.id}</h1> */}
      </div>
    </>
  );
};
export default Investasi;
