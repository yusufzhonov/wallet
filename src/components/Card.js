export function Card(item){

const cardItem = document.createElement('div');
const type = document.createElement('h3');
const value = document.createElement('p');
const balance = document.createElement('p')

balance.className = 'balace'
cardItem.className = 'card';
type.className = 'type';
value.className = 'value';

balance.textContent = item.balance
type.textContent = item.name;
value.textContent = item.currency;

cardItem.append(type, balance, value);
return cardItem
}