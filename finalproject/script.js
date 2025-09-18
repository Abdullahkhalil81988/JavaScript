// Currency Converter with Free API
const BASE_URL = "https://api.exchangerate-api.com/v4/latest/";
const btn = document.querySelector("button");


// Country list embedded directly
const countryList = {
    AED: "AE", AFN: "AF", ALL: "AL", AMD: "AM", ANG: "AN", AOA: "AO", ARS: "AR", AUD: "AU", AWG: "AW", AZN: "AZ",
    BAM: "BA", BBD: "BB", BDT: "BD", BGN: "BG", BHD: "BH", BIF: "BI", BMD: "BM", BND: "BN", BOB: "BO", BRL: "BR", 
    BSD: "BS", BTN: "BT", BWP: "BW", BYN: "BY", BZD: "BZ", CAD: "CA", CDF: "CD", CHF: "CH", CLP: "CL", CNY: "CN", 
    COP: "CO", CRC: "CR", CUP: "CU", CVE: "CV", CZK: "CZ", DJF: "DJ", DKK: "DK", DOP: "DO", DZD: "DZ", EGP: "EG", 
    ERN: "ER", ETB: "ET", EUR: "EU", FJD: "FJ", FKP: "FK", GBP: "GB", GEL: "GE", GGP: "GG", GHS: "GH", GIP: "GI", 
    GMD: "GM", GNF: "GN", GTQ: "GT", GYD: "GY", HKD: "HK", HNL: "HN", HRK: "HR", HTG: "HT", HUF: "HU", IDR: "ID", 
    ILS: "IL", IMP: "IM", INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS", JEP: "JE", JMD: "JM", JOD: "JO", JPY: "JP", 
    KES: "KE", KGS: "KG", KHR: "KH", KMF: "KM", KPW: "KP", KRW: "KR", KWD: "KW", KYD: "KY", KZT: "KZ", LAK: "LA", 
    LBP: "LB", LKR: "LK", LRD: "LR", LSL: "LS", LYD: "LY", MAD: "MA", MDL: "MD", MGA: "MG", MKD: "MK", MMK: "MM", 
    MNT: "MN", MOP: "MO", MRU: "MR", MUR: "MU", MVR: "MV", MWK: "MW", MXN: "MX", MYR: "MY", MZN: "MZ", NAD: "NA", 
    NGN: "NG", NIO: "NI", NOK: "NO", NPR: "NP", NZD: "NZ", OMR: "OM", PAB: "PA", PEN: "PE", PGK: "PG", PHP: "PH", 
    PKR: "PK", PLN: "PL", PYG: "PY", QAR: "QA", RON: "RO", RSD: "RS", RUB: "RU", RWF: "RW", SAR: "SA", SBD: "SB", 
    SCR: "SC", SDG: "SD", SEK: "SE", SGD: "SG", SHP: "SH", SLE: "SL", SOS: "SO", SRD: "SR", STD: "ST", SVC: "SV", 
    SYP: "SY", SZL: "SZ", THB: "TH", TJS: "TJ", TMT: "TM", TND: "TN", TOP: "TO", TRY: "TR", TTD: "TT", TVD: "TV", 
    TWD: "TW", TZS: "TZ", UAH: "UA", UGX: "UG", USD: "US", UYU: "UY", UZS: "UZ", VED: "VE", VND: "VN", VUV: "VU", 
    WST: "WS", XAF: "CM", XCD: "AG", XDR: "XDR", XOF: "SN", XPF: "PF", YER: "YE", ZAR: "ZA", ZMW: "ZM", ZWL: "ZW"
};

// Populate dropdown with currencies
const dropdowns = document.querySelectorAll("select");
for (let i = 0; i < dropdowns.length; i++) {
    for (let currencyCode in countryList) {
        let option = document.createElement("option");
        option.value = currencyCode;
        option.innerText = currencyCode;
        dropdowns[i].appendChild(option);
    }
    dropdowns[i].addEventListener("change", (evt) => {
        updateflags(evt.target);
    });
}
const updateflags = (element) => {
    for (let code in countryList) {
        if (code == element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagsapi.com/${countryList[code]}/flat/64.png`;
        }
    }
};
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let amount = document.querySelector("input").value;
    if (amount === "" || isNaN(amount) || amount <= 0) {
        amount = 1;
    }
    // Convert amount to number
    amount = parseFloat(amount);
    
    let fromCurrency = document.querySelector("select[name='from']").value;
    let toCurrency = document.querySelector("select[name='to']").value;
    if (fromCurrency === toCurrency) {
        document.querySelector(".msg").innerText = "Please select different currencies";
        return;
    }
    
    document.querySelector(".msg").innerText = "Getting exchange rate...";
    
    let url = `${BASE_URL}${fromCurrency}`;
    fetch(url).then(response => response.json()).then(data => {
        let rate = data.rates[toCurrency];
        let convertedAmount = (amount * rate).toFixed(2);
        document.querySelector(".msg").innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    }).catch(error => {
        console.error('Error:', error);
        document.querySelector(".msg").innerText = 'Failed to fetch exchange rate. Please try again.';
    });
});

// Add Enter key support to input field
const inputField = document.querySelector("input");
if (inputField) {
    inputField.addEventListener("keypress", (evt) => {
        if (evt.key === "Enter") {
            evt.preventDefault();
            btn.click(); // Trigger the convert button
        }
    });
}

// Add exchange icon functionality
const exchangeIcon = document.querySelector(".fa-right-left");
if (exchangeIcon) {
    exchangeIcon.addEventListener("click", () => {
        let fromSelect = document.querySelector("select[name='from']");
        let toSelect = document.querySelector("select[name='to']");
        let temp = fromSelect.value;
        fromSelect.value = toSelect.value;
        toSelect.value = temp;
        updateflags(fromSelect);
        updateflags(toSelect);
    });
}

// Set default currencies
window.addEventListener("load", () => {
    document.querySelector("select[name='from']").value = "USD";
    document.querySelector("select[name='to']").value = "PKR";
    updateflags(document.querySelector("select[name='from']"));
    updateflags(document.querySelector("select[name='to']"));
});
