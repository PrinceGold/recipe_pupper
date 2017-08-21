

function submit(){
	var input = document.getElementById('search').value
	fetch(
	  "http://www.recipepuppy.com/api/?q=" + `${input}`
	)
	  .then(function(response) {
	    if (response.status !== 200) {
	      console.log(response.status);
	      return;
	    }
	    response.json().then(function(data) {
	      console.log("test", response.url);
	      console.log(data)
	      displayData(data)
	    });
	  })
	  .catch(function(err) {
	    console.log("Fetch Error :-S", err);
	  });

	function displayData(data){
		let htmlStr = ""
		data.results.map(function(item){
			htmlStr += `
				<div id="xcom">
				<img src='${item.thumbnail}'/>
				<p> ${item.title} </p>
				</div>

			`

			document.getElementById("whatever").innerHTML += htmlStr;
		})

		
	}
}