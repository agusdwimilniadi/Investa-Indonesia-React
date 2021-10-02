import gql from "graphql-tag";
import { useMutation, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import { storage } from "../firebase";
import JumbotronMitra from "./JumbotronMitra";

let Mitra = () => {
  const INPUT_CAMPAIGN = gql`
    mutation MyMutation(
      $nama: String = ""
      $email: String = ""
      $telepon: String = ""
      $alamat_mitra: String = ""
      $nama_kelompok_tani: String = ""
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
      insert_campaign_project(
        objects: {
          user: {
            data: {
              nama: $nama
              email: $email
              telepon: $telepon
              role: "mitra"
            }
          }
          alamat_mitra: $alamat_mitra
          nama_kelompok_tani: $nama_kelompok_tani
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
  let [dataCampaign, setDataCampaign] = useState();

  const [
    insertNewCampaign,
    {
      data: newDataCampaign,
      loading: loadingNewCampaign,
      error: errorNewCampaign,
    },
  ] = useMutation(INPUT_CAMPAIGN);
  //   DATA CATCH
  const [nama, setNama] = useState([]);
  const [email, setEmail] = useState([]);
  const [telepon, setTelepon] = useState([]);
  const [alamatMitra, setAlamatMitra] = useState([]);
  const [namaKelompokTani, setNamaKelompokTani] = useState([]);
  const [sektorPengajuan, setSektorPengajuan] = useState([]);
  const [namaProyek, setNamaProyek] = useState([]);
  const [pengalamanBertani, setPengalamanBertani] = useState([]);
  const [persentaseBagiHasil, setPersentaseBagiHasil] = useState([]);
  const [targetTotal, setTargetTotal] = useState([]);
  const [periodePanen, setPeriodePanen] = useState([]);
  const [bankMitra, setBankMitra] = useState([]);
  const [nomorRekeningMitra, setNomorRekeningMitra] = useState([]);
  const [atasNamaRekening, setAtasNamaRekening] = useState([]);
  const [linkDokumen, setLinkDokumen] = useState([]);
  const [deskripsiProyek, setDeskripsiProyek] = useState([]);
  const [prospekProyek, setProspekProyek] = useState([]);

  const [i_image, setImage] = useState(null);
  const [progressImage, setProgressImage] = useState(0);
  const [urlImage, setUrlImage] = useState("");

  // END DATA CATCH

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
  const onChangeTelepon = (e) => {
    if (e.target) {
      setTelepon(e.target.value);
    }
  };
  const onChangeAlamatMitra = (e) => {
    if (e.target) {
      setAlamatMitra(e.target.value);
    }
  };
  const onChangeNamaKelompokTani = (e) => {
    if (e.target) {
      setNamaKelompokTani(e.target.value);
    }
  };
  const onChangeSektorPengajuan = (e) => {
    if (e.target) {
      setSektorPengajuan(e.target.value);
    }
  };
  const onChangeNamaProyek = (e) => {
    if (e.target) {
      setNamaProyek(e.target.value);
    }
  };
  const onChangePengalamanBertani = (e) => {
    if (e.target) {
      setPengalamanBertani(e.target.value);
    }
  };
  const onChangePersentaseBagiHasil = (e) => {
    if (e.target) {
      setPersentaseBagiHasil(e.target.value);
    }
  };
  const onChangeTargetTotal = (e) => {
    if (e.target) {
      setTargetTotal(e.target.value);
    }
  };
  const onChangePeriodePanen = (e) => {
    if (e.target) {
      setPeriodePanen(e.target.value);
    }
  };
  const onChangeBankMitra = (e) => {
    if (e.target) {
      setBankMitra(e.target.value);
    }
  };
  const onChangeNomorRekeningMitra = (e) => {
    if (e.target) {
      setNomorRekeningMitra(e.target.value);
    }
  };
  const onChangeAtasNamaRekening = (e) => {
    if (e.target) {
      setAtasNamaRekening(e.target.value);
    }
  };
  const onChangeLinkDokumen = (e) => {
    if (e.target) {
      setLinkDokumen(e.target.value);
    }
  };
  const onChangeLinkFotoProyek = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const onChangeDeskripsiProyek = (e) => {
    if (e.target) {
      setDeskripsiProyek(e.target.value);
    }
  };
  const onChangeProspekProyek = (e) => {
    if (e.target) {
      setProspekProyek(e.target.value);
    }
  };
  // END ONCHANGE

  //   HANDLE INPUT
  const handleSubmit = (event) => {
    let validasi = prompt(
      `Apakah anda yakin, data yang dimasukkan benar? ketik YA untuk melanjutkan`
    );

    if (validasi === "YA") {
      insertNewCampaign({
        variables: {
          nama: nama,
          email: email,
          telepon: telepon,
          alamat_mitra: alamatMitra,
          nama_kelompok_tani: namaKelompokTani,
          sektor_pengajuan: sektorPengajuan,
          nama_proyek: namaKelompokTani,
          pengalaman_bertani: pengalamanBertani,
          persentase_bagi_hasil: persentaseBagiHasil,
          target_total_dana: targetTotal,
          periode_panen: periodePanen,
          bank_mitra: bankMitra,
          nomor_rekening_mitra: nomorRekeningMitra,
          atas_nama_rekening: atasNamaRekening,
          link_dokumen: linkDokumen,
          link_foto_proyek: urlImage,
          deskripsi_proyek: deskripsiProyek,
          prospek_proyek: prospekProyek,

          //   nama: nama,
          //   email: email,
          //   telepon: telepon,
          //   alamat_mitra: alamatMitra,
          //   nama_kelompok_tani: namaKelompokTani,
          //   sektor_pengajuan: sektorPengajuan,
          //   nama_proyek: namaProyek,
          //   pengalaman_bertani: pengalamanBertani,
          //   persentase_bagi_hasil: persentaseBagiHasil,
          //   target_total_dana: targetTotal,
          //   periode_panen: periodePanen,
          //   bank_mitra: bankMitra,
          //   nomor_rekening_mitra: nomorRekeningMitra,
          //   atas_nama_rekening: atasNamaRekening,
          //   link_dokumen: linkDokumen,
          //   link_foto_proyek: urlImage,
          //   deskripsi_proyek: deskripsiProyek,
          //   prospek_proyek: prospekProyek,
        },
      });
      alert(`Pengajuan Proyek Telah Berhasil`);
      return true;
    } else if (validasi === "" || validasi === null) {
      alert("Transaksi dibatalkan");
    } else {
      alert("Transaksi dibatalkan");
    }
    event.preventDefault();
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${i_image.name}`).put(i_image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressImage(progress);
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
            setUrlImage(url);
          });
      }
    );
  };
  // HANDPLE
  return (
    <>
      <JumbotronMitra />
      <section className="mitra">
        <div className="container py-5">
          <div className="proyek-title text-center">
            <span>Yuk Menjadi Mitra.</span>
          </div>
          <form onSubmit={handleSubmit} className="form-group">
            <div className="box-form">
              <label htmlFor="nama">Nama Lengkap Perwakilan Mitra :</label>
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
              <label htmlFor="email">Email Perwakilan Mitra :</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="ex: agusdwim@gmail.com"
                autoComplete="off"
                onChange={onChangeEmail}
                required
              />
            </div>
            <div className="box-form">
              <label htmlFor="telepon">Nomor Telepon Perwakilan Mitra :</label>
              <input
                type="number"
                name="telepon"
                id="telepon"
                placeholder="ex: 0858125575411"
                autoComplete="off"
                onChange={onChangeTelepon}
                required
              />
            </div>
            <div className="box-form">
              <label htmlFor="alamat">Alamat Mitra :</label>
              <input
                type="text"
                name="alamat"
                id="alamat"
                placeholder="ex : Jl.Raya Barito, Nganjuk, Jawa Timur, Indonesia"
                autoComplete="off"
                onChange={onChangeAlamatMitra}
                required
              />
            </div>

            <div className="box-form">
              <label htmlFor="nama_kelompok">
                Nama Kelompok Tani / Organisasi :
              </label>
              <input
                type="text"
                name="nama_kelompok"
                id="nama_kelompok"
                placeholder="ex: Kelompok Tani Maju Sejahtera"
                autoComplete="off"
                onChange={onChangeNamaKelompokTani}
                required
              />
            </div>
            <div className="box-form">
              <label htmlFor="sektorPengajuan">Sektor Pengajuan :</label>
              <select
                class="custom-select"
                name="sektorPenganjuan"
                onChange={onChangeSektorPengajuan}
              >
                <option value="">Pilih Sektor pengajuan</option>
                <option value="Pertanian">Pertanian</option>
                <option value="Perkebunan">Perkebunan</option>
                <option value="Budidaya">Budidaya</option>
              </select>
            </div>
            <div className="box-form">
              <label htmlFor="namaProyekPertanian">
                Nama Proyek Pertanian yang Diajukan :
              </label>
              <input
                type="text"
                name="namaProyekPertanian"
                id="namaProyekPertanian"
                placeholder="ex: Padi, Buah Melon"
                autoComplete="off"
                onChange={onChangeNamaProyek}
                required
              />
            </div>
            <div className="box-form">
              <label htmlFor="pengalaman">
                Pengalaman menangani proyek pertanian (Tahun) :
              </label>
              <input
                type="number"
                name="pengalaman"
                id="pengalaman"
                placeholder="ex: 10"
                autoComplete="off"
                onChange={onChangePengalamanBertani}
                required
              />
            </div>
            <div className="box-form">
              <label htmlFor="bagiHasil">
                Persentase Bagi Hasil Keuntungan yang Dibagikan ke Investor
                (Persen) :
              </label>
              <input
                type="number"
                name="bagiHasil"
                id="bagiHasil"
                placeholder="ex: 15"
                autoComplete="off"
                onChange={onChangePersentaseBagiHasil}
                required
              />
            </div>

            <div className="box-form">
              <label htmlFor="nominalPengajuan">Nominal Pengajuan Dana :</label>
              <input
                type="number"
                name="nominalPengajuan"
                id="nominalPengajuan"
                placeholder="ex : 10000000000"
                autoComplete="off"
                onChange={onChangeTargetTotal}
                required
              />
            </div>
            <div className="box-form">
              <label htmlFor="periodePanen">
                Perkiraan Periode Panen (Bulan) :
              </label>
              <input
                type="number"
                name="periodePanen"
                id="periodePanen"
                placeholder="ex: 5"
                autoComplete="off"
                onChange={onChangePeriodePanen}
                required
              />
            </div>

            <div className="box-form">
              <label htmlFor="bankMitra">Bank Mitra :</label>
              <select
                class="custom-select"
                name="bankMitra"
                onChange={onChangeBankMitra}
              >
                <option value="">Pilih Jenis Bank</option>
                <option value="BNI">Bank Nasional Indonesia (BNI)</option>
                <option value="BRI">Bank Rakyat Indonesia (BRI)</option>
                <option value="BSI">Bank Syariah Indonesia (BSI)</option>
                <option value="BTN">Bank Tabungan Negara (BTN)</option>
                <option value="BCA">Bank Central Asia (BCA)</option>
                <option value="Mandiri">Bank Mandiri (Mandiri)</option>
              </select>
            </div>
            <div className="box-form">
              <label htmlFor="noRekeningMitra">Nomor Rekening Mitra :</label>
              <input
                type="text"
                name="noRekeningMitra"
                id="noRekeningMitra"
                placeholder="ex: 12314422313"
                autoComplete="off"
                onChange={onChangeNomorRekeningMitra}
                required
              />
            </div>
            <div className="box-form">
              <label htmlFor="atasNamaRekening">
                Atas Nama Rekening Mitra :
              </label>
              <input
                type="text"
                name="atasNamaRekening"
                id="atasNamaRekening"
                placeholder="ex: PT INVESTASI TANI NUSANTARA"
                autoComplete="off"
                onChange={onChangeAtasNamaRekening}
                required
              />
            </div>

            <div className="box-form">
              <label htmlFor="dokumenRincian">
                Link Dokumen Rincian Proyek Pertanian (PDF) :
              </label>
              <input
                type="text"
                name="dokumenRincian"
                id="dokumenRincian"
                placeholder="ex : https://dokumen.drive.google.com"
                autoComplete="off"
                onChange={onChangeLinkDokumen}
                required
              />
            </div>

            <div className="box-form">
              <div className="progress">
                <div
                  className="progress-bar bg-investa"
                  role="progressbar"
                  style={{ width: `${progressImage}%` }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">
                <div className="box-form">
                  <label htmlFor="fotoProyek">Foto Proyek Pertanian :</label>
                  <input
                    type="file"
                    name="fotoProyek"
                    id="fotoProyek"
                    placeholder="ex: 24"
                    autoComplete="off"
                    onChange={onChangeLinkFotoProyek}
                    required
                  />
                </div>
              </div>
              <div
                className="col-md-3 text-left"
                style={{ paddingTop: "2.5%" }}
              >
                <span className="text-percentage align-middle mr-4">
                  {progressImage} %
                </span>
                <div className="btn btn-primary" onClick={handleUpload}>
                  Upload Image
                </div>
              </div>
            </div>
            <div className="box-form">
              <label htmlFor="deskripsiUmum">
                Deskripsi umum tentang Proyek :
              </label>
              <br />
              <textarea
                class="form-control"
                rows="10"
                aria-label="With textarea"
                name="deskripsiUmum"
                id="deskripsiUmum"
                placeholder="ex : Jambu adalah suatu komoditas ......."
                autoComplete="off"
                onChange={onChangeDeskripsiProyek}
                required
              ></textarea>
            </div>
            <div className="box-form">
              <label htmlFor="prospekProyek">Deskripsi Prospek Proyek :</label>
              <br />
              <textarea
                class="form-control"
                rows="10"
                aria-label="With textarea"
                name="prospekProyek"
                id="prospekProyek"
                placeholder="ex : Jambu adalah suatu komoditas ......."
                autoComplete="off"
                onChange={onChangeProspekProyek}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-mitra">
              Ajukan Mitra
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Mitra;
