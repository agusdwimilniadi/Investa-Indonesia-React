import { useHistory } from "react-router";
import img from "../asset/img/asset/gandum.jpg";
let Card = ({
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
  let presentasi = (dana_terkumpul / target_dana) * 100;

  const history = useHistory();
  const detailProyek = () => {
    history.push({
      pathname: `/proyek/${idCard}`,
    });
  };
  return (
    <>
      <div>
        <div className="card mt-4">
          <img
            className="card-img-top"
            src={link_foto}
            alt="Card image cap"
            style={{ maxWidth: "100%", height: "250px", objectFit: "cover" }}
          />
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
              <button
                href="detail-proyek.html"
                class="btn btn-primary btn-custom"
                onClick={detailProyek}
              >
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
