import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [sante, setSante] = useState(null) // réponse de /api/health
  const [erreur, setErreur] = useState(null)
  const [nom, setNom] = useState('Boris')
  const [message, setMessage] = useState('')

  // Au chargement de la page, on vérifie que l'API répond.
  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(setSante)
      .catch((e) => setErreur(e.message))
  }, [])

  async function direBonjour(e) {
    e.preventDefault()
    const res = await fetch(`/api/bonjour?nom=${encodeURIComponent(nom)}`)
    const data = await res.json()
    setMessage(data.message)
  }

  return (
    <main>
      <h1>Assistant de recherche d'emploi IA</h1>
      <p className="sous-titre">Étape 1 : React appelle FastAPI</p>

      <section className="carte">
        <h2>État de l'API</h2>
        {erreur && <p className="ko">API injoignable ({erreur}). Le backend est-il lancé ?</p>}
        {!erreur && !sante && <p>Connexion…</p>}
        {sante && (
          <p className="ok">
            API en ligne : {sante.status} ({new Date(sante.heure).toLocaleTimeString('fr-FR')})
          </p>
        )}
      </section>

      <section className="carte">
        <h2>Tester un endpoint</h2>
        <form onSubmit={direBonjour}>
          <input value={nom} onChange={(e) => setNom(e.target.value)} aria-label="Nom" />
          <button type="submit">Appeler /api/bonjour</button>
        </form>
        {message && <p>{message}</p>}
      </section>
    </main>
  )
}

export default App
