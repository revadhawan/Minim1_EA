export class Station {

    constructor(_id = '', name = '', bike = null, state = '', description = ''){
        this._id = _id
        this.name = name
        this.bike = bike
        this.state = state
        this.description = description
    }

    _id: string
    name: string
    bike: []
    state: string
    description: string
}
