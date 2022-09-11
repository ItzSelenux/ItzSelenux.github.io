function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) 
    {
      elmnt = z[i];
      file = elmnt.getAttribute("inc");
      if (file) 
      {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() 
        {
          if (this.readyState == 4) 
          {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            elmnt.removeAttribute("inc");
          }}      
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }}};