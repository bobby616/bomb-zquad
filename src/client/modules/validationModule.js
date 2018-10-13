const areAgesValid = function (age) {
    if (age === null) {
        return false;
    }
    if (age.length === 0) {
        return false;
    }
    if (typeof (Number(age)) !== "number") {
        return false;
    }
    return true;
};

const areKilosValid = function (kilos) {
    if (kilos === null) {
        return false;
    }
    if (kilos.length === 0) {
        return false;
    }
    if (typeof (Number(kilos)) !== "number") {
        return false;
    }
    return true;
};

export {
    areAgesValid,
    areKilosValid
};