function changeBalance()
{
  let balanceElement = document.getElementById('header_wallet_balance');

  if (balanceElement)
  {
    let balanceText = balanceElement.textContent;
    let currencySign = balanceText.match(/[^0-9,.]+/g);

    if (currencySign && currencySign.length === 1)
    {
      let modifiedCurrencySign = currencySign[0].trim();
      let hasDot = balanceText.includes(modifiedCurrencySign + '.');

      balanceElement.textContent = '0,00 ' + modifiedCurrencySign + (hasDot ? '.' : '');
      balanceElement.style.visibility = 'visible';
    }
  }
}

function waitForElement(selector, callback)
{
  const element = document.querySelector(selector);

  if (element)
  {
    callback();
  }
  else
  {
    setTimeout(() =>
    {
      waitForElement(selector, callback);
    }, 50);
  }
}

waitForElement('#header_wallet_balance', changeBalance);