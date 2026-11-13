// Configuración de Tailwind (debe cargarse DESPUÉS del script de Tailwind CDN)
tailwind.config = {
  theme: { extend: {
    colors: { brand: {
      dark:'#0a0c16', card:'#121526', border:'#212640',
      orange:'#ff6b2c', orangeHover:'#ff8800',
      purple:'#7928ca', blue:'#4338ca', whatsapp:'#25d366'
    }},
    fontFamily: { sora:['Sora','sans-serif'], jakarta:['Plus Jakarta Sans','sans-serif'] },
    animation: {
      'float':'float 6s ease-in-out infinite',
      'float-delayed':'float 6s ease-in-out 3s infinite',
      'pulse-glow':'pulseGlow 3s ease-in-out infinite'
    },
    keyframes: {
      float:{'0%,100%':{transform:'translateY(0px)'},'50%':{transform:'translateY(-12px)'}},
      pulseGlow:{'0%,100%':{opacity:'0.4',transform:'scale(1)'},'50%':{opacity:'0.8',transform:'scale(1.05)'}}
    }
  }}
}
