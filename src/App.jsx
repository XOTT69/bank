import React from 'react'
import { mock } from './mock/data.js'

function money(n) {
  const sign = n < 0 ? '-' : ''
  const abs = Math.abs(n)
  return `${sign}${abs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₴`
}

function Phone({ children }) {
  return (
    <div className="stage">
      <div className="phoneShell">
        <div className="phoneInner">{children}</div>
      </div>
    </div>
  )
}

function HeaderBlueCards() {
  return (
    <div className="screenWrap">
      <div className="topBlue">
        <div className="amountBig">{money(mock.cards.balance)}</div>
        <div className="amountSub">
          Використано • {money(mock.cards.used)} з {money(mock.cards.limit)}
        </div>
      </div>

      <div className="bodyPad">
        <div className="card">
          <div className="cardTitle">Операції</div>

          <div className="list">
            {mock.cards.ops.map((o, i) => (
              <div className="listRow" key={i}>
                <div className="iconBox red" />
                <div className="rowMain">
                  <div className="rowTitle">{o.title}</div>
                </div>
                <div className="rowAmount">{money(o.amount)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="homeIndicator" />
    </div>
  )
}

function ScreenMore() {
  return (
    <div className="screenWrap">
      <div className="topLight">
        <div className="titleGhost">Ще</div>
      </div>

      <div className="bodyPad moreLift">
        <div className="card">
          <div className="list">
            {mock.more.map((m, i) => (
              <div className="listRow" key={i}>
                <div className="iconBox blue" />
                <div className="rowMain">
                  <div className="rowTitle">{m.title}</div>
                  <div className="rowSubtitle">{m.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="homeIndicator" />
    </div>
  )
}

function Tabbar({ tab, setTab }) {
  const items = [
    { key: 'cards', label: 'Картки' },
    { key: 'more', label: 'Ще' },
  ]
  return (
    <div className="tabbar">
      {items.map((it) => (
        <button
          key={it.key}
          className={`tabBtn ${tab === it.key ? 'active' : ''}`}
          onClick={() => setTab(it.key)}
          type="button"
        >
          {it.label}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const [tab, setTab] = React.useState('cards')

  return (
    <Phone>
      <div className="appRoot">
        {tab === 'cards' ? <HeaderBlueCards /> : <ScreenMore />}
        <Tabbar tab={tab} setTab={setTab} />
      </div>
    </Phone>
  )
}
