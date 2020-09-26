import AWSProfileManager from 'manage-aws-credentials'

export class AWSCredentialsManager {
  constructor() {
    this.manager = AWSProfileManager
  }

  loadProfiles() {
    try {
      return this.manager.getCredentials()
    } catch (error) {}
  }

  addProfile(data) {
    try {
      this.manager.add_profile(data.name, data)
      this.saveProfiles()
    } catch (error) {}
  }

  updateProfile(data) {
    try {
      this.manager.edit_profile(data.name, data.name, data)
      this.saveProfiles()
    } catch (error) {}
  }

  deleteProfile() {
    console.log('Not Implemented')
  }

  saveProfiles() {
    try {
      return this.manager.save_file()
    } catch (error) {}
  }
}
