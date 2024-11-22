import React from "react";

const Form = ({
  kategori,
  setKategori,
  kisiSayisi,
  setKisiSayisi,
  handleCalculate,
}) => {
  return (
    <div>
      <h5 className="text-center mb-3">Hesapla</h5>
      <select
        className="form-select mb-3"
        value={kategori}
        onChange={(e) => setKategori(Number(e.target.value))}
      >
        <option value="0">Hesaplanacak hatmi seçin</option>
        <option value="1">İhlâs-ı Şerif (100)</option>
        <option value="2">Tevhîd (72000)</option>
        <option value="3">Âyetül Kürsi (313)</option>
        <option value="4">Salât-ı Nâriye (4444)</option>
      </select>

      <input
        className="form-control mb-3"
        type="number"
        placeholder="Kişi sayısı"
        value={kisiSayisi}
        onChange={(e) => setKisiSayisi(e.target.value)}
      />

      <button
        type="button"
        className="btn btn-outline-secondary w-100 mb-3"
        onClick={handleCalculate}
      >
        Hesapla
      </button>
    </div>
  );
};

export default Form;
