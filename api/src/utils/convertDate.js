
const convertDate = () =>{
    let date = new Date();
    let currentDate = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    return currentDate;
}

module.exports = convertDate;