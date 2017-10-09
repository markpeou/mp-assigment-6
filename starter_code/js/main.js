console.log('connected');
// function selectCity() {
//   var cities = ["New York City", "San Francisco", "Los Angeles", "Austin", "Sydney"];
//   var text = "";
//   var i;
//   for(i = 0; i <cities.append; i++)
//     $('#city-type'+= [i] + "<br>");
  // $('#city-type').append(cities[i];


$('#city-type').append('<option>New York City</option>')
$('#city-type').append('<option>San Francisco</option>')
$('#city-type').append('<option>Los Angeles</option>')
$('#city-type').append('<option>Austin</option>')
$('#city-type').append('<option>Sydney</option>')


$('#city-type').change(changeBackground)

function changeBackground() {
  var selectBox = event.target
  if (selectBox.value === 'New York City') {
    $('body').addClass('nyc')
    $('#city-type').val('');
    // clearBackground()
  } else if (selectBox.value === 'San Francisco') {
    $('body').addClass('sf')
    $('#city-type').val('');

  } else if (selectBox.value === 'Los Angeles') {
    $('body').addClass('la')
    $('#city-type').val('');
  } else if (selectBox.value === 'Austin') {
    $('body').addClass('austin')
    $('#city-type').val('');
  } else if (selectBox.value === 'Sydney') {
    $('body').addClass('sydney')
    $('#city-type').val('');
  }

}

function clearBackground() {
  $('body').removeClass('nyc sf la austin sydney')
}


//
// google for loop, how to loop through an array
