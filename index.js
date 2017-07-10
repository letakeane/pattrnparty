const tab1 = $('#tab1');
const tab2 = $('#tab2');
const tab3 = $('#tab3');
const tab4 = $('#tab4');

const tab1Content = $('#tab1-content');
const tab2Content = $('#tab2-content');
const tab3Content = $('#tab3-content');
const tab4Content = $('#tab4-content');

tab1.on('click', () => {
  tab1.addClass('isActive');
  tab1Content.removeClass('hidden');
  tab2.removeClass('isActive');
  tab2Content.addClass('hidden');
  tab3.removeClass('isActive');
  tab3Content.addClass('hidden');
  tab4.removeClass('isActive');
  tab4Content.addClass('hidden');
})

tab2.on('click', () => {
  tab2.addClass('isActive');
  tab2Content.removeClass('hidden');
  tab1.removeClass('isActive');
  tab1Content.addClass('hidden');
  tab3.removeClass('isActive');
  tab3Content.addClass('hidden');
  tab4.removeClass('isActive');
  tab4Content.addClass('hidden');
})

tab3.on('click', () => {
  tab3.addClass('isActive');
  tab3Content.removeClass('hidden');
  tab1.removeClass('isActive');
  tab1Content.addClass('hidden');
  tab2.removeClass('isActive');
  tab2Content.addClass('hidden');
  tab4.removeClass('isActive');
  tab4Content.addClass('hidden');
})

tab4.on('click', () => {
  tab4.addClass('isActive');
  tab4Content.removeClass('hidden');
  tab1.removeClass('isActive');
  tab1Content.addClass('hidden');
  tab2.removeClass('isActive');
  tab2Content.addClass('hidden');
  tab3.removeClass('isActive');
  tab3Content.addClass('hidden');
})
