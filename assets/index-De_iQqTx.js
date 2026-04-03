(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <div class="site-shell">
    <header class="topbar">
      <div class="brand">LATTICCE</div>
      <nav class="topnav">
        <a href="#universo">Universo</a>
        <a href="#proceso">Proceso</a>
        <a href="#nodos">Nodos</a>
      </nav>
    </header>

    <section class="hero" id="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-glow"></div>

      <div class="hero-content">
        <p class="eyebrow">SISTEMA CREATIVO AUDIOVISUAL</p>
        <h1>LATTICCE</h1>
        <p class="hero-copy">
          Un lugar donde las ideas nacen en silencio, toman forma entre personas
          y terminan encontrando a quienes las necesitaban.
        </p>
        <a class="hero-cta" href="#universo">Entrar al sistema</a>
      </div>

      <div class="scroll-indicator">Scroll</div>
    </section>

    <main>
      <section class="intro section" id="universo">
        <div class="section-head">
          <span class="kicker">Experiencia</span>
          <h2>Un recorrido que se construye mientras avanzas</h2>
        </div>
        <div class="intro-grid">
          <p>
            La experiencia comienza en negro. Después emerge una luz tenue,
            luego una forma, luego un sistema. Nada aparece de golpe.
          </p>
          <p>
            El sitio no presenta servicios como fichas aisladas: revela un
            ecosistema visual, sonoro y narrativo conectado.
          </p>
        </div>
      </section>

      <section class="timeline section" id="proceso">
        <div class="section-head">
          <span class="kicker">Proceso</span>
          <h2>Del nacimiento de la idea a su encuentro con el mundo</h2>
        </div>
        <div class="timeline-list">
          <article class="timeline-item reveal">
            <span>01</span>
            <h3>Gestación</h3>
            <p>Ideas reuniéndose en silencio. Observación, pensamiento y dirección.</p>
          </article>
          <article class="timeline-item reveal">
            <span>02</span>
            <h3>Exploración</h3>
            <p>Búsqueda, movimiento, territorio y forma inicial del proyecto.</p>
          </article>
          <article class="timeline-item reveal">
            <span>03</span>
            <h3>Acción</h3>
            <p>Producción, estructura, equipo y energía materializándose.</p>
          </article>
          <article class="timeline-item reveal">
            <span>04</span>
            <h3>Refinamiento</h3>
            <p>Revisión, ajuste, precisión visual y narrativa.</p>
          </article>
          <article class="timeline-item reveal">
            <span>05</span>
            <h3>Proyección</h3>
            <p>La obra sale al mundo y encuentra pantallas, personas y memoria.</p>
          </article>
        </div>
      </section>

      <section class="nodes section" id="nodos">
        <div class="section-head">
          <span class="kicker">Nodos</span>
          <h2>Áreas autónomas, un mismo sistema</h2>
        </div>
        <div class="node-grid">
          <article class="node-card reveal">
            <h3>Foto / Video</h3>
            <p>Imagen construida con intención, atmósfera y calidad cinematográfica.</p>
          </article>
          <article class="node-card reveal">
            <h3>Sound</h3>
            <p>Capas, vibración, inmersión y diseño sonoro como experiencia.</p>
          </article>
          <article class="node-card reveal">
            <h3>Design</h3>
            <p>Sistemas visuales, composición, orden y pensamiento detrás de la forma.</p>
          </article>
          <article class="node-card reveal light-card">
            <h3>Time</h3>
            <p>La parte humana del sistema: recuerdos, bodas, eventos y momentos reales.</p>
          </article>
        </div>
      </section>

      <section class="keywords section">
        <div class="section-head narrow">
          <span class="kicker">Conexiones</span>
          <h2>Cine, diseño, fotografía, estrategia, sonido, historias</h2>
        </div>
        <div class="keyword-cloud">
          <span>cine</span>
          <span>diseño</span>
          <span>fotografía</span>
          <span>estrategia</span>
          <span>sonido</span>
          <span>ideas</span>
          <span>campañas</span>
          <span>historias</span>
          <span>experiencia</span>
          <span>narrativa</span>
        </div>
      </section>
    </main>
  </div>
`;var e=document.querySelectorAll(`.reveal`),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`visible`)})},{threshold:.2});e.forEach(e=>t.observe(e)),window.addEventListener(`scroll`,()=>{let e=window.scrollY;document.documentElement.style.setProperty(`--scroll`,`${e}`)});