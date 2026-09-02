document.addEventListener('DOMContentLoaded', () => {
  const tabs = [
    { tabId: 'contacts-tab', paneId: 'contacts' },
    { tabId: 'chats-tab', paneId: 'chats' },
    { tabId: 'profile-tab', paneId: 'profile' },
  ]

  tabs.forEach(({ tabId, paneId }) => {
    const tabLink = document.getElementById(tabId)
    if (!tabLink) return

    tabLink.addEventListener('click', (event) => {
      event.preventDefault()
      tabs.forEach(({ paneId: otherPaneId }) => {
        const pane = document.getElementById(otherPaneId)
        if (pane) pane.classList.toggle('is-active', otherPaneId === paneId)
      })
    })
  })

  const currentChatTab = document.getElementById('current-chat-tab')
  const currentChat = document.getElementById('current-chat')
  const chatListPane = document.getElementById('chat-list-pane')

  if (currentChatTab && currentChat) {
    currentChatTab.addEventListener('click', (event) => {
      event.preventDefault()
      currentChat.classList.add('is-active')
      if (chatListPane) chatListPane.classList.add('is-hidden')
    })
  }
})
