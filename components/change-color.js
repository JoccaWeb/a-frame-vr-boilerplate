// Custom color change component
// Interaction control from JavaScript; in this case a change color on hover function on id colorChangingBox
AFRAME.registerComponent('change-color-on-hover', {
  // schema: {
    // color: {default: 'red'}
    // when element (entity) has no color assigned, a-frame renders it white, default color of material is white apparently when implementing the code below, so why assign a default color to schema?..., this component works also when removing schema indeed, when defaultColor var is removed, default color has to be set with setAttribute
  // },
  init: function () {
    var data = this.data;
    var el = this.el;
    // var defaultColor = el.getAttribute('material').color;
    
    el.addEventListener('mouseenter', function () {
      el.setAttribute('color', data.color);
    });
    
    el.addEventListener('mouseleave', function () {
      el.setAttribute('color', 'red');
    });

  }
});