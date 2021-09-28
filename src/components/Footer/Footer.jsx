import logo from "../asset/img/logo/NEW-INVESTA-SIMPLE-BORDER.png";
import imgPembayaran from "../asset/img/asset/footer/pembayaran.jpeg";
let Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container-fluid">
          <div className="container pt-5">
            <div className="row pb-5">
              <div className="col-md-12 text-center mb-5">
                <img src={logo} alt="footer-logo" height="80px" />
                &nbsp;
                <span>Investa "Investasi Tani Nusantara"</span>
              </div>
              <div className="col-md-4">
                <div className="content-title-footer">
                  <p>Hubungi Kami :</p>
                </div>
                <div className="content-desc-footer">
                  <p>PT. Investasi Tani Nusantara</p>
                  <p>
                    Terra Constructor Lt.4 10A,Jl. Raya Maesan Timur Blok A31
                    No.55 RT.02/RW.01Kecamatan Maesan 68262, Kabupaten
                    Bondowoso,Jawa Timur, Indonesia.
                  </p>
                  <p>Senin - Jum'at | 08.00 - 17.00</p>
                  <p>Telepon : 0332-426261 / 0331-987565</p>
                  <p>Email : info@investa.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content-title-footer">
                  <p>Perhatian :</p>
                </div>
                <div className="content-desc-footer">
                  <p>
                    1. Layanan Pinjam Meminjam Berbasis Teknologi Informasi
                    merupakan kesepakatan perdata antara Pemberi Pinjaman dengan
                    Penerima Pinjaman, sehingga segala risiko yang timbul dari
                    kesepakatan tersebut ditanggung sepenuhnya oleh
                    masing-masing pihak.
                  </p>
                  <p>
                    2. Bertransaksi di Investa memiliki resiko dan mungkin tidak
                    sesuai untuk semua orang. Banyak faktor bagi seorang
                    investor yang harus dipertimbangkan sebelum bertransaksi,
                    seperti obyektivitas, tingkat pengalaman dan keinginan
                    berinvestasi dengan resiko untuk setiap investor.
                  </p>
                  <p>
                    3. Sebelum melakukan Investasi di Bidang Pertanian lebih
                    baik melakukan riset, analisa, harga atau informasi untuk
                    melakukan penanaman modal. Karena itu Investa tidak akan
                    bertanggung jawab terhadap kegagalan Investasi pertanian
                    yang dilakukan oleh Investor
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content-title-footer">
                  <p>Metode Pembayaran :</p>
                </div>
                <div className="content-desc-footer">
                  <img className="w-100" src={imgPembayaran} alt="" srcSet />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center footer-copyright py-3">
            <p className="my-auto">
              © Copyright 2020 | Investa "All Rights Reserved"
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
