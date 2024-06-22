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
  arrayPacientes: Pacientes[]
): Pacientes[] => {
  let fichaPediatra: Pacientes[] = [];
  let i = 0;
  while (i < arrayPacientes.length) {
    let el = arrayPacientes[i];
    el.especialidad === 'Pediatra'
      ? (fichaPediatra = [...fichaPediatra, el])
      : '';
    i++;
  }
  console.warn('ficha asignados a pediatria');
  console.table(fichaPediatra);
  return fichaPediatra;
};

// b) Extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  fichaPediatra: Pacientes[]
): Pacientes[] => {
  let fichaPediatraMenorDeDiezAnios: Pacientes[] = [];
  for (let i = 0; i < fichaPediatra.length; i++) {
    const el = fichaPediatra[i];
    if (el.edad < 10) {
      fichaPediatraMenorDeDiezAnios = [...fichaPediatraMenorDeDiezAnios, el];
    }
  }
  console.warn('ficha pediatria < 10 años');
  console.table(fichaPediatraMenorDeDiezAnios);
  return fichaPediatraMenorDeDiezAnios;
};

/* Apartado 2 */
// Protocolo de urgencia
const activarProtocoloUrgencia = (arrayPacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  // Con bucle for
  /* for (let i = 0; i < arrayPacientes.length; i++) {
    const el = arrayPacientes[i];
    el.temperatura > 39.1 && el.frecuenciaCardiaca > 100
      ? (activarProctolo = true)
      : console.log('No se activa el protocolo de urgencia');
  } */
  let i = 0;
  while (
    i < arrayPacientes.length &&
    arrayPacientes[i].temperatura > 39.1 &&
    arrayPacientes[i].frecuenciaCardiaca > 100
  ) {
    activarProctolo = true;
  }
  console.warn(`ACTIVAR PROTOCOLO DE URGENCIA => ${activarProctolo}`);
  return activarProctolo;
};

/* Apartado 3 */
const reasignaPacientesAMedicoFamilia = (
  arrayPacientes: Pacientes[]
): Pacientes[] => {
  let fichaDePediatriaAMedicoDeFamilia: Pacientes[] = [];
  for (let i = 0; i < arrayPacientes.length; i++) {
    const el = arrayPacientes[i];
    if (arrayPacientes) {
      fichaDePediatriaAMedicoDeFamilia = [
        ...fichaDePediatriaAMedicoDeFamilia,
        { ...el, especialidad: 'Medico de familia' },
      ];
    } else {
      console.error(
        'No hay pacientes en Pediatria para asignarlos a Médico de familia'
      );
    }
  }
  /* let i = 0;
  while (i < arrayPacientes.length) {
    const el = arrayPacientes[i];
    if (el.especialidad === 'Pediatra') {
      fichaDePediatriaAMedicoDeFamilia = [
        ...fichaDePediatriaAMedicoDeFamilia,
        { ...el, especialidad: 'Medico de familia' },
      ];
    }
    i++;
  } */
  console.warn('Reasigna pacientes de Pediatria a Médico de familia');
  console.table(fichaDePediatriaAMedicoDeFamilia);
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
  const fichaPediatra = obtenPacientesAsignadosAPediatria(pacientes);
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(fichaPediatra);
  activarProtocoloUrgencia(pacientes);
  reasignaPacientesAMedicoFamilia(pacientes);
  hayPacientesDePediatria(pacientes);
  const totalPacientesEspecialdiad = cuentaPacientesPorEspecialidad(pacientes);
  console.table(totalPacientesEspecialdiad);
});
