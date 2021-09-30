let Investasi = (props) => {
  return (
    <div className="container py-5">
      <br />
      <br />
      <div className="row">
        <div
          className="col-md-12 "
          style={{ textAlign: "center", display: "block" }}
        >
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="image-info"
            className="w-100 m-0 p-0 rounded img-shadow"
            style={{
              maxWidth: "40%",
              height: "220px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="row py-2">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 py-2">
              <div className="text-left text-green">Rp. 12120910</div>
            </div>
            <div className="col-md-6">
              <div className="text-right">dari Rp.10000000000</div>
            </div>
          </div>

          <div className="progress">
            <div
              className="progress-bar bg-investa"
              role="progressbar"
              style={{ width: `10%` }}
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <div className="pt-2 text-right">
            <span className="text-percentage align-middle">121 %</span>
          </div>
        </div>
      </div>
      <div className="my-3" style={{ textAlign: "center" }}>
        Nomor Rekening: BNI 1920192012 atas nama Agus DM
      </div>
      <div className="box-form">
        <label htmlFor="nama">Nama Lengkap :</label>
        <input
          type="text"
          name="nama"
          id="nama"
          placeholder="ex: Agus DM"
          autoComplete="off"
          required
        />
      </div>
      <div className="box-form">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ex: agusdwimill@gmail.com"
          autoComplete="off"
          required
        />
      </div>
      <div className="box-form">
        <label htmlFor="nominal">Nominal :</label>
        <input
          type="number"
          name="nominal"
          id="nominal"
          placeholder="ex: hanya masukkan angka"
          autoComplete="off"
          required
        />
      </div>
      <div className="box-form">
        <label htmlFor="fileTransfer">Upload file transfer :</label>
        <input
          type="file"
          name="fileTransfer"
          id="fileTransfer"
          placeholder="ex: hanya masukkan angka"
          autoComplete="off"
          required
        />
      </div>
      <button type="button" className="btn btn-primary">
        Investasi
      </button>

      {/* <h1>Haloo Container {props.match.params.id}</h1> */}
    </div>
  );
};
export default Investasi;
