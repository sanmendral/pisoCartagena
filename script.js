/* ============================================================
 * Sandra's Apartment — guest registration form
 * - i18n (EN / ES / FR)
 * - dynamic additional-guest cards
 * - CSV row generation embedded in submission
 * - submit via Web3Forms
 * ============================================================ */

// ---------- Translations ----------
const I18N = {
  en: {
    page_title: "Guest Registration — Apartment in Spain",
    brand: "Sandra's Apartment",
    hero_title: "Welcome — Guest Registration",
    hero_lead:
      "To comply with Spanish law (Real Decreto 933/2021), we need a few details from each guest before your arrival. Your information is sent securely and used only for the legally required traveler registration.",
    badge_secure: "🔒 Secure",
    badge_time: "⏱️ Takes ~5 minutes",
    badge_legal: "⚖️ Legally required",

    sec_stay: "Stay details",
    sec_lead: "Lead guest (the person booking)",
    sec_others: "Additional guests",
    sec_payment: "Payment information",
    sec_consent: "Consent",

    f_arrival: "Arrival date",
    f_departure: "Departure date",
    f_num_guests: "Number of guests",
    f_num_rooms: "Rooms used",
    f_internet: "Internet provided",
    f_contract_date: "Contract / booking date",

    f_first_name: "First name",
    f_last_name: "Last name",
    f_second_last_name: "Second last name",
    f_gender: "Gender",
    f_birth_date: "Date of birth",
    f_nationality: "Nationality",
    f_doc_type: "Document type",
    f_doc_number: "Document number",
    f_doc_expedition: "Document issue date",
    f_doc_support: "Support number",
    f_relationship: "Relationship to lead guest",

    sub_address: "Address",
    sub_contact: "Contact",
    f_address: "Street address",
    f_city: "City / Locality",
    f_postal: "Postal code",
    f_region: "Region / Province",
    f_country: "Country",
    f_email: "Email",
    f_mobile: "Mobile phone",
    f_landline: "Landline",

    f_pay_method: "Payment method",
    f_pay_date: "Payment date",
    f_pay_holder: "Cardholder / payer name",
    f_card_expiry: "Card expiry",

    optional: "(optional)",
    dni_only: "(DNI/NIE only)",
    card_only: "(card only)",
    if_minor: "(if under 14)",

    opt_choose: "Choose…",
    opt_yes: "Yes",
    opt_no: "No",
    opt_female: "Female",
    opt_male: "Male",
    opt_other: "Other",
    opt_dni: "DNI (Spanish ID)",
    opt_nie: "NIE (Foreigner ID)",
    opt_passport: "Passport",
    opt_eu_id: "EU national ID card",
    pay_card: "Credit / Debit card",
    pay_cash: "Cash",
    pay_transfer: "Bank transfer",
    pay_platform: "Booking platform (Airbnb, Booking…)",
    pay_other: "Other",

    others_help:
      "Add one entry per additional guest staying at the apartment (excluding yourself). Spanish law requires this for every traveler aged 14 or over.",
    add_guest: "Add another guest",
    guest: "Guest",
    remove: "Remove",

    consent_legal:
      "I confirm that the information provided is accurate and I consent to its use for the legally required traveler registration under Real Decreto 933/2021.",
    consent_contact:
      "I agree that the host may contact me at the email and phone provided regarding my stay.",

    submit: "Submit registration",
    submitting: "Sending…",
    success: "✓ Thank you! Your registration was sent. We'll be in touch shortly.",
    error: "Something went wrong. Please try again or contact your host directly.",
    validation: "Please fill in all required fields.",

    footer:
      "© Sandra's Apartment · Information handled in accordance with the GDPR and Spanish legislation on tourist rentals.",
  },

  es: {
    page_title: "Registro de Huéspedes — Apartamento en España",
    brand: "Apartamento de Sandra",
    hero_title: "Bienvenido — Registro de huéspedes",
    hero_lead:
      "Para cumplir con la legislación española (Real Decreto 933/2021), necesitamos algunos datos de cada huésped antes de su llegada. Su información se envía de forma segura y se utiliza únicamente para el registro de viajeros obligatorio.",
    badge_secure: "🔒 Seguro",
    badge_time: "⏱️ Toma ~5 minutos",
    badge_legal: "⚖️ Obligatorio por ley",

    sec_stay: "Datos de la estancia",
    sec_lead: "Huésped principal (quien reserva)",
    sec_others: "Otros huéspedes",
    sec_payment: "Información de pago",
    sec_consent: "Consentimiento",

    f_arrival: "Fecha de entrada",
    f_departure: "Fecha de salida",
    f_num_guests: "Número de huéspedes",
    f_num_rooms: "Habitaciones utilizadas",
    f_internet: "Internet incluido",
    f_contract_date: "Fecha de contrato / reserva",

    f_first_name: "Nombre",
    f_last_name: "Primer apellido",
    f_second_last_name: "Segundo apellido",
    f_gender: "Sexo",
    f_birth_date: "Fecha de nacimiento",
    f_nationality: "Nacionalidad",
    f_doc_type: "Tipo de documento",
    f_doc_number: "Número de documento",
    f_doc_expedition: "Fecha de expedición",
    f_doc_support: "Número de soporte",
    f_relationship: "Parentesco con el huésped principal",

    sub_address: "Dirección",
    sub_contact: "Contacto",
    f_address: "Dirección postal",
    f_city: "Ciudad / Localidad",
    f_postal: "Código postal",
    f_region: "Región / Provincia",
    f_country: "País",
    f_email: "Correo electrónico",
    f_mobile: "Teléfono móvil",
    f_landline: "Teléfono fijo",

    f_pay_method: "Forma de pago",
    f_pay_date: "Fecha de pago",
    f_pay_holder: "Titular del pago",
    f_card_expiry: "Caducidad de la tarjeta",

    optional: "(opcional)",
    dni_only: "(solo DNI/NIE)",
    card_only: "(solo tarjeta)",
    if_minor: "(si es menor de 14)",

    opt_choose: "Elegir…",
    opt_yes: "Sí",
    opt_no: "No",
    opt_female: "Mujer",
    opt_male: "Hombre",
    opt_other: "Otro",
    opt_dni: "DNI",
    opt_nie: "NIE",
    opt_passport: "Pasaporte",
    opt_eu_id: "DNI de país de la UE",
    pay_card: "Tarjeta de crédito / débito",
    pay_cash: "Efectivo",
    pay_transfer: "Transferencia bancaria",
    pay_platform: "Plataforma de reservas (Airbnb, Booking…)",
    pay_other: "Otro",

    others_help:
      "Añada una entrada por cada huésped adicional que se alojará (sin contarse a sí mismo). La ley española lo exige para todo viajero mayor de 14 años.",
    add_guest: "Añadir otro huésped",
    guest: "Huésped",
    remove: "Eliminar",

    consent_legal:
      "Confirmo que la información facilitada es exacta y autorizo su uso para el registro de viajeros obligatorio según el Real Decreto 933/2021.",
    consent_contact:
      "Acepto que el anfitrión pueda contactarme por correo o teléfono respecto a mi estancia.",

    submit: "Enviar registro",
    submitting: "Enviando…",
    success: "✓ ¡Gracias! Su registro ha sido enviado. Le contactaremos en breve.",
    error: "Algo ha salido mal. Inténtelo de nuevo o contacte directamente con su anfitrión.",
    validation: "Por favor, rellene todos los campos obligatorios.",

    footer:
      "© Apartamento de Sandra · Información tratada según el RGPD y la legislación española sobre alquileres turísticos.",
  },

  fr: {
    page_title: "Enregistrement des voyageurs — Appartement en Espagne",
    brand: "Appartement de Sandra",
    hero_title: "Bienvenue — Enregistrement des voyageurs",
    hero_lead:
      "Pour respecter la loi espagnole (Real Decreto 933/2021), nous avons besoin de quelques informations sur chaque voyageur avant votre arrivée. Vos données sont envoyées de manière sécurisée et utilisées uniquement pour l'enregistrement légalement obligatoire.",
    badge_secure: "🔒 Sécurisé",
    badge_time: "⏱️ ~5 minutes",
    badge_legal: "⚖️ Obligation légale",

    sec_stay: "Détails du séjour",
    sec_lead: "Voyageur principal (la personne qui réserve)",
    sec_others: "Voyageurs supplémentaires",
    sec_payment: "Informations de paiement",
    sec_consent: "Consentement",

    f_arrival: "Date d'arrivée",
    f_departure: "Date de départ",
    f_num_guests: "Nombre de voyageurs",
    f_num_rooms: "Chambres utilisées",
    f_internet: "Internet fourni",
    f_contract_date: "Date du contrat / réservation",

    f_first_name: "Prénom",
    f_last_name: "Nom de famille",
    f_second_last_name: "Deuxième nom",
    f_gender: "Sexe",
    f_birth_date: "Date de naissance",
    f_nationality: "Nationalité",
    f_doc_type: "Type de document",
    f_doc_number: "Numéro de document",
    f_doc_expedition: "Date de délivrance",
    f_doc_support: "Numéro de support",
    f_relationship: "Lien avec le voyageur principal",

    sub_address: "Adresse",
    sub_contact: "Contact",
    f_address: "Adresse postale",
    f_city: "Ville / Localité",
    f_postal: "Code postal",
    f_region: "Région / Province",
    f_country: "Pays",
    f_email: "E-mail",
    f_mobile: "Téléphone mobile",
    f_landline: "Téléphone fixe",

    f_pay_method: "Mode de paiement",
    f_pay_date: "Date de paiement",
    f_pay_holder: "Titulaire du paiement",
    f_card_expiry: "Expiration de la carte",

    optional: "(facultatif)",
    dni_only: "(DNI/NIE uniquement)",
    card_only: "(carte uniquement)",
    if_minor: "(si moins de 14 ans)",

    opt_choose: "Choisir…",
    opt_yes: "Oui",
    opt_no: "Non",
    opt_female: "Femme",
    opt_male: "Homme",
    opt_other: "Autre",
    opt_dni: "DNI (carte d'identité espagnole)",
    opt_nie: "NIE (carte étrangère)",
    opt_passport: "Passeport",
    opt_eu_id: "Carte d'identité d'un pays de l'UE",
    pay_card: "Carte de crédit / débit",
    pay_cash: "Espèces",
    pay_transfer: "Virement bancaire",
    pay_platform: "Plateforme de réservation (Airbnb, Booking…)",
    pay_other: "Autre",

    others_help:
      "Ajoutez une entrée par voyageur supplémentaire séjournant dans l'appartement (sauf vous-même). La loi espagnole l'exige pour tout voyageur âgé de 14 ans ou plus.",
    add_guest: "Ajouter un voyageur",
    guest: "Voyageur",
    remove: "Retirer",

    consent_legal:
      "Je confirme que les informations fournies sont exactes et j'autorise leur utilisation pour l'enregistrement des voyageurs obligatoire selon le Real Decreto 933/2021.",
    consent_contact:
      "J'accepte que l'hôte me contacte par e-mail ou téléphone concernant mon séjour.",

    submit: "Envoyer l'enregistrement",
    submitting: "Envoi…",
    success: "✓ Merci ! Votre enregistrement a été envoyé. Nous vous contacterons rapidement.",
    error: "Une erreur est survenue. Veuillez réessayer ou contacter directement votre hôte.",
    validation: "Veuillez remplir tous les champs obligatoires.",

    footer:
      "© Appartement de Sandra · Données traitées conformément au RGPD et à la législation espagnole sur les locations touristiques.",
  },
};

let currentLang = "en";

function applyLang(lang) {
  currentLang = lang;
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.title = dict.page_title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

// Pick browser language on first load
const browserLang = (navigator.language || "en").slice(0, 2);
applyLang(I18N[browserLang] ? browserLang : "en");

// ---------- Dynamic guest cards ----------
const guestsContainer = document.getElementById("guests-container");
const addGuestBtn = document.getElementById("add-guest");
const guestTemplate = document.getElementById("guest-template");

function renumberGuests() {
  guestsContainer.querySelectorAll(".guest-card").forEach((card, idx) => {
    card.querySelector(".guest-num").textContent = String(idx + 2); // lead is #1
    // give each input a deterministic name
    card.querySelectorAll("[data-name]").forEach((input) => {
      input.name = `guest${idx + 2}_${input.dataset.name}`;
    });
  });
}

function addGuest() {
  const node = guestTemplate.content.firstElementChild.cloneNode(true);
  guestsContainer.appendChild(node);
  applyLang(currentLang); // re-translate cloned node
  node.querySelector(".btn-remove").addEventListener("click", () => {
    node.remove();
    renumberGuests();
  });
  renumberGuests();
}

addGuestBtn.addEventListener("click", addGuest);

// ---------- CSV generation ----------
function csvEscape(value) {
  const s = String(value ?? "");
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function buildCsv(form) {
  const data = new FormData(form);
  // We exclude internal/Web3Forms fields from the CSV
  const skip = new Set([
    "access_key", "subject", "from_name", "redirect", "botcheck",
    "csv_row", "csv_header",
  ]);

  const headers = [];
  const values = [];
  for (const [key, value] of data.entries()) {
    if (skip.has(key)) continue;
    headers.push(key);
    values.push(value);
  }
  return {
    header: headers.map(csvEscape).join(","),
    row: values.map(csvEscape).join(","),
  };
}

// ---------- Submission ----------
const form = document.getElementById("registration-form");
const statusEl = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const dict = I18N[currentLang];
  statusEl.className = "status";
  statusEl.textContent = "";

  if (!form.checkValidity()) {
    form.reportValidity();
    statusEl.className = "status err";
    statusEl.textContent = dict.validation;
    return;
  }

  // Build the CSV pieces and stuff them into the hidden fields so they
  // travel along in the email body.
  const csv = buildCsv(form);
  document.getElementById("csv-header").value = csv.header;
  document.getElementById("csv-row").value = csv.row;

  submitBtn.disabled = true;
  submitBtn.querySelector("span").textContent = dict.submitting;

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form),
    });
    const json = await res.json().catch(() => ({}));

    if (res.ok && json.success !== false) {
      statusEl.className = "status ok";
      statusEl.textContent = dict.success;
      form.reset();
    } else {
      throw new Error(json.message || "Request failed");
    }
  } catch (err) {
    console.error(err);
    statusEl.className = "status err";
    statusEl.textContent = dict.error;
  } finally {
    submitBtn.disabled = false;
    submitBtn.querySelector("span").textContent = dict.submit;
  }
});
