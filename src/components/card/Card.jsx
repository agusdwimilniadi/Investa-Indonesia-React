import img from "../asset/img/asset/gandum.jpg";
let Card = () => {
  return (
    <>
      <div>
        <div className="card">
          <img className="card-img-top" src={img} alt="Card image cap" />
          <div className="card-body text-center">
            <p className="card-tag">Sektor Pertanian</p>
            <h5 className="card-title">Budidaya Gandum</h5>
            <p className="card-text"></p>
            <div className="row card-text-content">
              <div className="col-md-6 text-left">
                <p className="text-no-space">Lama Waktu :</p>
                <p className="text-green">12 Bulan</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="text-no-space">Total Bagi Hasil :</p>
                <p className="text-green">15 %</p>
              </div>
              <div className="col-md-6 text-left">
                <p className="text-no-space">Target Dana :</p>
                <p className="text-green">Rp.1.000.000.000</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="text-no-space">Dana Terkumpul :</p>
                <p className="text-green">Rp.500.000.000</p>
              </div>
              <div className="col-md-7 text-left">
                <p className="text-no-space">
                  <i className="fa fa-map-marked-alt" />
                  <span>Kabupaten Nganjuk. Jawa Timur Indonesia</span>
                </p>
              </div>
              <div className="col-md-5 pt-2 text-right">
                <span className="text-percentage align-middle">50%</span>
              </div>
            </div>
            <p />
            <a href="detail-proyek.html" className="btn btn-primary btn-custom">
              Investasi
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="card">
          <img className="card-img-top" src={img} alt="Card image cap" />
          <div className="card-body text-center">
            <p className="card-tag">Sektor Pertanian</p>
            <h5 className="card-title">Budidaya Jagung</h5>
            <p className="card-text"></p>
            <div className="row card-text-content">
              <div className="col-md-6 text-left">
                <p className="text-no-space">Lama Waktu :</p>
                <p className="text-green">12 Bulan</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="text-no-space">Total Bagi Hasil :</p>
                <p className="text-green">15 %</p>
              </div>
              <div className="col-md-6 text-left">
                <p className="text-no-space">Target Dana :</p>
                <p className="text-green">Rp.1.000.000.000</p>
              </div>
              <div className="col-md-6 text-right">
                <p className="text-no-space">Dana Terkumpul :</p>
                <p className="text-green">Rp.1.000.000.000</p>
              </div>
              <div className="col-md-7 text-left">
                <p className="text-no-space">
                  <i className="fa fa-map-marked-alt" />
                  <span>Kabupaten Nganjuk. Jawa Timur Indonesia</span>
                </p>
              </div>
              <div className="col-md-5 pt-2 text-right">
                <span className="text-percentage align-middle">100%</span>
              </div>
            </div>
            <p />
            <button className="btn btn-custom-light">Dana Terpenuhi</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
