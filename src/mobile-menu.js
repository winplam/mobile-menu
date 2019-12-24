function mobileMenu() {
  function createPanel(button, panel, index) {
    const newPanel = document.createElement('div')
    newPanel.className = 'panel'
    // newPanel.id = `panel-${index}`
    const paragraph = document.createElement('p')
    paragraph.textContent = panel
    newPanel.appendChild(paragraph)
    button.parentNode.insertBefore(newPanel, button.nextSibling)
    button.parentNode.insertBefore(newPanel, button.nextSibling)
  }

  function createMenu(parent, sections, panels) {
    const parentElement = document.getElementById('mobile-menu')
    sections.forEach((section, index) => {
        const newSection = document.createElement('button')
        newSection.className = 'mobile-menu'
        // newSection.id = `menu-${index}`
        newSection.textContent = section
        parentElement.appendChild(newSection)
        createPanel(newSection, panels[index], index)
      },
    )
    accordion(document.querySelectorAll('.mobile-menu'))
  }

  const accordion = (accordion) => {
    console.log(accordion)
    const togglePanel = (e) => {
      e.target.classList.toggle('active')
      let panel = e.target.nextElementSibling
      panel.style.maxHeight
        ? panel.style.maxHeight = null
        : panel.style.maxHeight = panel.scrollHeight + 'px'
    }

    accordion.forEach(e => {
      e.addEventListener('click', e => togglePanel(e))
    })
  }

  return { createMenu }
}

export default mobileMenu
