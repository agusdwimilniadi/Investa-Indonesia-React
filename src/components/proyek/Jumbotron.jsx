import icon1 from "../asset/img/asset/proyek/proyek-group.png";
import icon2 from "../asset/img/asset/proyek/proyek-traktor.png";
import icon3 from "../asset/img/asset/proyek/proyek-bank.png";

let Jumbotron = () => {
  return (
    <>
      <section className="jumbotron jumbotron-fluid jumbotron-non-poly">
        <div className="h-100 d-flex justify-content-center jumbotron-content-non-poly">
          <div className="my-auto">
            <p className="jumbotron-title">Proyek</p>
            <span className="jumbotron-text">
              Investasikan uang anda, dan dapatkan return dari hasil pertanian
              nusantara
            </span>
          </div>
        </div>
      </section>
      <div>
        <section className="box px-5">
          <div className="container boxes">
            <div className="row mx-auto h-100">
              <div className="col-md-4 my-auto h-100 p-3">
                <img src={icon1} alt="" className="h-100" />
                &nbsp;
                <span className="text-green">130 Pendana Investa</span>
              </div>
              <div className="col-md-4 my-auto h-100 p-3">
                <img src={icon2} alt="" className="h-100" />
                &nbsp;
                <span className="text-green">50 Proyek Tersedia</span>
              </div>
              <div className="col-md-4 my-auto h-100 p-3">
                <img src={icon3} alt="" className="h-100" />
                &nbsp;
                <span className="text-green">Rp.+10M uang diinvestasikan</span>
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>
    </>
  );
};

export default Jumbotron;
