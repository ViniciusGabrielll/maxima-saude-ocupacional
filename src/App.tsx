import styles from "./App.module.css";
import logoMaximaPadrao from "./assets/logo/logoMaximaPadrao.svg";
import logotipoMaxima from "./assets/logo/logotipoMaxima.png";
import whatsappIcon from "./assets/icon/whatsapp.svg";
import setaParaBaixo from "./assets/icon/setaParaBaixo.png";
import agenda from "./assets/icon/agenda.png";
import logoMaximaBranca from "./assets/logo/logoMaximaBranca.svg";

import exameAdmissional from "./assets/cards/exameAdmissional.svg";
import exameDemissional from "./assets/cards/exameDemissional.svg";
import exameDeMudancaDeFuncao from "./assets/cards/exameDeMudancaDeFuncao.svg";
import exameDeRetornoDoTrabalho from "./assets/cards/exameDeRetornoDoTrabalho.svg";
import examePeriodico from "./assets/cards/examePeriodico.svg";

function App() {
  const smoothScrollTo = (targetId: string, duration = 800) => {
    const target = document.querySelector(targetId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;

    let startTime: number | null = null;

    // easing (suavização de verdade)
    const easeInOut = (t: number) => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = easeInOut(progress);

      window.scrollTo(0, start + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };
  return (
    <div>
      <section id="inicio" className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navPart1}>
            <img
              src={logoMaximaPadrao}
              alt="Logo Máxima Padrão"
              className={styles.logoMaximaPadrao}
            />
            <div className={styles.navButtons}>
              <button onClick={() => smoothScrollTo("#inicio")}>Início</button>
              <button onClick={() => smoothScrollTo("#sobre")}>Sobre</button>
              <button onClick={() => smoothScrollTo("#servicos")}>
                Serviços
              </button>
              <button onClick={() => smoothScrollTo("#contato")}>
                Contato
              </button>
            </div>
          </div>
          <a className={styles.atendimentoButton}>
            <h3>Atendimento</h3>
            <p>+55 81 99228-1829</p>
          </a>
        </nav>
        <article>
          <h2>CLINÍCA DE MEDICINA DO TRABALHO EM CARUARU - PE</h2>
          <h1>
            CUIDANDO DA SAÚDE OCUPACIONAL COM EXCELÊNCIA E RESPONSABILIDADE.
          </h1>
        </article>
        <article>
          <h2>Orçamento exame ocupacional!</h2>
          <button className={styles.whatsappBtn}>
            <img src={whatsappIcon} alt="Icone do WhatsApp" />
            <p>WHATSAPP</p>
          </button>
        </article>
        <button
          onClick={() => smoothScrollTo("#sobre")}
          className={styles.setaBtn}
        >
          <img src={setaParaBaixo} alt="Seta para baixo" />
        </button>
      </section>
      <div className={styles.fundoHeader}></div>
      <section id="sobre" className={styles.sobre}>
        <img
          src={logotipoMaxima}
          alt="logo Maxima"
          className={styles.imgSobre}
        />
        <article>
          <h1>Bem-vindo à Máxima</h1>
          <p>
            Contamos com estrutura completa, incluindo exames laboratoriais e
            equipamentos próprios (EEG, ECG, audiometria e espirometria), além
            de uma equipe multidisciplinar qualificada. Oferecemos soluções em
            Medicina do Trabalho, perícias e programas de saúde ocupacional, com
            foco na redução de riscos e segurança jurídica da sua empresa.
            <br /> <br />
            Realize exames do PCMSO com quem tem excelência no atendimento e
            agilidade na entrega de resultados.
          </p>
          <button className={styles.agendarBtn}>
            <img src={agenda} alt="Icone de Agenda" />
            <p>AGENDAR CONSULTA</p>
          </button>
        </article>
      </section>
      <section id="servicos" className={styles.servicos}>
        <h1>Serviços Oferecidos</h1>
        <article>
          <h3>CONHEÇA OS PRINCIPAIS SERVIÇOS OFERECIDOS PELA MÁXIMA.</h3>
          <div className={styles.cardsServicos}>
            <div className={styles.cardServicos}>
              <img src={exameAdmissional} alt="Imagem do Exame Admissional" />
              <h3>EXAME ADMISSIONAL</h3>
              <p>Realizado antes do início das atividades do trabalhador.</p>
            </div>
            <div className={styles.cardServicos}>
              <img src={examePeriodico} alt="Imagem do Exame Periódico" />
              <h3>EXAME PERIÓDICO</h3>
              <p>Feito regularmente, conforme o PCMSO de cada empresa.</p>
            </div>
            <div className={styles.cardServicos}>
              <img
                src={exameDeRetornoDoTrabalho}
                alt="Imagem do Retorno do Trabalho"
              />
              <h3>EXAME DE RETORNO DO TRABALHO</h3>
              <p>Obrigatório após afastamento de 30 dias ou mais.</p>
            </div>
            <div className={styles.cardServicos}>
              <img
                src={exameDeMudancaDeFuncao}
                alt="Imagem do Exame de Mudança de Risco Ocupacional"
              />
              <h3>EXAME DE MUNDAÇA DE RISCO OCUPACIONAL</h3>
              <p>Necessário se os riscos da nova função forem diferentes. </p>
            </div>
            <div className={styles.cardServicos}>
              <img src={exameDemissional} alt="Imagem do Exame Demissional" />
              <h3>EXAME DEMISSIONAL</h3>
              <p>Feito no desligamento para garantir condições de saúde.</p>
            </div>
          </div>
        </article>
      </section>
      <section id="contato" className={styles.contato}>
        <article className={styles.informacoesContato}>
          <div>
            <h1>Faça seu agendamento</h1>
            <p>
              Para marcar uma consulta, tirar dúvidas ou solicitar informações,
              você pode entrar em contato conosco pelo whatsapp:
            </p>
            <button className={styles.whatsappBtn}>
              <img src={whatsappIcon} alt="Icone do WhatsApp" />
              <p>WHATSAPP</p>
            </button>
            <p>
              <span>Telefone:</span> +55 81 99228-1829
            </p>
          </div>
          <div>
            <h1>Nossa Localização</h1>
            <p>Rua Nossa Senhora de Fátima, 158, Caruaru 55012600</p>
            <a className={styles.verNoGoogleMaps}>Ver no Google Maps</a>
          </div>
          <div>
            <h1>Funcionamento</h1>
            <p>
              Exames médicos por ordem de chegada das 07 as 12h de segunda as
              sextas feiras.
            </p>

            <p>
              Resultados e liberação de exames: de segunda a quinta-feira, das
              13h às 17h, e às sextas-feiras, das 13h às 16h. Atendimento pelo
              e-mail <strong>atendimentos@clinicamaxima.net</strong> ou pelo
              WhatsApp <strong>(81) 98294-2490.</strong>
            </p>
          </div>
        </article>
        <article>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.241040715707!2d-35.972328625228435!3d-8.27879199175559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a98bc303241c57%3A0x103c272412df0e90!2sM%C3%A1xima%20Medicina%20do%20Trabalho%20Caruaru%20PE!5e0!3m2!1spt-BR!2sbr!4v1775743132668!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className={styles.maps}
          ></iframe>
        </article>
      </section>
      <footer className={styles.footer}>
        <img src={logoMaximaBranca} alt="Logo Máxima Versão Branca" />
        <p>Maxima © 2026 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
