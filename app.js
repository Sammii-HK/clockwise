console.log('JS loaded 🍕')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed 🍇')

  const currentTime = document.getElementById('currentTime')
  const currentDate = document.getElementById('currentDate')


  const setClock = function() {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mo = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    const hh = today.getHours()
    const mi = today.getMinutes()
    const ss = String(today.getSeconds()).padStart(2, '0')

    const date = mo + '/' + dd + '/' + yyyy
    const time = hh + ':' + mi + ':' + ss

    console.log(date)
    console.log(time)
    currentTime.innerHTML = time
    currentDate.innerHTML = date

  }

  setInterval(setClock, 100)






})
