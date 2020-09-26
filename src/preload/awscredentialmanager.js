import { AWSCredentialsManager } from 'application/awsprofilemanager'

let awsCredentialsManager

window.setupAWsCredentialManager = () => {
  awsCredentialsManager = new AWSCredentialsManager()
}

window.updateAWSProfile = value => awsCredentialsManager.updateProfile(value)
window.addAWSProfile = value => awsCredentialsManager.addProfile(value)
window.deleteAWSProfile = value => awsCredentialsManager.deleteProfile(value)
