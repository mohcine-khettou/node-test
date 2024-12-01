const fs = require("fs/promises");
const path = require("path");

const getAllInsurances = async (req, res) => {
  const insurancesJson = await fs.readFile(
    path.join(__dirname, "./Insurance-Data.json"),
    "utf-8"
  );
  const data = JSON.parse(insurancesJson);
  res.status(200).json(data);
};
const getSingleInsurance = async (req, res) => {
  const insurancesJson = await fs.readFile(
    path.join(__dirname, "./Insurance-Data.json"),
    "utf-8"
  );
  const policyId = req.params.id;
  const policy = JSON.parse(insurancesJson).find(
    (row) => row.Policy_id !== parseInt(policyId)
  );
  res.status(200).json(policy);
};

module.exports = {
  getAllInsurances,
  getSingleInsurance,
};
