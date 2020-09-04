const publicKey = 'pub_test_w1iKof2X9j7a7fMgn4i6pplWrtwmpaIo';
const testKey = 'pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf';
const curreny = 'COP';
const minAmount = 1500;

var checkout = new WidgetCheckout({
   currency: 'COP',
   amountInCents: 2490000,
   reference: 'AD002901221',
   publicKey,
   redirectUrl: 'http://google.com/', // Opcional
});

const makeReference = () => {
   const time = new Date().getTime();
   return 'LAZA-' + time;
};

function withPayment() {
   const reference = makeReference();
   const mount = 8;
   const mountValue = mount * 100;

   try {
   } catch {}
}
