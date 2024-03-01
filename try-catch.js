
function checkAge (){
    const ageField = document.getElementById('age')
    const ageText = ageField.value;

    const errorTag = document.getElementById('error');

    try{

        const age = parseInt(ageText);
        if(isNaN(age)){
            // console.log('age is not found', age, ageText)

            throw " please enter a valid number"
        }

        if(age < 18){
            throw "baccha kaccha not allowed"
        }
        


        // console.log(bbb);
    }
    catch(err){
        console.log(err)

        errorTag.innerText = err; 
    }
    finally{
        console.log('all done')
    }

    console.log(111)
}