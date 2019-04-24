var money = +prompt("Ваш бюджет на месяц?", '');
var time = prompt ("Введите дату в формате YYYY-MM-DD", '');

var appData = {
  budget : money ,
  timeData : time,
  expenses : {
    
  },
  optionalExpanses : {

  },
  income : [],
  savings : false
};


var exps1, exps2;
exps1 = prompt('Введите обязательную статью расходов в этом месяце','');
appData.expenses[exps1] = +prompt('Во сколько обойдется?', '');

exps2 = prompt('Введите вторую обязательную статью расходов в этом месяце','');
appData.expenses[exps2] = +prompt('Во сколько обойдется?', '');

alert(appData.budget/30);

console.log (appData);