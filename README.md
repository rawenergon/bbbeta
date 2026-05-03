# BB OS MADE FOR TAKUMI DELHI

BB (Breaking Bad OS) is an open-source, browser-based operating system built with plain **HTML**, **CSS**, and **JavaScript**. It runs entirely in the browser and delivers a lightweight desktop-style experience with draggable windows, a launcher, dock/taskbar, built-in apps, themes, local storage support, and a modern UI system.

## Live Demo

🌐 Live Preview: https://bbosbeta.vercel.app/

## Features

🖥️ Turns your browser into a fake operating system that somehow feels real

⚡ Windows-inspired taskbar and  because every OS needs one

🚀 Launcher fast enough to open apps you probably don’t need

📦 Built-in apps included so you can pretend this is an actual computer

🎨 Theme engine for changing the vibe every 5 minutes

💾 Saves your settings locally because losing customization hurts

🌐 Runs entirely in the browser — your PC is now hosting another PC

🧩 Lightweight enough to not destroy your RAM instantly

🔄 Service worker support for extra “wait this is actually good” moments

🛠️ Built with pure HTML, CSS, and JavaScript — no giant frameworks and vive coding

☁️ No installation required, just open the link and start clicking random things

🔓 Open source, so you can break it, fix it, and call it innovation

🧠 90% operating system vibes, 10% controlled chaos

## Built-In Apps

BB OS includes multiple bundled applications:

- Files
- Settings
- Calculator
- Camera
- Gallery
- Theme Store
- Studio
- Text Editor
- Time
- Games

## Tech Stack

BB OS is built using standard web technologies:

- **HTML** — Structure and app layouts
- **CSS** — Styling, themes, animations, and UI system
- **JavaScript** — Window management, nav logic, storage, and interactions

No frontend framework is required.

## Open Source

BB OS is fully open source and designed to be easy to inspect, modify, and extend.  
The project focuses on creating a customizable browser-based desktop environment while keeping the codebase lightweight and accessible.

## Project Structure

```text
bbos-main/
|-- index.html          # Main OS
|-- style.css           # Taskbar styling
|-- script.js           # Core shell interactions
|-- system32.js         # System/storage/settings logic
|-- nova.css            # Shared app/theme styles
|-- nova.js             # Shared helper bridge
|-- sw.js               # Service worker
|-- bios.html           # BIOS/setup screen
|-- appdata/            # Built-in apps
|-- scripts/            # Modular shell scripts
|-- libs/               # Libraries
```

## App Directory

```text
appdata/
|-- calculator.html
|-- camera.html
|-- files.html
|-- gallery.html
|-- settings.html
|-- store.html
|-- studio.html
|-- text.html
|-- time.html
`-- welcome.html
```

Each app is designed as a standalone HTML application integrated into the BB OS  environment.

## Running Locally

You can run BB OS locally using any static web server.

Example using Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Theme System

BB OS supports dynamic themes using CSS variables and shared Nova styling architecture.

The Theme Store fetches theme data from:

```text
https://adthoughtsglobal.github.io/Nova-Store/db/themes.json
```

Themes are applied dynamically through the shell’s existing theme engine.

## Development Notes

- Core shell UI lives in:
  - `index.html`
  - `style.css`
  - `script.js`

- Built-in apps should remain inside:
  - `appdata/`

- Shared theme styling should use:
  - `nova.css`

- Avoid unnecessary heavy dependencies
- Preserve the existing window and storage architecture

Suggested improvement areas:

- UI/UX polish
- Performance optimization
- Accessibility
- Built-in app improvements
- Theme enhancements
- Mobile responsiveness
- Documentation

Please keep pull requests focused and avoid rewriting unrelated systems.

## License

This project is open source.
If a dedicated license file is added to the repository, refer to that file for official usage terms.

## Credits

BB OS is inspired by mac and desktop operating systems and built entirely with standard web technologies.
Codex Web for Solving and deploying Issue.

Chatgpt for Prompt amplification.
