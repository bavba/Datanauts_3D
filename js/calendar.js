// https://codepen.io/Gilberto06/pen/gOOqgjB
console.log(kp_forecast_data[0]);

console.log("loading calendar");
/*
 * Default month names
 */
const MonthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  
  /*
   * Default weekday names
   */
const DayNames = [
'D', 'L', 'M', 'M', 'J', 'V', 'S'
];

/*
* Add your locale here (if the first weekday isn't Sunday)
*/
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

/*
* Constants
*/

const Events = {
DATE_SELECTED: 'dateSelected',
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

/*
* Default options
*/
const Defaults = {
    minDate: new Date(-8640000000000000),
    maxDate: new Date(8640000000000000),
};

function get_kp(date0, date1) // TODO we are not getting kp :) we are geting g
{  
    var min_date = new Date(     // TODO too much hardcoding the variable is declared 2 times.
      2016, //year
      0,    //month
      1     //day        
    )
    first_index = Math.round((date0 - min_date) / (1000 * 60 * 60 * 24)); //TODO would be nice to make a function
    amount = Math.round((date1 - date0) / (1000 * 60 * 60 * 24)) + 1; 
    result = [];
    console.log(first_index, amount, result);
    for (i = 0; i < amount; i++)
    {
      //console.log("appending: ", kp_forecast_data[first_index + i])
      result.push(kp_forecast_data[first_index + i]);
    }  
    console.log("returning: ", result);
    return result;
}
    
class Pk_table{
    constructor(){
        this.table = document.getElementById("kp-table");
    }
    update(date0, date1)
    {
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
    
    /*
     * Public
     */
    
    setDate(date) {
        if (date.getTime() < this._minDate.getTime()) {
            return;
        }

        if (date.getTime() > this._maxDate.getTime()) {
            return;
        }      
        this.tk_selected++; 
        if (this.tk_selected == 3)
        {
            this.tk_selected = 1;
        }
        if (this.tk_selected == 2){
            this._selectedDate= date;
        }
        else {
            this._selectedDate = date;
            this.tk_selectedDate0 = date;
        }

        if (this.tk_selected == 2)
          document.querySelector(".table-container").classList.remove("hidden");  
        if (this.tk_selected == 1)
          document.querySelector(".table-container").classList.add("hidden"); 
        
        this.reset();

        if (this.table)
            this.table.update(this._selectedDate, this.tk_selectedDate0);
    }
  
    reset() {
      this._month = this._selectedDate.getMonth();
      this._year = this._selectedDate.getFullYear();
  
      this._updateUi();
    }
    
    prevMonth() {
      if (this._isMinMonth()) {
        return;
      }
      
      if (--this._month < 0) {
        this._month += 12;
        this._year--;
      }
      
      this._updateUi();
    }
    
    nextMonth() {
      if (this._isMaxMonth()) {
        return;
      }
      
      if (++this._month >= 12) {
        this._month -= 12;
        this._year++;
      }
      
      this._updateUi();
    }
    
    /*
     * Private
     */
    
    _localize(locale) {
      locale = locale ||
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage;
      
      const date = new Date();
      date.setDate(date.getDate() - date.getDay());
  
      this._dayNames = DayNames.map((defaultDay, i) => {
        const date = new Date();
        date.setDate(date.getDate() - date.getDay() + i);
        return date.toLocaleString(locale, {weekday: 'short'}) || defaultDay;
      });
      
      this._monthNames = MonthNames.map((defaultMonth, i) => {
        const date = new Date();
        date.setMonth(i);
        return date.toLocaleString(locale, {month: 'long'}) || defaultMonth;
      });
      
      this._startOfWeek = StartOfWeek[locale] || 0;
    }
    
    _createUi() {
      this._root.classList.add(ClassNames.ROOT);
  
      const header = document.createElement('div');
      header.className = ClassNames.HEADER;
      
      this._monthElem = document.createElement('span');
      this._monthElem.className = ClassNames.MONTH;
      header.appendChild(this._monthElem);
      
      header.appendChild(document.createTextNode(' '));
      
      this._yearElem = document.createElement('span');
      this._yearElem.className = ClassNames.YEAR;
      header.appendChild(this._yearElem);
      
      this._prevBtn = document.createElement('button');
      this._prevBtn.classList.add(
        ClassNames.BTN,
        ClassNames.BTN_PREV
      );
      this._prevBtn.addEventListener('click', () => {
        this.prevMonth();
      });
      header.appendChild(this._prevBtn);
      
      this._nextBtn = document.createElement('button');
      this._nextBtn.classList.add(
        ClassNames.BTN,
        ClassNames.BTN_NEXT
      );
      this._nextBtn.addEventListener('click', () => {
        this.nextMonth();
      });
      header.appendChild(this._nextBtn);
      
      this._root.appendChild(header);
      
      const table = document.createElement('table');
      table.className = ClassNames.TABLE;
      
      const tableHead = document.createElement('thead');
      tableHead.className = ClassNames.TABLE_HEAD;
      
      const tableHeadRow = document.createElement('tr');
      tableHeadRow.className = ClassNames.TABLE_ROW;
      
      for (let i = 0; i < 7; i++) {
        const day = this._dayNames[(i + this._startOfWeek) % 7];
        const colHeader = document.createElement('th');
        colHeader.scope = 'col';
        colHeader.className = ClassNames.TABLE_COL_HEADER;
        colHeader.textContent = day;
        tableHeadRow.appendChild(colHeader);
      }
      
      tableHead.appendChild(tableHeadRow);
      
      table.appendChild(tableHead);
      
      this._tableBody = document.createElement('tbody');
      this._tableBody.className = ClassNames.TABLE_BODY;
      this._tableBody.addEventListener('click', (event) => {
        const target = event.target;
  
        if (
          target.classList.contains(ClassNames.TABLE_CELL) &&
          target.dataset.date
        ) {
          const event = new CustomEvent(Events.DATE_SELECTED, {
            detail: {
              date: new Date(
                this._year,
                this._month,
                target.dataset.date,
              ),
            },
          });
          
          this._root.dispatchEvent(event);
        }
      });
      table.appendChild(this._tableBody);
      
      this._root.appendChild(table);
    }
    
    _updateUi() {
      this._monthElem.textContent = this._monthNames[this._month];
      this._yearElem.textContent = this._year;
  
      if (this._isMinMonth()) {
        this._prevBtn.classList.add(ClassNames.BTN_DISABLED);
      } else {
        this._prevBtn.classList.remove(ClassNames.BTN_DISABLED);
      }
      
      if (this._isMaxMonth()) {
        this._nextBtn.classList.add(ClassNames.BTN_DISABLED);
      } else {
        this._nextBtn.classList.remove(ClassNames.BTN_DISABLED);
      }
  
      this._tableBody.innerHTML = '';
      
      const date = new Date(this._year, this._month, 1);
      date.setDate(1 - (date.getDay() + 7 - this._startOfWeek) % 7);
      
      do {
        const row = document.createElement('tr');
        
        for (let i = 0; i < 7; i++) {
          const cell = document.createElement('td');
          cell.classList.add(ClassNames.TABLE_CELL);
          
          if (date.getMonth() == this._month) {
            cell.textContent = date.getDate();
            
            if (
              (this._minDate.getTime() <= date.getTime()) &&
              (this._maxDate.getTime() >= date.getTime())
            ) {
                let dte0 = this.tk_selectedDate0;
               let dte1 = this._selectedDate;
               if (dte1 < dte0)
               {
                let aux = dte1;
                dte1 = dte0;
                dte0 = aux;
               }
              cell.dataset.date = date.getDate();
              if (date.getTime() <= new Date(
                dte1.getFullYear(),
                dte1.getMonth(),
                dte1.getDate()
              ).getTime() &&
              date.getTime() >= new Date(
                dte0.getFullYear(),
                dte0.getMonth(),
                dte0.getDate()
              ).getTime()

              ) {
                cell.classList.add(ClassNames.TABLE_CELL_SELECTED);
              }
            } else {
              cell.classList.add(ClassNames.TABLE_CELL_DISABLED);
            }
          }
  
          row.appendChild(cell);
  
          date.setDate(date.getDate() + 1);
        }
        
        this._tableBody.appendChild(row);
      } while (date.getMonth() == this._month);
    }
    
    _isMinMonth() {
      return (
        (this._month == this._minDate.getMonth()) &&
        (this._year == this._minDate.getFullYear())
      );
    }
    
    _isMaxMonth() {
      return (
        (this._month == this._maxDate.getMonth()) &&
        (this._year == this._maxDate.getFullYear())
      );
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
  document.querySelector(".table-container").classList.add("hidden");
  const calendarElem = document.getElementById('calendar');
  if (calendarElem != null) {
    const today = new Date();
  
    const calendar = new Calendar(calendarElem, {
      minDate: new Date(
        2016, //year
        0,    //month
        1     //day        
      ),
      maxDate: new Date(
        2024,
        7,
        30
      ),
    });
  
    calendarElem.addEventListener(Events.DATE_SELECTED, (event) => {
      calendar.setDate(event.detail.date);
    });
  }
});
  
console.log("loaded calendar");