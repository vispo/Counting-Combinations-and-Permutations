/* 
C(n,r), P(n,r) and n! are the three most fundamental formulas
in combinatorics for enumerating combinations and permutations.
This js document has those three functions renamed as cnr(n,r),
pnr(n,r) and factorial(n). 
By Jim Andrews, 2025. This code was originally in Lingo from
2004. Feel free to use it as you see fit.
*/

function cnr(n,r) {
   /* 
   DECRIPTION*********************************************
   In combinatorics, this function is known as C(n,r).
   I renamed it to cnr to make the name less likely 
   to occur as the name of another current function.
   PARAMETERS*********************************************
   Both n and r must be integers. If they aren't, 0 is
   returned. n can be any integer. r>=0 or 0 is returned.
   abs(n)>=r or 0 is returned.
   cnr(1029,500)=9.50970938986753e+307 but
   cnr(1030,500)=Infinity
   so eventually, as n increases, cnr eventually returns
   Infinity.
   RETURN VALUE*******************************************
   Returns the number (integer) of combinations of n 
   things taken r at a time. For instance, if there are
   four letters A, B, C, D and we select two of them,
   the possible combinations are AB, AC, AD, BC, BD,
   CD, ie, there are 6 combinations. Order does not
   matter. Just combinations. Not permutations.
   FORMULA************************************************
   C(n,r)=n!/((n-r)!r!) = n(n-1)(n-2)...(n-r+1)/r!
   C(n,r) calculates n/r * (n-1)/(r-1) * ... * (n-r+1)/1
   Note that 0!=1 and when n>0, C(-n,r)=C(n+r-1,r)*(-1)^r
   */
  if (Number.isInteger(n) && Number.isInteger(r)) {
    if (n > 0) {
      if (r > 0) {
        if (n >= r) {
          var a=1.0;
          for (var i = 0; i < r; i++) {
            a=a* ((n-i)/(r-i));
          }
          console.log('cnr('+n+','+r+')='+a);
          if (a< Number.MAX_SAFE_INTEGER) {
            // This is the answer, normally.
            return a;
          }
          else {
            // a > Number.MAX_SAFE_INTEGER
            return a;
          }
        }
        else {
          // Else n<r
          console.log("cnr(n,r) called with n<r. 0 is returned.");
          return 0;
        }
      }
      else {
        // Else r<=0
        if (r==0) {
          // Then n>0 and r=0
          return 1
        }
        else {
          // Else n>0 and r<0
          console.logo("cnr(n,r) called with negative r parameter. 0 is returned.")
          return 0;
        }
      }
    }
    else {
      // Else n<=0
      if (n==0) {
        if (r==0) {
          // Then n=0 and r=0
          return 1;
        }
        else {
          // Else n=0 and r <> 0
          return 0
        }
      }
      else {
        // Else n<0
        // The books define it this way.
        return power(-1,r)*cnr((-1)*n+r-1,r)
      }
    }
  }
  else {
    // Else n or r or both are not integers
    console.log('cnr('+n+','+r+')=0. Function called with non-integer parameter(s).');
    return 0;
  }
}


function pnr(n,r) {
  //DESCRIPTION********************************************
  //In combinatorics, this function is P(n,r). I renamed
  //it to be less likely to have a same-named function.
  //Returns the number of permutations of n things
  //taken r at a time. For instance, if there are
  //four letters A, B, C, D and we select two of them,
  //the possible permutations are AB, BA, AC, CA, AD, DA,
  //BC, CB, BD, DB, CD, DC, ie, there are 12 permutations.
  //Order does matter.
  //FORMULA************************************************
  //pnr(n,r) = n!/(n-r)! = n(n-1)(n-2)...(n-r+1)
  //PARAMETERS*********************************************
  //Both n and r must be type integer. If they aren't, 0 is
  //returned. n can be any integer. r>=0 or 0 is returned.
  //abs(n)>=r or 0 is returned.
  //RETURN VALUE*******************************************
  //pnr(n,r) returns Infinity if the value is too high.
  //Note that pnr(n,r) is maximal when r=n, in which case
  //pnr(n,r)=n! So, like the n! function below, pnr(n,r) is
  //good for n<=170. Whether pnr(n,r) returns a number or 
  //Infinity for values of n>170 depends on the value of r.
  //******************************************************** 
  if (Number.isInteger(n) && Number.isInteger(r)) {
    if (n > 0) {
      if (r > 0) {
        if (n >= r) {
          var a=1.0;
          for (var i = 0; i < r; i++) {
            a=a*(n-i);
          }
          console.log('pnr('+n+','+r+')='+a);
          return a;
        }
        else {
          //Else abs(n)<r
          console.log('pnr('+n+','+r+')=0. pnr(n,r) called with n<r.');
          return 0;
        }
      }
      else {
        //Else r<=0
        if (r==0) {
          //Then n>0 and r=0
          console.log('pnr('+n+','+r+')=1. pnr(n,r) called with r=0.');
          return 1;
        }
        else {
          //Else n>0 and r<0
          console.log('pnr('+n+','+r+')=0. pnr(n,r) called with r<0.');
          return 0;
        }
      }
    }
    else {
      //Else n<=0
      if (n==0) {
        if (r==0) {
          //Then n=0 and r=0
          console.log('pnr('+n+','+r+')=1. pnr(n,r) called with n=0, r=0.');
          return 1;
        }
        else {
          //Else n=0 and r <> 0
          console.log('pnr('+n+','+r+')=0. pnr(n,r) called with n=0.');
          return 0;
        }
      }
      else {
        //Else n<0
        return Math.pow(-1,r)*pnr((-1)*n+r-1,r);
      }
    }
  }
  else { 
    //Else n or r or both are not integers
    console.log('pnr('+n+','+r+')=0. pnr(n,r) called with non-integer parameter.');
    return 0;
  }
}


function factorial(n) {
  //Returns n! = n(n-1)...1
  //Note that 0!=1.
  //PARAMETER*********************************************
  //n is an integer >=0. If not, 0 is returned.
  //RETURN VALUE*******************************************
  //factorial(n) is good for n<=170.
  //Returns Infinity for values of n > 170.
  if (Number.isInteger(n)) {
    if (n > 0) {
      var a=1;
      for (var i = 2; i < n+1; i++) {
        a=a*i;
      }
      console.log('factorial('+n+')='+a);
      return a;
    }
    else {
      //Else n<=0
      if (n==0) {
        //0! is defined to be 1.
        console.log('factorial('+n+')=1');
        return 1;
      }
      else {
        //n<0, so we return 0
        console.log('factorial('+n+')=0');
        return 0;
      }
    }
  }
  else {
    //Else n is not an integer
    console.log('factorial('+n+')=0');
    return 0;
  }
}