function getAndOperateOnData(callback){
    console.log("Fetching data ...");
    setTimeout(()=>{
        const data = {
            name: "Sangeet",
            Company: "Amazon"
        }

        callback(data);
    }, 2000)
}

function printData(data){
    console.log(data);
}

getAndOperateOnData(printData);

//works fine
