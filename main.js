const LinksSocialMedia = {
  github: 'BSchastai',
  youtube: 'UCio4YVUds0h8ZJ9cH8L3Nkg',
  facebook: 'bruno.viniciusschastai',
  instagram: 'bschastai',
  twitter: 'BrunoSchastai'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      gitLink.href = data.html_url
      userPhoto.src = data.avatar_url
      gitName.textContent = data.login
    })
}

getGitHubProfileInfos()
