function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'silver',
      layout: 'vertical',
      label: 'paypal',

    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value:'3.5'
          }
        }]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        window.location.replace("success136993.html");
      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}
initPayPalButton();
