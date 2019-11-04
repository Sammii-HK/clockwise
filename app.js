console.log('JS loaded 🍕')

document.addEventListener('DOMContentLoaded', () => {

  const currentTime = document.getElementById('currentTime')
  const currentDate = document.getElementById('currentDate')
  const timeFormat = document.getElementById('timeFormat')
  const dateFormat = document.getElementById('dateFormat')

  let date = null
  let time = null
  let hh = null
  let twentyFourHrs = true
  let ddMmYyyy = true


  const setClock = function() {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mo = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    const mi = String(today.getMinutes()).padStart(2, '0')
    const ss = String(today.getSeconds()).padStart(2, '0')

    hh = today.getHours()

    timeFormat.innerText = twentyFourHrs === true ? '12 hour clock' : '24 hour clock'

    date = mo + '/' + dd + '/' + yyyy
    time = hh + ':' + mi + ':' + ss

    // Checks time format for AM/PM addition
    if (twentyFourHrs === false) {
      const amOrPm = hh >= 12 ? 'pm' : 'am'
      hh = (hh % 12)
      hh = hh !== 0 ? hh : 12
      time = hh + ':' + mi + ':' + ss + amOrPm
    }


    currentDate.innerText = date
    currentTime.innerText = time
  }
  setClock()

  setInterval(setClock, 1000)



  timeFormat.addEventListener('click', () => {
    twentyFourHrs = twentyFourHrs === false ? true : false
    setClock()
  })

  dateFormat.addEventListener('click', () => {
    ddMmYyyy = ddMmYyyy === false ? true : false
    console.log(ddMmYyyy)
    setClock()
  })









})
