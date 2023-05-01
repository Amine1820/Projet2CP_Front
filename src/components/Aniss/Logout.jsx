

function Logout () {

    fetch('http://localhost:4000/logout')
    .then(response => response.json()) // parse the response as JSON
.then(data => {
  	console.log("Siuuuuuuuuuuu")
})

.catch(error => {
console.error(error);
});


return (
<h>Sewy</h>
    );

}

export default Logout ; 