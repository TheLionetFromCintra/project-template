 const padTo2Digits = function(num) {
    return num.toString().padStart(2, '0');
}
const formatDate = function(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        +date.getFullYear().toString().slice(-2),
    ].join('.');
}

export default (count, type) => {
    let num = type === 'days' ? count : count * 7;
    let date = new Date(Date.now() + num * 86400000);
    return formatDate(date);
};