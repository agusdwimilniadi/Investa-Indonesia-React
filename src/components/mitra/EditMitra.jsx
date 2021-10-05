import { useState } from "react";

const EditMitra = ({ id, nama_proyek }) => {
  const [data, setData] = useState({
    id: id,
    nama_proyek: nama_proyek,
  });
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <div>
      <div
        className="modal fade"
        id={`staticBackdrop${nama_proyek}`}
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="box-form">
                    <label htmlFor="nama">
                      Nama Lengkap Perwakilan Mitra :
                    </label>
                    <input
                      type="text"
                      name="nama_proyek"
                      id="nama"
                      placeholder="ex: Agus DM"
                      autoComplete="off"
                      value={data.nama_proyek}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditMitra;
