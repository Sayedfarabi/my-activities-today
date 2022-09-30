const addToDb = minutes => {
    let sumTime = 0;
    let time = [];
    if (!minutes) {
        minutes.push(0);
    } else {
        for (const minute of minutes) {
            sumTime = sumTime + minute;
        }
    }
    time[0] = sumTime;
    localStorage.setItem("Activities-Time", time);
}
const getFromDb = () => {
    let results = 0;
    const storedTime = localStorage.getItem("Activities-Time");
    if (!storedTime) {
        results = 0;
    }
    else {
        results += JSON.parse(storedTime);
    }
    return results
}

export { addToDb, getFromDb }