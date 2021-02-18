function countToN(n) {
   let count = 1;
   while (true) {
      if (count > n) {
         return;
      }
      console.log(count);
      count++;
   }
}

countToN(9);
