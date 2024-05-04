class ApiError extends Error {
    constructor(status, message) {
        super();
    }
}

export{ApiError}