
// get saved stash from local storage
const getSavedStash = function () {
    const yarnJSON = localStorage.getItem('yarnStash')
    if (yarnJSON != null) {
      return JSON.parse(yarnJSON)
    } else {
      return []
    }
  }

// render yarn to the DOM
const renderYarn = function (yarnStash, filters) {
    const filteredYarns = yarnStash.filter(function (yarn) {
      const searchTextMatch =  yarn.name.toLowerCase().includes(filters.searchText.toLowerCase())
      return searchTextMatch
  })
    
      document.querySelector('div#stash').innerHTML = ''
    
     filteredYarns.forEach(function (yarn) {
       document.querySelector('div#stash').appendChild(getStashDOM(yarn))
     })
  }

// function to save a yarn to the yarnStash in local storage
const saveYarn = function (yarnStash) {
  return localStorage.setItem('yarnStash', JSON.stringify(yarnStash));
}

// remove a yarn from the yarn stash in local storage
const removeYarn = function (id) {
  const yarnIndex = yarnStash.findIndex(function (yarn) {
    return yarn.id === id
  })

  if (yarnIndex > -1) {
    yarnStash.splice(yarnIndex, 1)
  }
}

// create dom elements when adding a new yarn to the stash via local storage
const getStashDOM = function (yarn) {
  const yarnEl = document.createElement('div')
  const textEl = document.createElement('a')
  const removeButton = document.createElement('button')

  // create yarn edit page link in the actual div
  textEl.setAttribute('href', `/edit-stash.html#${yarn.id}`)
  // textEl.setAttribute('target', 'blank')

  //add a yarn to the stash dom
  textEl.textContent = yarn.name + ' - ' + yarn.colorway
  yarnEl.appendChild(textEl)

  // set up a remove button to remove a yarn from the saved stash
  removeButton.textContent = 'Remove'
  yarnEl.appendChild(removeButton)
  removeButton.addEventListener('click', function (e) {
    removeYarn(yarn.id)
    saveYarn(yarnStash)
    renderYarn(yarnStash, filters)
  })

  return yarnEl
}