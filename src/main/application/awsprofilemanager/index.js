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
      data.new_name = data.name
      this.manager.edit_profile(data.old_name, data)
      this.saveProfiles()
    } catch (error) {}
  }

  deleteProfile(data) {
    this.manager.delete_profile(data.name)
    this.saveProfiles()
  }

  saveProfiles() {
    try {
      return this.manager.save_file()
    } catch (error) {}
  }
}
