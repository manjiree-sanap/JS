# projects related to DOM

##project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#solution code

##project 1

```javascript



const butttons =document.querySelectorAll('.button');
const body= document.querySelector("body");

butttons.forEach(function(button){

  console.log(button);

  button.addEventListener('click',function(e){

    console.log(e)
    console.log(e.target)
    if(e.target.id== 'grey'){
      body.style.backgroundColor=e.target.id;
    }

    if(e.target.id== 'white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id== 'blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id== 'yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id== 'purple'){
      body.style.backgroundColor=e.target.id;
    }

  })
});



```



#project 2 solution 

```javascript
const form= document.querySelector('form');

//this usecase will give you empty 

//const height = parseInt(document.querySelector('#height').value);

form.addEventListener(`submit`,function(e){
  e.preventDefault();

  const height= parseInt(document.querySelector('#height').value);

  const weigth= parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if(height === '' || height < 0|| isNaN(height)) {
   
    results.innerHTML = `please give valid height ${height}`;
  }
  else 
  if(weigth === '' || weigth < 0|| isNaN(weigth)) {
   
    results.innerHTML = `please give valid weigth ${weigth}`;

  }else
  {
    const bmi = (weigth/ ((height*height)/10000)).toFixed(2);

    //show the result
    results.innerHTML= `<span>${bmi}</span>`;
  }
});

```

##project 3 solution
```javascript
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date();
  //console.log(date.toLocalTimeString());
  clock.innerHTML= date.toLocaleTimeString();
},1000);



```

