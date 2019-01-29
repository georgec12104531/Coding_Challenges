const transpose = (arr) => {
    let result = [];
    const rows = arr[0].length;
    const columns = arr.length;
    
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            row.push(arr[j][i])
        }
        result.push(row)
    }
    
    return result    
};


