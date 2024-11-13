
/**
 * DATA Send to local storage.
*/
function dataSend(Key, arr) {
    let productDB = JSON.stringify(arr);
    localStorage.setItem(Key, productDB);

    return true;
}



function dataGet(Key) {
    let recivedPr = localStorage.getItem(Key);
    return recivedPr ? JSON.parse(recivedPr) : false;


}