"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8874],{78874:function(e,t,i){i.r(t),i.d(t,{W3mModal:function(){return c}});var o=i(77548),n=i(49117),s=i(29974),a=i(54222),r=(0,s.iv)`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,l=function(e,t,i,o){var n,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(s<3?n(a):s>3?n(t,i,a):n(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let d="scroll-lock",c=class extends s.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=o.IN.state.open,this.caipAddress=o.AccountController.state.caipAddress,this.isSiweEnabled=o.OptionsController.state.isSiweEnabled,this.connected=o.AccountController.state.isConnected,this.loading=o.IN.state.loading,this.initializeTheming(),o.ApiController.prefetch(),this.unsubscribe.push(o.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose()),o.IN.subscribeKey("loading",e=>{this.loading=e,this.onNewAddress(o.AccountController.state.caipAddress)}),o.AccountController.subscribeKey("isConnected",e=>this.connected=e),o.AccountController.subscribeKey("caipAddress",e=>this.onNewAddress(e)),o.OptionsController.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),o.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?(0,s.dy)`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){let{SIWEController:e}=await Promise.all([i.e(6561),i.e(3884)]).then(i.bind(i,23884));"success"!==e.state.status&&this.connected&&await o.ConnectionController.disconnect()}o.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=o.ThemeController.state,i=n.UiHelperUtil.getColorTheme(t);(0,n.initializeTheming)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),o.SnackController.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=d,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${d}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){let{tagName:i}=t.target;!i||i.includes("W3M-")||i.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){if(!this.connected||this.loading)return;let t=o.j1.getPlainAddress(this.caipAddress),n=o.j1.getPlainAddress(e),s=o.j1.getNetworkId(this.caipAddress),a=o.j1.getNetworkId(e);if(this.caipAddress=e,this.isSiweEnabled){let{SIWEController:e}=await Promise.all([i.e(6561),i.e(3884)]).then(i.bind(i,23884)),o=await e.getSession();if(o&&t&&n&&t!==n){e.state._client?.options.signOutOnAccountChange&&(await e.signOut(),this.onSiweNavigation());return}if(o&&s&&a&&s!==a){e.state._client?.options.signOutOnNetworkChange&&(await e.signOut(),this.onSiweNavigation());return}this.onSiweNavigation()}}onSiweNavigation(){this.open?o.RouterController.push("ConnectingSiwe"):o.IN.open({view:"ConnectingSiwe"})}};c.styles=r,l([(0,a.SB)()],c.prototype,"open",void 0),l([(0,a.SB)()],c.prototype,"caipAddress",void 0),l([(0,a.SB)()],c.prototype,"isSiweEnabled",void 0),l([(0,a.SB)()],c.prototype,"connected",void 0),l([(0,a.SB)()],c.prototype,"loading",void 0),c=l([(0,n.customElement)("w3m-modal")],c)}}]);