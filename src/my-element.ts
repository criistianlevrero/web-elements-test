/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('equis-card')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .card-container {
      background-color: #ffffff;
      border: 1px solid rgba(232, 232, 232, 0.7);
      border-radius: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
      position: relative;
      transition: all 200ms ease-in-out;
      width: 100%;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  render() {
    return html`
      <div class=${classMap({'card-container':true, alert:true,info:true})}>
        <slot></slot>
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'equis-card': MyElement;
  }
}
