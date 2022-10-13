let arrayMovies=`[
  
    {
        "id": 1,
        "title": "Thor:The Dark World",
        "anno":2013 ,
        "regia":"Alan Taylor"
    },
    {
        "id": 2,
        "title": "Thor: Ragnarok",
        "anno":2017 ,
        "regia":" Taika Waititi"
    },
    {
        "id": 3,
        "title": "Thor: Love and Thunder",
        "anno":2022 ,
        "regia":"Taika Waititi"
    },
    {
        "id": 4,
        "title": "Captain America - Il primo Vendicatore",
        "anno":2011 ,
        "regia":"Joe Johnston"
    },
    {
        "id": 5,
        "title": "Captain America: Civil War",
        "anno":2016 ,
        "regia":"Anthony e Joe Russo"
    },
    {
        "id": 6,
        "title": "Captain America: The Winter Soldier",
        "anno":2014 ,
        "regia":"Anthony e Joe Russo"
    }
 ]`

 let moviesJson= JSON.parse(arrayMovies);
console.log(moviesJson)



   function showMovies(){
        let display=document.getElementById('container');
        display.innerHTML="";
        for(let i=0;i<moviesJson.length;i++)
        {
            let movies=moviesJson[i];
            let li=document.createElement('li')
            display.appendChild(li);
            li.innerHTML+=`${movies.id}  ${movies.title}  ${movies.regia}  ${movies.anno}`
            
        }
    }
        









// function showMovies(){
// let cont=document.getElementById('container');
// for

// }
