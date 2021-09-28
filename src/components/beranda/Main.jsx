import Card from "../card/Card";

let Main = () => {
  return (
    <>
      <section className="jumbotron jumbotron-fluid jumbotron-poly">
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
      <section className="proyek">
        <div className="proyek-container">
          <div className="container">
            <div className="proyek-title text-center">
              <span>Proyek</span>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="owl-carousel owl-theme">
                <Card />
                <Card />
                <Card />
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
    </>
  );
};

export default Main;
