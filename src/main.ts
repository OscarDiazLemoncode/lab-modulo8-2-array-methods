type Especialidad = 'Medico de familia' | 'Pediatra' | 'Cardiólogo';

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: 'John',
    apellidos: 'Doe',
    sexo: 'Male',
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: 'Medico de familia',
    edad: 44,
  },
  {
    id: 2,
    nombre: 'Jane',
    apellidos: 'Doe',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: 'Medico de familia',
    edad: 43,
  },
  {
    id: 3,
    nombre: 'Junior',
    apellidos: 'Doe',
    sexo: 'Male',
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: 'Pediatra',
    edad: 8,
  },
  {
    id: 4,
    nombre: 'Mary',
    apellidos: 'Wien',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: 'Medico de familia',
    edad: 20,
  },
  {
    id: 5,
    nombre: 'Scarlett',
    apellidos: 'Somez',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: 'Cardiólogo',
    edad: 30,
  },
  {
    id: 6,
    nombre: 'Brian',
    apellidos: 'Kid',
    sexo: 'Male',
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: 'Pediatra',
    edad: 11,
  },
];

/* Apartado 1 */

// a) Extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const fichaPediatria: Pacientes[] = pacientes.filter(
    (paciente) => paciente.especialidad === 'Pediatra'
  );
  console.warn('ficha asignados a pediatria');
  console.table(fichaPediatria);
  return fichaPediatria;
};

// b) Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const fichaPediatraMenorDeDiezAnios: Pacientes[] = pacientes.filter(
    (paciente) => paciente.especialidad === 'Pediatra' && paciente.edad < 10
  );
  console.warn('ficha pediatria < 10 años');
  console.table(fichaPediatraMenorDeDiezAnios);
  return fichaPediatraMenorDeDiezAnios;
};

/* Apartado 2 */
// Protocolo de urgencia
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  const activarProtocoloUrgencia: boolean = pacientes.some(
    (paciente) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );

  console.warn(`ACTIVAR PROTOCOLO DE URGENCIA => ${activarProtocoloUrgencia}`);
  return activarProtocoloUrgencia;
};

/* Apartado 3 */
const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]) => {
  const fichaDePediatriaAMedicoDeFamilia: Pacientes[] = pacientes.map(
    (paciente) => console.log(paciente)
  );
  console.warn('Reasigna pacientes de Pediatria a Médico de familia');
  console.table(fichaDePediatriaAMedicoDeFamilia);
  console.table(pacientes);
  return fichaDePediatriaAMedicoDeFamilia;
};

/* Apartado 4 */
const hayPacientesDePediatria = (arrayPacientes: Pacientes[]): boolean => {
  let pacientesPediatria: boolean = false;
  let arrayPacientePediatria: Pacientes[] = [];
  /* for (let i = 0; i < arrayPacientes.length; i++) {
    const el = arrayPacientes[i];
    if (el.especialidad === 'Pediatra') {
      pacientesPediatria = true;
      arrayPacientePediatria = [...arrayPacientePediatria, el];
    }
  } */
  let i = 0;
  while (i < arrayPacientes.length) {
    const el = arrayPacientes[i];
    if (el.especialidad === 'Pediatra') {
      pacientesPediatria = true;
      arrayPacientePediatria = [...arrayPacientePediatria, el];
    }
    i++;
  }
  console.warn(`¿HAY PACIENTES DE PEDIATRIA? => ${pacientesPediatria}`);
  console.warn(`LOS PACIENTES DE PEDIATRIA SON:`);
  console.table(arrayPacientePediatria);
  return pacientesPediatria;
};

/* Apartado 5 */
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  arrayPacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let medicoFamilia: number = 0;
  let pediatra: number = 0;
  let cardiologo: number = 0;
  for (let i = 0; i < arrayPacientes.length; i++) {
    const el = arrayPacientes[i];
    switch (el.especialidad) {
      case 'Medico de familia':
        medicoFamilia++;
        break;
      case 'Pediatra':
        pediatra++;
        break;
      case 'Cardiólogo':
        cardiologo++;
        break;
      default:
        break;
    }
  }
  return {
    medicoDeFamilia: medicoFamilia,
    pediatria: pediatra,
    cardiologia: cardiologo,
  };
};

document.addEventListener('DOMContentLoaded', () => {
  console.warn('array original');
  console.table(pacientes);
  obtenPacientesAsignadosAPediatria(pacientes);
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
  //obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(fichaPediatra);
  activarProtocoloUrgencia(pacientes);
  reasignaPacientesAMedicoFamilia(pacientes);
  //hayPacientesDePediatria(pacientes);
  //const totalPacientesEspecialdiad = cuentaPacientesPorEspecialidad(pacientes);
  //console.table(totalPacientesEspecialdiad);
});
