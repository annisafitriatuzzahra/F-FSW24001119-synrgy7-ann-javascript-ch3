function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Urutkan mobil berdasarkan tahun secara descending (paling muda ke paling tua)
  result.sort((a, b) => b.year - a.year);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
