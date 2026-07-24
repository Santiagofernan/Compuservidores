export type Product = {
  id: string;
  name: string;
  brand: string;
  category:
    | "Servidores"
    | "Memorias"
    | "Procesadores"
    | "Almacenamiento"
    | "Redes"
    | "Energía";
  subcategory: string;
  cpuGen?: string;
  memoryCapacity?: string;
  storageType?: string;
  compatibility?: string;
  description: string;
  price?: string;
};

export const CATEGORIES = [
  "Servidores",
  "Memorias",
  "Procesadores",
  "Almacenamiento",
  "Redes",
  "Energía",
] as const;

export const BRANDS = [
  "HP",
  "Dell",
  "Lenovo",
  "Cisco",
  "Supermicro",
  "Synology",
  "QNAP",
  "WD",
  "Crucial",
  "Seagate",
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "hpe-dl380-g10",
    name: "HPE ProLiant DL380 Gen10",
    brand: "HP",
    category: "Servidores",
    subcategory: "Rack",
    cpuGen: "Intel Xeon Scalable Gen2",
    memoryCapacity: "Hasta 3TB DDR4",
    storageType: "SFF SAS/SSD",
    compatibility: "iLO 5, VMware, Windows Server",
    description: "Servidor rack 2U de alto rendimiento para virtualización y bases de datos.",
  },
  {
    id: "dell-r740",
    name: "Dell PowerEdge R740",
    brand: "Dell",
    category: "Servidores",
    subcategory: "Rack",
    cpuGen: "Intel Xeon Scalable Gen2",
    memoryCapacity: "Hasta 3TB DDR4",
    storageType: "SFF SAS/NVMe",
    compatibility: "iDRAC 9, VMware, Hyper-V",
    description: "Rack 2U flexible con opciones GPU para IA y analítica.",
  },
  {
    id: "lenovo-sr650",
    name: "Lenovo ThinkSystem SR650",
    brand: "Lenovo",
    category: "Servidores",
    subcategory: "Rack",
    cpuGen: "Intel Xeon Scalable Gen2",
    memoryCapacity: "Hasta 3TB DDR4",
    storageType: "SFF SAS/SATA",
    compatibility: "XClarity, VMware",
    description: "Rack 2U versátil para cargas mixtas empresariales.",
  },
  {
    id: "hpe-ml350",
    name: "HPE ProLiant ML350 Gen10",
    brand: "HP",
    category: "Servidores",
    subcategory: "Torre",
    cpuGen: "Intel Xeon Scalable",
    memoryCapacity: "Hasta 1.5TB DDR4",
    storageType: "SFF/LFF SAS/SSD",
    compatibility: "iLO 5",
    description: "Servidor torre para pymes con expansibilidad tipo rack.",
  },
  {
    id: "dell-m640-blade",
    name: "Dell PowerEdge M640 Blade",
    brand: "Dell",
    category: "Servidores",
    subcategory: "Blade",
    cpuGen: "Intel Xeon Scalable",
    memoryCapacity: "Hasta 1.5TB DDR4",
    storageType: "SFF SSD",
    compatibility: "PowerEdge M1000e",
    description: "Blade de alta densidad para infraestructuras consolidadas.",
  },
  {
    id: "crucial-32gb-ddr4",
    name: "Crucial 32GB DDR4 3200 ECC RDIMM",
    brand: "Crucial",
    category: "Memorias",
    subcategory: "DDR4",
    memoryCapacity: "32GB",
    compatibility: "HPE/Dell/Lenovo",
    description: "Memoria ECC certificada para servidores empresariales.",
  },
  {
    id: "crucial-64gb-ddr5",
    name: "Crucial 64GB DDR5 4800 ECC RDIMM",
    brand: "Crucial",
    category: "Memorias",
    subcategory: "DDR5",
    memoryCapacity: "64GB",
    compatibility: "Xeon Gen4, EPYC 9004",
    description: "DDR5 de última generación para servidores modernos.",
  },
  {
    id: "intel-xeon-6248",
    name: "Intel Xeon Gold 6248 (20C/40T)",
    brand: "HP",
    category: "Procesadores",
    subcategory: "Xeon Scalable Gen2",
    cpuGen: "Intel Xeon Scalable Gen2",
    compatibility: "DL380 Gen10, R740, SR650",
    description: "20 núcleos / 2.5GHz, ideal para virtualización.",
  },
  {
    id: "amd-epyc-7543",
    name: "AMD EPYC 7543 (32C/64T)",
    brand: "Dell",
    category: "Procesadores",
    subcategory: "EPYC Milan",
    cpuGen: "AMD EPYC 7003",
    compatibility: "R7525, DL385 Gen10 Plus",
    description: "32 núcleos con excelente rendimiento por vatio.",
  },
  {
    id: "wd-red-8tb",
    name: "WD Red Pro 8TB NAS HDD",
    brand: "WD",
    category: "Almacenamiento",
    subcategory: "HDD",
    storageType: "HDD 3.5\" SATA",
    compatibility: "Synology, QNAP",
    description: "Disco NAS 7200RPM diseñado para operación 24/7.",
  },
  {
    id: "seagate-exos-16tb",
    name: "Seagate Exos X18 16TB SAS",
    brand: "Seagate",
    category: "Almacenamiento",
    subcategory: "HDD",
    storageType: "HDD 3.5\" SAS 12Gb/s",
    compatibility: "Servidores empresariales",
    description: "Alta capacidad para almacenamiento masivo empresarial.",
  },
  {
    id: "kioxia-nvme-3.84tb",
    name: "NVMe Enterprise 3.84TB U.2",
    brand: "Dell",
    category: "Almacenamiento",
    subcategory: "SSD NVMe",
    storageType: "SSD U.2 NVMe",
    compatibility: "PowerEdge, ProLiant",
    description: "SSD NVMe para bases de datos y virtualización intensiva.",
  },
  {
    id: "cisco-c9300-48",
    name: "Cisco Catalyst 9300 48P",
    brand: "Cisco",
    category: "Redes",
    subcategory: "Switch",
    compatibility: "IOS-XE, StackWise-480",
    description: "Switch de acceso empresarial con seguridad y automatización.",
  },
  {
    id: "synology-rs1221",
    name: "Synology RackStation RS1221+",
    brand: "Synology",
    category: "Redes",
    subcategory: "NAS",
    storageType: "8 bahías SATA/SSD",
    compatibility: "DSM 7",
    description: "NAS rack 1U de 8 bahías para respaldos y colaboración.",
  },
  {
    id: "qnap-ts873a",
    name: "QNAP TS-873A",
    brand: "QNAP",
    category: "Redes",
    subcategory: "NAS",
    storageType: "8 bahías",
    compatibility: "QuTS hero",
    description: "NAS de 8 bahías con soporte 2.5GbE y virtualización.",
  },
  {
    id: "hpe-800w-psu",
    name: "Fuente HPE 800W Flex Slot",
    brand: "HP",
    category: "Energía",
    subcategory: "Fuente de Poder",
    compatibility: "DL360/DL380 Gen10",
    description: "Fuente redundante hot-plug 80 Plus Platinum.",
  },
  {
    id: "apc-smt1500",
    name: "APC Smart-UPS 1500VA",
    brand: "Cisco",
    category: "Energía",
    subcategory: "UPS",
    compatibility: "Rack/Torre",
    description: "UPS línea interactiva con LCD y gestión de red.",
  },
];
