function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // Urutkan mobil berdasarkan tahun secara ascending (paling tua ke paling baru)
  result.sort((a, b) => a.year - b.year);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
