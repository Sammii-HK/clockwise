console.log('JS loaded 🍕')

document.addEventListener('DOMContentLoaded', () => {

  const currentTime = document.getElementById('currentTime')
  const currentDate = document.getElementById('currentDate')
  const timeFormat = document.getElementById('timeFormat')

  let date = null
  let time = null
  let hh = null
  let twentyFourHrs = true

  timeFormat.innerHTML = twentyFourHrs === true ? 'Set to 12hr Time Format' : 'Set to 24hr Time Format'
  
  timeFormat.addEventListener('click', () => {
    twentyFourHrs = twentyFourHrs === false ? true : false

    console.log(twentyFourHrs)
    setClock()
  })


  const setClock = function() {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mo = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    const mi = String(today.getMinutes()).padStart(2, '0')
    const ss = String(today.getSeconds()).padStart(2, '0')

    hh = today.getHours()

    date = mo + '/' + dd + '/' + yyyy
    time = hh + ':' + mi + ':' + ss




    // Checks time format for AM/PM addition
    if (twentyFourHrs === false) {
      const amOrPm = hh >= 12 ? 'pm' : 'am'
      time += amOrPm
      hh = (hh % 12) || 12
      console.log(time)
    }

    currentDate.innerHTML = date
    currentTime.innerHTML = time
  }

  setClock()

  setInterval(setClock, 1000)









})
