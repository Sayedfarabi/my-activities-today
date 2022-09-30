const addToDb = minutes => {
    localStorage.setItem("Activities-Time", minutes);
}

const getFromDb = () => {
    const getTime = localStorage.getItem("Activities-Time");
    const storedTime = JSON.parse(getTime);
    return storedTime
}

export { addToDb, getFromDb }