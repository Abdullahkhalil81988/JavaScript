// Complete list of countries and their currency codes
const countryList = {
    AED: "AE", // United Arab Emirates Dirham
    AFN: "AF", // Afghan Afghani
    ALL: "AL", // Albanian Lek
    AMD: "AM", // Armenian Dram
    ANG: "AN", // Netherlands Antillean Guilder
    AOA: "AO", // Angolan Kwanza
    ARS: "AR", // Argentine Peso
    AUD: "AU", // Australian Dollar
    AWG: "AW", // Aruban Florin
    AZN: "AZ", // Azerbaijani Manat
    BAM: "BA", // Bosnia-Herzegovina Convertible Mark
    BBD: "BB", // Barbadian Dollar
    BDT: "BD", // Bangladeshi Taka
    BGN: "BG", // Bulgarian Lev
    BHD: "BH", // Bahraini Dinar
    BIF: "BI", // Burundian Franc
    BMD: "BM", // Bermudian Dollar
    BND: "BN", // Brunei Dollar
    BOB: "BO", // Bolivian Boliviano
    BRL: "BR", // Brazilian Real
    BSD: "BS", // Bahamian Dollar
    BTN: "BT", // Bhutanese Ngultrum
    BWP: "BW", // Botswanan Pula
    BYN: "BY", // Belarusian Ruble
    BZD: "BZ", // Belize Dollar
    CAD: "CA", // Canadian Dollar
    CDF: "CD", // Congolese Franc
    CHF: "CH", // Swiss Franc
    CLP: "CL", // Chilean Peso
    CNY: "CN", // Chinese Yuan
    COP: "CO", // Colombian Peso
    CRC: "CR", // Costa Rican Colón
    CUP: "CU", // Cuban Peso
    CVE: "CV", // Cape Verdean Escudo
    CZK: "CZ", // Czech Republic Koruna
    DJF: "DJ", // Djiboutian Franc
    DKK: "DK", // Danish Krone
    DOP: "DO", // Dominican Peso
    DZD: "DZ", // Algerian Dinar
    EGP: "EG", // Egyptian Pound
    ERN: "ER", // Eritrean Nakfa
    ETB: "ET", // Ethiopian Birr
    EUR: "EU", // Euro
    FJD: "FJ", // Fijian Dollar
    FKP: "FK", // Falkland Islands Pound
    GBP: "GB", // British Pound Sterling
    GEL: "GE", // Georgian Lari
    GGP: "GG", // Guernsey Pound
    GHS: "GH", // Ghanaian Cedi
    GIP: "GI", // Gibraltar Pound
    GMD: "GM", // Gambian Dalasi
    GNF: "GN", // Guinean Franc
    GTQ: "GT", // Guatemalan Quetzal
    GYD: "GY", // Guyanaese Dollar
    HKD: "HK", // Hong Kong Dollar
    HNL: "HN", // Honduran Lempira
    HRK: "HR", // Croatian Kuna
    HTG: "HT", // Haitian Gourde
    HUF: "HU", // Hungarian Forint
    IDR: "ID", // Indonesian Rupiah
    ILS: "IL", // Israeli New Sheqel
    IMP: "IM", // Isle of Man Pound
    INR: "IN", // Indian Rupee
    IQD: "IQ", // Iraqi Dinar
    IRR: "IR", // Iranian Rial
    ISK: "IS", // Icelandic Króna
    JEP: "JE", // Jersey Pound
    JMD: "JM", // Jamaican Dollar
    JOD: "JO", // Jordanian Dinar
    JPY: "JP", // Japanese Yen
    KES: "KE", // Kenyan Shilling
    KGS: "KG", // Kyrgystani Som
    KHR: "KH", // Cambodian Riel
    KMF: "KM", // Comorian Franc
    KPW: "KP", // North Korean Won
    KRW: "KR", // South Korean Won
    KWD: "KW", // Kuwaiti Dinar
    KYD: "KY", // Cayman Islands Dollar
    KZT: "KZ", // Kazakhstani Tenge
    LAK: "LA", // Laotian Kip
    LBP: "LB", // Lebanese Pound
    LKR: "LK", // Sri Lankan Rupee
    LRD: "LR", // Liberian Dollar
    LSL: "LS", // Lesotho Loti
    LYD: "LY", // Libyan Dinar
    MAD: "MA", // Moroccan Dirham
    MDL: "MD", // Moldovan Leu
    MGA: "MG", // Malagasy Ariary
    MKD: "MK", // Macedonian Denar
    MMK: "MM", // Myanma Kyat
    MNT: "MN", // Mongolian Tugrik
    MOP: "MO", // Macanese Pataca
    MRU: "MR", // Mauritanian Ouguiya
    MUR: "MU", // Mauritian Rupee
    MVR: "MV", // Maldivian Rufiyaa
    MWK: "MW", // Malawian Kwacha
    MXN: "MX", // Mexican Peso
    MYR: "MY", // Malaysian Ringgit
    MZN: "MZ", // Mozambican Metical
    NAD: "NA", // Namibian Dollar
    NGN: "NG", // Nigerian Naira
    NIO: "NI", // Nicaraguan Córdoba
    NOK: "NO", // Norwegian Krone
    NPR: "NP", // Nepalese Rupee
    NZD: "NZ", // New Zealand Dollar
    OMR: "OM", // Omani Rial
    PAB: "PA", // Panamanian Balboa
    PEN: "PE", // Peruvian Nuevo Sol
    PGK: "PG", // Papua New Guinean Kina
    PHP: "PH", // Philippine Peso
    PKR: "PK", // Pakistani Rupee
    PLN: "PL", // Polish Zloty
    PYG: "PY", // Paraguayan Guarani
    QAR: "QA", // Qatari Rial
    RON: "RO", // Romanian Leu
    RSD: "RS", // Serbian Dinar
    RUB: "RU", // Russian Ruble
    RWF: "RW", // Rwandan Franc
    SAR: "SA", // Saudi Riyal
    SBD: "SB", // Solomon Islands Dollar
    SCR: "SC", // Seychellois Rupee
    SDG: "SD", // Sudanese Pound
    SEK: "SE", // Swedish Krona
    SGD: "SG", // Singapore Dollar
    SHP: "SH", // Saint Helena Pound
    SLE: "SL", // Sierra Leonean Leone
    SOS: "SO", // Somali Shilling
    SRD: "SR", // Surinamese Dollar
    STD: "ST", // São Tomé and Príncipe Dobra
    SVC: "SV", // Salvadoran Colón
    SYP: "SY", // Syrian Pound
    SZL: "SZ", // Swazi Lilangeni
    THB: "TH", // Thai Baht
    TJS: "TJ", // Tajikistani Somoni
    TMT: "TM", // Turkmenistani Manat
    TND: "TN", // Tunisian Dinar
    TOP: "TO", // Tongan Pa'anga
    TRY: "TR", // Turkish Lira
    TTD: "TT", // Trinidad and Tobago Dollar
    TVD: "TV", // Tuvaluan Dollar
    TWD: "TW", // Taiwan New Dollar
    TZS: "TZ", // Tanzanian Shilling
    UAH: "UA", // Ukrainian Hryvnia
    UGX: "UG", // Ugandan Shilling
    USD: "US", // United States Dollar
    UYU: "UY", // Uruguayan Peso
    UZS: "UZ", // Uzbekistan Som
    VED: "VE", // Venezuelan Bolívar
    VND: "VN", // Vietnamese Dong
    VUV: "VU", // Vanuatu Vatu
    WST: "WS", // Samoan Tala
    XAF: "CM", // CFA Franc BEAC
    XCD: "AG", // East Caribbean Dollar
    XDR: "XDR", // Special Drawing Rights
    XOF: "SN", // CFA Franc BCEAO
    XPF: "PF", // CFP Franc
    YER: "YE", // Yemeni Rial
    ZAR: "ZA", // South African Rand
    ZMW: "ZM", // Zambian Kwacha
    ZWL: "ZW"  // Zimbabwean Dollar
};

// Alternative format with full country names
const currencyWithCountryName = {
    "AED": { country: "United Arab Emirates", currency: "Dirham" },
    "AFN": { country: "Afghanistan", currency: "Afghani" },
    "ALL": { country: "Albania", currency: "Lek" },
    "AMD": { country: "Armenia", currency: "Dram" },
    "ANG": { country: "Netherlands Antilles", currency: "Guilder" },
    "AOA": { country: "Angola", currency: "Kwanza" },
    "ARS": { country: "Argentina", currency: "Peso" },
    "AUD": { country: "Australia", currency: "Dollar" },
    "AWG": { country: "Aruba", currency: "Florin" },
    "AZN": { country: "Azerbaijan", currency: "Manat" },
    "BAM": { country: "Bosnia and Herzegovina", currency: "Convertible Mark" },
    "BBD": { country: "Barbados", currency: "Dollar" },
    "BDT": { country: "Bangladesh", currency: "Taka" },
    "BGN": { country: "Bulgaria", currency: "Lev" },
    "BHD": { country: "Bahrain", currency: "Dinar" },
    "BIF": { country: "Burundi", currency: "Franc" },
    "BMD": { country: "Bermuda", currency: "Dollar" },
    "BND": { country: "Brunei", currency: "Dollar" },
    "BOB": { country: "Bolivia", currency: "Boliviano" },
    "BRL": { country: "Brazil", currency: "Real" },
    "BSD": { country: "Bahamas", currency: "Dollar" },
    "BTN": { country: "Bhutan", currency: "Ngultrum" },
    "BWP": { country: "Botswana", currency: "Pula" },
    "BYN": { country: "Belarus", currency: "Ruble" },
    "BZD": { country: "Belize", currency: "Dollar" },
    "CAD": { country: "Canada", currency: "Dollar" },
    "CDF": { country: "Congo", currency: "Franc" },
    "CHF": { country: "Switzerland", currency: "Franc" },
    "CLP": { country: "Chile", currency: "Peso" },
    "CNY": { country: "China", currency: "Yuan" },
    "COP": { country: "Colombia", currency: "Peso" },
    "CRC": { country: "Costa Rica", currency: "Colón" },
    "CUP": { country: "Cuba", currency: "Peso" },
    "CVE": { country: "Cape Verde", currency: "Escudo" },
    "CZK": { country: "Czech Republic", currency: "Koruna" },
    "DJF": { country: "Djibouti", currency: "Franc" },
    "DKK": { country: "Denmark", currency: "Krone" },
    "DOP": { country: "Dominican Republic", currency: "Peso" },
    "DZD": { country: "Algeria", currency: "Dinar" },
    "EGP": { country: "Egypt", currency: "Pound" },
    "ERN": { country: "Eritrea", currency: "Nakfa" },
    "ETB": { country: "Ethiopia", currency: "Birr" },
    "EUR": { country: "European Union", currency: "Euro" },
    "FJD": { country: "Fiji", currency: "Dollar" },
    "FKP": { country: "Falkland Islands", currency: "Pound" },
    "GBP": { country: "United Kingdom", currency: "Pound Sterling" },
    "GEL": { country: "Georgia", currency: "Lari" },
    "GGP": { country: "Guernsey", currency: "Pound" },
    "GHS": { country: "Ghana", currency: "Cedi" },
    "GIP": { country: "Gibraltar", currency: "Pound" },
    "GMD": { country: "Gambia", currency: "Dalasi" },
    "GNF": { country: "Guinea", currency: "Franc" },
    "GTQ": { country: "Guatemala", currency: "Quetzal" },
    "GYD": { country: "Guyana", currency: "Dollar" },
    "HKD": { country: "Hong Kong", currency: "Dollar" },
    "HNL": { country: "Honduras", currency: "Lempira" },
    "HRK": { country: "Croatia", currency: "Kuna" },
    "HTG": { country: "Haiti", currency: "Gourde" },
    "HUF": { country: "Hungary", currency: "Forint" },
    "IDR": { country: "Indonesia", currency: "Rupiah" },
    "ILS": { country: "Israel", currency: "New Sheqel" },
    "IMP": { country: "Isle of Man", currency: "Pound" },
    "INR": { country: "India", currency: "Rupee" },
    "IQD": { country: "Iraq", currency: "Dinar" },
    "IRR": { country: "Iran", currency: "Rial" },
    "ISK": { country: "Iceland", currency: "Króna" },
    "JEP": { country: "Jersey", currency: "Pound" },
    "JMD": { country: "Jamaica", currency: "Dollar" },
    "JOD": { country: "Jordan", currency: "Dinar" },
    "JPY": { country: "Japan", currency: "Yen" },
    "KES": { country: "Kenya", currency: "Shilling" },
    "KGS": { country: "Kyrgyzstan", currency: "Som" },
    "KHR": { country: "Cambodia", currency: "Riel" },
    "KMF": { country: "Comoros", currency: "Franc" },
    "KPW": { country: "North Korea", currency: "Won" },
    "KRW": { country: "South Korea", currency: "Won" },
    "KWD": { country: "Kuwait", currency: "Dinar" },
    "KYD": { country: "Cayman Islands", currency: "Dollar" },
    "KZT": { country: "Kazakhstan", currency: "Tenge" },
    "LAK": { country: "Laos", currency: "Kip" },
    "LBP": { country: "Lebanon", currency: "Pound" },
    "LKR": { country: "Sri Lanka", currency: "Rupee" },
    "LRD": { country: "Liberia", currency: "Dollar" },
    "LSL": { country: "Lesotho", currency: "Loti" },
    "LYD": { country: "Libya", currency: "Dinar" },
    "MAD": { country: "Morocco", currency: "Dirham" },
    "MDL": { country: "Moldova", currency: "Leu" },
    "MGA": { country: "Madagascar", currency: "Ariary" },
    "MKD": { country: "Macedonia", currency: "Denar" },
    "MMK": { country: "Myanmar", currency: "Kyat" },
    "MNT": { country: "Mongolia", currency: "Tugrik" },
    "MOP": { country: "Macau", currency: "Pataca" },
    "MRU": { country: "Mauritania", currency: "Ouguiya" },
    "MUR": { country: "Mauritius", currency: "Rupee" },
    "MVR": { country: "Maldives", currency: "Rufiyaa" },
    "MWK": { country: "Malawi", currency: "Kwacha" },
    "MXN": { country: "Mexico", currency: "Peso" },
    "MYR": { country: "Malaysia", currency: "Ringgit" },
    "MZN": { country: "Mozambique", currency: "Metical" },
    "NAD": { country: "Namibia", currency: "Dollar" },
    "NGN": { country: "Nigeria", currency: "Naira" },
    "NIO": { country: "Nicaragua", currency: "Córdoba" },
    "NOK": { country: "Norway", currency: "Krone" },
    "NPR": { country: "Nepal", currency: "Rupee" },
    "NZD": { country: "New Zealand", currency: "Dollar" },
    "OMR": { country: "Oman", currency: "Rial" },
    "PAB": { country: "Panama", currency: "Balboa" },
    "PEN": { country: "Peru", currency: "Sol" },
    "PGK": { country: "Papua New Guinea", currency: "Kina" },
    "PHP": { country: "Philippines", currency: "Peso" },
    "PKR": { country: "Pakistan", currency: "Rupee" },
    "PLN": { country: "Poland", currency: "Zloty" },
    "PYG": { country: "Paraguay", currency: "Guarani" },
    "QAR": { country: "Qatar", currency: "Rial" },
    "RON": { country: "Romania", currency: "Leu" },
    "RSD": { country: "Serbia", currency: "Dinar" },
    "RUB": { country: "Russia", currency: "Ruble" },
    "RWF": { country: "Rwanda", currency: "Franc" },
    "SAR": { country: "Saudi Arabia", currency: "Riyal" },
    "SBD": { country: "Solomon Islands", currency: "Dollar" },
    "SCR": { country: "Seychelles", currency: "Rupee" },
    "SDG": { country: "Sudan", currency: "Pound" },
    "SEK": { country: "Sweden", currency: "Krona" },
    "SGD": { country: "Singapore", currency: "Dollar" },
    "SHP": { country: "Saint Helena", currency: "Pound" },
    "SLE": { country: "Sierra Leone", currency: "Leone" },
    "SOS": { country: "Somalia", currency: "Shilling" },
    "SRD": { country: "Suriname", currency: "Dollar" },
    "STD": { country: "São Tomé and Príncipe", currency: "Dobra" },
    "SVC": { country: "El Salvador", currency: "Colón" },
    "SYP": { country: "Syria", currency: "Pound" },
    "SZL": { country: "Swaziland", currency: "Lilangeni" },
    "THB": { country: "Thailand", currency: "Baht" },
    "TJS": { country: "Tajikistan", currency: "Somoni" },
    "TMT": { country: "Turkmenistan", currency: "Manat" },
    "TND": { country: "Tunisia", currency: "Dinar" },
    "TOP": { country: "Tonga", currency: "Pa'anga" },
    "TRY": { country: "Turkey", currency: "Lira" },
    "TTD": { country: "Trinidad and Tobago", currency: "Dollar" },
    "TVD": { country: "Tuvalu", currency: "Dollar" },
    "TWD": { country: "Taiwan", currency: "New Dollar" },
    "TZS": { country: "Tanzania", currency: "Shilling" },
    "UAH": { country: "Ukraine", currency: "Hryvnia" },
    "UGX": { country: "Uganda", currency: "Shilling" },
    "USD": { country: "United States", currency: "Dollar" },
    "UYU": { country: "Uruguay", currency: "Peso" },
    "UZS": { country: "Uzbekistan", currency: "Som" },
    "VED": { country: "Venezuela", currency: "Bolívar" },
    "VND": { country: "Vietnam", currency: "Dong" },
    "VUV": { country: "Vanuatu", currency: "Vatu" },
    "WST": { country: "Samoa", currency: "Tala" },
    "XAF": { country: "Central Africa", currency: "CFA Franc" },
    "XCD": { country: "East Caribbean", currency: "Dollar" },
    "XDR": { country: "IMF", currency: "Special Drawing Rights" },
    "XOF": { country: "West Africa", currency: "CFA Franc" },
    "XPF": { country: "French Polynesia", currency: "CFP Franc" },
    "YER": { country: "Yemen", currency: "Rial" },
    "ZAR": { country: "South Africa", currency: "Rand" },
    "ZMW": { country: "Zambia", currency: "Kwacha" },
    "ZWL": { country: "Zimbabwe", currency: "Dollar" }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { countryList, currencyWithCountryName };
}
