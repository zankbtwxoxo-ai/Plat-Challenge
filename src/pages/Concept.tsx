import React from 'react'
import { Card, ButtonPrimary } from '../ui'
import { ExternalLink } from 'lucide-react'

const Concept: React.FC = () => {
  return (
    <div className="grid gap-6">
      <Card>
        <div className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-extrabold mb-4">ROAD TO PLAT – The Challenge Begins</h1>
          <p>Bienvenue dans le Road to Plat, le défi ultime entre tryhardeurs.</p>
          <p>Le principe est simple : le premier joueur à atteindre le rang Platine sur League of Legends remporte la victoire… et un skin aléatoire d’une valeur de <strong>1350 RP</strong> !</p>
          <h2 className="text-2xl font-bold mt-6 mb-2">Règles du défi</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Le but : être le premier à atteindre le rang Platine (Plat IV ou plus).</li>
            <li>Chacun part sur son compte personnel, en solo queue.</li>
            <li>Le premier qui atteint le rang Plat gagne un skin aléatoire (1350 RP) offert par le ZanK !</li>
            <li>Si tu atteins Plat sur un compte, tu peux relancer le défi avec un deuxième compte pour continuer la compétition.<br/>➜ Plus tu grimpes, plus tu montres ta constance et ton skill.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-2">Esprit du challenge</h2>
          <p>C’est une course de performance, d’endurance et de mental.</p>
          <p>Pas besoin d’être pro, mais il faut tenir la pression, progresser, et garder le focus. Chaque game compte. Chaque tilt coûte cher. Ici, l’objectif n’est pas juste de monter — c’est de prouver que t’as le mental d’un vrai compétiteur.</p>
          <h2 className="text-2xl font-bold mt-6 mb-2">Comment participer</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Inscris-toi sur le site.</li>
            <li>Joue tes games en tryhard, montre tes progrès.</li>
            <li>Le moment où tu passes Plat sera célébré en live (On forcera CraZy).</li>
            <li>Et si tu gagnes ? Tu repars avec ton skin mystère 1350 RP <em>(Nécessite d'être sub à la chaine twitch de CraZy)</em>.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-2">Ready to climb?</h2>
          <p>Le grind commence maintenant. Un seul arrivera Plat le premier. Mais tous deviendront meilleurs.</p>

          <div className="mt-6">
            <a href="https://discord.gg/KbhQEezp3Z" target="_blank" rel="noreferrer" className="inline-flex">
              <ButtonPrimary className="flex items-center gap-2">
                <ExternalLink size={16}/> Rejoindre le Discord
              </ButtonPrimary>
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Concept
