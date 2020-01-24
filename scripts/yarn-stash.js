const yarnStash = getSavedStash();
  
  const filters = {
    searchText: ''
  }
  
  renderYarn(yarnStash, filters)
  
   document.querySelector('#filter').addEventListener('input', function (e) {   
    filters.searchText = e.target.value
    renderYarn(yarnStash, filters)
  })
  
  
  //Allows you to add a yarn to local storage and store in stash
  document.querySelector('#new-yarn').addEventListener('submit', function (e) {
    e.preventDefault()
    const id = uuidv4();
    if (e.target[0].value != '' && e.target[1].value != '' && e.target[2].value != '') {
    yarnStash.push({
      id: id,
      name: e.target[0].value,
      weight: e.target[1].value,
      colorway: e.target[2].value,
      image: e.target[3].value

    })
    saveYarn(yarnStash)
    renderYarn(yarnStash, filters)
    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].value = ''
    e.target[3].value = ''

  } else {
    return
  }
  })