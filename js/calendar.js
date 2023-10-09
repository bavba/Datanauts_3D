// Print the first element of kp_forecast_data
console.log(kp_forecast_data[0]);

// Log that the calendar is loading
console.log("Loading calendar");

// Default month names
const MonthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Default weekday names
const DayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// Define start of the week for various locales
const StartOfWeek = {
  'ar-BH': 6,
  'ar-DZ': 6,
  'ar-JO': 6,
  'ar-KW': 6,
  'ar-LB': 6,
  'ar-LY': 6,
  'ar-MA': 6,
  'ar-OM': 6,
  'ar-QA': 6,
  'ar-SA': 6,
  'ar-SD': 6,
  'ar-SY': 6,
  'ar-TN': 6,
  'ar-AE': 6,
  'ar-YE': 6,
  'ca-ES': 1,
  'ca': 1,
  'cs-CZ': 1,
  'cs': 1,
  'da_DK': 1,
  'da': 1,
  'de-AT': 1,
  'de-DE': 1,
  'de-LU': 1,
  'de-CH': 1,
  'de': 1,
  'el-GR': 1,
  'el': 1,
  'en_GB': 1,
  'en-IE': 1,
  'es-AR': 1,
  'es-BO': 1,
  'es-CL': 1,
  'es-CO': 1,
  'es-CR': 1,
  'es-DO': 1,
  'es-EC': 1,
  'es-SV': 1,
  'es-GT': 1,
  'es-HN': 1,
  'es-MX': 1,
  'es-NI': 1,
  'es-PA': 1,
  'es-PY': 1,
  'es-PE': 1,
  'es-PR': 1,
  'es-ES': 1,
  'es-UY': 1,
  'es-VE': 1,
  'et-EE': 1,
  'et': 1,
  'fi-FI': 1,
  'fi': 1,
  'fr-BE': 1,
  'fr-KM': 1,
  'fr-FR': 1,
  'fr-GN': 1,
  'fr-LU': 1,
  'fr-MC': 1,
  'fr-CH': 1,
  'fr': 1,
  'hr-HR': 1,
  'hr': 1,
  'hu-HU': 1,
  'hu': 1,
  'id-ID': 1,
  'is-IS': 1,
  'is': 1,
  'it-IT': 1,
  'it-CH': 1,
  'it': 1,
  'lt-LT': 1,
  'lt': 1,
  'nl-BE': 1,
  'nl-NL': 1,
  'nl': 1,
  'nb-NO': 1,
  'nb': 1,
  'nn-NO': 1,
  'nn': 1,
  'pl-PL': 1,
  'pl': 1,
  'pt-MZ': 1,
  'pt-PT': 1,
  'pt': 1,
  'ro-MD': 1,
  'ro-RO': 1,
  'ro': 1,
  'sq-AL': 6,
  'ru-MD': 1,
  'ru-RU': 1,
  'ru-UA': 1,
  'ru': 1,
  'sk-SK': 1,
  'sk': 1,
  'sl-SI': 1,
  'sl': 1,
  'sr-Cyrl': 1,
  'sr-Cyrl-BA': 1,
  'sr-Cyrl-ME': 1,
  'sr-Cyrl-RS': 1,
  'sr-Latn': 1,
  'sr-Latn-BA': 1,
  'sr-Latn-ME': 1,
  'sr-Latn-RS': 1,
  'sr': 1,
  'sr-BA': 1,
  'sr-ME': 1,
  'sr-RS': 1,
  'sv-FI': 1,
  'sv-SE': 1,
  'sv': 1,
  'tr-TR': 1,
  'tr': 1,
  'uk-UA': 1,
  'uk': 1,
};

// Constants
const Events = {
  DATE_SELECTED: 'dateSelected'
};

const ClassNames = {
  BTN: 'calendar__btn',
  BTN_DISABLED: 'calendar__btn_disabled',
  BTN_PREV: 'calendar__btn_prev',
  BTN_NEXT: 'calendar__btn_next',
  HEADER: 'calendar__header',
  MONTH: 'calendar__month',
  ROOT: 'calendar',
  TABLE: 'calendar__table',
  TABLE_BODY: 'calendar__table-body',
  TABLE_CELL: 'calendar__table-cell',
  TABLE_CELL_DISABLED: 'calendar__table-cell_disabled',
  TABLE_CELL_SELECTED: 'calendar__table-cell_selected',
  TABLE_COL_HEADER: 'calendar__table-col-header',
  TABLE_HEAD: 'calendar__table-head',
  TABLE_ROW: 'calendar__table-row',
  YEAR: 'calendar__year',
};

// Default options
const Defaults = {
  minDate: new Date(-8640000000000000),
  maxDate: new Date(8640000000000000)
};

// Function to calculate kp for a given date range
function getKP(date0, date1) {
  const min_date = new Date(2016, 0, 1);
  const first_index = Math.round((date0 - min_date) / (1000 * 60 * 60 * 24));
  const amount = Math.round((date1 - date0) / (1000 * 60 * 60 * 24)) + 1;
  const result = [];
  
  for (let i = 0; i < amount; i++) {
    result.push(kp_forecast_data[first_index + i]);
  }
  
  console.log("Returning: ", result);
  return result;
}

// Class to handle the table
class KPTable {
  constructor() {
    this.table = document.getElementById("kp-table");
  }

  update(date0, date1) {
    this.table.innerHTML = "";
    if (date1 < date0)
    {
        let aux = date0;
        date0 = date1;
        date1 = aux;
    }
    let table_data = get_kp(date0, date1);
    let table = document.createElement("table"); 
    //let t_head =  document.createElement("thead");
    //let t_row =  document.createElement("tr");
 
    for (let i = 0; i <  table_data[0].length; i++)
    {
        
        let row = document.createElement("tr");
        let th = document.createElement("th");
        let td = document.createElement("td");
        //t_head.appendChild(th);
        //t_row.appendChild(td);
        
        th.innerHTML = table_data[i][0];
        td.innerHTML = table_data[i][1];
        row.appendChild(th);
        row.appendChild(td);
        table.appendChild(row);
    }
    //table.appendChild(t_head);
    //table.appendChild(t_row);
    this.table.appendChild(table);
  }
}

// Class to handle the calendar
class Calendar {
  constructor(root, {minDate, maxDate, selectedDate}) {
    this._root = root;

    this._minDate = minDate || Defaults.minDate;
    this._maxDate = maxDate || Defaults.maxDate;
    
    this._localize();
    
    this._createUi();
    
    this.tk_selected = -1;
    
    this.setDate(selectedDate || new Date());
    this.table = new Pk_table();
  }
}

// Initialize the calendar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Hide the table initially
  document.querySelector(".table-container").classList.add("hidden");
  
  // Get the calendar element
  const calendarElem = document.getElementById('calendar');
  
  if (calendarElem) {
    // Create a new calendar instance
    const calendar = new Calendar(calendarElem, {
      minDate: new Date(2016, 0, 1),
      maxDate: new Date(2024, 7, 30)
    });
    
    // Event listener for date selection
    calendarElem.addEventListener(Events.DATE_SELECTED, (event) => {
      calendar.setDate(event.detail.date);
    });
  }
});

// Log that the calendar is loaded
console.log("Calendar loaded");
