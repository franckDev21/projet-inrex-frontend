// Cable sizing calculation utility functions

// Standard cable sections in mm²
export const STANDARD_SECTIONS = [
  1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240,
];

interface CurrentCapacity {
  conduit: number[];
  buried: number[];
  surface: number[];
  tray: number[];
  duct: number[];
  air: number[];
}

interface InsulationType {
  currentCapacity: CurrentCapacity;
  maxTemp: number;
}

interface ConductorType {
  resistivity: number;
  pvc: InsulationType;
  xlpe: InsulationType;
  epr: InsulationType;
}

// Cable parameters based on conductor material and insulation
const CABLE_PARAMETERS: Record<string, ConductorType> = {
  copper: {
    resistivity: 0.0175, // Ohm.mm²/m
    pvc: {
      currentCapacity: { // A/mm²
        conduit: [15, 21, 27, 35, 47, 63, 84, 104, 125, 160, 194, 225, 260, 297, 341],
        buried: [19, 26, 34, 44, 60, 80, 105, 130, 155, 198, 241, 280, 321, 368, 427],
        surface: [21, 29, 37, 48, 65, 87, 114, 141, 168, 215, 264, 306, 352, 406, 469],
        tray: [21, 28, 37, 48, 66, 88, 117, 144, 175, 222, 269, 312, 358, 412, 476],
        duct: [18, 24, 31, 40, 54, 73, 96, 119, 144, 184, 223, 259, 299, 341, 396],
        air: [23, 31, 42, 54, 75, 100, 133, 164, 198, 254, 306, 354, 410, 471, 545],
      },
      maxTemp: 70, // °C
    },
    xlpe: {
      currentCapacity: { // A/mm²
        conduit: [19, 26, 35, 45, 61, 81, 106, 131, 158, 200, 242, 281, 324, 371, 428],
        buried: [24, 33, 43, 55, 74, 99, 130, 162, 196, 251, 304, 352, 406, 463, 539],
        surface: [24, 33, 45, 58, 80, 107, 138, 171, 208, 265, 323, 374, 432, 494, 571],
        tray: [25, 33, 44, 56, 78, 105, 138, 169, 207, 264, 321, 372, 429, 492, 570],
        duct: [22, 30, 40, 51, 69, 92, 122, 150, 184, 237, 289, 337, 389, 447, 519],
        air: [26, 36, 49, 63, 86, 115, 149, 185, 225, 289, 352, 410, 472, 543, 634],
      },
      maxTemp: 90, // °C
    },
    epr: {
      currentCapacity: { // A/mm²
        conduit: [18, 25, 33, 43, 59, 79, 104, 129, 155, 198, 239, 277, 318, 364, 419],
        buried: [23, 32, 42, 54, 73, 98, 129, 160, 194, 248, 300, 348, 401, 460, 534],
        surface: [23, 32, 43, 56, 78, 104, 135, 168, 205, 261, 317, 367, 422, 485, 561],
        tray: [24, 32, 43, 55, 76, 102, 134, 166, 203, 258, 314, 363, 419, 480, 555],
        duct: [21, 29, 39, 50, 68, 90, 119, 147, 180, 231, 281, 326, 378, 433, 500],
        air: [25, 35, 47, 61, 84, 112, 146, 181, 219, 280, 343, 398, 458, 527, 612],
      },
      maxTemp: 90, // °C
    },
  },
  aluminum: {
    resistivity: 0.0285, // Ohm.mm²/m
    pvc: {
      currentCapacity: { // A/mm²
        conduit: [12, 16, 21, 27, 37, 49, 65, 80, 97, 125, 151, 174, 201, 230, 265],
        buried: [15, 20, 26, 34, 46, 62, 81, 100, 120, 153, 186, 215, 248, 283, 328],
        surface: [16, 22, 29, 38, 51, 68, 89, 110, 131, 168, 205, 237, 274, 316, 365],
        tray: [16, 22, 29, 37, 51, 68, 91, 112, 136, 173, 209, 242, 279, 321, 371],
        duct: [14, 19, 24, 31, 42, 57, 75, 93, 112, 143, 173, 201, 232, 266, 308],
        air: [18, 24, 32, 41, 57, 76, 101, 125, 151, 192, 231, 268, 309, 356, 412],
      },
      maxTemp: 70, // °C
    },
    xlpe: {
      currentCapacity: { // A/mm²
        conduit: [15, 20, 27, 35, 47, 63, 83, 103, 125, 160, 195, 226, 261, 300, 346],
        buried: [19, 26, 34, 43, 58, 77, 101, 125, 151, 192, 231, 268, 307, 354, 410],
        surface: [19, 26, 35, 45, 62, 83, 108, 133, 162, 205, 250, 290, 334, 385, 445],
        tray: [19, 26, 34, 44, 61, 82, 108, 132, 162, 207, 252, 292, 338, 387, 448],
        duct: [17, 23, 31, 40, 54, 72, 95, 118, 144, 184, 225, 262, 303, 347, 404],
        air: [20, 28, 38, 49, 67, 89, 117, 144, 175, 224, 272, 316, 366, 421, 492],
      },
      maxTemp: 90, // °C
    },
    epr: {
      currentCapacity: { // A/mm²
        conduit: [14, 19, 26, 34, 46, 62, 82, 101, 123, 157, 191, 222, 256, 293, 338],
        buried: [18, 25, 33, 42, 57, 76, 100, 124, 149, 190, 229, 266, 304, 350, 405],
        surface: [18, 25, 34, 44, 61, 81, 106, 131, 159, 203, 247, 286, 329, 379, 438],
        tray: [19, 25, 33, 43, 60, 80, 105, 130, 159, 202, 246, 285, 329, 377, 436],
        duct: [16, 22, 30, 39, 53, 70, 93, 115, 141, 181, 221, 256, 297, 341, 395],
        air: [20, 27, 37, 48, 66, 88, 115, 141, 172, 219, 268, 310, 359, 413, 483],
      },
      maxTemp: 90, // °C
    },
  },
};

// Temperature correction factors
const TEMPERATURE_CORRECTION_FACTORS = {
  pvc: {
    '10': 1.22,
    '15': 1.17,
    '20': 1.12,
    '25': 1.06,
    '30': 1.00,
    '35': 0.94,
    '40': 0.87,
    '45': 0.79,
    '50': 0.71,
    '55': 0.61,
    '60': 0.50,
  },
  xlpe_epr: {
    '10': 1.15,
    '15': 1.12,
    '20': 1.08,
    '25': 1.04,
    '30': 1.00,
    '35': 0.96,
    '40': 0.91,
    '45': 0.87,
    '50': 0.82,
    '55': 0.76,
    '60': 0.71,
  },
};

// Function to calculate the voltage drop
function calculateVoltageDrop(
  current: number,
  length: number,
  section: number,
  voltage: number,
  resistivity: number
): number {
  // For single-phase: 2 * I * L * rho / S
  const voltageDrop = (2 * current * length * resistivity) / section;
  const percentDrop = (voltageDrop / voltage) * 100;
  return percentDrop;
}

// Function to determine minimum section based on current
function getMinimumSectionForCurrent(
  current: number,
  conductorMaterial: string,
  insulationType: string,
  installationType: string,
  temperatureFactor: number,
  installationFactor = 1,
  groupingFactor = 1
): number {
  // Get the current capacity values for the specified material, insulation, and installation
  const conductor = CABLE_PARAMETERS[conductorMaterial];
  if (!conductor) throw new Error(`Invalid conductor material: ${conductorMaterial}`);

  const insulation = conductor[insulationType as 'pvc' | 'xlpe'];
  if (!insulation) throw new Error(`Invalid insulation type: ${insulationType}`);

  const capacities = insulation.currentCapacity[installationType as keyof CurrentCapacity];
  if (!capacities) throw new Error(`Invalid installation type: ${installationType}`);

  // Apply correction factors
  const correctedCurrent = current / (temperatureFactor * installationFactor * groupingFactor);

  // Find the smallest section that can handle the corrected current
  for (let i = 0; i < capacities.length; i++) {
    if (capacities[i] >= correctedCurrent) {
      return STANDARD_SECTIONS[i];
    }
  }

  // If no section is found, return the largest available
  return STANDARD_SECTIONS[STANDARD_SECTIONS.length - 1];
}

// Function to determine minimum section based on voltage drop
function getMinimumSectionForVoltageDrop(
  current: number,
  length: number,
  voltage: number,
  maxDropPercentage: number,
  resistivity: number
): number {
  // Calculate the minimum required section to meet voltage drop requirements
  // S = (2 * I * L * rho) / (V * maxDropPercentage/100)
  const minimumSection = (2 * current * length * resistivity) / (voltage * (maxDropPercentage / 100));

  // Find the smallest standard section that is greater than or equal to the calculated value
  for (const section of STANDARD_SECTIONS) {
    if (section >= minimumSection) {
      return section;
    }
  }

  // If no standard section meets the requirements, return the largest available
  return STANDARD_SECTIONS[STANDARD_SECTIONS.length - 1];
}

// Function to get temperature correction factor
function getTemperatureCorrectionFactor(
  temperature: number,
  insulationType: string
): number {
  const tempKey = 
    insulationType === 'pvc' ? 'pvc' : 'xlpe_epr';
  
  // Round to nearest 5 degrees
  const roundedTemp = Math.round(temperature / 5) * 5;
  const tempString = roundedTemp.toString();
  
  // Get the correction factor or the closest available
  if (TEMPERATURE_CORRECTION_FACTORS[tempKey as keyof typeof TEMPERATURE_CORRECTION_FACTORS][tempString as keyof typeof TEMPERATURE_CORRECTION_FACTORS.pvc]) {
    return TEMPERATURE_CORRECTION_FACTORS[tempKey as keyof typeof TEMPERATURE_CORRECTION_FACTORS][tempString as keyof typeof TEMPERATURE_CORRECTION_FACTORS.pvc];
  }
  
  // If temperature is out of range, return the closest available
  if (roundedTemp < 10) {
    return TEMPERATURE_CORRECTION_FACTORS[tempKey as keyof typeof TEMPERATURE_CORRECTION_FACTORS]['10' as keyof typeof TEMPERATURE_CORRECTION_FACTORS.pvc];
  }
  if (roundedTemp > 60) {
    return TEMPERATURE_CORRECTION_FACTORS[tempKey as keyof typeof TEMPERATURE_CORRECTION_FACTORS]['60' as keyof typeof TEMPERATURE_CORRECTION_FACTORS.pvc];
  }
  
  // This should not happen, but fallback to 1.0
  return 1.0;
}

// Main function to calculate the recommended cable section
export function calculateCableSection(params: {
  current: number;
  voltage: number;
  length: number;
  installationType: string;
  ambientTemperature: number;
  conductorMaterial: string;
  insulationType: string;
  voltageDrop: number;
}) {
  const {
    current,
    voltage,
    length,
    installationType,
    ambientTemperature,
    conductorMaterial,
    insulationType,
    voltageDrop,
  } = params;

  // Get material resistivity
  const resistivity = CABLE_PARAMETERS[conductorMaterial as keyof typeof CABLE_PARAMETERS].resistivity;

  // Get temperature correction factor
  const temperatureFactor = getTemperatureCorrectionFactor(ambientTemperature, insulationType);

  // Placeholder for installation and grouping factors (would be more complex in a real implementation)
  const installationFactor = 1.0;
  const groupingFactor = 1.0;

  // Calculate minimum section based on current-carrying capacity
  const minimumSectionCurrent = getMinimumSectionForCurrent(
    current,
    conductorMaterial,
    insulationType,
    installationType,
    temperatureFactor,
    installationFactor,
    groupingFactor
  );

  // Calculate minimum section based on voltage drop
  const minimumSectionVoltage = getMinimumSectionForVoltageDrop(
    current,
    length,
    voltage,
    voltageDrop,
    resistivity
  );

  // The recommended section is the larger of the two calculated sections
  const recommendedSection = Math.max(minimumSectionCurrent, minimumSectionVoltage);

  // Calculate the actual voltage drop with the recommended section
  const voltageDropPercentage = calculateVoltageDrop(
    current,
    length,
    recommendedSection,
    voltage,
    resistivity
  );

  // Generate notes and compliance status
  const notes = [];
  let compliant = true;

  if (voltageDropPercentage > voltageDrop) {
    notes.push(`La chute de tension calculée (${voltageDropPercentage.toFixed(2)}%) dépasse la valeur maximale spécifiée (${voltageDrop}%).`);
    compliant = false;
  }

  if (minimumSectionVoltage > minimumSectionCurrent) {
    notes.push("Le dimensionnement est contraint par la chute de tension plutôt que par l'intensité du courant.");
  }

  if (current > 100) {
    notes.push("Pour les courants élevés, envisagez l'utilisation de câbles en parallèle ou consultez un électricien qualifié.");
  }

  // Return the calculation results
  return {
    recommendedSection,
    minimumSectionCurrent,
    minimumSectionVoltage,
    voltageDropPercentage,
    correctionFactors: {
      temperature: temperatureFactor,
      installation: installationFactor,
      grouping: groupingFactor,
    },
    notes,
    compliant,
  };
}