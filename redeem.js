/**
 * 双色球兑奖
 * 
 */



function redeem(red, blue, rows){

    var prize_first = [],
        prize_second = [],
        prize_third = [],
        prize_fourth = [],
        prize_fifth = [],
        prize_sixth = []
    
    rows.forEach(rowItem=>{
        var countRed = 0,
            couontBlue = 0

        rowItem.red = rowItem.red.split(',')
        rowItem.blue = rowItem.blue.split(',')
        
        rowItem.red.forEach(rowRedItem=>{
            if(red.indexOf(rowRedItem)!=-1){
                countRed++
            }
        })

        rowItem.blue.forEach(rowBlueItem=>{
            if(blue.indexOf(rowBlueItem)!=-1){
                couontBlue++
            }
        })

        // 一等奖
        if(countRed==6 && couontBlue){
            prize_first.push(rowItem)
        }
        // 二等奖
        if(countRed==6 && !couontBlue){
            prize_second.push(rowItem)
        }
        // 三等奖
        if(countRed==5 && couontBlue){
            prize_third.push(rowItem)
        }
        // 四等奖
        if((countRed==5 && !couontBlue) || (countRed==4 && couontBlue)){
            prize_fourth.push(rowItem)
        }
        // 五等奖
        if((countRed==4 && !couontBlue) || (countRed==3 && couontBlue)){
            prize_fifth.push(rowItem)
        }
        // 六等奖
        if(countRed<3 && couontBlue){
            prize_sixth.push(rowItem)
        }

    })

    return {
        prize_first, prize_second, prize_third, prize_fourth, prize_fifth,prize_sixth
    }
}

module.exports = redeem