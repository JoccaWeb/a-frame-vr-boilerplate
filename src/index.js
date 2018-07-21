console.log('TEST: Hi from index.js')

// animating and handling events in A-Frame with vanilla JavaScript (this should be put in an A-Frame component)

// 20180611: Currently mouse desktop works, but not cursor click event with Gear VR's touchpad.
document.querySelector('#blueBox').addEventListener('mousedown', function () {
  document.querySelector('.blueBoxAnim').emit('boxMove');
})

// scale up and scale down
document.querySelector('#blueBox').addEventListener('mouseenter', function () {
  document.querySelector('.blueBoxAnim').emit('boxScaleUp');
})
document.querySelector('#blueBox').addEventListener('mouseleave', function () {
  document.querySelector('.blueBoxAnim').emit('boxScaleDown');
})