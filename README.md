# Komponentenbasierte Todo-App (Vite + Vue.js + TypeScript)

Eine Todo-App entwickelt mit Vue.js 3 (Composition API), TypeScript und Vite.

## Voraussetzungen

Stelle sicher, dass du folgendes auf deinem System installiert hast:
- Node.js (Empfohlen: LTS-Version 18.x oder neuer)
- npm (wird standardmäßig mit Node.js installiert)

## Setup-Anleitung

Führe die folgenden Befehle im Terminal aus, um das Projekt lokal einzurichten und zu starten:

1. Navigiere in das Verzeichnis deines Projekts:
cd assignment_1

2. Installiere alle benötigten Node-Pakete:
npm install

3. Starte den lokalen Vite-Dev-Server:
npm run dev

Klicke anschließend auf den im Terminal ausgegebenen Link (standardmäßig http://localhost:5173), um die App im Browser aufzurufen.

## Projekt-Build für die Produktion

Um das Projekt für den Live-Betrieb zu kompilieren, nutze folgenden Befehl:
npm run build

Die generierten Produktionsdateien befinden sich danach im Ordner dist/.

## Architektur & Features
- Komponentenaufteilung: Modular aufgebaut mit Komponenten wie TodoApp.vue, TodoList.vue, TodoItem.vue, TodoAdd.vue und TodoFilter.vue.
- Kommunikation: Daten fließen über props nach unten; Aktionen (Toggle, Löschen, Hinzufügen, Filtern) werden über emit nach oben gereicht.
- TypeScript: Typisiertes Interface Todo (id, text, done).
- Filter-Funktion: Umschaltbar zwischen Alle, Offen und Erledigt.