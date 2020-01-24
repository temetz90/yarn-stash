const yarnID = location.hash.substring(1);
let yarnStash = getSavedStash();
let yarn = yarnStash.find(function (yarn) {
    return yarn.id === yarnID
})

if (yarn === undefined) {
    location.assign('/index.html')
}

const yarnImage = document.createElement('img')
yarnImage.setAttribute('src', yarn.image)
document.querySelector('body').appendChild(yarnImage)

window.addEventListener('storage', function (e) {
    if (e.key === 'yarnStash') {
        yarnStash = JSON.parse(e.newValue)
        yarn = yarnStash.find(function (note) {
            return yarn.id === yarnID
        })
        
        if (yarn === undefined) {
            location.assign('/index.html')
        }
}
})