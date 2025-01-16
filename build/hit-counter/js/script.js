request = new XMLHttpRequest();
request.open('GET', 'hit-counter/counter.php');
request.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var num_arr = this.responseText.split("");
		var num_str = "";
		for (i = 0; i < num_arr.length; i++) {
			num_str += `<img src="assets/imgs/numbers/` + num_arr[i] + `.png"/>`;
		  }
		document.getElementById('hit-count').innerHTML = num_str;
	}
};
request.send();