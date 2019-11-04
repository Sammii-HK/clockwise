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


  const setTime = function() {
    const today = new Date()
    const mi = String(today.getMinutes()).padStart(2, '0')
    const ss = String(today.getSeconds()).padStart(2, '0')

    hh = today.getHours()

    timeFormat.innerText = twentyFourHrs === true ? '12 hour clock' : '24 hour clock'

    time = hh + ':' + mi + ':' + ss

    // Checks time format for AM/PM addition
    if (twentyFourHrs === false) {
      const amOrPm = hh >= 12 ? 'pm' : 'am'
      hh = (hh % 12)
      hh = hh !== 0 ? hh : 12
      time = hh + ':' + mi + ':' + ss + amOrPm
    }


    currentTime.innerText = time
  }
  setTime()

  setInterval(setTime, 1000)


  const months = [
    'January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  const setDate = function() {
    const today = new Date()
    const dd = today.getDate()
    const mo = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    const dotw = today.getDay()
    let dayCap = null
    // let dayCap = String(today.getDate())
    // if (dayCap === 4) dayCap = 'th'

    switch (today.getDate()) {
      case 1:
      case 21:
        dayCap = 'st'
        break
      case 2:
      case 22:
        dayCap = 'nd'
        break
      case 3:
      case 23:
        dayCap = 'rd'
        break
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
      case 31:
        dayCap = 'th'
        break
    }

    dateFormat.innerText = ddMmYyyy === true ? 'Day Month, Yr' : 'DD/MM/YY'

    if (ddMmYyyy === true) date = String(dd).padStart(2, '0') + '/' + mo + '/' + yyyy
    // else date = dotw + ' ' + months[mo -1] + ', ' + yyyy

    else date = days[dotw] + ' ' + dd + dayCap + ' ' + months[mo -1] + ', ' + yyyy
    currentDate.innerText = date

    // + dayCap

    console.log(date)
    console.log(days[dotw])

  }
  setDate()



  timeFormat.addEventListener('click', () => {
    twentyFourHrs = twentyFourHrs === false ? true : false
    setTime()
  })

  dateFormat.addEventListener('click', () => {
    ddMmYyyy = ddMmYyyy === false ? true : false
    console.log(ddMmYyyy)
    setDate()
  })









})
