function writeCards(names, event)  {
    let cardArray = [];
    for (let i = 0; i < names.length; i++) {
          cardArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      if (i > 1)  {
      console.log(cardArray);
        return cardArray;
    }
    }
    
    
  }
  writeCards(["Charlie", "Samip", "Ali"], "birthday");
  
  
  
  function countDown(number)  {
      while (number > -1)  {
      console.log(number--)
      };
  }
  countDown(4);