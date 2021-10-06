import { useMutation } from "@apollo/client";
import { useState } from "react";

const EditMitra = ({
  id,
  nama_proyek,
  alamat_mitra,
  sektor_pengajuan,
  pengalaman_bertani,
  persentase_bagi_hasil,
  total_bagi_hasil,
  periode_panen,
  bank_mitra,
  nomor_rekening_mitra,
  atas_nama_rekening,
  link_dokumen,
  link_foto_proyek,
  deskripsi_proyek,
  prospek_proyek,
  UpdateMitraById,
}) => {
  const [data, setData] = useState({
    id: id,
    nama_proyek: nama_proyek,
    alamat_mitra: alamat_mitra,
    sektor_pengajuan: sektor_pengajuan,
    pengalaman_bertani: pengalaman_bertani,
    persentase_bagi_hasil: persentase_bagi_hasil,
    total_bagi_hasil: total_bagi_hasil,
    periode_panen: periode_panen,
    bank_mitra: bank_mitra,
    nomor_rekening_mitra: nomor_rekening_mitra,
    atas_nama_rekening: atas_nama_rekening,
    link_dokumen: link_dokumen,
    link_foto_proyek: link_foto_proyek,
    deskripsi_proyek: deskripsi_proyek,
    prospek_proyek: prospek_proyek,
  });
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  // UPDATE
  const [updateMitra, { loading: loadingUpdate }] = useMutation(
    UpdateMitraById
  );
  const onClickItem = (idx) => {
    updateMitra({
      variables: {
        _eq: idx,
        nama_kelompok_tani: data.nama_proyek,
        alamat_mitra: data.alamat_mitra,
        sektor_pengajuan: data.sektor_pengajuan,
        nama_proyek: data.nama_proyek,
        pengalaman_bertani: data.pengalaman_bertani,
        persentase_bagi_hasil: data.pengalaman_bertani,
        target_total_dana: data.total_bagi_hasil,
        periode_panen: data.periode_panen,
        bank_mitra: data.bank_mitra,
        nomor_rekening_mitra: data.nomor_rekening_mitra,
        atas_nama_rekening: data.atas_nama_rekening,
        link_dokumen: data.link_dokumen,
        link_foto_proyek: data.link_foto_proyek,
        deskripsi_proyek: data.deskripsi_proyek,
        prospek_proyek: data.prospek_proyek,
      },
    });
  };
  return (
    <div>
      <div
        className="modal fade"
        id={`staticBackdrop${nama_proyek}`}
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Sunting Campaign
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
              <div className="row">
                <div className="col-md-12">
                  <div className="box-form">
                    <label htmlFor="nama">
                      Nama Kelompok Tani / Organisasi :
                    </label>
                    <input
                      type="text"
                      name="nama_proyek"
                      id="nama"
                      placeholder="ex: Agus DM"
                      autoComplete="off"
                      value={data.nama_proyek}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="box-form">
                    <label htmlFor="alamat">Alamat Mitra :</label>
                    <input
                      type="text"
                      name="alamat_mitra"
                      id="alamat"
                      placeholder="ex : Jl.Raya Barito, Nganjuk, Jawa Timur, Indonesia"
                      autoComplete="off"
                      onChange={onChange}
                      value={data.alamat_mitra}
                      required
                    />
                  </div>
                  <div className="box-form">
                    <label htmlFor="sektorPengajuan">Sektor Pengajuan :</label>
                    <select
                      class="custom-select"
                      name="sektor_pengajuan"
                      onChange={onChange}
                      value={data.sektor_pengajuan}
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
                      name="nama_proyek"
                      id="namaProyekPertanian"
                      placeholder="ex: Padi, Buah Melon"
                      autoComplete="off"
                      onChange={onChange}
                      value={data.nama_proyek}
                      required
                    />
                  </div>
                  <div className="box-form">
                    <label htmlFor="pengalaman">
                      Pengalaman menangani proyek pertanian (Tahun) :
                    </label>
                    <input
                      type="number"
                      name="pengalaman_bertani"
                      id="pengalaman"
                      placeholder="ex: 10"
                      autoComplete="off"
                      onChange={onChange}
                      value={data.pengalaman_bertani}
                      required
                    />
                  </div>
                  <div className="box-form">
                    <label htmlFor="bagiHasil">
                      Persentase Bagi Hasil Keuntungan yang Dibagikan ke
                      Investor (Persen) :
                    </label>
                    <input
                      type="number"
                      name="persentase_bagi_hasil"
                      id="bagiHasil"
                      placeholder="ex: 15"
                      autoComplete="off"
                      onChange={onChange}
                      value={data.persentase_bagi_hasil}
                      required
                    />
                  </div>

                  <div className="box-form">
                    <label htmlFor="nominalPengajuan">
                      Nominal Pengajuan Dana :
                    </label>
                    <input
                      type="number"
                      name="total_bagi_hasil"
                      id="nominalPengajuan"
                      placeholder="ex : 10000000000"
                      autoComplete="off"
                      onChange={onChange}
                      value={data.total_bagi_hasil}
                      required
                    />
                  </div>
                  <div className="box-form">
                    <label htmlFor="periodePanen">
                      Perkiraan Periode Panen (Bulan) :
                    </label>
                    <input
                      type="number"
                      name="periode_panen"
                      id="periodePanen"
                      placeholder="ex: 5"
                      autoComplete="off"
                      onChange={onChange}
                      value={data.periode_panen}
                      required
                    />
                  </div>
                  <div className="box-form">
                    <label htmlFor="bankMitra">Bank Mitra :</label>
                    <select
                      class="custom-select"
                      name="bank_mitra"
                      onChange={onChange}
                      value={data.bank_mitra}
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
                    <label htmlFor="noRekeningMitra">
                      Nomor Rekening Mitra :
                    </label>
                    <input
                      type="text"
                      name="nomor_rekening_mitra"
                      id="noRekeningMitra"
                      placeholder="ex: 12314422313"
                      autoComplete="off"
                      onChange={onChange}
                      value={data.nomor_rekening_mitra}
                      required
                    />
                  </div>
                  <div className="box-form">
                    <label htmlFor="atasNamaRekening">
                      Atas Nama Rekening Mitra :
                    </label>
                    <input
                      type="text"
                      name="atas_nama_rekening"
                      id="atasNamaRekening"
                      placeholder="ex: PT INVESTASI TANI NUSANTARA"
                      autoComplete="off"
                      onChange={onChange}
                      value={data.atas_nama_rekening}
                      required
                    />
                  </div>
                  <div className="box-form">
                    <label htmlFor="dokumenRincian">
                      Link Dokumen Rincian Proyek Pertanian (PDF) :
                    </label>
                    <input
                      type="text"
                      name="link_dokumen"
                      id="dokumenRincian"
                      placeholder="ex : https://dokumen.drive.google.com"
                      autoComplete="off"
                      onChange={onChange}
                      value={data.link_dokumen}
                      required
                    />
                  </div>
                  <div className="box-form">
                    <label htmlFor="dokumenRincian">Link Foto Proyek :</label>
                    <input
                      type="text"
                      name="link_foto_proyek"
                      id="dokumenRincian"
                      placeholder="ex : https://dokumen.drive.google.com"
                      autoComplete="off"
                      onChange={onChange}
                      value={data.link_foto_proyek}
                      required
                    />
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
                      name="deskripsi_proyek"
                      id="deskripsiUmum"
                      placeholder="ex : Jambu adalah suatu komoditas ......."
                      autoComplete="off"
                      onChange={onChange}
                      value={data.deskripsi_proyek}
                      required
                    ></textarea>
                  </div>
                  <div className="box-form">
                    <label htmlFor="prospekProyek">
                      Deskripsi Prospek Proyek :
                    </label>
                    <br />
                    <textarea
                      class="form-control"
                      rows="10"
                      aria-label="With textarea"
                      name="prospek_proyek"
                      id="prospekProyek"
                      placeholder="ex : Jambu adalah suatu komoditas ......."
                      autoComplete="off"
                      onChange={onChange}
                      value={data.prospek_proyek}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn  btn-custom btn-secondary"
                style={{ backgroundColor: "#808080" }}
                data-dismiss="modal"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  onClickItem(id);
                }}
                className="btn btn-primary btn-custom px-0 py"
              >
                {loadingUpdate ? "Tunggu Sebentar..." : "Perbarui"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditMitra;
