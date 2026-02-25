import React from 'react'
import { mock } from './mock/data.js'

function money(n) {
  const sign = n < 0 ? '-' : ''
  const abs = Math.abs(n)
  return `${sign}${abs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₴`
}

function Screen({ title, color, children }) {
  return (
    <div className="screen">
      <div className="header" style={{ background: color }}>
        <div className="headerTitle">{title}</div>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}

export default function App() {
  const [tab, setTab] = React.useState('Картки')

  return (
    <div className="app">
      <div className="phone">
        {tab === 'Картки' && (
          <Screen title="" color="linear-gradient(180deg, #1f3b8f 0%, #1b2f73 100%)">
            <div className="bigNumber">{money(mock.cards.balance)}</div>
            <div className="subText">Використано • {money(mock.cards.used)} з {money(mock.cards.limit)}</div>

            <div className="card3d">
              <div className="cardBrand">monobank</div>
              <div className="cardDigits">{mock.cards.cardMasked}</div>
              <div className="cardType">VISA</div>
            </div>

            <div className="block">
              <div className="blockTitle">Операції</div>
              {mock.cards.ops.map((o, i) => (
                <div className="row" key={i}>
                  <div className="rowLeft">
                    <div className="dot red" />
                    <div className="rowTitle">{o.title}</div>
                  </div>
                  <div className="rowAmount">{money(o.amount)}</div>
                </div>
              ))}
            </div>
          </Screen>
        )}

        {tab === 'Кредити' && (
          <Screen title="Доступний ліміт" color="linear-gradient(180deg, #1aa05c 0%, #137a46 100%)">
            <div className="bigNumber">{money(mock.installments.available)}</div>
            <div className="block">
              <div className="blockTitle">Покупка Частинами</div>
              {mock.installments.items.map((it, i) => (
                <div className="row tall" key={i}>
                  <div className="rowLeft">
                    <div className="dot purple" />
                    <div>
                      <div className="rowTitle">{it.title}</div>
                      <div className="rowSub">Платіж {it.nextPay} на {money(it.nextAmount)}</div>
                    </div>
                  </div>
                  <div className="rowAmount">{money(it.total)}</div>
                </div>
              ))}
            </div>
          </Screen>
        )}

        {tab === 'Накопичення' && (
          <Screen title="Накопичення в гривнях" color="linear-gradient(180deg, #1b6ad3 0%, #1558b0 100%)">
            <div className="bigNumber">{money(mock.savings.total)}</div>
            <div className="block">
              <div className="blockTitle">Банки</div>
              {mock.savings.jars.map((j, i) => (
                <div className="row tall" key={i}>
                  <div className="rowLeft">
                    <div className="dot pink" />
                    <div>
                      <div className="rowTitle">{j.title}</div>
                      <div className="rowSub">Накопичено {money(j.saved)}</div>
                    </div>
                  </div>
                  <div className="rowAmount">{money(j.goal)}</div>
                </div>
              ))}
            </div>
          </Screen>
        )}

        {tab === 'Ще' && (
          <Screen title="Ще" color="linear-gradient(180deg, #f2f2f2 0%, #f2f2f2 100%)">
            <div className="block">
              {mock.more.map((m, i) => (
                <div className="row tall" key={i}>
                  <div className="rowLeft">
                    <div className="dot blue" />
                    <div>
                      <div className="rowTitle">{m.title}</div>
                      <div className="rowSub">{m.subtitle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Screen>
        )}

        {tab === 'Маркет' && (
          <Screen title="Маркет" color="linear-gradient(180deg, #f2f2f2 0%, #f2f2f2 100%)">
            <div className="block">
              <div className="blockTitle">Скоро буде</div>
              <div className="row">
                <div className="rowTitle">Тут можна додати вітрину товарів (моково).</div>
              </div>
            </div>
          </Screen>
        )}

        <div className="tabbar">
          {mock.tabs.map((t) => (
            <button
              key={t}
              className={`tab ${t === tab ? 'active' : ''}`}
              onClick={() => setTab(t)}
              type="button"
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
