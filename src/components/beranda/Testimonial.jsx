import foto1 from "../asset/img/foto/foto1.jpg";
import foto2 from "../asset/img/foto/foto2.jpg";

let Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container py-5">
        <div className="reason-title text-center">
          <span>"Pendapat Kami"</span>
        </div>
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-6">
            <div className="col-md-12 testimoni-avatar">
              <img
                src={foto1}
                alt="avatar-testimoni"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="col-md-12 testimoni-name">
              <p>Agus DM</p>
            </div>
            <div className="col-md-12 testimoni-role">
              <p>CEO PT Investasi Tani Nusantara</p>
            </div>
            <div className="col-md-12 testimoni-motto">
              <p>
                Dengan adanya Investa diharapkan Investa bisa menjadi salah satu
                inovasi teknologi yang dapat membantu Indonesia membangkitkan
                ekonomi melalui pertanian. <br />
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-12 testimoni-avatar">
              <img
                src={foto2}
                alt="avatar-testimoni"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="col-md-12 testimoni-name">
              <p>Agus Dwi Milniadi</p>
            </div>
            <div className="col-md-12 testimoni-role">
              <p>CTO PT Investasi Tani Nusantara</p>
            </div>
            <div className="col-md-12 testimoni-motto">
              <p>
                Investa diharapkan bisa membuat pertanian di Indonesia lebih
                maju, dengan prinsip gotong royong membantu satu sama lain.
                Investa ini ditargetkan kepada Investor yang memiliki dana lebih
                serta petani yang kekurangan dana untuk melaksanakan kegiatan
                pertanian.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
