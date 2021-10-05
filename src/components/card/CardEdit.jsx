import React, { useState } from "react";
const CardEdit = ({
  idCard,
  link_foto,
  sektor_pengajuan,
  nama_proyek,
  lama_waktu,
  total_bagi_hasil,
  target_dana,
  dana_terkumpul,
  alamat_mitra,
}) => {
  const [data, setData] = useState({
    idCard: idCard,
    nama_proyek: nama_proyek,
  });
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(name, value);
  };
  return <h1>Halo</h1>;
};

export default CardEdit;
