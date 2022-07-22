export function formatPrice(price) {
    let newPrice = price.toFixed(2);
    let decIndex = newPrice.indexOf(".");
    let numCommas = (decIndex - 1) / 3;
    if (numCommas >= 1) {
        let i = decIndex;
        do {
            i -= 3;
            newPrice = newPrice.slice(0, i) + "," + newPrice.slice(i);
        } while (i > 3);
    }
    return `$ ${newPrice}`;
}

export function checkUppercase(password) {
    let hasUppercase = false;
    for (let i = 0; i < password.length; i++) {
        if (isNaN(password[i]) && password[i] == password[i].toUpperCase()) {
            hasUppercase = true;
        }
    }
    return hasUppercase;
}

export function checkContainsNumber(password) {
    return /\d/.test(password);
}

export const getMaxInputLength = (inputType) => {
    const inputMaxValues = [
        { inputType: "first name", max: 256 },
        { inputType: "last name", max: 256 },
        { inputType: "email", max: 320 },
        { inputType: "phone", max: 11 },
        { inputType: "address", max: 60 },
        { inputType: "verification", max: 6 },
        { inputType: "product name", max: 40 },
        { inputType: "description", max: 100 },
    ];
    let maxValue = 50;
    for (let i = 0; i < inputMaxValues.length; i++) {
        if (inputType.includes(inputMaxValues[i].inputType)) {
            maxValue = inputMaxValues[i].max;
        }
    }
    return maxValue;
};

/* Check if the phone number matches a formatted number and return the number without formatting. */
export const unformatPhoneNumber = (number) => {
    const fs = number.replace(/\D/g, "").match(/(\d{1})(\d{3})(\d{3})(\d{4})/);

    return fs[0];
};

export function formatPhoneNumber(value) {
    // formatted string
    const fs = value.replace(/\D/g, "").match(/(\d{1})(\d{3})(\d{3})(\d{4})/);

    /* If the string formats properly, return it */
    if (fs) {
        return `+${fs[1]} (${fs[2]}) ${fs[3]} - ${fs[4]}`;
    }
    return "";
}

export const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let formattedMonth = month;
    if (formattedMonth[0] === "0") {
        formattedMonth = months[formattedMonth[1] - 1];
    }
    let formattedDay = day.slice(0, 2);

    return `${formattedMonth} ${formattedDay} ${year}`;
};