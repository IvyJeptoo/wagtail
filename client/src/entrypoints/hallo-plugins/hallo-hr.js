import jQuery from 'jquery';

// Generated by CoffeeScript 1.6.2
// eslint-disable-next-line func-names
(function () {
  // eslint-disable-next-line func-names
  (function ($) {
    return jQuery.widget('IKS.hallohr', {
      options: {
        editable: null,
        toolbar: null,
        uuid: '',
        buttonCssClass: null
      },
      populateToolbar(toolbar) {
        const buttonset = $('<span class="' + this.widgetName + '"></span>');
        const buttonElement = $('<span></span>');
        buttonElement.hallobutton({
          uuid: this.options.uuid,
          editable: this.options.editable,
          label: 'Horizontal rule',
          command: 'insertHorizontalRule',
          icon: 'icon-horizontalrule',
          cssClass: this.options.buttonCssClass
        });
        buttonset.append(buttonElement);
        buttonset.hallobuttonset();
        return toolbar.append(buttonset);
      }
    });
  }(jQuery));
}).call(this);