import logo1 from "../asset/img/asset/cara-kerja-1.png";
import logo2 from "../asset/img/asset/cara-kerja-2.png";
import logo3 from "../asset/img/asset/cara-kerja-3.png";
import logo4 from "../asset/img/asset/cara-kerja-4.png";

const CaraKerja = () => {
  return (
    <>
      <section class="jumbotron jumbotron-fluid jumbotron-cara-kerja">
        <div class="h-100 d-flex justify-content-center jumbotron-content ">
          <div class="my-auto text-center">
            <p class="jumbotron-title">Cara Kerja</p>
            <span class="jumbotron-text">
              "Dengan bekerjasama bersama petani baik, akan menghasilkan panen
              terbaik"
            </span>
            <div class="to-down">
              <div class="arrow bounce">
                <i
                  class="fa fa-angle-down fa-4x clicked"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="work-odd">
        <div class="odd-poly py-5">
          <div class="container py-5">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-6">
                <div class="img-step w-50 m-auto">
                  <img src={logo1} alt="step" class="w-100" />
                </div>
              </div>
              <div class="col-md-6 text-right">
                <h3>
                  <strong>Pilih Proyek.</strong>
                </h3>
                <p>
                  Pilih proyek berdasarkan analisis sendiri dan diperkirakan
                  memiliki potensi yang besar di masa depan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="work-even">
        <div class="even-poly pb-5">
          <div class="container py-5">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-6 text-left">
                <h3>
                  <strong>Dana Terkumpul dan Mulai.</strong>
                </h3>
                <p>
                  Setelah dana terkumpul, dana akan diteruskan kepada petani
                  yang mengajukan dana untuk diproses untuk mengelola pertanian
                </p>
              </div>
              <div class="col-md-6">
                <div class="img-step w-50 m-auto">
                  <img src={logo2} alt="step" class="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="work-odd">
        <div class="odd-poly py-5">
          <div class="container py-5">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-6">
                <div class="img-step w-50 m-auto">
                  <img src={logo3} alt="step" class="w-100" />
                </div>
              </div>
              <div class="col-md-6 text-right">
                <h3>
                  <strong>Melihat Perkembangan.</strong>
                </h3>
                <p>
                  Investor dapat melihat perkembangan tempat pertanian yang
                  sedang dikelola petani melalui laporan petani
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="work-even-last">
        <div class="even-poly pb-5">
          <div class="container py-5">
            <div class="row align-items-center justify-content-center">
              <div class="col-md-6 text-left">
                <h3>
                  <strong>Panen dan Bagi Hasil.</strong>
                </h3>
                <p>
                  Setelah masa panen telah tba, sistem bagi hasil antara petani
                  dan investor akan dibagi sesuai dengan kesepakatan awal yang
                  telah disetujui oleh kedua belah pihak
                </p>
              </div>
              <div class="col-md-6">
                <div class="img-step w-50 m-auto">
                  <img src={logo4} alt="step" class="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CaraKerja;
