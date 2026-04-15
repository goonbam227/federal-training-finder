import { useState } from "react";

const JOB_SERIES = [
  { code: "0101", title: "Social Science" },
  { code: "0110", title: "Economist" },
  { code: "0130", title: "Foreign Affairs" },
  { code: "0131", title: "International Relations" },
  { code: "0132", title: "Intelligence" },
  { code: "0140", title: "Manpower Research & Analysis" },
  { code: "0150", title: "Geography" },
  { code: "0160", title: "Civil Rights Analysis" },
  { code: "0170", title: "History" },
  { code: "0180", title: "Psychology" },
  { code: "0184", title: "Sociology" },
  { code: "0186", title: "Social Services" },
  { code: "0187", title: "Social Services Aid & Assistant" },
  { code: "0190", title: "General Anthropology" },
  { code: "0193", title: "Archeology" },
  { code: "0201", title: "Human Resources Management" },
  { code: "0203", title: "Human Resources Assistance" },
  { code: "0301", title: "Miscellaneous Administration & Program" },
  { code: "0303", title: "Miscellaneous Clerk & Assistant" },
  { code: "0318", title: "Secretary" },
  { code: "0326", title: "Office Automation Clerical & Assistant" },
  { code: "0332", title: "Computer Operation" },
  { code: "0340", title: "Program Management" },
  { code: "0341", title: "Administrative Officer" },
  { code: "0343", title: "Management & Program Analysis" },
  { code: "0344", title: "Management & Program Clerical & Assistance" },
  { code: "0346", title: "Logistics Management" },
  { code: "0391", title: "Telecommunications" },
  { code: "0401", title: "General Natural Resources Management" },
  { code: "0403", title: "Microbiology" },
  { code: "0404", title: "Biological Science Technician" },
  { code: "0405", title: "Pharmacology" },
  { code: "0408", title: "Ecology" },
  { code: "0410", title: "Zoology" },
  { code: "0413", title: "Physiology" },
  { code: "0414", title: "Entomology" },
  { code: "0415", title: "Toxicology" },
  { code: "0421", title: "Plant Protection & Quarantine" },
  { code: "0430", title: "Botany" },
  { code: "0434", title: "Plant Pathology" },
  { code: "0435", title: "Plant Physiology" },
  { code: "0437", title: "Horticulture" },
  { code: "0440", title: "Genetics" },
  { code: "0454", title: "Rangeland Management" },
  { code: "0457", title: "Soil Conservation" },
  { code: "0458", title: "Soil Conservation Technician" },
  { code: "0460", title: "Forestry" },
  { code: "0462", title: "Forestry Technician" },
  { code: "0470", title: "Soil Science" },
  { code: "0471", title: "Agronomy" },
  { code: "0480", title: "Fish & Wildlife Administration" },
  { code: "0482", title: "Fishery Biology" },
  { code: "0485", title: "Wildlife Biology" },
  { code: "0486", title: "Wildlife Refuge Management" },
  { code: "0487", title: "Animal Science" },
  { code: "0493", title: "Home Economics" },
  { code: "0501", title: "Financial Administration & Program" },
  { code: "0503", title: "Financial Clerical & Assistance" },
  { code: "0505", title: "Financial Management" },
  { code: "0510", title: "Accounting" },
  { code: "0511", title: "Auditing" },
  { code: "0525", title: "Accounting Technician" },
  { code: "0544", title: "Civilian Pay" },
  { code: "0560", title: "Budget Analysis" },
  { code: "0561", title: "Budget Clerical & Assistance" },
  { code: "0601", title: "General Health Science" },
  { code: "0602", title: "Medical Officer (Physician)" },
  { code: "0610", title: "Nurse" },
  { code: "0620", title: "Practical Nurse" },
  { code: "0621", title: "Nursing Assistant" },
  { code: "0630", title: "Dietitian & Nutritionist" },
  { code: "0631", title: "Occupational Therapist" },
  { code: "0633", title: "Physical Therapist" },
  { code: "0635", title: "Kinesiotherapy" },
  { code: "0640", title: "Health Aid & Technician" },
  { code: "0644", title: "Medical Technologist" },
  { code: "0645", title: "Medical Technician" },
  { code: "0646", title: "Pathology Technician" },
  { code: "0647", title: "Diagnostic Radiologic Technologist" },
  { code: "0660", title: "Pharmacist" },
  { code: "0662", title: "Optometrist" },
  { code: "0665", title: "Speech Pathology & Audiology" },
  { code: "0671", title: "Health System Specialist" },
  { code: "0672", title: "Prosthetic Representative" },
  { code: "0675", title: "Medical Records Administration" },
  { code: "0680", title: "Dental Officer" },
  { code: "0681", title: "Dental Assistant" },
  { code: "0682", title: "Dental Hygienist" },
  { code: "0685", title: "Public Health Program Specialist" },
  { code: "0690", title: "Industrial Hygienist" },
  { code: "0696", title: "Consumer Safety" },
  { code: "0801", title: "General Engineering" },
  { code: "0806", title: "Safety Engineering" },
  { code: "0810", title: "Civil Engineering" },
  { code: "0819", title: "Environmental Engineering" },
  { code: "0820", title: "Electrical Engineering" },
  { code: "0830", title: "Mechanical Engineering" },
  { code: "0840", title: "Nuclear Engineering" },
  { code: "0850", title: "Electrical Engineering Technician" },
  { code: "0854", title: "Computer Engineering" },
  { code: "0855", title: "Electronics Technician" },
  { code: "0856", title: "Electronics Engineering" },
  { code: "0858", title: "Biomedical Engineering" },
  { code: "0861", title: "Aerospace Engineering" },
  { code: "0871", title: "Naval Architecture" },
  { code: "0880", title: "Mining Engineering" },
  { code: "0881", title: "Petroleum Engineering" },
  { code: "0890", title: "Agricultural Engineering" },
  { code: "0892", title: "Ceramic Engineering" },
  { code: "0893", title: "Chemical Engineering" },
  { code: "0894", title: "Welding Engineering" },
  { code: "0901", title: "General Legal & Kindred Administration" },
  { code: "0904", title: "Law Clerk" },
  { code: "0905", title: "General Attorney (Lawyer)" },
  { code: "0950", title: "Paralegal Specialist" },
  { code: "1001", title: "General Arts & Information" },
  { code: "1008", title: "Interior Design" },
  { code: "1010", title: "Exhibits Specialist" },
  { code: "1015", title: "Museum Curator" },
  { code: "1016", title: "Museum Specialist & Technician" },
  { code: "1020", title: "Illustrating" },
  { code: "1035", title: "Public Affairs" },
  { code: "1040", title: "Language Specialist" },
  { code: "1041", title: "Language Clerical" },
  { code: "1046", title: "Language & Communication" },
  { code: "1051", title: "Music Specialist" },
  { code: "1054", title: "Theater Specialist" },
  { code: "1060", title: "Photography" },
  { code: "1071", title: "Audiovisual Production" },
  { code: "1082", title: "Writing & Editing" },
  { code: "1083", title: "Technical Writing & Editing" },
  { code: "1084", title: "Visual Information" },
  { code: "1087", title: "Editorial Assistance" },
  { code: "1101", title: "General Business & Industry" },
  { code: "1102", title: "Contracting" },
  { code: "1103", title: "Industrial Property Management" },
  { code: "1104", title: "Property Disposal" },
  { code: "1105", title: "Purchasing" },
  { code: "1106", title: "Procurement Clerical & Technician" },
  { code: "1109", title: "Grants Management" },
  { code: "1130", title: "Public Utilities Specialist" },
  { code: "1140", title: "Trade Specialist" },
  { code: "1145", title: "Agricultural Program Specialist" },
  { code: "1146", title: "Agricultural Marketing" },
  { code: "1147", title: "Agricultural Market Reporting" },
  { code: "1150", title: "Industrial Specialist" },
  { code: "1152", title: "Production Control" },
  { code: "1160", title: "Financial Analysis" },
  { code: "1163", title: "Insurance Examining" },
  { code: "1165", title: "Loan Specialist" },
  { code: "1169", title: "Internal Revenue Officer" },
  { code: "1170", title: "Realty" },
  { code: "1171", title: "Appraising" },
  { code: "1173", title: "Housing Management" },
  { code: "1176", title: "Building Management" },
  { code: "1301", title: "General Physical Science" },
  { code: "1306", title: "Health Physics" },
  { code: "1310", title: "Physics" },
  { code: "1313", title: "Geophysics" },
  { code: "1315", title: "Hydrology" },
  { code: "1316", title: "Hydrologic Technician" },
  { code: "1320", title: "Chemistry" },
  { code: "1321", title: "Metallurgy" },
  { code: "1330", title: "Astronomy & Space Science" },
  { code: "1340", title: "Meteorology" },
  { code: "1350", title: "Geology" },
  { code: "1360", title: "Oceanography" },
  { code: "1370", title: "Cartography" },
  { code: "1372", title: "Geodesy" },
  { code: "1380", title: "Forest Products Technology" },
  { code: "1382", title: "Food Technology" },
  { code: "1384", title: "Textile Technology" },
  { code: "1386", title: "Photographic Technology" },
  { code: "1410", title: "Librarian" },
  { code: "1411", title: "Library Technician" },
  { code: "1412", title: "Technical Information Services" },
  { code: "1420", title: "Archivist" },
  { code: "1421", title: "Archives Technician" },
  { code: "1520", title: "Mathematics" },
  { code: "1529", title: "Mathematical Statistics" },
  { code: "1530", title: "Statistics" },
  { code: "1550", title: "Computer Science" },
  { code: "1701", title: "General Education & Training" },
  { code: "1702", title: "Education & Training Technician" },
  { code: "1710", title: "Education & Vocational Training" },
  { code: "1712", title: "Training Instruction" },
  { code: "1715", title: "Vocational Rehabilitation" },
  { code: "1720", title: "Education Program" },
  { code: "1725", title: "Public Health Educator" },
  { code: "1730", title: "Education Research" },
  { code: "1740", title: "Education Services" },
  { code: "1750", title: "Instructional Systems Design" },
  { code: "1801", title: "General Inspection, Investigation & Compliance" },
  { code: "1802", title: "Compliance Inspection & Support" },
  { code: "1810", title: "General Investigations" },
  { code: "1811", title: "Criminal Investigating (Special Agent)" },
  { code: "1812", title: "Game Law Enforcement" },
  { code: "1822", title: "Mine Safety & Health" },
  { code: "1831", title: "Securities Compliance Examining" },
  { code: "1889", title: "Import Specialist" },
  { code: "1890", title: "Customs Inspection" },
  { code: "1896", title: "Border Patrol Agent" },
  { code: "2101", title: "Transportation Specialist" },
  { code: "2110", title: "Transportation Industry Analysis" },
  { code: "2121", title: "Railroad Safety" },
  { code: "2123", title: "Motor Carrier Safety" },
  { code: "2125", title: "Highway Safety" },
  { code: "2130", title: "Traffic Management" },
  { code: "2131", title: "Freight Rate" },
  { code: "2135", title: "Transportation Loss & Damage Claims" },
  { code: "2150", title: "Transportation Operations" },
  { code: "2161", title: "Marine Cargo" },
  { code: "2181", title: "Aircraft Operation" },
  { code: "2183", title: "Air Traffic Control" },
  { code: "2185", title: "Aircrew Technician" },
  { code: "2186", title: "Aerial Photography" },
  { code: "2210", title: "Information Technology Management" },
  { code: "2299", title: "Information Technology Student Trainee" },
];

const PAY_GRADES = [
  "GS-1","GS-2","GS-3","GS-4","GS-5","GS-6","GS-7","GS-8","GS-9",
  "GS-10","GS-11","GS-12","GS-13","GS-14","GS-15",
  "SES","WG-1","WG-2","WG-3","WG-4","WG-5","WG-6","WG-7","WG-8",
  "WG-9","WG-10","WG-11","WG-12","WG-13","WG-14","WG-15",
];

const NONSUPERVISORY_SENIOR_GRADES = ["GS-13","GS-14","GS-15"];

// ─── NON-SUPERVISORY TRAINING TRACKS FOR GS-13 THROUGH GS-15 ───────────────
const NONSUPERVISORY_TRACKS = {
  "0201": {
    sme: ["Senior HR Consultant Practicum","HR Policy Development & Analysis","Federal Labor-Management Relations (Advanced)","Organizational Design for HR Experts"],
    technical: ["Advanced Position Classification & Job Grading","Expert-Level Employee Relations Case Management","Senior HR Advisory Skills for Executives","Workforce Planning & Succession Analysis"],
    influence: ["Influencing Without Authority in Federal HR","Stakeholder Engagement for HR SMEs","Briefing Senior Officials on HR Matters","Building Cross-Agency HR Partnerships"],
    mandatory: ["Privacy Act & Records Management","Annual Ethics Training"],
  },
  "0301": {
    sme: ["Advanced Program Analysis & Policy Formulation","Federal Strategic Planning for Senior Analysts","Cross-Agency Collaboration Techniques","Senior Advisor Communication Skills"],
    technical: ["Advanced Performance Management Frameworks","Legislative & Regulatory Analysis","Federal Program Evaluation (Advanced)","Government Accountability & Results-Oriented Management"],
    influence: ["Briefing and Decision Support for Executives","Policy Writing for Senior Officials","Influencing Organizational Change Without Authority","Building High-Impact Professional Networks"],
    mandatory: ["Federal Records Management","Cybersecurity Awareness"],
  },
  "0343": {
    sme: ["Advanced Program Evaluation Methods","Federal Management Analyst Certification","Senior Policy Advisor Skills","Strategic Organizational Analysis"],
    technical: ["GAO Standards for Program Evaluation","Data-Driven Decision Making for Senior Analysts","Cost-Benefit & Return on Investment Analysis","Performance Architecture Design"],
    influence: ["Executive-Level Briefing Techniques","Consulting Skills for Senior Management Analysts","Cross-Functional Facilitation","Written Communication for Senior Policy Audiences"],
    mandatory: ["Ethics & Conflict of Interest","Information Security Awareness"],
  },
  "0510": {
    sme: ["Advanced Federal Financial Management (CGFM Track)","OMB Circular A-123 Internal Controls (Expert Level)","Federal CFO Act Implementation","Financial Systems Architecture & USSGL"],
    technical: ["Single Audit Act Compliance","Federal Accounting Standards Advisory Board (FASAB) Updates","Improper Payments Elimination (IPERA/IPIA)","Senior Financial Analyst Certification Prep (CGFM)"],
    influence: ["Presenting Financial Data to Non-Financial Executives","Senior Advisor Influence in Budget Negotiations","Cross-Agency Financial Policy Collaboration","Financial Risk Communication for Senior Leaders"],
    mandatory: ["Anti-Fraud Awareness","Fiscal Law & Appropriations"],
  },
  "0560": {
    sme: ["Advanced Appropriations Law (GAO Red Book)","Senior Budget Analyst Practicum","OMB MAX Federal Budget (Expert)","Interagency Budget Coordination"],
    technical: ["Congressional Justification Writing (Advanced)","Multi-Year Budgeting & Carryover Management","Budget Execution Analysis & Reprogramming","Continuing Resolution Management"],
    influence: ["Budget Advocacy & Stakeholder Briefings","Presenting Budget Analysis to OMB Examiners","Cross-Agency Resource Alignment","Written Testimony Preparation for Congressional Hearings"],
    mandatory: ["Fiscal Law Compliance","Anti-Deficiency Act Training"],
  },
  "1102": {
    sme: ["FAR Part 15 Negotiations (Expert)","Senior Contracting Officer Warrant Preparation","Advanced Contract Law & Disputes","Source Selection Authority Training"],
    technical: ["DAWIA Level III Certification Completion","Cost & Price Analysis (Advanced DCAA Methods)","Complex Indefinite Delivery Contracts (IDIQ/GWAC)","Performance-Based Acquisition (Expert Track)"],
    influence: ["Presenting Acquisition Strategy to Senior Officials","Industry Engagement for Senior COs","Influencing Acquisition Policy Without Supervisory Authority","Cross-Agency Acquisition Best Practices"],
    mandatory: ["Procurement Integrity Act","Ethics in Contracting"],
  },
  "2210": {
    sme: ["Federal Enterprise Architecture (Expert)","Zero Trust Implementation for Senior IT Analysts","AI/ML Strategy in Federal IT","Cloud Security Architecture (FedRAMP Expert)"],
    technical: ["CISSP / CISM / CISA Certification Completion","Advanced Risk Management Framework (RMF)","Section 508 Compliance Lead","IT Capital Planning & Investment Control (CPIC) Expert"],
    influence: ["IT Briefings for Non-Technical Executives","Influencing IT Policy Without Supervisory Authority","Cross-Agency Technology Collaboration","Senior IT Advisor Communication Skills"],
    mandatory: ["Annual Cybersecurity Awareness","Privacy & Section 508 Compliance"],
  },
  // ── Attorney ─────────────────────────────────────────────────
  "0905": {
    sme: ["Senior Agency Counsel Practicum","Federal Regulatory & Rulemaking Expert Role","Amicus Brief & Appellate Strategy Development","Cross-Agency Legal Advisory Networks"],
    technical: ["Advanced Federal Litigation & Trial Skills","Administrative Procedures Act (APA) Expert Track","Government Contracts Law (Advanced)","National Security Law & Classified Matters"],
    influence: ["Briefing Agency Leadership on Legal Risk","Influencing Policy Without Supervisory Authority","Congressional Testimony Preparation","Written Legal Advocacy for Non-Litigators"],
    mandatory: ["Attorney Professional Responsibility (CLE)","Annual Ethics Training"],
  },
  // ── Economist ────────────────────────────────────────────────
  "0110": {
    sme: ["Senior Federal Economist Practicum","Regulatory Impact Analysis (RIA) Expert Track","Econometric Modeling for Policy Advice","Federal Economic Forecasting Advisory"],
    technical: ["Advanced Applied Microeconomics","Labor & Wage Policy Analysis (Expert)","International Trade & Macroeconomic Modeling","Big Data & Machine Learning for Economic Analysis"],
    influence: ["Briefing Senior Officials on Economic Findings","Plain-Language Economic Communication","Testifying Before Congress as an Economic Expert","Cross-Agency Economic Policy Collaboration"],
    mandatory: ["Research Integrity & Data Ethics","Cybersecurity Awareness"],
  },
  // ── Intelligence Analyst ─────────────────────────────────────
  "0132": {
    sme: ["Senior All-Source Intelligence Analyst Practicum","Strategic Intelligence Tradecraft (Advanced)","Collection Management Expert Track","National Intelligence Estimate (NIE) Contributor Skills"],
    technical: ["Advanced Structured Analytic Techniques","OSINT & Open Source Intelligence Analysis","Geospatial Intelligence (GEOINT) for Analysts","AI-Assisted Intelligence Analysis"],
    influence: ["Producing Finished Intelligence for Senior Leaders","Briefing Policymakers Without Supervisory Role","Intelligence Community Collaboration & Liaison","Analytic Mentorship & Peer Review Leadership"],
    mandatory: ["Security Awareness & Insider Threat Prevention","Annual Ethics Training"],
  },
  // ── Criminal Investigator / Special Agent ────────────────────
  "1811": {
    sme: ["Senior Special Agent Technical Expert Role","Complex Financial Crimes & Asset Forfeiture","Cyber-Enabled Crime Investigation (Expert)","Federal Expert Witness Preparation"],
    technical: ["Advanced Digital Forensics & e-Discovery","Undercover Operations Law & Ethics","Financial Intelligence & FinCEN Reporting","National Security Investigation Techniques"],
    influence: ["Leading Task Forces Without Formal Authority","Briefing Prosecutors & Agency Counsel","Cross-Agency & Joint Investigation Collaboration","Law Enforcement Community Liaison Skills"],
    mandatory: ["Use of Force Policy Review","Annual Ethics & Conduct Training"],
  },
  // ── Auditor ──────────────────────────────────────────────────
  "0511": {
    sme: ["Senior Federal Auditor Advisory Role","Performance Audit Design & Methodology (Expert)","IG Community Best Practices & Standards","GAO Yellow Book Expert Track"],
    technical: ["Advanced IT Audit & Cybersecurity Auditing","Forensic Audit & Fraud Examination (CFE Prep)","Federal Financial Statement Audit (Expert)","Data Analytics for Federal Auditors"],
    influence: ["Audit Report Writing for Senior Leadership","Briefing IGs & Agency Heads on Findings","Influencing Corrective Action Without Authority","Congressional Referral Preparation"],
    mandatory: ["Independence & Ethics in Federal Auditing","Annual Cybersecurity Awareness"],
  },
  // ── Foreign Affairs ───────────────────────────────────────────
  "0130": {
    sme: ["Senior Foreign Affairs Officer Expert Track","Regional Strategic Analysis (Expert)","Multilateral Diplomacy & Coalition Building","Senior Country Team Advisor Skills"],
    technical: ["Treaty Negotiation & International Agreements","Foreign Assistance Program Design (Advanced)","Political-Military Affairs & Security Cooperation","Consular Operations Expert Track"],
    influence: ["Briefing Senior Diplomatic Leadership","Public Diplomacy & Strategic Communications","Influencing Interagency Policy Without Supervisory Role","Foreign Partner Engagement & Relationship Management"],
    mandatory: ["Security Overseas Seminar (SOS)","Annual Ethics Training"],
  },
  // ── Statistics ───────────────────────────────────────────────
  "1530": {
    sme: ["Senior Federal Statistician Advisory Role","Statistical Standards Development for Federal Agencies","Survey Methodology Expert Track","Federal Data Quality Framework Development"],
    technical: ["Advanced Machine Learning & Predictive Modeling","Bayesian Statistics for Policy Applications","Big Data Infrastructure for Federal Statistical Programs","Disclosure Avoidance & Confidentiality Methods"],
    influence: ["Communicating Statistics to Non-Technical Executives","Data Storytelling for Policy Impact","Cross-Agency Statistical Collaboration","Statistical Peer Review & Methodology Leadership"],
    mandatory: ["Statistical Confidentiality & Privacy","Research Integrity Training"],
  },
  // ── Public Health ─────────────────────────────────────────────
  "0685": {
    sme: ["Senior Public Health Program Advisor","Federal Emergency Preparedness Subject Matter Expert","Health Equity Policy Analysis (Expert)","Epidemiological Investigation Lead"],
    technical: ["Advanced Epidemiological Methods","Federal Health Data Systems & Surveillance","Community Health Needs Assessment (Expert)","Health Program Cost-Effectiveness Analysis"],
    influence: ["Briefing Agency Leaders on Public Health Findings","Cross-Sector Health Partnership Development","Influencing Federal Health Policy Without Supervisory Role","Congressional & Interagency Health Advocacy"],
    mandatory: ["HIPAA Privacy & Security","Annual Ethics Training"],
  },
  // ── Instructional Systems ─────────────────────────────────────
  "1750": {
    sme: ["Senior ISD Advisory Role","Enterprise Learning Strategy Development","Federal Workforce Learning Architecture","AI & Adaptive Learning Expert Track"],
    technical: ["Advanced e-Learning Development (Articulate/Adobe)","Section 508 Accessibility Expert Track","Learning Analytics & ROI Measurement","Competency-Based Learning Design"],
    influence: ["Advising Leadership on Learning Strategy","Cross-Agency Training Collaboration","Influencing L&D Policy Without Supervisory Title","Building Communities of Practice in Federal Agencies"],
    mandatory: ["Section 508 Compliance","Annual Ethics Training"],
  },
  "default": {
    sme: ["Senior Subject Matter Expert Practicum","Advanced Federal Policy Analysis","Expert Consultation Skills for Senior ICs","Cross-Agency Technical Collaboration"],
    technical: ["Advanced Technical Writing for Federal Audiences","Senior-Level Certification in Your Functional Area","Data Analysis & Visualization for Senior Analysts","Federal Program Evaluation (Advanced)"],
    influence: ["Influencing Without Authority — Senior IC Track","Executive Briefing & Presentation Skills","Strategic Networking for Non-Supervisory GS-13–15","Writing for Senior Decision Makers"],
    mandatory: ["Annual Ethics Training","Cybersecurity Awareness","No FEAR Act Training"],
  },
};

// ─── SUPERVISORY TRAINING DATABASE ─────────────────────────────────────────
const TRAINING_DATABASE = {
  "0201": {
    foundational: ["HR Management Fundamentals (OPM)","Federal Employment Law Basics","USAJOBS Hiring Manager Training"],
    intermediate: ["Position Classification Workshop","Employee Relations Certification","Performance Management Program"],
    advanced: ["HR Strategic Planning","Federal Labor Relations Authority (FLRA) Training","Senior HR Executive Program"],
    mandatory: ["Privacy Act & Records Management","Ethics in Federal Employment"],
    links: ["https://www.opm.gov/policy-data-oversight/training-and-development/","https://www.hru.gov/"],
  },
  "0301": {
    foundational: ["Federal Administrative Procedures","Government Writing Excellence","Records Management Basics"],
    intermediate: ["Program Analysis & Evaluation","Project Management for Federal Employees","Performance Measurement"],
    advanced: ["Advanced Policy Analysis","Federal Leadership Development Program","Executive Core Qualifications Training"],
    mandatory: ["Federal Records Management","Cybersecurity Awareness"],
    links: ["https://www.opm.gov/policy-data-oversight/training-and-development/"],
  },
  "0343": {
    foundational: ["Introduction to Program Management","Federal Budget Process Overview","Data Analysis Fundamentals"],
    intermediate: ["Program Evaluation Methods","Cost-Benefit Analysis in Government","Performance Improvement Practitioner"],
    advanced: ["Advanced Management Analysis","SES Candidate Development","Organizational Change Leadership"],
    mandatory: ["Ethics & Conflict of Interest","Information Security Awareness"],
    links: ["https://www.opm.gov/policy-data-oversight/training-and-development/","https://www.performance.gov/"],
  },
  "0510": {
    foundational: ["Federal Accounting Fundamentals (FASAB)","Budget Execution Basics","Financial Systems Overview (USSGL)"],
    intermediate: ["Internal Controls & Auditing","Federal Financial Reporting","CFO Act Compliance Training"],
    advanced: ["Advanced Federal Financial Management","Financial Forensics & Fraud Detection","CPA Exam Prep (Government Track)"],
    mandatory: ["Anti-Fraud Awareness","Fiscal Law & Appropriations"],
    links: ["https://www.fasab.gov/","https://www.cfo.gov/"],
  },
  "0560": {
    foundational: ["Federal Budget Formulation","Appropriations Law Fundamentals","Budget Object Classification"],
    intermediate: ["Congressional Budget Justifications","MAX Federal Budget System","Spend Analysis & Forecasting"],
    advanced: ["Advanced Appropriations Law","Strategic Resource Management","OMB Circular Training"],
    mandatory: ["Fiscal Law Compliance","Anti-Deficiency Act Training"],
    links: ["https://www.whitehouse.gov/omb/"],
  },
  "1102": {
    foundational: ["FAR Fundamentals","Federal Procurement 101","FPDS Reporting Basics"],
    intermediate: ["Contract Administration","Source Selection & Evaluation","Price & Cost Analysis"],
    advanced: ["DAWIA Certification Level III","Complex Contract Negotiations","Senior Contracting Official Training"],
    mandatory: ["Procurement Integrity Act","Ethics in Contracting"],
    links: ["https://www.acquisition.gov/","https://www.dau.edu/"],
  },
  "2210": {
    foundational: ["Federal IT Security Basics (FISMA)","NIST Cybersecurity Framework","Government Cloud Computing"],
    intermediate: ["Risk Management Framework (RMF)","IT Project Management","Agile in Government"],
    advanced: ["CISSP / CISM Certification Prep","Zero Trust Architecture","Federal Enterprise Architecture"],
    mandatory: ["Annual Cybersecurity Awareness","Privacy & Section 508 Compliance"],
    links: ["https://www.cisa.gov/","https://csrc.nist.gov/"],
  },
  // ── Attorney / Legal ──────────────────────────────────────────
  "0905": {
    foundational: ["Federal Legal Research & Writing Fundamentals","Administrative Law Basics","Agency Rulemaking & Regulatory Process"],
    intermediate: ["Advanced Federal Litigation Practice","Regulatory Drafting & APA Compliance","Federal Ethics & Professional Responsibility"],
    advanced: ["Senior Agency Counsel Practicum","Congressional & Legislative Affairs for Attorneys","Supreme Court & Appellate Advocacy"],
    mandatory: ["Attorney Professional Responsibility (Bar CLE)","Cybersecurity & Privacy Law Awareness"],
    links: ["https://www.justice.gov/legal-careers","https://www.opm.gov/policy-data-oversight/training-and-development/"],
  },
  "0950": {
    foundational: ["Federal Paralegal Fundamentals","Legal Research Tools (Westlaw/LexisNexis)","Docket & Case Management"],
    intermediate: ["Federal Court Procedures & Filing","Regulatory & Administrative Law Support","FOIA Request Processing"],
    advanced: ["Senior Paralegal Leadership","Complex Litigation Support Management","e-Discovery & Legal Technology"],
    mandatory: ["Ethics in Federal Legal Practice","Cybersecurity Awareness"],
    links: ["https://www.justice.gov/","https://www.opm.gov/policy-data-oversight/training-and-development/"],
  },
  // ── Economist ────────────────────────────────────────────────
  "0110": {
    foundational: ["Federal Economic Analysis Fundamentals","Introduction to Regulatory Economics","Econometrics for Policy Analysts"],
    intermediate: ["Cost-Benefit Analysis in Federal Rulemaking","Applied Microeconomics for Government","Labor Market & Wage Analysis"],
    advanced: ["Advanced Regulatory Impact Analysis (RIA)","Macroeconomic Forecasting for Federal Agencies","Senior Economist Policy Briefing Skills"],
    mandatory: ["Research Integrity & Data Ethics","Cybersecurity Awareness"],
    links: ["https://www.bls.gov/","https://www.bea.gov/","https://www.cbo.gov/"],
  },
  // ── Intelligence ─────────────────────────────────────────────
  "0132": {
    foundational: ["Intelligence Community Orientation","Analytic Tradecraft Fundamentals","Structured Analytic Techniques (SATs)"],
    intermediate: ["Advanced All-Source Analysis","Intelligence Writing & Briefing","Collection Management Fundamentals"],
    advanced: ["Senior Intelligence Analyst Practicum","Strategic Intelligence Assessment","Intelligence Oversight & Legal Compliance"],
    mandatory: ["Security Awareness & Insider Threat","Annual Ethics Training"],
    links: ["https://www.dni.gov/","https://www.cia.gov/careers/"],
  },
  // ── Criminal Investigating / Special Agent ───────────────────
  "1811": {
    foundational: ["Federal Law Enforcement Orientation","Criminal Investigations Fundamentals","Interview & Interrogation Techniques"],
    intermediate: ["Advanced Criminal Investigations","Federal Rules of Evidence","Digital Forensics & Cybercrime Investigation"],
    advanced: ["Senior Special Agent Leadership","Complex Financial Crimes Investigation","Undercover Operations & Surveillance"],
    mandatory: ["Use of Force Policy","Annual Ethics & Conduct Training"],
    links: ["https://www.fbi.gov/","https://www.fletc.gov/"],
  },
  // ── Auditing ─────────────────────────────────────────────────
  "0511": {
    foundational: ["Federal Audit Fundamentals (GAGAS)","Government Auditing Standards (Yellow Book)","Internal Controls Basics (A-123)"],
    intermediate: ["Performance Auditing Methods","IT Audit Fundamentals (FISMA)","Federal Financial Statement Auditing"],
    advanced: ["Advanced Audit Leadership","Fraud Examination (CFE Prep)","Senior Auditor & Quality Control"],
    mandatory: ["Independence & Ethics in Federal Auditing","Cybersecurity Awareness"],
    links: ["https://www.gao.gov/","https://www.ignet.gov/","https://www.acfe.com/"],
  },
  // ── Foreign Affairs / International Relations ────────────────
  "0130": {
    foundational: ["U.S. Foreign Policy Fundamentals","Diplomatic Protocol & Tradecraft","Area Studies & Regional Analysis"],
    intermediate: ["Multilateral Diplomacy & Negotiation","Foreign Assistance Program Management","Political-Military Affairs"],
    advanced: ["Senior Foreign Affairs Officer Skills","Strategic International Engagement","Congressional Relations for Foreign Affairs"],
    mandatory: ["Security Overseas Seminar (SOS)","Annual Ethics Training"],
    links: ["https://www.state.gov/","https://www.usaid.gov/"],
  },
  "0131": {
    foundational: ["International Relations Frameworks","Treaty Law & International Agreements","Cross-Cultural Communication"],
    intermediate: ["Multilateral Institution Engagement (UN, NATO, WTO)","International Economic Policy","Conflict Resolution & Negotiation"],
    advanced: ["Senior International Policy Advisor Skills","Strategic Diplomacy & Statecraft","Global Security & Stability Analysis"],
    mandatory: ["Foreign Contact Reporting","Cybersecurity Awareness"],
    links: ["https://www.state.gov/","https://www.usaid.gov/"],
  },
  // ── Psychology ───────────────────────────────────────────────
  "0180": {
    foundational: ["Federal Psychology Practice Orientation","Psychological Assessment Fundamentals","Behavioral Health in Federal Settings"],
    intermediate: ["Clinical Supervision in Federal Agencies","Occupational Health Psychology","Organizational Behavior & Consulting"],
    advanced: ["Senior Federal Psychologist Advisory Role","Forensic Psychology in Federal Practice","Research Design for Federal Behavioral Programs"],
    mandatory: ["Ethics in Federal Psychology Practice","HIPAA & Privacy Training"],
    links: ["https://www.apa.org/","https://www.opm.gov/policy-data-oversight/training-and-development/"],
  },
  // ── Social Services / Social Work ────────────────────────────
  "0186": {
    foundational: ["Federal Social Services Program Overview","Case Management in Federal Agencies","Trauma-Informed Care Fundamentals"],
    intermediate: ["Advanced Case Management & Benefits Coordination","Social Determinants of Health in Federal Programs","Community Outreach & Engagement"],
    advanced: ["Senior Social Services Policy Advisor","Program Evaluation for Social Services","Federal Grant Management for Social Programs"],
    mandatory: ["Ethics in Social Work Practice","Cybersecurity & Privacy"],
    links: ["https://www.hhs.gov/","https://www.va.gov/"],
  },
  // ── Public Health ─────────────────────────────────────────────
  "0685": {
    foundational: ["Federal Public Health Program Fundamentals","Epidemiology Basics for Program Specialists","Health Equity & Social Determinants"],
    intermediate: ["Federal Emergency Preparedness & Response","Community Health Program Design","Health Data Analysis & Reporting"],
    advanced: ["Advanced Public Health Policy Analysis","Senior Public Health Advisor Skills","Global Health Security & Emergency Operations"],
    mandatory: ["HIPAA Privacy & Security","Annual Ethics Training"],
    links: ["https://www.cdc.gov/","https://www.hhs.gov/","https://www.phe.gov/"],
  },
  // ── Consumer Safety / Regulatory ─────────────────────────────
  "0696": {
    foundational: ["Federal Regulatory Framework Overview","Consumer Safety Inspection Fundamentals","Regulatory Compliance & Enforcement"],
    intermediate: ["Advanced Inspection & Investigation Techniques","Risk Assessment for Consumer Products","Federal Rulemaking & Standards Development"],
    advanced: ["Senior Regulatory Policy Advisor","Complex Enforcement Case Management","International Regulatory Harmonization"],
    mandatory: ["Ethics in Regulatory Practice","Cybersecurity Awareness"],
    links: ["https://www.fda.gov/","https://www.cpsc.gov/"],
  },
  // ── Statistics & Mathematics ──────────────────────────────────
  "1530": {
    foundational: ["Federal Statistical Systems Overview","Survey Design & Sampling Methods","Data Quality & Statistical Standards"],
    intermediate: ["Applied Regression & Multivariate Analysis","Federal Data Governance & Privacy","Statistical Programming (R, SAS, Python)"],
    advanced: ["Advanced Machine Learning for Federal Data","Senior Statistician Advisory Skills","Census & Survey Methodology (Advanced)"],
    mandatory: ["Statistical Confidentiality & Privacy","Research Integrity Training"],
    links: ["https://www.bls.gov/","https://www.census.gov/","https://www.fedstats.gov/"],
  },
  "1520": {
    foundational: ["Applied Mathematics in Government","Computational Methods for Policy Analysis","Mathematical Modeling Fundamentals"],
    intermediate: ["Operations Research & Optimization","Cryptography & Information Assurance Basics","Numerical Analysis for Federal Applications"],
    advanced: ["Advanced Operations Research","Senior Mathematical Analyst Advisory","AI & Algorithm Development for Federal Use"],
    mandatory: ["Research Ethics","Cybersecurity Awareness"],
    links: ["https://www.nist.gov/","https://www.nsf.gov/"],
  },
  // ── Physical Science / Chemistry / Physics ────────────────────
  "1301": {
    foundational: ["Federal Research & Laboratory Safety","Scientific Writing & Peer Review","Technology Transfer & Intellectual Property"],
    intermediate: ["Federal R&D Program Management","Grant Writing & Management (Federal Funded Research)","Cross-Agency Science Collaboration"],
    advanced: ["Senior Physical Scientist Advisory Role","National Lab & Academic Partnership Management","Science Policy Analysis & Congressional Engagement"],
    mandatory: ["Laboratory Safety & Hazardous Materials","Research Integrity & Misconduct Prevention"],
    links: ["https://www.science.gov/","https://www.nist.gov/","https://www.energy.gov/"],
  },
  "1320": {
    foundational: ["Federal Chemistry Laboratory Standards","Chemical Safety & Hazardous Materials Handling","Analytical Chemistry Methods for Government"],
    intermediate: ["Environmental Chemistry & Regulatory Compliance","Forensic Chemistry Applications","Quality Assurance in Federal Laboratories"],
    advanced: ["Senior Chemist Policy Advisory","Advanced Materials & Nanotechnology Policy","Senior Laboratory Director Preparation"],
    mandatory: ["Chemical Hygiene & Safety","Research Integrity Training"],
    links: ["https://www.epa.gov/","https://www.nist.gov/"],
  },
  // ── Environmental Science / Natural Resources ─────────────────
  "0401": {
    foundational: ["Federal Environmental Law Overview (NEPA, ESA, CWA)","Natural Resource Assessment Methods","GIS Fundamentals for Natural Resources"],
    intermediate: ["Environmental Impact Assessment","Federal Lands Management","Climate Adaptation Planning for Federal Programs"],
    advanced: ["Senior Natural Resources Policy Advisor","Advanced Environmental Program Management","Intergovernmental Natural Resources Coordination"],
    mandatory: ["Environmental Ethics & Compliance","Cybersecurity Awareness"],
    links: ["https://www.doi.gov/","https://www.epa.gov/","https://www.fs.usda.gov/"],
  },
  "0460": {
    foundational: ["Federal Forestry Program Overview","Timber Sales & Forest Products Management","Fire Ecology & Wildland Fire Fundamentals"],
    intermediate: ["Forest Management Planning","Watershed & Ecosystem Management","Urban Forestry & Community Programs"],
    advanced: ["Senior Forestry Policy Advisor","Climate Change & Forest Resilience Planning","National Forest System Program Leadership"],
    mandatory: ["Wildland Fire Safety","Annual Ethics Training"],
    links: ["https://www.fs.usda.gov/","https://www.doi.gov/"],
  },
  // ── Transportation & Aviation ─────────────────────────────────
  "2183": {
    foundational: ["Air Traffic Control Fundamentals","FAA Regulations & Procedures Overview","Aviation Safety Management Systems"],
    intermediate: ["Advanced ATC Separation Standards","NextGen Air Traffic Management","ATC Supervisor Readiness"],
    advanced: ["ATC Facility Manager Leadership","National Airspace System Policy","Aviation Workforce Planning & Development"],
    mandatory: ["FAA Safety Stand-Down Training","Annual Ethics & Conduct Training"],
    links: ["https://www.faa.gov/","https://www.transportation.gov/"],
  },
  "2101": {
    foundational: ["Federal Transportation Policy Overview","Multimodal Transportation Basics","Transportation Planning Fundamentals"],
    intermediate: ["Infrastructure Project Management","Transportation Safety Analysis","Federal Grant Administration for Transportation"],
    advanced: ["Senior Transportation Policy Advisor","National Transportation Strategy Development","Intermodal & Supply Chain Policy"],
    mandatory: ["Transportation Security Awareness","Annual Ethics Training"],
    links: ["https://www.transportation.gov/","https://www.fhwa.dot.gov/"],
  },
  // ── Education & Training ─────────────────────────────────────
  "1701": {
    foundational: ["Federal Education Program Fundamentals","Adult Learning Theory & Instructional Design","Title I & Federal Education Grant Basics"],
    intermediate: ["Curriculum Development for Federal Programs","Education Data Analysis & Accountability","Program Evaluation for Education Initiatives"],
    advanced: ["Senior Education Policy Advisor","Federal-State Education Partnership Management","Education Technology Strategy & Policy"],
    mandatory: ["FERPA & Student Privacy","Annual Ethics Training"],
    links: ["https://www.ed.gov/","https://www.ies.ed.gov/"],
  },
  "1750": {
    foundational: ["Instructional Systems Design (ISD) Fundamentals","ADDIE & SAM Models for Federal Training","Learning Management System (LMS) Administration"],
    intermediate: ["e-Learning Development for Federal Agencies","Section 508 Accessibility in Training","Measuring Training Effectiveness (Kirkpatrick Model)"],
    advanced: ["Senior Instructional Systems Designer Advisory","AI & Adaptive Learning for Federal Workforce","Enterprise Learning Strategy Development"],
    mandatory: ["Section 508 Compliance","Annual Ethics Training"],
    links: ["https://www.opm.gov/policy-data-oversight/training-and-development/","https://www.atd.org/"],
  },
  // ── Librarian / Archivist ────────────────────────────────────
  "1410": {
    foundational: ["Federal Library Services Overview","Cataloging & Metadata Standards","Government Information Resources & Access"],
    intermediate: ["Digital Library & Repository Management","Research Support for Federal Agencies","Records & Information Lifecycle Management"],
    advanced: ["Senior Federal Librarian Advisory","National Archives & Federal Library Coordination","Open Data & Information Policy"],
    mandatory: ["Copyright & Intellectual Property in Federal Libraries","Cybersecurity Awareness"],
    links: ["https://www.loc.gov/","https://www.gpo.gov/","https://www.archives.gov/"],
  },
  "1420": {
    foundational: ["Federal Archives & Records Management Overview","NARA Standards & Records Schedules","Archival Description & Finding Aids"],
    intermediate: ["Digital Archives & Electronic Records Management","FOIA & Access to Federal Records","Preservation Planning for Federal Collections"],
    advanced: ["Senior Archivist Advisory Role","National Archives Program Leadership","Federal Records Policy Development"],
    mandatory: ["Federal Records Act Compliance","Cybersecurity & Data Security"],
    links: ["https://www.archives.gov/","https://www.nara.gov/"],
  },
  // ── Writing, Editing & Communications ───────────────────────
  "1082": {
    foundational: ["Federal Plain Language Writing Standards","Government Communications Fundamentals","AP Style & Federal Writing Conventions"],
    intermediate: ["Strategic Communications for Federal Programs","Digital & Social Media Communications","Crisis Communications in Government"],
    advanced: ["Senior Federal Communications Advisor","Congressional & Media Relations Strategy","Executive Speechwriting & Messaging"],
    mandatory: ["Hatch Act & Political Activity Rules","Ethics in Federal Communications"],
    links: ["https://www.plainlanguage.gov/","https://digital.gov/"],
  },
  "1083": {
    foundational: ["Technical Writing Standards for Federal Documents","Section 508 Accessible Document Design","Plain Language for Technical Audiences"],
    intermediate: ["Regulatory & Policy Document Writing","Technical Manual & SOP Development","Federal Publishing & Distribution Standards"],
    advanced: ["Senior Technical Writer/Editor Advisory","Enterprise Content Strategy for Federal Agencies","Advanced Editing for Complex Regulatory Documents"],
    mandatory: ["Section 508 Compliance","Annual Ethics Training"],
    links: ["https://www.plainlanguage.gov/","https://www.gpo.gov/"],
  },
  // ── Public Affairs ────────────────────────────────────────────
  "1035": {
    foundational: ["Federal Communications 101","Media Relations Basics for Federal Employees","Plain Language Writing for Public Affairs"],
    intermediate: ["Digital Communications & Social Media Strategy","Crisis Communications in Government","FOIA & Public Access to Information"],
    advanced: ["Senior Communications Executive Program","Strategic Public Affairs & Congressional Relations","Executive Messaging & Speechwriting"],
    mandatory: ["Hatch Act & Political Activity Rules","Ethics in Federal Communications"],
    links: ["https://www.plainlanguage.gov/","https://digital.gov/"],
  },
  // ── Financial Analysis ────────────────────────────────────────
  "1160": {
    foundational: ["Federal Financial Analysis Fundamentals","Securities Law & Regulatory Framework Basics","Capital Markets Overview for Federal Analysts"],
    intermediate: ["Advanced Financial Modeling for Regulators","Risk Assessment in Federal Financial Oversight","Anti-Money Laundering (AML) & Financial Crimes"],
    advanced: ["Senior Financial Analyst Advisory","Systemic Risk & Macroprudential Analysis","Congressional Testimony & Regulatory Rulemaking"],
    mandatory: ["Financial Conflicts of Interest","Annual Ethics Training"],
    links: ["https://www.sec.gov/","https://www.federalreserve.gov/","https://www.treasury.gov/"],
  },
  // ── Loan Specialist ──────────────────────────────────────────
  "1165": {
    foundational: ["Federal Lending Programs Overview","Credit Analysis Fundamentals","Small Business Administration (SBA) Loan Programs"],
    intermediate: ["Advanced Credit Risk & Underwriting","Portfolio Management for Federal Loan Programs","Loan Servicing & Default Management"],
    advanced: ["Senior Loan Policy Advisor","Federal Housing & Community Development Finance","Complex Portfolio Risk Management"],
    mandatory: ["Ethics in Federal Lending","Fair Lending & Equal Credit Opportunity Act"],
    links: ["https://www.sba.gov/","https://www.hud.gov/","https://www.usda.gov/"],
  },
  // ── Internal Revenue / Tax ───────────────────────────────────
  "1169": {
    foundational: ["Internal Revenue Code Fundamentals","Federal Tax Administration & IRS Structure","Taxpayer Rights & Taxpayer Advocate Service"],
    intermediate: ["Advanced Tax Examination Techniques","International Tax Compliance","Employment Tax & Payroll Compliance"],
    advanced: ["Senior Revenue Officer Leadership","Complex Tax Litigation Support","IRS Large Business & International (LB&I) Techniques"],
    mandatory: ["Taxpayer Privacy (IRC 6103)","Annual Ethics & Integrity Training"],
    links: ["https://www.irs.gov/","https://www.treasury.gov/"],
  },
  // ── Default fallback ─────────────────────────────────────────
  "default": {
    foundational: ["New Employee Orientation","Federal Employee Benefits Overview","Introduction to Government Ethics"],
    intermediate: ["Leadership for Non-Supervisors","Project Management Basics","Federal Communications & Writing"],
    advanced: ["Senior Leader Development Program","Executive Core Qualifications (ECQs)","Strategic Planning in Government"],
    mandatory: ["Annual Ethics Training","Cybersecurity Awareness","No FEAR Act Training"],
    links: ["https://www.opm.gov/policy-data-oversight/training-and-development/"],
  },
};

// ─── INTERNAL PROGRAMS ──────────────────────────────────────────────────────
const INTERNAL_PROGRAMS = [
  {
    id: "dcelp", name: "DCELP", fullName: "Defense Civilian Emerging Leader Program",
    grades: ["GS-7","GS-8","GS-9","GS-10","GS-11","GS-12"], gradeLabel: "GS-7 to GS-12",
    badge: "🌱", color: "#22C55E",
    description: "Develops next-generation DoD civilian leaders through four week-long in-residence seminars at NCED in Norman, OK. Focuses on self-awareness, team building, communication, conflict resolution, and non-supervisory leadership.",
    format: "4 week-long in-residence seminars + online pre-work", duration: "~10 weeks",
    cost: "DoD-funded — tuition, TDY travel & lodging covered. Agency pays salary only.",
    outcome: "OPM LEAD Certificate + DCELP Certificate of Completion",
    topicsArr: ["Leadership Assessment","Team Development","Effective Federal Writing","Conflict Resolution","Leading Self & Leading Teams"],
    eligible: "DoD civilian GS-7–12; interagency partners may also apply",
    url: "https://www.dcpas.osd.mil/learning/civilianleaderdevelopment/defensecivilianemerging", agency: "DoD / DCPAS",
  },
  {
    id: "lead", name: "OPM LEAD", fullName: "OPM Leadership Education & Development Certificate",
    grades: ["GS-7","GS-8","GS-9","GS-10","GS-11","GS-12"], gradeLabel: "GS-7 to GS-12",
    badge: "📜", color: "#06B6D4",
    description: "OPM's foundational leadership certification for non-supervisory emerging leaders across the entire federal government. Often awarded alongside DCELP completion.",
    format: "Delivered through approved agency leadership programs", duration: "Varies",
    cost: "Typically agency-funded",
    outcome: "OPM LEAD Certificate of Completion",
    topicsArr: ["Leading Self","Interpersonal Skills","Oral & Written Communication","Team Dynamics","Problem Solving"],
    eligible: "Federal civilian employees GS-7–12 governmentwide",
    url: "https://www.opm.gov/policy-data-oversight/training-and-development/", agency: "OPM (Governmentwide)",
  },
  {
    id: "eldp", name: "ELDP", fullName: "Executive Leadership Development Program",
    grades: ["GS-12","GS-13","GS-14"], gradeLabel: "GS-12 to GS-14",
    badge: "⚡", color: "#F59E0B",
    description: "Established in 1985 by the Secretary of Defense. A 10-month experiential program for ~64 DoD future leaders per year. Participants travel to military installations worldwide engaging with Warfighters and senior leaders.",
    format: "10-month program with travel to domestic and international military installations", duration: "10 months",
    cost: "~$14,245 tuition (agency-funded via IASA) + TDY travel & per diem",
    outcome: "ELDP Certificate; strong competitive edge for GS-14/15 and SES positions",
    topicsArr: ["Self-Awareness & Identity","Leading Teams & Organizations","Global DoD Perspective","Warfighter Mission Understanding","Vertical Leadership Development"],
    eligible: "DoD civilian GS-12–14 with demonstrated leadership potential; nominated by component",
    url: "https://www.dcpas.osd.mil/learning/civilianleaderdevelopment/executiveleadership", agency: "DoD / DCPAS",
  },
  {
    id: "dsldp", name: "DSLDP", fullName: "Defense Senior Leader Development Program",
    grades: ["GS-14","GS-15"], gradeLabel: "GS-14 to GS-15",
    badge: "🏛️", color: "#8B5CF6",
    description: "The pinnacle of the DoD civilian leadership continuum. ~28-month program including a Senior Service College master's degree plus enterprise-wide developmental assignments.",
    format: "~28 months: Senior Service College + broadening assignments + executive coaching", duration: "~28 months",
    cost: "DoD-funded throughout; valid passport required",
    outcome: "JPME completion; master's degree; SES-ready",
    topicsArr: ["National Security Strategy","Joint & Interagency Operations","Senior Executive Competencies","Enterprise Leadership","Lead Organizations & Programs"],
    eligible: "DoD civilian GS-14–15 with ≥1 year managerial experience and SES potential",
    url: "https://www.dcpas.osd.mil/learning/civilianleaderdevelopment/defenseseniornleader", agency: "DoD / DCPAS",
  },
  {
    id: "whldp", name: "WHLDP", fullName: "White House Leadership Development Program",
    grades: ["GS-15"], gradeLabel: "GS-15 (high-potential)",
    badge: "🇺🇸", color: "#EF4444",
    description: "A highly selective one-year program sponsored by the Executive Office of the President. Cross-agency rotational assignments with direct exposure to White House and Cabinet-level leadership.",
    format: "1-year cross-agency rotational assignments", duration: "1 year",
    cost: "Federally funded", outcome: "Cross-agency executive network; strong path to SES",
    topicsArr: ["Cross-Agency Collaboration","Executive Branch Operations","Presidential Priority Initiatives","Policy Development","Senior Executive Readiness"],
    eligible: "High-potential GS-15 civilians nominated by agency leadership",
    url: "https://www.whitehouse.gov/", agency: "Executive Office of the President",
  },
  {
    id: "opm-edp", name: "OPM EDP", fullName: "OPM Executive Development Programs",
    grades: ["GS-14","GS-15","SES"], gradeLabel: "GS-14, GS-15, SES",
    badge: "📋", color: "#0EA5E9",
    description: "Launched in 2025, replacing the former Federal Executive Institute. Two tracks: aspirational leader (GS-14/15) and SES development. Grounded in constitutional principles and administration priorities.",
    format: "In-person or virtual sessions; two-track program", duration: "Varies by track",
    cost: "$1,500 (aspirational leader) or $8,500 (SES track); SF-182 accepted",
    outcome: "OPM Leadership Certificate; ECQ development; SES readiness",
    topicsArr: ["Constitutional Foundations","Government Efficiency","Merit & Accountability","Executive Core Qualifications (ECQs)","Delivering Results for the Public"],
    eligible: "GS-14, GS-15, and SES members governmentwide",
    url: "https://www.opm.gov/EDP", agency: "OPM",
  },
];

// ─── EXTERNAL PROGRAMS ──────────────────────────────────────────────────────
const EXTERNAL_PROGRAMS = [
  {
    id: "eig", name: "EIG Fellows", fullName: "Excellence in Government Fellows Program",
    grades: ["GS-13","GS-14","GS-15"], gradeLabel: "GS-13 to GS-15 (GS-14/15 primary)",
    badge: "🌟", color: "#F472B6", org: "Partnership for Public Service",
    description: "The premier external leadership development program for federal leaders — over 30 years of history. Year-long cohort experience with six multi-day sessions, 360 assessment, two 1:1 executive coaching sessions, and a results project. Certifies 349 learning hours.",
    format: "6 multi-day sessions (in-person DC or virtual) + coaching + results project", duration: "12 months",
    cost: "$12,900 — includes all materials, coaching, assessments; SF-182 accepted",
    outcome: "EIG Certificate (349 learning hours); ECQ-aligned; strong SES preparation",
    topicsArr: ["Stewardship & Public Trust","Self-Awareness","Driving Innovation","Inspiring Others","Achieving Mission Results","Governmentwide Networking"],
    eligible: "GS-14–15 primary (high-performing GS-13s encouraged); supervisor reference required",
    url: "https://ourpublicservice.org/course/excellence-in-government-fellows-program/",
    sf182: true, ecqAligned: true,
  },
  {
    id: "foundations-pps", name: "Foundations in Public Service Leadership", fullName: "Foundations in Public Service Leadership Program",
    grades: ["GS-12","GS-13"], gradeLabel: "GS-12 to GS-13",
    badge: "🔨", color: "#A78BFA", org: "Partnership for Public Service",
    description: "A mid-level leadership program for team leaders, new supervisors, project leads, and technical experts. Builds foundational skills — communication, influencing without authority, leading teams, and driving change.",
    format: "Multi-session virtual program", duration: "Several months",
    cost: "Contact Partnership for current tuition; SF-182 accepted",
    outcome: "Certificate of Completion; leadership skills for supervisory readiness",
    topicsArr: ["Adaptive Leadership Style","Communication & Influence","Leading Teams","Driving Change","Personal Accountability"],
    eligible: "GS-12–13 team leaders, new supervisors, project leaders, technical experts",
    url: "https://ourpublicservice.org/course/foundations-in-public-service-leadership-program/",
    sf182: true, ecqAligned: false,
  },
  {
    id: "leap", name: "LEAP", fullName: "Leadership Excellence for Acquisition Professionals",
    grades: ["GS-12","GS-13","GS-14"], gradeLabel: "GS-12 to GS-14 (Contracting/Acquisition)",
    badge: "📦", color: "#FB923C", org: "Partnership for Public Service",
    description: "7-month leadership program for federal acquisition professionals. Five three-day virtual sessions plus a capstone project addressing a real acquisition challenge. Developed with the Federal Acquisition Institute (FAI).",
    format: "5 three-day virtual sessions + capstone project over 7 months", duration: "7 months",
    cost: "$6,999; SF-182 accepted",
    outcome: "LEAP Certificate; FAI leadership recognition",
    topicsArr: ["Acquisition Leadership","Business Acumen","Strategic Thinking","Team Collaboration","Capstone Project"],
    eligible: "Federal acquisition professionals GS-12–14 with ≥3–5 years contracting experience",
    url: "https://ourpublicservice.org/course/leadership-excellence-for-acquisition-professionals/",
    sf182: true, ecqAligned: false,
  },
  {
    id: "hks-sef", name: "HKS Senior Executive Fellows", fullName: "Senior Executive Fellows Program",
    grades: ["GS-14","GS-15","SES"], gradeLabel: "GS-14, GS-15, SES",
    badge: "🎓", color: "#991B1B", org: "Harvard Kennedy School",
    description: "Intensive four-week on-campus program at Harvard. Cohorts are 70–80% U.S. federal government and military. Fully aligns with OPM's Executive Core Qualifications. Includes housing and most meals.",
    format: "4 weeks in-person at Harvard (Cambridge, MA)", duration: "4 weeks",
    cost: "Fee covers tuition, housing, materials, most meals; contact HKS for current rate",
    outcome: "HKS Executive Certificate credit; ECQ-aligned; SES readiness",
    topicsArr: ["Strategic Problem-Solving","Coalition Building","Political Navigation","Organizational Change","Policy Design","Executive Core Qualifications"],
    eligible: "GS-14/15 and SES federal employees",
    url: "https://www.hks.harvard.edu/educational-programs/executive-education/senior-executive-fellows",
    sf182: true, ecqAligned: true,
  },
  {
    id: "hks-elg", name: "HKS Executive Leaders in Gov", fullName: "Executive Leaders in Government Program",
    grades: ["GS-14","GS-15","SES"], gradeLabel: "GS-15, SES, Senior Career Officials",
    badge: "🏫", color: "#B45309", org: "Harvard Kennedy School",
    description: "Two-week on-campus immersive program for senior career officials. Uses Harvard's case study method. Covers political navigation, coalition building, high-stakes negotiation, inclusive people strategies, and emerging technology.",
    format: "2 weeks in-person at Harvard (Cambridge, MA)", duration: "2 weeks",
    cost: "Fee covers tuition, housing, materials, most meals; contact HKS for current rate",
    outcome: "HKS Executive Certificate credit; ECQ-aligned; senior leadership network",
    topicsArr: ["Political Navigation","Coalition Building","Policy Design","High-Stakes Negotiation","People Strategy","AI & Emerging Technology"],
    eligible: "Senior career federal officials, SES, and equivalent executive-level leaders",
    url: "https://www.hks.harvard.edu/educational-programs/executive-education/executive-leaders-government",
    sf182: true, ecqAligned: true,
  },
  {
    id: "ccl", name: "CCL Government Programs", fullName: "Center for Creative Leadership — Government Programs",
    grades: ["GS-9","GS-10","GS-11","GS-12","GS-13","GS-14","GS-15","SES"], gradeLabel: "GS-9 to SES",
    badge: "💡", color: "#059669", org: "Center for Creative Leadership (CCL)",
    description: "Pre-qualified GSA Schedule vendor with 50+ years of government leadership training. Hundreds of federal leaders attend annually. Scalable 1–5 day programs — in-person, virtual, or hybrid. Fixed GSA pricing.",
    format: "1-to-5-day programs; custom agency programs available", duration: "Varies",
    cost: "Fixed GSA Schedule pricing; SF-182 or purchase order accepted",
    outcome: "CCL Certificate; competency development aligned to agency needs",
    topicsArr: ["Leadership Foundations","Leading Teams","Leading Change","Frontline Leadership","Executive Presence","360 Assessment & Feedback"],
    eligible: "Federal employees GS-9 and above at all levels",
    url: "https://www.ccl.org/industries-sectors/government-leadership/",
    sf182: true, ecqAligned: false,
  },
];

const GRADE_TIERS = {
  entry:   ["GS-1","GS-2","GS-3","GS-4","GS-5","GS-6","GS-7","WG-1","WG-2","WG-3","WG-4","WG-5"],
  journey: ["GS-8","GS-9","GS-10","GS-11","GS-12","WG-6","WG-7","WG-8","WG-9","WG-10"],
  senior:  ["GS-13","GS-14","GS-15","WG-11","WG-12","WG-13","WG-14","WG-15","SES"],
};

function getGradeTier(g) {
  if (GRADE_TIERS.senior.includes(g)) return "senior";
  if (GRADE_TIERS.journey.includes(g)) return "journey";
  return "entry";
}
function getEligible(list, grade) { return list.filter(p => p.grades.includes(grade)); }

function getRecommended(seriesCode, grade, isSupervisor) {
  const tier = getGradeTier(grade);
  const isNonSupSenior = !isSupervisor && NONSUPERVISORY_SENIOR_GRADES.includes(grade);

  if (isNonSupSenior) {
    const nsData = NONSUPERVISORY_TRACKS[seriesCode] || NONSUPERVISORY_TRACKS["default"];
    const courses = [
      ...nsData.sme,
      ...nsData.technical,
      ...nsData.influence,
      ...nsData.mandatory,
    ];
    const supData = TRAINING_DATABASE[seriesCode] || TRAINING_DATABASE["default"];
    return { courses, links: supData.links, tier, isNonSupSenior: true };
  }

  const data = TRAINING_DATABASE[seriesCode] || TRAINING_DATABASE["default"];
  let courses = tier === "entry"
    ? [...data.foundational, ...data.mandatory]
    : tier === "journey"
    ? [...data.foundational.slice(0,1), ...data.intermediate, ...data.mandatory]
    : [...data.intermediate.slice(0,1), ...data.advanced, ...data.mandatory];
  return { courses, links: data.links, tier, isNonSupSenior: false };
}

const tierLabels = { entry: "Entry Level", journey: "Journey Level", senior: "Senior / Leadership" };
const tierMeta = {
  entry:   { color: "#3B82F6", bg: "rgba(59,130,246,0.1)",  border: "rgba(59,130,246,0.35)" },
  journey: { color: "#22C55E", bg: "rgba(34,197,94,0.1)",   border: "rgba(34,197,94,0.35)"  },
  senior:  { color: "#F97316", bg: "rgba(249,115,22,0.1)",  border: "rgba(249,115,22,0.35)" },
};

const NONSUP_SECTION_LABELS = {
  sme:       { label: "Subject Matter Expert / Advisory", icon: "🧠", color: "#A78BFA" },
  technical: { label: "Technical & Functional Depth",     icon: "⚙️", color: "#38BDF8" },
  influence: { label: "Influence, Communication & Impact",icon: "💬", color: "#34D399" },
  mandatory: { label: "Mandatory Annual Requirements",    icon: "⚠️", color: "#EF4444" },
};

const TABS = ["Training Courses","Gov't Programs","External Programs"];

// ─── PROGRAM CARD ───────────────────────────────────────────────────────────
function ProgramCard({ prog, expandedId, setExpanded, isExternal }) {
  const isOpen = expandedId === prog.id;
  const c = prog.color;
  return (
    <div style={{ background:"rgba(255,255,255,0.04)", border:`1px solid ${c}28`, borderLeft:`4px solid ${c}`, borderRadius:9, overflow:"hidden" }}>
      <div onClick={() => setExpanded(isOpen ? null : prog.id)}
        style={{ padding:"14px 16px", cursor:"pointer", display:"flex", alignItems:"flex-start", gap:12 }}>
        <div style={{ width:38, height:38, borderRadius:7, flexShrink:0, background:c+"15", border:`1px solid ${c}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }}>{prog.badge}</div>
        <div style={{ flex:1 }}>
          <div style={{ display:"flex", alignItems:"center", gap:7, flexWrap:"wrap", marginBottom:2 }}>
            <span style={{ fontSize:14, color:"#f5edd8", fontWeight:"bold" }}>{prog.name}</span>
            <span style={{ fontSize:10, color:c, letterSpacing:1, textTransform:"uppercase", background:c+"15", border:`1px solid ${c}30`, borderRadius:10, padding:"2px 8px" }}>{isExternal ? prog.org : prog.agency}</span>
            <span style={{ fontSize:10, color:"#6a6250" }}>{prog.gradeLabel}</span>
          </div>
          <div style={{ fontSize:12, color:"#9a8f78", lineHeight:1.3 }}>{prog.fullName}</div>
          {isExternal && (
            <div style={{ display:"flex", gap:5, marginTop:5, flexWrap:"wrap" }}>
              {prog.sf182 && <span style={{ fontSize:10, background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.3)", borderRadius:4, padding:"1px 6px", color:"#22C55E" }}>✓ SF-182 Accepted</span>}
              {prog.ecqAligned && <span style={{ fontSize:10, background:"rgba(234,179,8,0.1)", border:"1px solid rgba(234,179,8,0.3)", borderRadius:4, padding:"1px 6px", color:"#EAB308" }}>✓ ECQ-Aligned</span>}
            </div>
          )}
        </div>
        <span style={{ color:"#6a6250", fontSize:13, flexShrink:0 }}>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div style={{ borderTop:`1px solid ${c}18`, padding:"16px 16px 18px", animation:"fadeIn 0.2s ease" }}>
          <p style={{ margin:"0 0 14px", fontSize:13, color:"#c8bfad", lineHeight:1.75 }}>{prog.description}</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:13 }}>
            {[{label:"Format",value:prog.format},{label:"Duration",value:prog.duration},{label:"Cost / Tuition",value:prog.cost},{label:"Outcome",value:prog.outcome}].map(item => (
              <div key={item.label} style={{ background:"rgba(255,255,255,0.04)", borderRadius:6, padding:"8px 10px" }}>
                <div style={{ fontSize:9, color:c, letterSpacing:2, textTransform:"uppercase", marginBottom:3 }}>{item.label}</div>
                <div style={{ fontSize:11, color:"#d4c9b0", lineHeight:1.4 }}>{item.value}</div>
              </div>
            ))}
          </div>
          <div style={{ marginBottom:12 }}>
            <div style={{ fontSize:9, letterSpacing:2, color:"#c9a84c", textTransform:"uppercase", marginBottom:7 }}>Core Topics</div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
              {prog.topicsArr.map(t => <span key={t} style={{ fontSize:11, color:"#b0a890", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:5, padding:"3px 8px" }}>{t}</span>)}
            </div>
          </div>
          <div style={{ marginBottom:13 }}>
            <div style={{ fontSize:9, letterSpacing:2, color:"#c9a84c", textTransform:"uppercase", marginBottom:4 }}>Eligibility</div>
            <div style={{ fontSize:12, color:"#9a8f78" }}>{prog.eligible}</div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 12px", background:c+"10", border:`1px solid ${c}30`, borderRadius:6 }}>
            <span style={{ fontSize:13 }}>🔗</span>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:12, color:c, fontWeight:"bold" }}>Official Program Page</div>
              <div style={{ fontSize:10, color:"#6a6250", marginTop:1, wordBreak:"break-all" }}>{prog.url}</div>
            </div>
            <button onClick={() => navigator.clipboard.writeText(prog.url)} style={{ padding:"4px 10px", background:c+"18", border:`1px solid ${c}40`, borderRadius:5, color:c, fontSize:10, cursor:"pointer", whiteSpace:"nowrap" }}>Copy URL</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── MAIN APP ───────────────────────────────────────────────────────────────
export default function FederalTrainingLookup() {
  const [series, setSeries]               = useState("");
  const [grade, setGrade]                 = useState("");
  const [isSupervisor, setIsSupervisor]   = useState(null); // null = not yet asked
  const [results, setResults]             = useState(null);
  const [searched, setSearched]           = useState(false);
  const [loading, setLoading]             = useState(false);
  const [activeTab, setActiveTab]         = useState(0);
  const [expandedInt, setExpandedInt]     = useState(null);
  const [expandedExt, setExpandedExt]     = useState(null);
  const [aiMode, setAiMode]               = useState(false);
  const [aiResult, setAiResult]           = useState("");
  const [aiLoading, setAiLoading]         = useState(false);
  const [nsSection, setNsSection]         = useState("sme");

  const showRoleToggle = NONSUPERVISORY_SENIOR_GRADES.includes(grade);
  const readyToSearch = series && grade && (!showRoleToggle || isSupervisor !== null);

  const handleSearch = () => {
    if (!readyToSearch) return;
    setLoading(true);
    setTimeout(() => {
      const seriesObj = JOB_SERIES.find(j => j.code === series);
      const sup = showRoleToggle ? isSupervisor : true;
      const { courses, links, tier, isNonSupSenior } = getRecommended(series, grade, sup);
      const internalPrograms = getEligible(INTERNAL_PROGRAMS, grade);
      const externalPrograms = getEligible(EXTERNAL_PROGRAMS, grade);
      setResults({ seriesObj, grade, courses, links, tier, internalPrograms, externalPrograms, isNonSupSenior, isSupervisor: sup });
      setSearched(true); setLoading(false); setAiResult(""); setActiveTab(0);
      setExpandedInt(null); setExpandedExt(null); setNsSection("sme");
    }, 480);
  };

  const handleGradeChange = (g) => {
    setGrade(g);
    setIsSupervisor(null);
    setResults(null);
    setSearched(false);
  };

  const handleAiExpand = async () => {
    if (!results) return;
    setAiLoading(true); setAiMode(true);
    try {
      const roleLabel = results.isNonSupSenior ? "non-supervisory senior individual contributor (SME/expert)" : "supervisor/manager";
      const intl = results.internalPrograms.map(p => p.name).join(", ") || "none";
      const ext  = results.externalPrograms.map(p => p.name).join(", ") || "none";
      const prompt = `You are a federal career development advisor. An employee is in the ${results.seriesObj?.title || "General"} series (${series}) at ${results.grade} as a ${roleLabel}.

Available government programs: ${intl}
Available external programs: ${ext}

Write a focused 12-month development plan:
1. Top program to pursue and why (government or external, appropriate for their role)
2. Top 2 technical or functional training courses specific to their series and role type
3. One certification target with a timeline
4. One career action (detail, IDP goal, mentorship, professional network)
5. For non-supervisors: one recommendation to build influence and visibility without a supervisory title

Be specific to the federal government. Plain language. Under 320 words.`;

      const resp = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:1000, messages:[{ role:"user", content:prompt }] }),
      });
      const data = await resp.json();
      setAiResult(data.content?.map(b => b.text || "").join("") || "Unable to generate plan.");
    } catch { setAiResult("Error generating recommendations. Please try again."); }
    setAiLoading(false);
  };

  const tm = results ? tierMeta[results.tier] : tierMeta.entry;
  const nsData = results?.isNonSupSenior ? (NONSUPERVISORY_TRACKS[series] || NONSUPERVISORY_TRACKS["default"]) : null;

  // Split courses into sections for non-supervisory view
  const nsSections = nsData ? [
    { key: "sme",       items: nsData.sme },
    { key: "technical", items: nsData.technical },
    { key: "influence", items: nsData.influence },
    { key: "mandatory", items: nsData.mandatory },
  ] : [];

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#0b1a2e 0%,#13294b 60%,#0d1f38 100%)", fontFamily:"'Georgia','Times New Roman',serif", color:"#e8dcc8" }}>
      {/* Header */}
      <div style={{ background:"rgba(255,255,255,0.03)", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"18px 32px", display:"flex", alignItems:"center", gap:14 }}>
        <div style={{ width:42, height:42, borderRadius:"50%", background:"linear-gradient(135deg,#c9a84c,#e8c96a)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>🦅</div>
        <div>
          <div style={{ fontSize:10, letterSpacing:4, color:"#c9a84c", textTransform:"uppercase" }}>U.S. Federal Government</div>
          <div style={{ fontSize:17, fontWeight:"bold", color:"#f5edd8" }}>Employee Training & Leadership Finder</div>
        </div>
      </div>

      <div style={{ maxWidth:840, margin:"0 auto", padding:"26px 18px" }}>

        {/* Search Card */}
        <div style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(201,168,76,0.22)", borderRadius:12, padding:"24px", marginBottom:24 }}>
          <h2 style={{ margin:"0 0 5px", fontSize:16, color:"#f5edd8", fontWeight:"normal" }}>Find Your Training & Leadership Opportunities</h2>
          <p style={{ margin:"0 0 20px", fontSize:13, color:"#9a8f78", lineHeight:1.5 }}>
            Covers supervisory and non-supervisory tracks for all grades — including GS-13 through GS-15 individual contributors common in the DC area.
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
            {[
              { label:"Job Series", val:series, setter:setSeries, ph:"— Select Series —", opts:JOB_SERIES.map(j=>({v:j.code,l:`${j.code} – ${j.title}`})) },
              { label:"Pay Grade",  val:grade,  setter:handleGradeChange, ph:"— Select Grade —",  opts:PAY_GRADES.map(g=>({v:g,l:g})) },
            ].map(f => (
              <div key={f.label}>
                <label style={{ display:"block", fontSize:10, letterSpacing:3, color:"#c9a84c", textTransform:"uppercase", marginBottom:6 }}>{f.label}</label>
                <select value={f.val} onChange={e => f.setter(e.target.value)} style={{ width:"100%", padding:"10px 12px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:7, color:f.val?"#f5edd8":"#9a8f78", fontSize:13, outline:"none", cursor:"pointer", boxSizing:"border-box" }}>
                  <option value="">{f.ph}</option>
                  {f.opts.map(o => <option key={o.v} value={o.v} style={{ background:"#13294b" }}>{o.l}</option>)}
                </select>
              </div>
            ))}
          </div>

          {/* Role Toggle — only shown for GS-13 through GS-15 */}
          {showRoleToggle && (
            <div style={{ marginBottom:18, padding:"14px 16px", background:"rgba(201,168,76,0.07)", border:"1px solid rgba(201,168,76,0.25)", borderRadius:8 }}>
              <div style={{ fontSize:11, color:"#c9a84c", letterSpacing:2, textTransform:"uppercase", marginBottom:10 }}>
                Your Role at {grade}
              </div>
              <div style={{ display:"flex", gap:10 }}>
                {[
                  { val:true,  label:"👔 Supervisor / Manager",         sub:"You supervise or manage staff" },
                  { val:false, label:"🧠 Non-Supervisory / Individual Contributor", sub:"SME, analyst, advisor, technical expert" },
                ].map(opt => (
                  <div key={String(opt.val)} onClick={() => setIsSupervisor(opt.val)} style={{
                    flex:1, padding:"10px 12px", borderRadius:7, cursor:"pointer",
                    background: isSupervisor === opt.val ? "rgba(201,168,76,0.18)" : "rgba(255,255,255,0.04)",
                    border: isSupervisor === opt.val ? "2px solid #c9a84c" : "1px solid rgba(255,255,255,0.1)",
                    transition:"all 0.15s",
                  }}>
                    <div style={{ fontSize:13, color:"#f5edd8", marginBottom:3 }}>{opt.label}</div>
                    <div style={{ fontSize:11, color:"#6a6250" }}>{opt.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button onClick={handleSearch} disabled={!readyToSearch || loading} style={{
            width:"100%", padding:12,
            background: readyToSearch && !loading ? "linear-gradient(135deg,#c9a84c,#e8c96a)" : "rgba(255,255,255,0.07)",
            border:"none", borderRadius:8,
            color: readyToSearch && !loading ? "#0b1a2e" : "#555",
            fontSize:13, fontWeight:"bold", letterSpacing:2, textTransform:"uppercase",
            cursor: readyToSearch && !loading ? "pointer" : "not-allowed", transition:"all 0.2s",
          }}>{loading ? "Searching..." : "Find My Opportunities"}</button>
        </div>

        {/* Results */}
        {searched && results && (
          <div style={{ animation:"fadeIn 0.35s ease" }}>
            {/* Banner */}
            <div style={{ background:tm.bg, border:`1px solid ${tm.border}`, borderRadius:10, padding:"13px 20px", display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18, flexWrap:"wrap", gap:8 }}>
              <div>
                <div style={{ fontSize:10, letterSpacing:3, color:tm.color, textTransform:"uppercase", marginBottom:2 }}>Your Position</div>
                <div style={{ fontSize:15, color:"#f5edd8", fontWeight:"bold" }}>{results.seriesObj?.code} – {results.seriesObj?.title}</div>
                <div style={{ fontSize:12, color:"#9a8f78", marginTop:1 }}>{results.grade}</div>
              </div>
              <div style={{ display:"flex", gap:7, flexWrap:"wrap" }}>
                <span style={{ background:tm.color+"20", border:`1px solid ${tm.color}`, borderRadius:20, padding:"4px 12px", fontSize:10, color:tm.color, letterSpacing:1, textTransform:"uppercase" }}>{tierLabels[results.tier]}</span>
                <span style={{ background:"rgba(201,168,76,0.13)", border:"1px solid rgba(201,168,76,0.38)", borderRadius:20, padding:"4px 12px", fontSize:10, color:"#c9a84c" }}>
                  {results.isNonSupSenior ? "🧠 Non-Supervisory IC Track" : "👔 Supervisory Track"}
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display:"flex", borderBottom:"1px solid rgba(255,255,255,0.09)", marginBottom:18 }}>
              {TABS.map((tab, i) => {
                const count = i===1 ? results.internalPrograms.length : i===2 ? results.externalPrograms.length : 0;
                return (
                  <button key={tab} onClick={() => setActiveTab(i)} style={{ padding:"9px 18px", background:"none", border:"none", borderBottom: activeTab===i ? "2px solid #c9a84c" : "2px solid transparent", color: activeTab===i ? "#c9a84c" : "#6a6250", fontSize:12, cursor:"pointer", marginBottom:-1, whiteSpace:"nowrap" }}>
                    {tab}
                    {count > 0 && <span style={{ marginLeft:5, background: i===2?"#F472B6":"#c9a84c", color:"#0b1a2e", borderRadius:10, padding:"1px 6px", fontSize:10, fontWeight:"bold" }}>{count}</span>}
                  </button>
                );
              })}
            </div>

            {/* TAB 0: Training Courses */}
            {activeTab === 0 && (
              <div>
                {results.isNonSupSenior ? (
                  // ── NON-SUPERVISORY SENIOR VIEW ──────────────────────────
                  <div>
                    <div style={{ background:"rgba(167,139,250,0.08)", border:"1px solid rgba(167,139,250,0.2)", borderRadius:8, padding:"11px 15px", marginBottom:16 }}>
                      <div style={{ fontSize:12, color:"#a78bfa", marginBottom:3 }}>🧠 Non-Supervisory Senior IC Track — {results.grade}</div>
                      <div style={{ fontSize:11, color:"#6a6250", lineHeight:1.5 }}>
                        This track is tailored for GS-13 through GS-15 individual contributors, subject matter experts, senior analysts, policy advisors, and technical experts who do not supervise staff — a common role structure throughout the DC metro area.
                      </div>
                    </div>

                    {/* Section tabs */}
                    <div style={{ display:"flex", gap:6, marginBottom:14, flexWrap:"wrap" }}>
                      {nsSections.map(sec => {
                        const meta = NONSUP_SECTION_LABELS[sec.key];
                        return (
                          <button key={sec.key} onClick={() => setNsSection(sec.key)} style={{
                            padding:"6px 12px", borderRadius:20, fontSize:11, cursor:"pointer", border:"none",
                            background: nsSection===sec.key ? meta.color+"25" : "rgba(255,255,255,0.05)",
                            border: nsSection===sec.key ? `1px solid ${meta.color}` : "1px solid rgba(255,255,255,0.1)",
                            color: nsSection===sec.key ? meta.color : "#6a6250",
                          }}>
                            {meta.icon} {meta.label}
                          </button>
                        );
                      })}
                    </div>

                    {nsSections.filter(s => s.key === nsSection).map(sec => {
                      const meta = NONSUP_SECTION_LABELS[sec.key];
                      return (
                        <div key={sec.key}>
                          <div style={{ fontSize:10, letterSpacing:3, color:meta.color, textTransform:"uppercase", marginBottom:10 }}>
                            {meta.icon} {meta.label}
                          </div>
                          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                            {sec.items.map((course, i) => (
                              <div key={i} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderLeft:`3px solid ${sec.key==="mandatory"?"#EF4444":meta.color}`, borderRadius:7, padding:"11px 15px", display:"flex", alignItems:"flex-start", gap:11 }}>
                                <div style={{ width:24, height:24, borderRadius:"50%", flexShrink:0, marginTop:1, background:sec.key==="mandatory"?"rgba(239,68,68,0.1)":`${meta.color}18`, border:`1px solid ${sec.key==="mandatory"?"#EF444455":meta.color+"55"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, color:sec.key==="mandatory"?"#EF4444":meta.color }}>
                                  {sec.key==="mandatory" ? "!" : i+1}
                                </div>
                                <div>
                                  <div style={{ fontSize:13, color:"#f0e6cc" }}>{course}</div>
                                  <div style={{ fontSize:11, color:sec.key==="mandatory"?"#EF4444aa":"#6a6250", marginTop:2 }}>
                                    {sec.key==="mandatory" ? "⚠ Mandatory Annual Requirement" : sec.key==="sme" ? "SME / Advisory Development" : sec.key==="technical" ? "Technical Depth & Certification" : "Influence & Impact (Non-Supervisory)"}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  // ── SUPERVISORY / STANDARD VIEW ───────────────────────────
                  <div>
                    <div style={{ fontSize:10, letterSpacing:3, color:"#c9a84c", textTransform:"uppercase", marginBottom:11 }}>Recommended Courses</div>
                    <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                      {results.courses.map((course, i) => {
                        const isMandatory = i >= results.courses.length - 2;
                        return (
                          <div key={i} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderLeft:`3px solid ${isMandatory?"#EF4444":"#c9a84c"}`, borderRadius:7, padding:"11px 15px", display:"flex", alignItems:"flex-start", gap:11 }}>
                            <div style={{ width:24, height:24, borderRadius:"50%", flexShrink:0, marginTop:1, background:isMandatory?"rgba(239,68,68,0.1)":"rgba(201,168,76,0.1)", border:`1px solid ${isMandatory?"#EF444455":"#c9a84c55"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, color:isMandatory?"#EF4444":"#c9a84c" }}>
                              {isMandatory ? "!" : i+1}
                            </div>
                            <div>
                              <div style={{ fontSize:13, color:"#f0e6cc" }}>{course}</div>
                              <div style={{ fontSize:11, color:isMandatory?"#EF4444aa":"#6a6250", marginTop:2 }}>{isMandatory ? "⚠ Mandatory Annual Requirement" : "Development Elective"}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Training portals */}
                <div style={{ marginTop:20, marginBottom:20 }}>
                  <div style={{ fontSize:10, letterSpacing:3, color:"#c9a84c", textTransform:"uppercase", marginBottom:10 }}>Training Portals</div>
                  <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
                    {[...results.links,"https://www.opm.gov/policy-data-oversight/training-and-development/"].filter((v,i,a)=>a.indexOf(v)===i).map((link,i)=>{
                      const domain = link.replace("https://www.","").replace("https://","").split("/")[0];
                      return (
                        <div key={i} style={{ display:"flex", alignItems:"center", gap:8, padding:"8px 12px", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:6 }}>
                          <span style={{ fontSize:13 }}>🔗</span>
                          <div style={{ flex:1 }}>
                            <div style={{ fontSize:13, color:"#c9a84c", fontWeight:"bold" }}>{domain}</div>
                            <div style={{ fontSize:11, color:"#6a6250", marginTop:1, wordBreak:"break-all" }}>{link}</div>
                          </div>
                          <button onClick={() => navigator.clipboard.writeText(link)} style={{ padding:"4px 10px", background:"rgba(201,168,76,0.12)", border:"1px solid rgba(201,168,76,0.3)", borderRadius:5, color:"#c9a84c", fontSize:10, cursor:"pointer", whiteSpace:"nowrap" }}>
                            Copy URL
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* AI Plan */}
                {!aiMode ? (
                  <button onClick={handleAiExpand} style={{ width:"100%", padding:12, background:"rgba(201,168,76,0.06)", border:"1px dashed rgba(201,168,76,0.3)", borderRadius:8, color:"#c9a84c", fontSize:12, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                    ✨ Generate AI-Powered 12-Month Development Plan
                  </button>
                ) : (
                  <div style={{ background:"rgba(201,168,76,0.05)", border:"1px solid rgba(201,168,76,0.18)", borderRadius:9, padding:20 }}>
                    <div style={{ fontSize:10, letterSpacing:3, color:"#c9a84c", textTransform:"uppercase", marginBottom:11 }}>✨ AI Development Plan</div>
                    {aiLoading
                      ? <div style={{ color:"#9a8f78", fontSize:13, textAlign:"center", padding:"14px 0" }}>Building your personalized roadmap...</div>
                      : <div style={{ fontSize:13, color:"#d4c9b0", lineHeight:1.85, whiteSpace:"pre-wrap" }}>{aiResult}</div>
                    }
                  </div>
                )}
              </div>
            )}

            {/* TAB 1: Gov't Programs */}
            {activeTab === 1 && (
              <div>
                {results.internalPrograms.length === 0 ? (
                  <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:9, padding:"28px 20px", textAlign:"center" }}>
                    <div style={{ fontSize:24, marginBottom:8 }}>📋</div>
                    <div style={{ color:"#9a8f78", fontSize:14 }}>No standard DoD/OPM programs matched {results.grade} directly.</div>
                    <div style={{ color:"#6a6250", fontSize:12, marginTop:5 }}>Check the External Programs tab or consult your agency HR.</div>
                  </div>
                ) : (
                  <>
                    <div style={{ background:"rgba(139,92,246,0.07)", border:"1px solid rgba(139,92,246,0.17)", borderRadius:8, padding:"10px 15px", marginBottom:14 }}>
                      <div style={{ fontSize:11, color:"#a78bfa", marginBottom:3 }}>📈 DoD Civilian Leader Development Continuum</div>
                      <div style={{ fontSize:11, color:"#6a6250" }}>DCELP (GS-7–12) → ELDP (GS-12–14) → DSLDP (GS-14–15) → Senior Executive Service</div>
                    </div>
                    {results.isNonSupSenior && (
                      <div style={{ background:"rgba(167,139,250,0.07)", border:"1px solid rgba(167,139,250,0.2)", borderRadius:8, padding:"10px 15px", marginBottom:14 }}>
                        <div style={{ fontSize:11, color:"#a78bfa" }}>🧠 Note for Non-Supervisory ICs: Government leadership programs are still open to non-supervisors. They strengthen your ability to lead without authority, influence across agencies, and prepare you for future supervisory or SES roles if desired.</div>
                      </div>
                    )}
                    <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
                      {results.internalPrograms.map(prog => <ProgramCard key={prog.id} prog={prog} expandedId={expandedInt} setExpanded={setExpandedInt} isExternal={false} />)}
                    </div>
                    <div style={{ marginTop:14, padding:"11px 14px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:8, fontSize:12, color:"#6a6250", lineHeight:1.6 }}>
                      <span style={{ color:"#c9a84c" }}>💡 Tip:</span> Search OPM's full catalog at{" "}
                      <a href="https://www.opm.gov/policy-data-oversight/training-and-development/federal-leadership-development-programs/" target="_blank" rel="noopener noreferrer" style={{ color:"#c9a84c" }}>opm.gov/leadership-programs</a>.
                    </div>
                  </>
                )}
              </div>
            )}

            {/* TAB 2: External Programs */}
            {activeTab === 2 && (
              <div>
                {results.externalPrograms.length === 0 ? (
                  <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:9, padding:"28px 20px", textAlign:"center" }}>
                    <div style={{ fontSize:24, marginBottom:8 }}>🔍</div>
                    <div style={{ color:"#9a8f78", fontSize:14 }}>No external programs matched for {results.grade} in this list.</div>
                  </div>
                ) : (
                  <>
                    <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:12 }}>
                      {[{org:"Partnership for Public Service",color:"#F472B6",icon:"🌟"},{org:"Harvard Kennedy School",color:"#991B1B",icon:"🎓"},{org:"Center for Creative Leadership",color:"#059669",icon:"💡"}].map(o=>(
                        <div key={o.org} style={{ display:"flex", alignItems:"center", gap:5, padding:"5px 10px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:6 }}>
                          <span style={{ fontSize:12 }}>{o.icon}</span>
                          <span style={{ fontSize:11, color:"#9a8f78" }}>{o.org}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display:"flex", gap:10, marginBottom:14, flexWrap:"wrap" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:5 }}><span style={{ width:10,height:10,background:"rgba(34,197,94,0.3)",border:"1px solid #22C55E",borderRadius:2,display:"inline-block" }}></span><span style={{ fontSize:11, color:"#6a6250" }}>SF-182 Accepted</span></div>
                      <div style={{ display:"flex", alignItems:"center", gap:5 }}><span style={{ width:10,height:10,background:"rgba(234,179,8,0.3)",border:"1px solid #EAB308",borderRadius:2,display:"inline-block" }}></span><span style={{ fontSize:11, color:"#6a6250" }}>ECQ-Aligned</span></div>
                    </div>
                    {results.isNonSupSenior && (
                      <div style={{ background:"rgba(167,139,250,0.07)", border:"1px solid rgba(167,139,250,0.2)", borderRadius:8, padding:"10px 15px", marginBottom:14 }}>
                        <div style={{ fontSize:11, color:"#a78bfa" }}>🧠 These external programs are excellent for non-supervisory senior ICs — especially EIG Fellows and HKS programs, which build influence, strategic thinking, and executive presence without requiring a supervisory title.</div>
                      </div>
                    )}
                    <div style={{ display:"flex", flexDirection:"column", gap:11 }}>
                      {results.externalPrograms.map(prog => <ProgramCard key={prog.id} prog={prog} expandedId={expandedExt} setExpanded={setExpandedExt} isExternal={true} />)}
                    </div>
                    <div style={{ marginTop:14, padding:"11px 14px", background:"rgba(244,114,182,0.05)", border:"1px solid rgba(244,114,182,0.15)", borderRadius:8, fontSize:12, color:"#6a6250", lineHeight:1.6 }}>
                      <span style={{ color:"#F472B6" }}>💳 Payment tip:</span> Most external programs accept the SF-182. Your agency training coordinator can process payment. Costs may be reimbursable under the Government Employees Training Act (GETA).
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        <div style={{ marginTop:34, borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:14 }}>
          <p style={{ fontSize:11, color:"#3a4050", textAlign:"center", margin:0, lineHeight:1.6 }}>
            Program data sourced from DCPAS, OPM, Partnership for Public Service, Harvard Kennedy School, and CCL (2024–2025). Consult your agency Training Officer for current deadlines, eligibility, and funding approval. This is a personal project and does not represent official government guidance.
          </p>
        </div>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}} select option{background:#13294b;color:#f5edd8;} a:hover{opacity:0.82;}`}</style>
    </div>
  );
}
