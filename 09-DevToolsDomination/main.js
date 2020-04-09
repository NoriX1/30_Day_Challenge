const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// clearing
console.clear();

// Regular
console.log('debug');

// Interpolated
console.log('I am a %s string!', '***')

// Styled
console.log('%c I am some great text', 'font-size:20px; color: red;');

// warning!
console.warn('Warning!')

// Error :|
console.error('Error!');

// Info
console.info('Info!');

// Testing
console.assert(document.querySelector('p').classList.contains('ouch'), 'That is wrong!');

// Viewing DOM Elements
console.log(document.querySelector('p'));
console.dir(document.querySelector('p'));

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old`);
  console.groupEnd();

});

// counting
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/norix1')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
    //table
    console.table(data);
  });