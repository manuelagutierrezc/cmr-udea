// scripts/load-csv.js
import parseClientes from './import/parseClientes.js';
import parseAportes from './import/parseAportes.js';
import parseAhorros from './import/parseAhorros.js';
import parseCartera from './import/parseCartera.js';

async function main() {
  console.log('Cargando datos de CSVs...');

  await parseClientes();
  await parseAportes();
  await parseAhorros();
  await parseCartera();

  console.log('Importación completada exitosamente.');
}

main().catch((err) => {
  console.error('Error en importación:', err);
  process.exit(1);
});
