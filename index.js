const tab1 = $('.tab1');
const tab2 = $('.tab2');
const tab3 = $('.tab3');
const tab4 = $('.tab4');

const tab1Content = $('#tab1-content');
const tab2Content = $('#tab2-content');
const tab3Content = $('#tab3-content');
const tab4Content = $('#tab4-content');

const tab1Status = $('.tab1-status');
const tab2Status = $('.tab2-status');
const tab3Status = $('.tab3-status');
const tab4Status = $('.tab4-status');

tab1.on('click', () => {
  tab1.addClass('isActive');
  tab1Content.removeClass('hidden');
  tab1Status.text('-');
  tab2.removeClass('isActive');
  tab2Content.addClass('hidden');
  tab2Status.text('+');
  tab3.removeClass('isActive');
  tab3Content.addClass('hidden');
  tab3Status.text('+');
  tab4.removeClass('isActive');
  tab4Content.addClass('hidden');
  tab4Status.text('+');
})

tab2.on('click', () => {
  tab2.addClass('isActive');
  tab2Content.removeClass('hidden');
  tab2Status.text('-');
  tab1.removeClass('isActive');
  tab1Content.addClass('hidden');
  tab1Status.text('+');
  tab3.removeClass('isActive');
  tab3Content.addClass('hidden');
  tab3Status.text('+');
  tab4.removeClass('isActive');
  tab4Content.addClass('hidden');
  tab4Status.text('+');
})

tab3.on('click', () => {
  tab3.addClass('isActive');
  tab3Content.removeClass('hidden');
  tab3Status.text('-');
  tab1.removeClass('isActive');
  tab1Content.addClass('hidden');
  tab1Status.text('+');
  tab2.removeClass('isActive');
  tab2Content.addClass('hidden');
  tab2Status.text('+');
  tab4.removeClass('isActive');
  tab4Content.addClass('hidden');
  tab4Status.text('+');
})

tab4.on('click', () => {
  tab4.addClass('isActive');
  tab4Content.removeClass('hidden');
  tab4Status.text('-');
  tab1.removeClass('isActive');
  tab1Content.addClass('hidden');
  tab1Status.text('+');
  tab2.removeClass('isActive');
  tab2Content.addClass('hidden');
  tab2Status.text('+');
  tab3.removeClass('isActive');
  tab3Content.addClass('hidden');
  tab3Status.text('+');
})

$('.bar').on('click', () => {
  $('.link-container').toggleClass('hidden')
  $('.search-container').toggleClass('hidden')
})
