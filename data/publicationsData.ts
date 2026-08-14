export interface PublicationItem {
  id: string;
  type: "Peer-Reviewed Journal" | "Opinion & Policy Article";
  title: string;
  authors?: string;
  outlet: string;
  dateOrVolume: string;
  summary: string;
  externalUrl?: string;
  isPeerReviewed: boolean;
}

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    id: "jahan-e-tahqeeq-probation-study",
    type: "Peer-Reviewed Journal",
    title: "Exploring the Structural and Legal Impediments of Probation: A Case Study of the Punjab",
    authors: "D. S. Ali, D. Z. Zafar and N. Ghafoor",
    outlet: "Jahan-e-Tahqeeq",
    dateOrVolume: "Volume 6, Issue 4, 2023, pp. 460–473",
    summary: "Empirical research paper analysing statutory provisions, institutional infrastructure, caseload pressures, and socio-legal bottlenecks within the probation system in Punjab.",
    isPeerReviewed: true,
  },
  {
    id: "republic-policy-punjab-probation",
    type: "Opinion & Policy Article",
    title: "The Vital Role of Punjab Probation & Parole",
    outlet: "Republic Policy",
    dateOrVolume: "Published Commentary",
    summary: "Policy article examining institutional reform imperatives, community supervision efficacy, and offender reintegration pathways in Punjab's criminal justice system.",
    externalUrl: "https://republicpolicy.com/the-vital-role-of-punjab-pro/",
    isPeerReviewed: false,
  },
  {
    id: "republic-policy-khewra-salt",
    type: "Opinion & Policy Article",
    title: "The Root to Khewra Salt",
    outlet: "Republic Policy",
    dateOrVolume: "Published Commentary",
    summary: "Socio-historical and economic overview exploring natural resource heritage, regional development, and industrial potential of the Khewra salt mines.",
    externalUrl: "https://republicpolicy.com/the-root-to-khewra-salt/",
    isPeerReviewed: false,
  },
];
