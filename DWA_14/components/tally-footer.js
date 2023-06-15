/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { html, LitElement } from '../libs/lit-html.js';

class TallyFooter extends LitElement {
  render() {
    return html`
      <footer>
        Inspired by
        <a class="footer__link" href="https://tallycount.app/">Tally Count</a>.
        Note that this is merely a student practice project for Dynamic Web
        Applications.
      </footer>
    `;
  }
}

customElements.define('tally-footer', TallyFooter)