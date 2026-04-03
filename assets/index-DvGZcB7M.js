(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <div class="site-shell">
    <header class="topbar">
      <div class="brand">LATTICCE</div>
      <nav class="topnav">
        <a href="#manifesto">Manifiesto</a>
        <a href="#proceso">Proceso</a>
        <a href="#nodos">Nodos</a>
      </nav>
    </header>

    <section class="hero-composed" id="hero">
      <div class="hero-stage">
        <div class="light-source"></div>
        <div class="architectural-grid"></div>
        <div class="floating-line line-a"></div>
        <div class="floating-line line-b"></div>
        <div class="floating-line line-c"></div>

        <div class="hero-centerpiece reveal visible">
          <div class="orbital-ring ring-outer"></div>
          <div class="orbital-ring ring-mid"></div>
          <div class="orbital-ring ring-inner"></div>
          <div class="core-mark">L</div>
        </div>

        <div class="hero-copy-block">
          <p class="eyebrow">SISTEMA CREATIVO INTERDISCIPLINARIO</p>
          <h1>LATTICCE</h1>
          <p>
            Un universo visual donde la imagen, el sonido, la estrategia y la
            narrativa se conectan en una misma estructura viva.
          </p>
          <a href="#manifesto" class="hero-cta">Explorar</a>
        </div>
      </div>
    </section>

    <main>
      <section class="manifesto section" id="manifesto">
        <div class="section-head narrow">
          <span class="kicker">Manifiesto</span>
          <h2>Silencio visual, precisión y profundidad</h2>
        </div>
        <div class="manifesto-grid">
          <p>
            LATTICCE no se presenta desde el exceso. Se revela por claridad,
            contención y composición. Cada elemento existe porque es necesario.
          </p>
          <p>
            La interfaz toma como base un lenguaje sobrio, geométrico y lumínico:
            espacios oscuros, estructuras finas, luz controlada y jerarquía nítida.
          </p>
        </div>
      </section>

      <section class="timeline section" id="proceso">
        <div class="section-head">
          <span class="kicker">Proceso</span>
          <h2>Una estructura que evoluciona por capas</h2>
        </div>
        <div class="timeline-list cinematic">
          <article class="timeline-item reveal">
            <span>01</span>
            <h3>Origen</h3>
            <p>La idea emerge desde la oscuridad como una fuente de luz contenida.</p>
          </article>
          <article class="timeline-item reveal">
            <span>02</span>
            <h3>Construcción</h3>
            <p>La forma se organiza, aparecen relaciones, tensión y dirección.</p>
          </article>
          <article class="timeline-item reveal">
            <span>03</span>
            <h3>Expansión</h3>
            <p>El sistema se multiplica en nodos, disciplinas y trayectorias.</p>
          </article>
          <article class="timeline-item reveal">
            <span>04</span>
            <h3>Proyección</h3>
            <p>La experiencia alcanza a la audiencia y se convierte en memoria.</p>
          </article>
        </div>
      </section>

      <section class="nodes section" id="nodos">
        <div class="section-head">
          <span class="kicker">Nodos</span>
          <h2>Especialidades dentro de un mismo campo visual</h2>
        </div>
        <div class="node-grid refined">
          <article class="node-card reveal">
            <h3>Foto / Video</h3>
            <p>Imagen construida con intención y atmósfera cinematográfica.</p>
          </article>
          <article class="node-card reveal">
            <h3>Sonido</h3>
            <p>Capas sensoriales, vibración y diseño inmersivo.</p>
          </article>
          <article class="node-card reveal">
            <h3>Diseño</h3>
            <p>Sistemas visuales, composición y orden gráfico.</p>
          </article>
          <article class="node-card reveal">
            <h3>Time</h3>
            <p>Instantes humanos, memoria emocional y cercanía.</p>
          </article>
        </div>
      </section>
    </main>
  </div>
`;var e=document.querySelectorAll(`.reveal`),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`visible`)})},{threshold:.2});e.forEach(e=>t.observe(e));