function changeBalance(balanceElement)
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

function waitForElement(selector, callback)
{
  const element = document.querySelector(selector);

  if (element)
  {
    callback(element);
  }
  else
  {
    setTimeout(() =>
    {
      waitForElement(selector, callback);
    }, 50);
  }
}

['#header_wallet_balance', '#marketWalletBalanceAmount'].forEach(selector =>
{
  waitForElement(selector, changeBalance);
});