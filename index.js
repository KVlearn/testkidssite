var button = document.getElementById("button1");

button.onmouseover = function() {
    this.style.backgroundColor = "indianred";
  }

button.onmouseout = function() {
    this.style.backgroundColor = "lightsalmon";
  }
function changePic() {
  var image = document.getElementById('newpuzzle'); if(image.src.match("https://image.shutterstock.com/image-vector/mandala-background-arabesque-pattern-arabic-260nw-1701268981.jpg")){ image.src="https://lh3.googleusercontent.com/JZq1jMH_I-qCKGwx4zQj-1BA2XwW-qiGgUmZVpRaS1o3ZTf7xJA8D-QTb2yyMLerML6l1R-UQ76sbPSJhIeQ0jfMi8KvNp83zgD3O7nrRZT8u0OIkWpdCUe_l-rkLPkKD1wsvTDxwzXrJ2gFONLcrwm2ZOeDTWA-BSTGXWi4SpoVjktYrnp67mw-8pDoBJ8jsa03biccbw7rnPEqy4HEDoFVZRL7yRmFVnMl02SzJjm47ADvRVc93RzNO-KiFMahij0XIRcsvtSIGdZ9lWTqA61rq-EVC3Ek715S8gklsFnb-VqNL1_mAW6nfnMOGopydl6j-k4o0Kpwh98MyJmsW6H1rdpzg7LK_colpgjI82oNX-_jp0jnxK8zJEddfCiYAQxWjwh_StcCjEi4OVR5ip2iJvdQaSE2Awe-ifT1wVNnngbksrce3SruUNhi1oJz9ERRXN4vijTCGvd6eUKpVv1iiAvxnamEwIyYEeQJHdqXnJRD84-o-jlf3GUYoPgSmi91Fea8WVeQNYThQVi3ADZSLhtaefRACK9B7aHMg-WmAA_cw3ZUC3ZyamR5iExgHPRCryOIXq95CyOi3zPTd376hZQlY9-ybmUnG6_b70CO2rQNF8rytqIz2jW4mJmxf-yLhPcLGTntfmLX146qflsWJyQliL97GiGUo4RzuPYp0YYrv6HVUpC4pMiK1oo=s918-no?authuser=0";
  }else{ image.src="https://image.shutterstock.com/image-vector/mandala-background-arabesque-pattern-arabic-260nw-1701268981.jpg";
  }
}