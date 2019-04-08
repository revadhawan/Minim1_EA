export class Bike {

    constructor(_id = '', name = '', kms = '', description = ''){
        this._id = _id
        this.name = name
        this.kms = kms
        this.description = description
    }

    _id: string
    name: string
    kms: string
    description: string

}
