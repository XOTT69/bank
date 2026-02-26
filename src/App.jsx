import React from 'react'
import { mock } from './mock/data.js'

function money(n) {
  const sign = n < 0 ? '−' : ''
  const abs = Math.abs(n)
  return `${sign}${abs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ₴`
}

/* ─── Screens ──────────────────────────────────────────── */

function ScreenCards() {
  return (
    <div className="screen screen--blue">
      <div className="statusBar">
        <span className="statusTime">00:52</span>
        <div className="statusRight">
          <span className="statusIcon">📶</span>
          <span className="statusIcon">🔋</span>
        </div>
      </div>

      <div className="blueHeader">
        <div className="pillBadge">Немає мінімального платежу</div>
        <div className="heroAmount">{money(mock.cards.balance)}</div>
        <div className="heroSub">
          Використано &bull; {money(mock.cards.used)} з {money(mock.cards.limit)}
        </div>
      </div>

      <div className="scrollArea">
        <div className="card3dWrap">
          <div className="card3d">
            <div className="card3dBank">monobank</div>
            <div className="card3dNum">{mock.cards.cardMasked}</div>
            <div className="card3dVisa">VISA</div>
          </div>
        </div>

        <div className="actionRow">
          <button className="actionBtn" type="button">
            <div className="actionIcon">💳</div>
            <span>Переказати<br/>на картку</span>
          </button>
          <button className="actionBtn" type="button">
            <div className="actionIcon">📄</div>
            <span>Платіж<br/>за IBAN</span>
          </button>
          <button className="actionBtn" type="button">
            <div className="actionIcon">⚡</div>
            <span>Інші<br/>платежі</span>
          </button>
        </div>

        <div className="sectionCard">
          <div className="sectionHeader">
            <span className="sectionTitle">Операції</span>
            <span className="sectionLink">Усі &rsaquo;</span>
          </div>
          {mock.cards.ops.map((o, i) => (
            <div className="listRow" key={i}>
              <div className="listIcon listIcon--red">🛒</div>
              <div className="listBody">
                <div className="listTitle">{o.title}</div>
              </div>
              <div className="listAmount listAmount--neg">{money(o.amount)}</div>
            </div>
          ))}
        </div>

        <div className="usefulSection">
          <div className="usefulRow">
            <div className="usefulCell">
              <div className="currencyFlag">🇺🇸</div>
              <div className="currencyLabel">Долар США</div>
              <div className="currencyRate">43.01 / 43.47</div>
            </div>
            <div className="usefulCell">
              <div className="currencyFlag">🇪🇺</div>
              <div className="currencyLabel">Євро</div>
              <div className="currencyRate">50.87 / 51.53</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenCredits() {
  return (
    <div className="screen screen--green">
      <div className="statusBar">
        <span className="statusTime">00:51</span>
        <div className="statusRight">
          <span className="statusIcon">📶</span>
          <span className="statusIcon">🔋</span>
        </div>
      </div>

      <div className="greenHeader">
        <div className="headerTitleWhite">Доступний ліміт</div>
        <div className="heroAmount">{money(mock.installments.available)}</div>
      </div>

      <div className="scrollArea">
        <div className="pillTabRow">
          <button className="pillTab pillTab--active" type="button">🐾 Покупка Частинами</button>
          <button className="pillTab" type="button">🕐 Розстрочка на картку</button>
        </div>

        <div className="sectionCard">
          <div className="sectionTitle" style={{marginBottom:12}}>Покупка Частинами</div>
          {mock.installments.items.map((it, i) => (
            <div className="listRow" key={i}>
              <div className="listIcon listIcon--purple">🐾</div>
              <div className="listBody">
                <div className="listTitle">{it.title}</div>
                <div className="listSub">Платіж {it.nextPay} на {money(it.nextAmount)}</div>
                <div className="progressBar">
                  <div className="progressFill" style={{width:`${Math.max(8, 100 - it.total/500)}%`}}/>
                </div>
              </div>
              <div className="listAmount">{money(it.total)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScreenSavings() {
  return (
    <div className="screen screen--lightblue">
      <div className="statusBar">
        <span className="statusTime">00:52</span>
        <div className="statusRight">
          <span className="statusIcon">📶</span>
          <span className="statusIcon">🔋</span>
        </div>
      </div>

      <div className="blueHeader" style={{background:'linear-gradient(170deg,#1a66d8 0%,#1548a8 100%)'}}>
        <div className="headerTitleWhite">Накопичення в гривнях</div>
        <div className="heroAmount">{money(mock.savings.total)}</div>
      </div>

      <div className="scrollArea">
        <div className="pillTabRow">
          <button className="pillTab pillTab--active" type="button">🏦 Відкрити депозит</button>
          <button className="pillTab" type="button">🏺 Відкрити Банку</button>
        </div>

        <div className="sectionCard">
          <div className="sectionTitle">Банки</div>
          <div className="sectionSubtitle">У гривні {money(mock.savings.total)}</div>
          {mock.savings.jars.map((j, i) => (
            <div className="listRow" key={i}>
              <div className="listIcon listIcon--pink">🏺</div>
              <div className="listBody">
                <div className="listTitle">{j.title}</div>
                <div className="listSub">Накопичено {money(j.saved)}</div>
                <div className="progressBar">
                  <div className="progressFill progressFill--pink" style={{width:`${Math.min(100,j.saved/j.goal*100)}%`}}/>
                </div>
              </div>
              <div className="listAmount">{money(j.goal)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScreenMore() {
  return (
    <div className="screen screen--gray">
      <div className="statusBar statusBar--dark">
        <span className="statusTime statusTime--dark">00:52</span>
        <div className="statusRight">
          <span className="statusIcon">📶</span>
          <span className="statusIcon">🔋</span>
        </div>
      </div>

      <div className="grayHeader">
        <div className="headerTitleDark">Ще</div>
      </div>

      <div className="scrollArea">
        <div className="quickRow">
          <button className="quickBtn" type="button">
            <div className="quickIcon">🎁</div>
            <span>Запросити<br/>друга</span>
          </button>
          <button className="quickBtn" type="button">
            <div className="quickIcon">🎧</div>
            <span>Служба<br/>підтримки</span>
          </button>
          <button className="quickBtn" type="button">
            <div className="quickIcon">📷</div>
            <span>Сканер<br/>QR</span>
          </button>
        </div>

        <div className="sectionCard">
          {mock.more.slice(0,4).map((m, i) => (
            <div className="listRow" key={i}>
              <div className="listIcon listIcon--blue">⚙️</div>
              <div className="listBody">
                <div className="listTitle">{m.title}</div>
                <div className="listSub">{m.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="sectionCard" style={{marginTop:14}}>
          {mock.more.slice(4).map((m, i) => (
            <div className="listRow" key={i}>
              <div className="listIcon listIcon--orange">🔐</div>
              <div className="listBody">
                <div className="listTitle">{m.title}</div>
                <div className="listSub">{m.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ScreenMarket() {
  return (
    <div className="screen screen--gray">
      <div className="grayHeader">
        <div className="headerTitleDark">Маркет</div>
      </div>
      <div className="scrollArea">
        <div className="sectionCard">
          <div className="listTitle" style={{textAlign:'center',padding:'24px 0',color:'#aaa'}}>
            Скоро буде
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Main ─────────────────────────────────────────────── */

const TABS = [
  { key:'cards', label:'Картки', icon:'💳' },
  { key:'credits', label:'Кредити', icon:'📊' },
  { key:'savings', label:'Накопичення', icon:'🏦' },
  { key:'more', label:'Ще', icon:'⋯' },
  { key:'market', label:'Маркет', icon:'🛍' },
]

export default function App() {
  const [tab, setTab] = React.useState('cards')

  const screens = {
    cards: <ScreenCards />,
    credits: <ScreenCredits />,
    savings: <ScreenSavings />,
    more: <ScreenMore />,
    market: <ScreenMarket />,
  }

  return (
    <div className="stage">
      <div className="phone">
        <div className="screenContainer">
          {screens[tab]}
        </div>
        <div className="tabbar">
          {TABS.map(t => (
            <button
              key={t.key}
              type="button"
              className={`tabBtn ${tab===t.key?'tabBtn--active':''}`}
              onClick={() => setTab(t.key)}
            >
              <span className="tabIcon">{t.icon}</span>
              <span className="tabLabel">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
