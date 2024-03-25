function dMode() {
    document.getElementById('r-cont').style.backgroundColor = 'transparent'
    document.getElementById('r-cont').style.color = '#fff'
    document.getElementById('r-cont').style.transition = '1s'
    document.getElementById('darkMode').style.display = 'none'
    document.getElementById('lightMode').style.display = 'block'
    document.getElementById('dButton').style.color = '#444'
    document.getElementById('dButton').style.backgroundColor = '#fff'

}

function lMode() {
    document.getElementById('r-cont').style.backgroundColor = '#ddd'
    document.getElementById('r-cont').style.color = '#444'
    document.getElementById('r-cont').style.transition = '1s'
    document.getElementById('lightMode').style.display = 'none'
    document.getElementById('darkMode').style.display = 'block'
    document.getElementById('dButton').style.color = '#fff'
    document.getElementById('dButton').style.backgroundColor = '#444'
}

function dModeDetail() {
    document.getElementById('r-contDetail').style.backgroundColor = 'transparent'
    document.getElementById('r-contDetail').style.color = '#fff'
    document.getElementById('r-contDetail').style.transition = '1s'
    document.getElementById('profile').style.backgroundColor = 'transparent'
    document.getElementById('educations').style.backgroundColor = 'transparent'
    document.getElementById('experiences').style.backgroundColor = 'transparent'
    document.getElementById('pasFoto').style.backgroundColor = 'transparent'
    document.getElementById('pasFoto').style.transition = '1s'
    document.getElementById('darkMode').style.display = 'none'
    document.getElementById('lightMode').style.display = 'block'
    document.getElementById('dButton').style.color = '#444'
    document.getElementById('dButton').style.backgroundColor = '#fff'
}

function lModeDetail() {
    document.getElementById('r-contDetail').style.backgroundColor = '#aaa'
    document.getElementById('r-contDetail').style.color = '#444'
    document.getElementById('r-contDetail').style.transition = '1s'
    document.getElementById('profile').style.backgroundColor = '#ddd'
    document.getElementById('educations').style.backgroundColor = '#ddd'
    document.getElementById('experiences').style.backgroundColor = '#ddd'
    document.getElementById('pasFoto').style.backgroundColor = '#aaa'
    document.getElementById('pasFoto').style.transition = '1s'
    document.getElementById('lightMode').style.display = 'none'
    document.getElementById('darkMode').style.display = 'block'
    document.getElementById('dButton').style.color = '#fff'
    document.getElementById('dButton').style.backgroundColor = '#444'
}