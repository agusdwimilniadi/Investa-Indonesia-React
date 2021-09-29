import logo1 from "../asset/img/icon/trust_filled_500px.png";
import logo2 from "../asset/img/icon/handshake_480px.png";
import logo3 from "../asset/img/icon/money_bag_filled_500px.png";
import logo4 from "../asset/img/icon/sales_performance_filled_500px.png";

let JoinInvesta = () => {
  return (
    <section className="reason">
      <div className="container pt-5">
        <div className="reason-title text-center">
          <span>Mengapa Bergabung dengan Investa ?</span>
        </div>
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-12">
            <div className="owl-carousel owl-theme my-5">
              <div className="row align-items-center justify-content-center item">
                <div className="hImg-container-custom mx-5">
                  <img src={logo1} alt="icon" className="hImg-custom" />
                </div>
                <p className="reason-text-custom text-no-space">Terpercaya</p>
                <span className="lead text-no-space reason-text-content px-5">
                  Investa sudah di awasi oleh Otoritas Jasa Keuangan dan
                  mendapatkan izin untuk bertransaksi online.
                </span>
              </div>
              <div className="row align-items-center justify-content-center item">
                <div className="hImg-container-custom mx-5">
                  <img src={logo2} alt="icon" className="hImg-custom" />
                </div>
                <p className="reason-text-custom text-no-space">Amanah</p>
                <span className="lead text-no-space reason-text-content px-5">
                  Kami melakukan seleksi terhadap kelompok tani terbaik untuk
                  melaksanakan penanaman pertanian.
                </span>
              </div>
              <div className="row align-items-center justify-content-center item">
                <div className="hImg-container-custom mx-5">
                  <img src={logo3} alt="icon" className="hImg-custom" />
                </div>
                <p className="reason-text-custom text-no-space">Anti Riba</p>
                <span className="lead text-no-space reason-text-content px-5">
                  Kami menggunakan prisip syariah perjanjian yang membuat
                  seluruh kegiatan disini tidak memiliki Riba
                </span>
              </div>
              <div className="row align-items-center justify-content-center item">
                <div className="hImg-container-custom mx-5">
                  <img src={logo4} alt="icon" className="hImg-custom" />
                </div>
                <p className="reason-text-custom text-no-space">
                  Menguntungkan
                </p>
                <span className="lead text-no-space reason-text-content px-5">
                  Investasi memang memiliki resiko, tetapi Investasi di Bidang
                  Pertanian akan lebih menguntungkan dan memiliki peluang return
                  yang tinggi.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinInvesta;
