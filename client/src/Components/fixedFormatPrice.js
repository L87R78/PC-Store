export default {
    formatCurrency: function (num) {
        if (num === 0) {
            return Number(num.toFixed(2)).toLocaleString() + '.00'
        }
        return  Number(num.toFixed(2)).toLocaleString() + ' '
    }
}


