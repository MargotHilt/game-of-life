function updateGridStatusBis(gridStatus){

    /*
    @param:
    x,y: position of element
    xl, xr: leftmost and rightmost neighbour that needs to be checked
    yl, yr: lowermost and uppermost neighbour that needs to be checked
    */
    function checkNeighbours(x, y, xl, xr, yl, yr){
        let trueCell = 0

        //Check all nine elements
        for(let i=xl; i<xr; i++){
            for(let j=yl; j<yr; j++){
                //if(gridStatus[r+i][c+j]){trueCell += + 1}
                trueCell += gridStatus[x+i][y+j]
            }
        }
        //If there are exactly three trues or four including myself, I become/remain alive
        if(trueCell==3||trueCell==4&&gridStatus[x][y]){
            return true;
        }
        //Otherwise I become/remain dead
        return false;
        console.log("trueCell", trueCell)
        return trueCell
    }

    const arr = []

        const arr2 = []
        //bottom left corner
        arr2.push(checkNeighbours(r, c, 0, 2, 0, 2))

        //lower edge
        for(let c = 1; c < gridStatus[r].length-1; c++){
            arr2.push(checkNeighbours(r, c, -1, 2, 0, 2))
        }

        //bottom right corner
        arr2.push(checkNeighbours(r, c, -1, 1, 0, 2))

        arr.push(arr2)

        for(let r = 1; r < gridStatus.length-1; r++){
            const arr3 = []
            //leftmost element
            arr3.push(checkNeighbours(r, c, 0, 2, -1, 2))
            for(let c = 1; c < gridStatus[r].length-1; c++){
                //center elements
                arr3.push(checkNeighbours(r, c, -1, 2, -1, 2))
            }
            //rightmost element
            arr3.push(checkNeighbours(r, c, -1, 1, -1, 2))
            arr.push(arr3)
        }

        const arr4 = []
        //top left corner
        arr4.push(checkNeighbours(r, c, 0, 2, -1, 1))

        //upper edge
        for(let c = 1; c < gridStatus[r].length-1; c++){
            arr4.push(checkNeighbours(r, c, -1, 2, -1, 1))
        }

        //top right corner
        arr4.push(checkNeighbours(r, c, -1, 1, -1, 1))

        arr.push(arr2)

        console.log("arr", arr)
        return arr
}