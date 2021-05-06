export const generateStars = (rating) => {
    const star = '\u2605'
    const emptyStar = '\u2606'
    let result = ''
    for(let i=0; i<Math.round(rating); i++){
        result += star
    }
    for(let j=0; j< (5 - Math.round(rating)); j++){
        result += emptyStar
    }
    return result
}

export const formatPrice = (rate) => {
    let price = rate.toString()
    if(price.length <= 3){
        return price
    }
    else{
        let result = ""
        let count = 0
        for(let i=price.length-4; i >= 0; i--){
            if(count === 2){
                result = "," + result
                count = 0
            }
            else{
                result = price[i] + result
                count += 1
            }
        }
        result = result + "," + price.slice(-3)
        return result
    }
}