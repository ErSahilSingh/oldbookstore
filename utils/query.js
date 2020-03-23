const Query ={
getQuery(dataObj,tableName, conditions){
    return `SELECT ${dataObj.toString()} from ${tableName} where ${conditions}`;

},
postQuery(tableName,VALUES){
    return `INSERT INTO ${tableName} values(${VALUES.toString()})`;

},
updateQuery(tableName, key,values,Email){

    return `UPDATE ${tableName} SET ${key} =${values.toString()} WHERE Email=${Email.toString()} `;

}
}
module.exports = Query;