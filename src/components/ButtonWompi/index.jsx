import './css.css'


function ButtonWompi({ value }) {
    function pay() {
        var checkout = new WidgetCheckout({
            currency: 'COP',
            amountInCents: parseInt(value) + '00',
            reference: 'prueba1',
            publicKey: 'pub_test_tcUoNwMeZKAvaur0E0AHYhZ5mOxcrbP7',
        })
        checkout.open(function (result) {
            var transaction = result.transaction
        })
    }

    return (
        <>
            <span className="component-button-wompi-btn" onClick={() => pay()}>Pagar con wompi</span>
        </>

    );
}
export default ButtonWompi