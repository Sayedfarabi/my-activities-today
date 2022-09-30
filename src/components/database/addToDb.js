const addToDb = minutes => {
    // let storeData = [];
    localStorage.setItem("Activities-Time", minutes);
    // const getData = getFromDb();
    // storeData.push(getData);
    // console.log(storeData);

}
const getFromDb = () => {
    const getTime = localStorage.getItem("Activities-Time");
    const storedTime = JSON.parse(getTime);
    return storedTime
}

export { addToDb, getFromDb }