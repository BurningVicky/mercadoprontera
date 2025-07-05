// Classe e metodos para controle do audio no jogo Mercado Prontera

class AudioManager {
  constructor() {
    this.bgm = document.getElementById('bgm');
    this.sfx = {
      click: document.getElementById('sfx-click'),
      buy: document.getElementById('sfx-buy'),
      sell: document.getElementById('sfx-sell'),
      notification: document.getElementById('sfx-notification'),
      login: document.getElementById('sfx-login'),
      lvlup: document.getElementById('sfx-lvlup'),
      bless: document.getElementById('sfx-bless'),
      agiup: document.getElementById('sfx-agiup')
    };
    
    this.bgmEnabled = true;
    this.sfxEnabled = true;
    this.bgmVolume = 0.5;
    this.sfxVolume = 0.7;
    
    this.initControls();
    this.loadPreferences();
  }
  
  // Metodo para inicializar os controles de áudio
  initControls() {
    // Botão de música
    document.getElementById('bgm-toggle').addEventListener('click', () => {
      this.bgmEnabled = !this.bgmEnabled;
      this.updateBGM();
      this.savePreferences();
    });
    
    // Botão de efeitos
    document.getElementById('sfx-toggle').addEventListener('click', () => {
      this.sfxEnabled = !this.sfxEnabled;
      this.updateSFX();
      this.savePreferences();
    });
    
  }
  
  // Atualiza o estado do BGM
  updateBGM() {
    const btn = document.getElementById('bgm-toggle');
    if (this.bgmEnabled) {
      this.bgm.volume = this.bgmVolume;
      this.bgm.play().catch(e => console.log("Não foi possível tocar:", e));
      btn.classList.remove('muted');
    } else {
      this.bgm.pause();
      btn.classList.add('muted');
    }
  }
  
  // Atualiza o estado dos efeitos sonoros
  updateSFX() {
    const btn = document.getElementById('sfx-toggle');
    btn.classList.toggle('muted', !this.sfxEnabled);
  }
  
  playSFX(type) {
    if (!this.sfxEnabled || !this.sfx[type]) return;
    
    try {
      this.sfx[type].currentTime = 0;
      this.sfx[type].volume = this.sfxVolume;
      this.sfx[type].play();
      
      // Efeito visual
      const btn = document.getElementById('sfx-toggle');
      btn.classList.add('audio-playing');
      setTimeout(() => btn.classList.remove('audio-playing'), 300);
    } catch (e) {
      console.log("Error ao tocar SFX:", e);
    }
  }
  
  // Salva as preferências de áudio no localStorage
  savePreferences() {
    localStorage.setItem('audioPrefs', JSON.stringify({
      bgm: this.bgmEnabled,
      sfx: this.sfxEnabled,
      bgmVolume: this.bgmVolume,
      sfxVolume: this.sfxVolume
    }));
  }
  
  // Carrega as preferências de áudio do localStorage
  loadPreferences() {
    const prefs = JSON.parse(localStorage.getItem('audioPrefs')) || {};
    this.bgmEnabled = prefs.bgm !== false; // Default true
    this.sfxEnabled = prefs.sfx !== false; // Default true
    this.bgmVolume = prefs.bgmVolume || 0.5;
    this.sfxVolume = prefs.sfxVolume || 0.7;
    
    this.updateBGM();
    this.updateSFX();
  }
}

// Escopo global para o gerenciador de áudio
window.audioManager = new AudioManager();
