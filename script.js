let n = 4

for(let i = 1; i<=n;i++){
    let rows = ""
    for(let s=1; s<=n-i;s++){
        rows += " "
    }
    for(let j = 1; j<=i;j++){
        if(i === 1 || j === 1 || j ===i){
                rows += "* "
        }
        else{
            rows += "  "
        }
    }
    console.log(rows)
}

for(let i = n-1; i >= 1;i--){
    let rows = ""
    for(let s=1; s<=n-i;s++){
        rows += " "
    }
    for(let j = 1; j<=i;j++){
        if(i === 1 || j === 1 || j ===i){
                rows += "* "
        }
        else{
            rows += "  "
        }
    }
    console.log(rows)
}

