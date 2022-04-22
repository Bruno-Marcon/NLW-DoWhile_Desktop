const linksSocialMedia = {
  Github: 'Bruno-Marcon',
  youtube: 'UCnGLVqINvd8gp6ikoHy80Hw',
  instagram: 'marcon_bruno',
  facebook: 'marcon_bruno',
  twitter: 'marcon_bruno'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    alert(li.children[0].href)
  }
}
changeSocialMediaLinks()
