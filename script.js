//your JS code here. If required.
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Helper function to remove 'a', 'an', 'the' for sorting
function stripArticle(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort bands ignoring articles
const sortedBands = bands.sort((a, b) => {
  if (stripArticle(a) > stripArticle(b)) return 1;
  if (stripArticle(a) < stripArticle(b)) return -1;
  return 0;
});

// Display sorted list in <ul>
document.querySelector('#band').innerHTML =
  sortedBands.map(band => `<li>${band}</li>`).join('');
