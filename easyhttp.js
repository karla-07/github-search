class EasyHttp {
    //make andd http GET request
   async get(url){
       const response = await fetch(url);
       const resData = await response.json();
       return resData
// return new Promise((resolve, reject) => {
//     fetch(url)
//     .then(res => res.json())
//     .then(data => resolve(data))
//     .catch(err => reject(err));
// });
}


//Make an HTTP POST request
async post(url, data){
    const response = await fetch(url, {
          method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
   
    }

//Make an HTTP PUT request

async put(url, data){
    const response = await fetch(url, {
        method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body:JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
}
async delete(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData
}
}

// delete(url {}
//     return new Promise
//     this.http.open('DELETE', url, true);

//     let self = this;
// this.http.onload = function(){
//     if(self.http.status === 200){
//     callback(null, 'Post Deleted');
//     } else{
//         callback('Error', + self.http.status);
//     }
// }
// this.http.send();