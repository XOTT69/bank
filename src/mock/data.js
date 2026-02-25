export const mock = {
  tabs: ['Картки', 'Кредити', 'Накопичення', 'Ще', 'Маркет'],
  cards: {
    balance: 15636,
    used: 24364,
    limit: 40000,
    cardMasked: '5291 •••• •••• 1847',
    ops: [
      { title: 'Фора', amount: -883 },
      { title: 'Фора', amount: -632 },
      { title: 'Електроенергія', amount: -2125 },
    ],
  },
  savings: {
    total: 1,
    jars: [{ title: 'На корм котику', goal: 3000, saved: 1 }],
  },
  installments: {
    available: 234429,
    items: [
      { title: 'Тумба у ванну', total: 8077, nextPay: '26 лютого', nextAmount: 401 },
      { title: 'Фен', total: 28589, nextPay: '28 лютого', nextAmount: 1603 },
      { title: 'Пилосос', total: 11699, nextPay: '28 лютого', nextAmount: 779 },
      { title: 'Витяжка', total: 4899, nextPay: '2 березня', nextAmount: 408 },
      { title: 'Епіцентр K', total: 5199, nextPay: '7 березня', nextAmount: 885 },
      { title: 'Телевізор', total: 7799, nextPay: '8 березня', nextAmount: 397 },
    ],
  },
  more: [
    { title: 'Автострахування', subtitle: 'ОСЦПВ, Зелена карта та інше' },
    { title: 'Мобільний зв’язок', subtitle: 'eSIM та керування номерами' },
    { title: 'Заправка на АЗС', subtitle: 'Не виходячи з авто' },
    { title: 'Бонуси та знижки', subtitle: 'Пропозиції від партнерів' },
    { title: 'monoКЕП', subtitle: 'Ваш електронний підпис' },
    { title: 'Отримати пароль', subtitle: 'Тимчасовий пароль співробітника' },
  ],
}
