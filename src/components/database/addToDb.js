const addToDb = minutes => {
    localStorage.setItem("Break-Time", minutes);
}

const getFromDb = () => {
    const getTime = localStorage.getItem("Break-Time");
    const storedTime = JSON.parse(getTime);
    return storedTime
}

export { addToDb, getFromDb }