const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Desafio[2] DevOps</title>

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0a0a12;
          font-family: 'Segoe UI', sans-serif;
          color: white;
          padding: 20px;
        }

        .container {
          width: 90%;
          max-width: 1100px;
          padding: 40px;
          text-align: center;

          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(0,245,255,0.20);
          border-radius: 16px;

          box-shadow:
            0 0 25px rgba(0,245,255,0.08);
        }

        .tag {
          color: #00f5ff;
          font-size: 0.9rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 25px;
        }

        .hero {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 35px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 2.4rem;
          font-weight: 600;
        }

        .agent {
          font-family: monospace;
          font-size: 0.72rem;
          color: #00f5ff;
          line-height: 1.1;
          white-space: pre;
          text-align: left;

          text-shadow:
            0 0 8px rgba(0,245,255,0.35),
            0 0 15px rgba(0,245,255,0.15);
        }

        .subtitle {
          color: #b8b8c5;
          margin-bottom: 45px;
          font-size: 1rem;
        }

        .highlight {
          color: #8b5cf6;
          font-weight: 600;
        }

        .stack {
          display: flex;
          justify-content: center;
          gap: 35px;
          flex-wrap: wrap;
        }

        .item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;

          color: #7dd3fc;
          cursor: pointer;

          transition: all 0.3s ease;
        }

        .item:hover {
          transform: translateY(-4px);
          color: #00f5ff;
        }

        .icon {
          font-size: 1.8rem;
        }

        .tooltip {
          position: absolute;
          bottom: -110px;

          width: 220px;
          padding: 12px;

          background: rgba(15,15,25,0.97);
          border: 1px solid rgba(0,245,255,0.2);
          border-radius: 10px;

          color: #d1d5db;
          font-size: 0.8rem;
          line-height: 1.45;

          opacity: 0;
          visibility: hidden;

          transition: 0.3s ease;
          pointer-events: none;
        }

        .item:hover .tooltip {
          opacity: 1;
          visibility: visible;
        }

      </style>
    </head>

    <body>

      <div class="container">

        <div class="tag">
         Dayvson Clauber #PG251494
        </div>

        <div class="hero">

          <h1>
            Jornada Azure DevOps
          </h1>

          <pre class="agent">
       ____________
      /            \\
     |  __________  |
     | [  o    o  ] |
     |--|========|--|
   __|              |__
  |__   __________   __|
 [___] |   [0x]   | [___]
  | |  |  |||||||  |  | |
  |==| |__________| |==|
  |__|              |__|
     \\______________/
        |________|
          </pre>

        </div>

        <p class="subtitle">
          Processos Orientados por Entrega.
          <span class="highlight">
            Engenharia de Otimização de Esteira CI/CD.
          </span>
        </p>

        <div class="stack">

          <div class="item">

            <div class="icon">☁</div>
            <div>Azure for Students</div>

            <div class="tooltip">
              Sem cartão de crédito.<br>
              US$100 em créditos educacionais.<br>
              Configuração cross de e-mails e Onboarding na plataforma.
            </div>

          </div>

          <div class="item">

            <div class="icon">⌨</div>
            <div>Cloud Shell</div>

            <div class="tooltip">
              Bash e PowerShell nativos.<br>
              Terminal browser-based.<br>
              Sem instalação local da CLI.
            </div>

          </div>

          <div class="item">

            <div class="icon">🛡</div>
            <div>RBAC</div>

            <div class="tooltip">
              Linhas de comandos para atribuir função Contributor.<br>
              Permissões de deployment.<br>
              Execução automatizada habilitada.
            </div>

          </div>

          <div class="item">

            <div class="icon">⚙</div>
            <div>Actions</div>

            <div class="tooltip">
              Pipeline CI/CD configurada.<br>
              Deploy automatizado.<br>
              Entrega controlada por versionamento.
            </div>

          </div>

        </div>

        <p class="subtitle">
          dclauber@gmail.com.
          <span class="highlight">
            (81)98795-7412).
          </span>
        </p>

      </div>

    </body>

    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});