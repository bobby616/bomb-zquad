const InvalidAgeException = function () {
    return {
        error: "This age is invalid!"
    };
};

const InvalidWeightException = function () {
    return {
        error: "This weight is invalid!"
    };
};

export {
    InvalidAgeException,
    InvalidWeightException
};