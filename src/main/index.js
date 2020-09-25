import unhandled from 'electron-unhandled'
import PasswordManager from 'application'
import { openNewGitHubIssue, debugInfo } from 'electron-util'

unhandled({
  reportButton: error => {
    openNewGitHubIssue({
      user: 'AndresMorelos',
      repo: 'password-manager',
      body: `\`\`\`\n${error.stack}\n\`\`\`\n\n---\n\n${debugInfo()}`
    })
  }
})

new PasswordManager(CONFIG)
