console.log('JS loaded 🍕')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed 🍇')

  const currentTime = document.getElementById('currentTime')
  const currentDate = document.getElementById('currentDate')

  let date = null
  let time = null

  const timeFormat = document.getElementById('timeFormat')

  let twentyFourHrs = true

  let hh = null

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



    timeFormat.addEventListener('click', () => {
      twentyFourHrs = twentyFourHrs === false ? true : false
      console.log(twentyFourHrs)
      timeFormat.innerHTML = twentyFourHrs === true ? 'Set to 12hr Time Format' : 'Set to 24hr Time Format'
      setClock()
    })

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
