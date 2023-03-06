export default function updateGridStatus(gridStatus){

    function checkNeighbours(r, c){
        let trueCell = 0
        // boundaries r - 1 >= 0 && c - 1 >= 0 && r + 1 < gridStatus.length && c + 1 < gridStatus[r].length
        if(r + 1 < gridStatus.length && c + 1 < gridStatus[r].length && gridStatus[r + 1][c + 1]){trueCell += + 1}
        if(r + 1 < gridStatus.length && gridStatus[r + 1][c]){trueCell += + 1}
        if(r + 1 < gridStatus.length && c - 1 >= 0 && gridStatus[r + 1][c - 1]){trueCell += + 1}
        if(c + 1 < gridStatus[r].length && gridStatus[r][c + 1]){trueCell += + 1}
        if(c - 1 >= 0 && gridStatus[r][c - 1]){trueCell += + 1}
        if(r - 1 >= 0 && c + 1 < gridStatus[r].length && gridStatus[r - 1][c + 1]){trueCell += + 1}
        if(r - 1 >= 0 && gridStatus[r - 1][c]){trueCell += + 1}
        if(r - 1 >= 0 && c - 1 >= 0 && gridStatus[r - 1][c - 1]){trueCell += + 1}
        
        return trueCell
    }

    const arr = []
        for(let r = 0; r < gridStatus.length; r++){
            const arr2 = []
            for(let c = 0; c < gridStatus[r].length; c++){
                const trueCell = checkNeighbours(r,c)
                if(gridStatus[r][c] && (trueCell < 2 || trueCell > 3)){arr2.push(false)}
                else if(gridStatus[r][c] && (trueCell === 2 || trueCell === 3)){arr2.push(true)}
                else if(!gridStatus[r][c] && trueCell === 3){arr2.push(true)}
                else {arr2.push(false)}   
            }
            arr.push(arr2) 
        }
        return arr
}