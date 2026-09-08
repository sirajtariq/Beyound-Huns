export interface Client {
  id: string;
  name: string;
  sector?: string;
  description?: string;
  logoSvg?: string;
}

export const clients: Client[] = [
  { id: "ise", name: "ISE Towers Limited" },
  { id: "zameen", name: "Zameen.com" },
  { id: "rcci", name: "Rawalpindi Chamber of Commerce & Industry" },
  { id: "aob", name: "Audit Oversight Board" },
  { id: "pha", name: "PHA Residence Welfare Association" },
  { id: "mol", name: "MOL Pakistan Oil & Gas" },
  { id: "sky-electric", name: "Sky Electric" },
  { id: "airblue", name: "Air Blue" },
  { id: "ccp", name: "Competition Commission of Pakistan" },
  { id: "pahsa", name: "Pahsa Securities" },
  { id: "nazir", name: "Nazir and Sons" },
  { id: "atoz", name: "AtoZ Technologies" },
  { id: "urban", name: "Urban Apparel" },
  { id: "hhs", name: "Huns Sons (Pvt) Limited" },
  { id: "salman", name: "Salman International Traders" },
];
