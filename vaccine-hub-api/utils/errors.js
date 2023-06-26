class ExpressError extends Error {
    constructor(message, status) {
        super()
        this.message = message
        this.status = status
    }
}

class BadRequestError extends ExpressError{
    constructor(message, status){
        super()
        this.message = "Bad request"
        this.status = 400
    }
}

class NotFoundError extends ExpressError{
    constructor(message, status){
        super()
        this.message = "Not found"
        this.status = 404
    }
}

class ForbiddenError extends ExpressError{
    constructor(message, status){
        super()
        this.message = "Forbiddne"
        this.status = 403
    }
}
class Unauthorized extends ExpressError{
    constructor(message, status){
        super()
        this.message = "Unauthorized"
        this.status = 401
    }
}
module.exports = {
    ExpressError,
    NotFoundError,
    BadRequestError,
    Unauthorized,
    ForbiddenError
}