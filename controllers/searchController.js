const axios = require("axios");

const EXTERNAL_API =
  "https://ogienurdiana.com/career/ecc694ce4e7f6e45a5a7912cde9fe131";

const parseData = (rawData) => {
  const entries = rawData.trim().split("\n");
  const headers = entries[0].split("|");

  return entries.slice(1).map((entry) => {
    const values = entry.split("|");
    let obj = {};

    headers.forEach((header, index) => {
      obj[header.toLowerCase()] = values[index];
    });

    return obj;
  });
};

exports.searchByName = async (req, res) => {
  const { name } = req.query;
  try {
    const response = await axios.get(EXTERNAL_API);
    if (response.data.RC !== 200) {
      return res.status(500).json({ message: "Error dari API eksternal" });
    }
    const dataList = parseData(response.data.DATA);
    const hasil = dataList.filter(
      (item) => item.nama && item.nama.toLowerCase() === name.toLowerCase()
    );

    if (hasil.length === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }
    res.json(hasil);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.searchByNIM = async (req, res) => {
  const { nim } = req.query;
  try {
    const response = await axios.get(EXTERNAL_API);
    if (response.data.RC !== 200) {
      return res.status(500).json({ message: "Error dari API eksternal" });
    }
    const dataList = parseData(response.data.DATA);
    const hasil = dataList.filter((item) => item.nim === nim);

    if (hasil.length === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }
    res.json(hasil);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.searchByYMD = async (req, res) => {
  const { ymd } = req.query;
  try {
    const response = await axios.get(EXTERNAL_API);
    if (response.data.RC !== 200) {
      return res.status(500).json({ message: "Error dari API eksternal" });
    }
    const dataList = parseData(response.data.DATA);
    const hasil = dataList.filter((item) => item.ymd === ymd);
    res.json(hasil);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
