<template>
  <div class="footer center">
    <div class="container">
      <div>
        <a
          title="Datele oferite de Comisia electorala centrala"
          rel="noopener noreferrer"
          style="margin-top: 10px;"
          href="https://cec.md"
          target="_blank"
        >
          <img
            :src="require('../../assets/img/cec-logo.svg')"
            alt="Comisia electorala centrala"
            height="50"
          />
        </a>
      </div>

      <div>
        <small>
          Dezvoltat de
          <a
            href="http://lebo.md"
            target="_blank"
            title="Creare website"
            alt="Creare website"
            rel="noopener noreferrer"
            >Leu Ion</a
          >
        </small>
      </div>
      <div>
        <small>
          Informațiile sunt preluate de pe site-ul Comisiei Electorale Centrale
          (CEC), având caracter informativ și fiind actualizate în timp real.
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-comp",
};
</script>
