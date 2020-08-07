window.onload = function () {

    var usd = document.getElementById('usd')
    var aud = document.getElementById('aud')
    var cad = document.getElementById('cad')
    var bgn = document.getElementById('bgn')

    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let jsonObj = JSON.parse(this.response);
                let usdRate = parseFloat(jsonObj.rates.USD.toFixed(4));
                let audRate = parseFloat(jsonObj.rates.AUD.toFixed(4));
                let cadRate = parseFloat(jsonObj.rates.CAD.toFixed(4));
                let bgnRate = parseFloat(jsonObj.rates.BGN.toFixed(4));


                usd.innerHTML = usdRate;
                aud.innerHTML = audRate;
                cad.innerHTML = cadRate;
                bgn.innerHTML = bgnRate;

                function updateRates() {
                    var n = 0;


                    function moveRatesUp() {
                        usdRate += 0.0001;
                        audRate += 0.0001;
                        cadRate += 0.0001;
                        bgnRate += 0.0001;
                        usd.innerHTML = usdRate.toFixed(4);
                        aud.innerHTML = audRate.toFixed(4);
                        cad.innerHTML = cadRate.toFixed(4);
                        bgn.innerHTML = bgnRate.toFixed(4);
                        n += 5;
                        document.body.style.background = 'green';
                    }

                    function moveRatesDown() {
                        usdRate -= 0.0001;
                        audRate -= 0.0001;
                        cadRate -= 0.0001;
                        bgnRate -= 0.0001;
                        usd.innerHTML = usdRate.toFixed(4);
                        aud.innerHTML = audRate.toFixed(4);
                        cad.innerHTML = cadRate.toFixed(4);
                        bgn.innerHTML = bgnRate.toFixed(4);
                        n += 5;
                        document.body.style.background = 'red';
                    }


                    var myInterval = setInterval(function () {
                        if (n < 60) {
                            moveRatesUp()
                        }
                        else if (n < 60 * 2) {
                            moveRatesDown()
                        }
                        else if (n < 60 * 3) {
                            moveRatesUp()
                        }
                        else if (n < 60 * 4) {
                            moveRatesDown()
                        }
                        else if (n < 60 * 5) {
                            moveRatesUp()
                        }

                    }, 5000);

                    setTimeout(() => clearInterval(myInterval), 1000 * 60 * 5);

                }

                updateRates()



            }
        };
        xhttp.open("GET", "currencies.json", true);
        xhttp.send();
    }

    loadDoc()




}


