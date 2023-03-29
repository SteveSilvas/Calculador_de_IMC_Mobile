const getNumbers = (value: string): number => {
    if (value == "") return 0.0;


    const cleanedValue = value.replace(/[^0-9.]/g, "");
    return parseFloat(cleanedValue);
};

export default getNumbers;
