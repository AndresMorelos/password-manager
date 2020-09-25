import AWSProfileManager from 'manage-aws-credentials'

export class AWSCredentialsManager {
    constructor(){
        this.manager = AWSProfileManager
    }

    loadProfiles(){
        return this.manager.getCredentials()
    }

    addProfile(data){
        return this.manager.add_profile(data.name, data)
    }

    updateProfile(){
        return this.manager.edit_profile(data.name, data.name, data)
    }

    deleteProfile(){
        throw new Error('Not Implemented')
    }

    saveProfiles(){
        this.manager.save_file()
    }
}