
export default function ARObjects() {
   const test1 = [
      {
         src: require("./../../../assets/images/materiales/01-MODULOS-Intro_Completa-FLATTEN-12a.vrx"),
         materials: [
            require('./../../../assets/images/materiales/BOTRAN-No12EtiquetaLOW.png'),
            require('./../../../assets/images/materiales/Col0-INTRO_Uvmap.png'),
            require('./../../../assets/images/materiales/Col0-Zoom-Mapa_Uvmap.png'),
            require('./../../../assets/images/materiales/LANDING_0002_MIXCO-MAP.png'),
            require('./../../../assets/images/materiales/LANDING_0004_REU-MAP.png'),
            require('./../../../assets/images/materiales/LANDING_0006_XELA-MAP.png'),
            require('./../../../assets/images/materiales/ZOOM_Fondo.jpg'),
         ]
      },
      {
         src: require("./../../../assets/images/materiales/01-MODULOS-Intro_Completa-FLATTEN-12c.vrx"),
         materials: [
            require('./../../../assets/images/materiales/BOTRAN-No12EtiquetaLOW.png'),
            require('./../../../assets/images/materiales/Col0-INTRO_Uvmap.png'),
            require('./../../../assets/images/materiales/Col0-Zoom-Mapa_Uvmap.png'),
            require('./../../../assets/images/materiales/LANDING_0002_MIXCO-MAP.png'),
            require('./../../../assets/images/materiales/LANDING_0004_REU-MAP.png'),
            require('./../../../assets/images/materiales/LANDING_0006_XELA-MAP.png'),
            require('./../../../assets/images/materiales/ZOOM_Fondo.jpg'),
         ]
      },
      {
         src: require("./../../../assets/images/materiales/01-MODULOS-Col3_FLATTEN-12a.vrx"),
         materials: [
            require('./../../../assets/images/materiales/BOTRAN-No12Etiqueta3.png'),
            require('./../../../assets/images/materiales/Col3-AroundTheWorld_Uvmap.png'),
            require('./../../../assets/images/materiales/Col3-Distribucion_Uvmap.png'),
            require('./../../../assets/images/materiales/Col3-Embotellado_Uvmap.png'),
         ]
      },
      {
         src: require("./../../../assets/images/materiales/COL3-12-TEST-Nothing-Emb-06.vrx"),
         materials: [
            require('./../../../assets/images/materiales/BOTRAN-No12Etiqueta3.png'),
            require('./../../../assets/images/materiales/Col3-AroundTheWorld_Uvmap.png'),
            require('./../../../assets/images/materiales/Col3-Distribucion_Uvmap.png'),
            require('./../../../assets/images/materiales/Col3-Embotellado_Uvmap.png'),
         ]
      },
      {
         src: require("./../../../assets/images/materiales/object_soccer_ball.vrx"),
         materials: [
            require('./../../../assets/images/materiales/object_soccer_ball_diffuse.png'),
            require('./../../../assets/images/materiales/object_soccer_ball_normal.png'),
            require('./../../../assets/images/materiales/object_soccer_ball_specular.png'),
         ],
         scale: [.9, .9, .9]
      }
   ];

   const introTexture = [
      require('./../../../assets/vrx/01-FBX-INTRO/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/Col0-INTRO_Uvmap.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/Col0-Zoom-Mapa_Uvmap.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/LANDING_0002_MIXCO-MAP.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/LANDING_0004_REU-MAP.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/LANDING_0006_XELA-MAP.png'),
      require('./../../../assets/vrx/01-FBX-INTRO/ZOOM_Fondo.jpg'),
   ]

   const intro = [
      {
         src: require("./../../../assets/vrx/01-FBX-INTRO/01-MODULOS-Intro_Completa-FLATTEN-12a.vrx"),
         materials: introTexture,
         scale: [.4, .4, .4]
      },
      {
         src: require("./../../../assets/vrx/01-FBX-INTRO/01-MODULOS-Intro_Completa-FLATTEN-12b.vrx"),
         materials: introTexture,
         scale: [.4, .4, .4]
      },
      {
         src: require("./../../../assets/vrx/01-FBX-INTRO/01-MODULOS-Intro_Completa-FLATTEN-12c.vrx"),
         materials: introTexture,
         scale: [.4, .4, .4]
      },
   ]

   const col1Texture = [
      require('./../../../assets/vrx/02-Columna1/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../../assets/vrx/02-Columna1/Col2-Cultivo_Uvmap.png'),
      require('./../../../assets/vrx/02-Columna1/Col2-Destilacion_Uvmap.png'),
      require('./../../../assets/vrx/02-Columna1/Col2-Fermentacion_Uvmap.png'),
      require('./../../../assets/vrx/02-Columna1/Col2-MielVirgen_Uvmap.png'),
      
   ]

   const col1 = [
      {
         src: require("./../../../assets/vrx/02-Columna1/01-MODULOS-Col1_FLATTEN-12a.vrx"),
         materials: col1Texture,
         scale: [.4, .4, .4]
      },
      {
         src: require("./../../../assets/vrx/02-Columna1/01-MODULOS-Col1_FLATTEN-12b.vrx"),
         materials: col1Texture,
         scale: [.4, .4, .4]
      }
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
         src: require("./../../../assets/vrx/03-Columna2/01-MODULOS-Col2_FLATTEN-12a.vrx"),
         materials: col2Texture,
         scale: [.4, .4, .4]
      },
      {
         src: require("./../../../assets/vrx/03-Columna2/01-MODULOS-Col2_FLATTEN-15a.vrx"),
         materials: col2Texture,
         scale: [.4, .4, .4]
      },
      {
         src: require("./../../../assets/vrx/03-Columna2/01-MODULOS-Col2_FLATTEN-18a.vrx"),
         materials: col2Texture,
         scale: [.4, .4, .4]
      }
   ]

   const col3Texture = [
      require('./../../../assets/vrx/04-Columna3/BOTRAN-No12Etiqueta3.png'),
      require('./../../../assets/vrx/04-Columna3/BOTRAN-No12EtiquetaLOW.png'),
      require('./../../../assets/vrx/04-Columna3/Col3-AroundTheWorld_Uvmap.png'),
      require('./../../../assets/vrx/04-Columna3/Col3-Distribucion_Uvmap.png'),
      require('./../../../assets/vrx/04-Columna3/Col3-Embotellado_Uvmap.png'),
      
   ]

   const col3 = [
      {
         src: require("./../../../assets/vrx/04-Columna3/01-MODULOS-Col3_FLATTEN-12.vrx"),
         materials: col3Texture,
         scale: [.4, .4, .4]
      },
      {
         src: require("./../../../assets/vrx/04-Columna3/01-MODULOS-Col3_FLATTEN-12a.vrx"),
         materials: col3Texture,
         scale: [.4, .4, .4]
      },
      {
         src: require("./../../../assets/vrx/04-Columna3/01-MODULOS-Col3_FLATTEN-12b.vrx"),
         materials: col3Texture,
         scale: [.4, .4, .4]
      },
      {
         src: require("./../../../assets/vrx/04-Columna3/01-MODULOS-Col3_FLATTEN-12c.vrx"),
         materials: col3Texture,
         scale: [.4, .4, .4]
      }
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
         src: require("./../../../assets/vrx/05-Columna4/01-MODULOS-COLUMNA_4-12-FLATTEN.vrx"),
         materials: col4Texture,
         scale: [.4, .4, .4]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/01-MODULOS-COLUMNA_4-15-FLATTEN.vrx"),
         materials: col4Texture,
         scale: [.4, .4, .4]
      },
      {
         src: require("./../../../assets/vrx/05-Columna4/01-MODULOS-COLUMNA_4-18-FLATTEN.vrx"),
         materials: col4Texture,
         scale: [.4, .4, .4]
      }
   ]

   return [intro, col1, col2, col3, col4];
}