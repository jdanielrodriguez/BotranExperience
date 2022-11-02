
export default function ARObjects() {
   const introTexture = [
      require('./../../../assets/vrx/01-FBX-INTRO/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/casa-xela-Barriles-uvmap.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/casa-xela-frente-uvmap.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/Col0-INTRO_Uvmap.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/Col0-mapa-casa-reu-puerto_uvmap.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/Col0-mapa-casa-xela_uvmap.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/Col0-MAPA-XELA-Mixco_Uvmap.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/Col0-Zoom-Mapa_Uvmap.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/LANDING_0002_MIXCO-MAP.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/LANDING_0004_REU-MAP.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/LANDING_0006_XELA-MAP.png'),
   ]

   const intro = [
      {
         src: require("./../../../assets/vrx/01-FBX-INTRO/Intro_Completa-conBotella-12-parte1.vrx"),
         materials: introTexture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_MUSIC.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/01-FBX-INTRO/Intro_Completa-conBotella-12-parte2.vrx"),
         materials: introTexture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_NATURE.mp3"),
         scale: [1, 1, 1]
      },
      // {
      //    src: require("./../../../assets/vrx/01-FBX-INTRO/01-MODULOS-Intro_Completa-FLATTEN-SINBOTELLA.vrx"),
      //    materials: introTexture,
      //    scale: [1, 1, 1]
      // },
   ]

   const col1Texture = [
      require('./../../../assets/vrx/02-Columna1/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../../assets/vrx/02-Columna1/Col1-Cultivo_Uvmap.png'),
      require('./../../../assets/vrx/02-Columna1/Col1-Destilacion_Uvmap.png'),
      require('./../../../assets/vrx/02-Columna1/Col1-Fermentacion_Uvmap.png'),
      require('./../../../assets/vrx/02-Columna1/Col1-MielVirgen_Uvmap.png'),
      
   ]

   const col1 = [
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte1.vrx"),
         materials: col1Texture,
         sound: require("./../../../assets/mp3/narracion/1_GUATEMALAN_ORIGIN.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte2.vrx"),
         materials: col1Texture,
         sound: require("./../../../assets/mp3/narracion/2_CULTIVO.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte3.vrx"),
         materials: col1Texture,
         sound: require("./../../../assets/mp3/narracion/3_MIEL_VIRGEN.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte4.vrx"),
         materials: col1Texture,
         sound: require("./../../../assets/mp3/narracion/4_FERMENTACIÓN.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte5.vrx"),
         materials: col1Texture,
         sound: require("./../../../assets/mp3/narracion/5_DESTILACIÓN.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte6.vrx"),
         materials: col1Texture,
         sound: null,
         scale: [1, 1, 1]
      },
   ]

   const col2Texture = [
      require('./../../../assets/vrx/03-Columna2/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../../assets/vrx/03-Columna2/BOTRAN-No15-EtiquetaLOW.png'),
      require('./../../../assets/vrx/03-Columna2/BOTRAN-No18-EtiquetaLOW.png'),
      require('./../../../assets/vrx/03-Columna2/Col2-Anejamiento_Dinamico_Uvmap.png'),
      require('./../../../assets/vrx/03-Columna2/Col2-Blending_Uvmap.png'),
      require('./../../../assets/vrx/03-Columna2/Col2-intro_DYNAMIC_AGING_Uvmap.png'),
      
   ]

   const col2 = [
      {
         src: require("./../../../assets/vrx/03-Columna2/col02-conBotella-12-parte1.vrx"),
         materials: col2Texture,
         sound: require("./../../../assets/mp3/narracion/6_DYNAMIC_AGEING_PROCESS.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/03-Columna2/col02-conBotella-12-parte2.vrx"),
         materials: col2Texture,
         sound: require("./../../../assets/mp3/narracion/7_ANEJAMIENTO.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/03-Columna2/col02-conBotella-12-parte3.vrx"),
         materials: col2Texture,
         sound: require("./../../../assets/mp3/narracion/8_BLENDING_01.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/03-Columna2/col02-conBotella-12-parte4.vrx"),
         materials: col2Texture,
         sound: null,
         scale: [1, 1, 1]
      },
   ]

   const col3Texture = [
      require('./../../../assets/vrx/04-Columna3/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../../assets/vrx/04-Columna3/Col3-AroundTheWorld_Uvmap.png'),
      require('./../../../assets/vrx/04-Columna3/Col3-Distribucion_Uvmap.png'),
      require('./../../../assets/vrx/04-Columna3/Col3-Embotellado_Uvmap.png'),
      
   ]

   const col3 = [
      {
         src: require("./../../../assets/vrx/04-Columna3/col03-conBotella-12-parte1.vrx"),
         materials: col3Texture,
         sound: require("./../../../assets/mp3/narracion/9_EMBOTELLADO.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/04-Columna3/col03-conBotella-12-parte2.vrx"),
         materials: col3Texture,
         sound: require("./../../../assets/mp3/narracion/10_DISTRIBUCION.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/04-Columna3/col03-conBotella-12-parte3.vrx"),
         materials: col3Texture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_NATURE.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/04-Columna3/col03-conBotella-12-parte4.vrx"),
         materials: col3Texture,
         sound: null,
         scale: [1, 1, 1]
      },
   ]

   const col4Texture = [
      require('./../../../assets/vrx/05-Columna4/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../../assets/vrx/05-Columna4/BOTRAN-No15-EtiquetaLOW.png'),
      require('./../../../assets/vrx/05-Columna4/BOTRAN-No18-EtiquetaLOW.png'),
      require('./../../../assets/vrx/05-Columna4/02_COMPROMISO-TIERRA_0002_HOMBRE-DERECHO.png'),
      require('./../../../assets/vrx/05-Columna4/Col4-CADENA_SUSTENTABLE.png'),
      require('./../../../assets/vrx/05-Columna4/Col4-CARBON_NEUTRAL_Uvmap.png'),
      require('./../../../assets/vrx/05-Columna4/Col4-COMPROMISO-TIERRA_Uvmap.png'),
      require('./../../../assets/vrx/05-Columna4/Col4-intro_1sT_Sustainable_Uvmap.png'),
      require('./../../../assets/vrx/05-Columna4/Col4-ISCC-PLUS_Uvmap.png'),
      
   ]

   const col4 = [
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte1.vrx"),
         materials: col4Texture,
         sound: require("./../../../assets/mp3/narracion/11__1ST_SUSTAINABLE_RUM_IN_THE_WORLD.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte2.vrx"),
         materials: col4Texture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_NATURE.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte3.vrx"),
         materials: col4Texture,
         sound: require("./../../../assets/mp3/narracion/12_COMPROMISO_CON_LA_TIERRA.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte4.vrx"),
         materials: col4Texture,
         sound: require("./../../../assets/mp3/narracion/13_SELLO_ISCC_PLUS.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte5.vrx"),
         materials: col4Texture,
         sound: require("./../../../assets/mp3/narracion/14_CADENA_SUSTENTABLE.mp3"),
         scale: [1, 1, 1]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte6.vrx"),
         materials: col4Texture,
         sound: null,
         scale: [1, 1, 1]
      },
   ]

   return [intro, intro, col1, col2, col3, col4];
}