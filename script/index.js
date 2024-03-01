const myLoader = () =>{

    return new Promise ((resolve, reject) =>{
        const success = true;
        // const success = false;

        if (success){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
 
}

// myLoader()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// async function loadData ( ) {

//     const res = await myLoader();
//     console.log(res)

// }

// loadData()


const loadData = async () =>{

  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    const data = await res.json()
    console.log(data.title)
  }
  catch{
    console.log('error happen')
  }
}

//  loadData()