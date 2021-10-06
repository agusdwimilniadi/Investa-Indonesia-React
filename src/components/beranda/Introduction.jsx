import img from "../asset/img/asset/motto-top.png";
let Introduction = () => {
  return (
    <section className="motto-top" style={{ backgroundColor: "lightgrey" }}>
      <div className="container h-100">
        <div className="row align-items-center h-100" data-aos="fade-right">
          <div className="col-md-6 mx-auto text-left">
            <p className="motto-tagline">#Invest, #Support, #GetBenefit</p>
            <h1 className="motto-title">
              Bangkitkan Ekonomi, Awali dengan Investasi
            </h1>
            <p className="motto-content">
              Investa adalah sebuah wadah untuk menampung para petani
              professional dan para investor untuk bekerja sama dalam sektor
              pertanian. Investa bekerja dengan cara Investor bisa menamkan
              modal kepada petani untuk dikembangkan uangnya dalam bentuk hasil
              pertanian yang nantinya untung akan dibagi sesuai dengan
              kesepakatan perjanjian di awal. Konsepnya Investa bisa menguatkan
              satu sama lain dan saling membantu
            </p>

            <button type="button" className="btn btn-primary btn-custom">
              Mulai Sekarang !
            </button>
          </div>

          <div
            className="col-md-6 mx-auto text-right motto-top-img img-intro"
            data-aos="fade-left"
          >
            <img src={img} alt="motto-top" className="img-fluid h-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
