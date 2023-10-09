const form = document.querySelector('form')

// this usecase will give empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener(function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results').value

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please give valid height'
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please give valid weight'
    }
    else{
       const BMI = (weight / ((height*height)/10000).toFixed(2))
       results.innerHTML =  `<span>${BMI}</span>`
    }
    
});