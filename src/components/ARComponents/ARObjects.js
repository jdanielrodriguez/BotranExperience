
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
      require('./../../../assets/vrx/01-FBX-INTRO/QUETZAL_VOLando02_0000_Layer-2.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/QUETZAL_VOLando02_0001_Layer-1.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/QUETZAL_VOLando02_0002_Layer-3.png'),
   ]

   const intro = [
      
      {
         src: require("./../../../assets/vrx/01-FBX-INTRO/col00-Intro_Completa-conBotella-12-parte1.vrx"),
         materials: introTexture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_MUSIC.mp3"),
         scale:[0.00180, 0.00180, 0.001],
         position:[0.002,-0.120,0]
      },
      {
         src: require("./../../../assets/vrx/01-FBX-INTRO/col00-Intro_Completa-conBotella-12-parte2.vrx"),
         materials: introTexture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_NATURE.mp3"),
         scale:[0.00180, 0.00180, 0.001],
         position:[0.002,-0.120,0]
      },
      
   ]

   const col1Texture = [
      require('./../../../assets/vrx/02-Columna1/Col1-Cultivo_Uvmap.png'),
      require('./../../../assets/vrx/02-Columna1/Col1-Destilacion_Uvmap.png'),
      require('./../../../assets/vrx/02-Columna1/Col1-Fermentacion_Uvmap.png'),
      require('./../../../assets/vrx/02-Columna1/Col1-MielVirgen_Uvmap.png'),
      require('./../../../assets/vrx/02-Columna1/QUETZAL_VOLando02_0000_Layer-2.png'),
      require('./../../../assets/vrx/02-Columna1/QUETZAL_VOLando02_0001_Layer-1.png'),
      require('./../../../assets/vrx/02-Columna1/QUETZAL_VOLando02_0002_Layer-3.png'),
      
   ]

   const col1 = [
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte1.vrx"),
         materials: col1Texture,
         sound: require("./../../../assets/mp3/narracion/1_GUATEMALAN_ORIGIN.mp3"),
         scale: [0.0016, 0.0017, 0.001],
         position: [-0.002, -0.16, 0]
      },
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte2.vrx"),
         materials: col1Texture,
         sound: require("./../../../assets/mp3/narracion/2_CULTIVO.mp3"),
         scale: [0.0016, 0.0017, 0.001],
         position: [-0.002, -0.16, 0]
      },
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte3.vrx"),
         materials: col1Texture,
         sound: require("./../../../assets/mp3/narracion/3_MIEL_VIRGEN.mp3"),
         scale: [0.0016, 0.0017, 0.001],
         position: [-0.002, -0.16, 0]
      },
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte4.vrx"),
         materials: col1Texture,
         sound: require("./../../../assets/mp3/narracion/4_FERMENTACION.mp3"),
         scale: [0.0016, 0.0017, 0.001],
         position: [-0.002, -0.16, 0]
      },
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte5.vrx"),
         materials: col1Texture,
         sound: require("./../../../assets/mp3/narracion/5_DESTILACION.mp3"),
         scale: [0.0016, 0.0017, 0.001],
         position: [-0.002, -0.16, 0]
      },
      {
         src: require("./../../../assets/vrx/02-Columna1/col01-conBotella-12-parte6.vrx"),
         materials: col1Texture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_12_SFX_04SFX.mp3"),
         scale: [0.0016, 0.0017, 0.001],
         position: [-0.002, -0.16, 0]
      },
   ]

   const col2Texture = [
      require('./../../../assets/vrx/03-Columna2/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../../assets/vrx/03-Columna2/Col2-Anejamiento_Dinamico_Uvmap.png'),
      require('./../../../assets/vrx/03-Columna2/Col2-Blending_Uvmap.png'),
      require('./../../../assets/vrx/03-Columna2/Col2-intro_DYNAMIC_AGING_Uvmap.png'),
      require('./../../../assets/vrx/03-Columna2/ANEJAMIENTO-DINAMICO-Plecas.png'),
      require('./../../../assets/vrx/03-Columna2/QUETZAL_VOLando02_0000_Layer-2.png'),
      require('./../../../assets/vrx/03-Columna2/QUETZAL_VOLando02_0001_Layer-1.png'),
      require('./../../../assets/vrx/03-Columna2/QUETZAL_VOLando02_0002_Layer-3.png'),
      
   ]

   const col2 = [
      {
         src: require("./../../../assets/vrx/03-Columna2/col02-conBotella-12-parte1.vrx"),
         materials: col2Texture,
         sound: require("./../../../assets/mp3/narracion/6_DYNAMIC_AGEING_PROCESS.mp3"),
         scale: [0.0017, 0.0016, 0.001],
         position: [0, -0.16, 0]
      },
      {
         src: require("./../../../assets/vrx/03-Columna2/col02-conBotella-12-parte2.vrx"),
         materials: col2Texture,
         sound: require("./../../../assets/mp3/narracion/7_ANEJAMIENTO.mp3"),
         scale: [0.0017, 0.0016, 0.001],
         position: [0, -0.16, 0]
      },
      {
         src: require("./../../../assets/vrx/03-Columna2/col02-conBotella-12-parte3.vrx"),
         materials: col2Texture,
         sound: require("./../../../assets/mp3/narracion/8_BLENDING_01.mp3"),
         scale: [0.0017, 0.0016, 0.001],
         position: [0, -0.16, 0]
      },
      {
         src: require("./../../../assets/vrx/03-Columna2/col02-conBotella-12-parte4.vrx"),
         materials: col2Texture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_12_SFX_04SFX.mp3"),
         scale: [0.0017, 0.0016, 0.001],
         position: [0, -0.16, 0]
      },
   ]

   const col3Texture = [
      require('./../../../assets/vrx/04-Columna3/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../../assets/vrx/04-Columna3/Col3-AroundTheWorld_Uvmap.png'),
      require('./../../../assets/vrx/04-Columna3/Col3-Distribucion_Uvmap.png'),
      require('./../../../assets/vrx/04-Columna3/Col3-Embotellado_Uvmap.png'),
      require('./../../../assets/vrx/04-Columna3/QUETZAL_VOLando02_0000_Layer-2.png'),
      require('./../../../assets/vrx/04-Columna3/QUETZAL_VOLando02_0001_Layer-1.png'),
      require('./../../../assets/vrx/04-Columna3/QUETZAL_VOLando02_0002_Layer-3.png'),
      
   ]

   const col3 = [
      {
         src: require("./../../../assets/vrx/04-Columna3/col03-conBotella-12-parte1.vrx"),
         materials: col3Texture,
         sound: require("./../../../assets/mp3/narracion/9_EMBOTELLADO.mp3"),
         scale: [0.0015, 0.0015, 0.001],
         position: [0.01, -0.15, 0]
      },
      {
         src: require("./../../../assets/vrx/04-Columna3/col03-conBotella-12-parte2.vrx"),
         materials: col3Texture,
         sound: require("./../../../assets/mp3/narracion/10_DISTRIBUCION.mp3"),
         scale: [0.0015, 0.0015, 0.001],
         position: [0.01, -0.15, 0]
      },
      {
         src: require("./../../../assets/vrx/04-Columna3/col03-conBotella-12-parte3.vrx"),
         materials: col3Texture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_NATURE.mp3"),
         scale: [0.0015, 0.0015, 0.001],
         position: [0.01, -0.15, 0]
      },
      {
         src: require("./../../../assets/vrx/04-Columna3/col03-conBotella-12-parte4.vrx"),
         materials: col3Texture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_12_SFX_04SFX.mp3"),
         scale: [0.0015, 0.0015, 0.001],
         position: [0.01, -0.15, 0]
      },
   ]

   const col4Texture = [
      require('./../../../assets/vrx/05-Columna4/02_COMPROMISO-TIERRA_0002_HOMBRE-DERECHO.png'),
      require('./../../../assets/vrx/05-Columna4/Col4-CADENA_SUSTENTABLE.png'),
      require('./../../../assets/vrx/05-Columna4/Col4-CARBON_NEUTRAL_Uvmap.png'),
      require('./../../../assets/vrx/05-Columna4/Col4-COMPROMISO-TIERRA_Uvmap.png'),
      require('./../../../assets/vrx/05-Columna4/Col4-intro_1sT_Sustainable_Uvmap.png'),
      require('./../../../assets/vrx/05-Columna4/Col4-ISCC-PLUS_Uvmap.png'),
      require('./../../../assets/vrx/05-Columna4/QUETZAL_VOLando02_0000_Layer-2.png'),
      require('./../../../assets/vrx/05-Columna4/QUETZAL_VOLando02_0001_Layer-1.png'),
      require('./../../../assets/vrx/05-Columna4/QUETZAL_VOLando02_0002_Layer-3.png'),
      
   ]

   const col4 = [
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte1.vrx"),
         materials: col4Texture,
         sound: require("./../../../assets/mp3/narracion/11__1ST_SUSTAINABLE_RUM_IN_THE_WORLD.mp3"),
         scale: [0.0015, 0.0015, 0.001],
         position: [-0.001, -0.15, 0]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte2.vrx"),
         materials: col4Texture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_NATURE.mp3"),
         scale: [0.0015, 0.0015, 0.001],
         position: [-0.001, -0.15, 0]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte3.vrx"),
         materials: col4Texture,
         sound: require("./../../../assets/mp3/narracion/12_COMPROMISO_CON_LA_TIERRA.mp3"),
         scale: [0.0015, 0.0015, 0.001],
         position: [-0.001, -0.15, 0]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte4.vrx"),
         materials: col4Texture,
         sound: require("./../../../assets/mp3/narracion/13_SELLO_ISCC_PLUS.mp3"),
         scale: [0.0015, 0.0015, 0.001],
         position: [-0.001, -0.15, 0]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte5.vrx"),
         materials: col4Texture,
         sound: require("./../../../assets/mp3/narracion/14_CADENA_SUSTENTABLE.mp3"),
         scale: [0.0015, 0.0015, 0.001],
         position: [-0.001, -0.15, 0]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/col04-conBotella-12-parte6.vrx"),
         materials: col4Texture,
         sound: require("./../../../assets/mp3/narracion/BOTRAN_12_SFX_04SFX.mp3"),
         scale: [0.0015, 0.0015, 0.001],
         position: [-0.001, -0.15, 0]
      },
   ]

   return [intro, intro, col1, col2, col3, col4];
}