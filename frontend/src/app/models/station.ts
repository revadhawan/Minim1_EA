export class Station {

    constructor(_id = '', name = '', bike = null, state = '', description = ''){
        this._id = _id
        this.name = name
        this.state = state
        this.description = description
    }

    _id: string
    name: string
    state: string
    description: string
}
