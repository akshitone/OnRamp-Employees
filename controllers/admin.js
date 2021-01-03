exports.getAddEmployee = (req, res, next) => {
  res.render("EmployeeRegister", { titlePage: "Employee Register" });
};
