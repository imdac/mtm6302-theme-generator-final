// retrieve HTML elements
const $body = document.body
const $title = document.getElementById('title')
const $form = document.getElementById('form')
const $bgcolor = document.getElementById('bgcolor')
const $invert = document.getElementById('invert')
const $font = document.getElementById('font')
const $placeholder = document.getElementById('placeholder')


// setting the background color
function setBackgroundColor () {
  if ($invert.checked) {
    $body.style.color = $bgcolor.value
    $body.style.backgroundColor = 'black'
  } else {
    $body.style.color = 'black'
    $body.style.backgroundColor = $bgcolor.value
  }
}

$bgcolor.addEventListener('change', setBackgroundColor)

$invert.addEventListener('change', setBackgroundColor)

// setting the font family
function setFontFamily () {
  $body.style.fontFamily = $font.value
}

$font.addEventListener('change', setFontFamily)


// setting the title text
function setTitle () {
  if ($placeholder.value) {
    $title.textContent = $placeholder.value
  } else {
    $title.textContent = 'Theme Generator'
  }
}

$placeholder.addEventListener('input', setTitle)


// saving the settings to local storage
$form.addEventListener('submit', function (e) {
  e.preventDefault()

  const settings = {
    bgcolor: $bgcolor.value,
    invert: $invert.checked,
    font: $font.value,
    placeholder: $placeholder.value
  }

  localStorage.setItem('settings', JSON.stringify(settings))
})


// getting settings from local storage
const ls = localStorage.getItem('settings')

if (ls) {
  const settings = JSON.parse(ls)
  $bgcolor.value = settings.bgcolor
  $invert.checked = settings.invert
  $font.value = settings.font
  $placeholder.value = settings.placeholder 

  setBackgroundColor()
  setFontFamily()
  setTitle()
}