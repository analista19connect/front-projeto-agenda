const MONTHS = [
    '',
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ]
  
  const moneyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  
  function getPercent(current: any, previous: any) {
    return (current / previous - 1) * 100
  }
  
  function formatMoney(value: any) {
    return moneyFormatter.format(value)
  }
  
  function formatPercent(value: any) {
    const symbol = value > 0 ? '+' : ''
    return symbol + value.toFixed(2).replace('.', ',') + '%'
  }
  
  function getMonth(monthNumber: any) {
    return MONTHS[monthNumber]
  }
  function formatDocument(document: any){
    let docFormatted = ""+document
    let sup = '';
    if(docFormatted.length > 11){
        while(docFormatted.length < 14){
            sup += '0';
            docFormatted = sup + docFormatted;
        }
        return docFormatted.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5")
    }else{
        while(docFormatted.length < 11){
            sup += '0';
            docFormatted = sup + docFormatted;
        }
        return docFormatted.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4")
    }
  }

  function formatData(dataNumber: any){
    var d = new Date(dataNumber),
    
    month = '' + (d.getMonth() + 1),
    day = '' + (d.getDate() + 1),
    year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return `${day}/${month}/${year}`;
  }

  function formatCEP(CEPNumber: any){
    return CEPNumber.replace(/(\d{5})(\d{3})/g, "\$1-$2")
  }
  function formatPhone(phoneNumber: any){
    if(phoneNumber.length === 11){
      return phoneNumber.replace(/(\d{2})(\d{4})(\d{4})/g, "\($1) $2-$3")
    }else{
      return phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/g, "\($1) $2-$3")
    }
  }
  function formatTrim(trimString: any){
    return trimString.trim()
  }
  function formatUpper(upperString: any){
    return upperString.toUpperCase()
  }
  function formatLower(lowerString: any){
    return lowerString.toLowerCase()
  }
  function formatReference(numberReference: any){
    return numberReference.toString().replace(/(\d{4})(\d{2})/g, "\$2/$1")
  }

  
  export { formatMoney, formatPercent, getMonth, getPercent, formatDocument, formatData, formatCEP, formatPhone, formatTrim, formatUpper,formatLower, formatReference  }