
export default function ARObjects() {
   const prueba12AFlaten = {
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
   }
   const prueba12CFlaten = {
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
   }
   const prueba12A = {
      src: require("./../../../assets/images/materiales/01-MODULOS-Col3_FLATTEN-12a.vrx"),
      materials: [
         require('./../../../assets/images/materiales/BOTRAN-No12Etiqueta3.png'),
         require('./../../../assets/images/materiales/Col3-AroundTheWorld_Uvmap.png'),
         require('./../../../assets/images/materiales/Col3-Distribucion_Uvmap.png'),
         require('./../../../assets/images/materiales/Col3-Embotellado_Uvmap.png'),
      ]
   }
   const prueba6 = {
      src: require("./../../../assets/images/materiales/COL3-12-TEST-Nothing-Emb-06.vrx"),
      materials: [
         require('./../../../assets/images/materiales/BOTRAN-No12Etiqueta3.png'),
         require('./../../../assets/images/materiales/Col3-AroundTheWorld_Uvmap.png'),
         require('./../../../assets/images/materiales/Col3-Distribucion_Uvmap.png'),
         require('./../../../assets/images/materiales/Col3-Embotellado_Uvmap.png'),
      ]
   }

   const football = {
      src: require("./../../../assets/images/materiales/object_soccer_ball.vrx"),
      materials: [
         require('./../../../assets/images/materiales/object_soccer_ball_diffuse.png'),
         require('./../../../assets/images/materiales/object_soccer_ball_normal.png'),
         require('./../../../assets/images/materiales/object_soccer_ball_specular.png'),
      ],
      scale: [.9, .9, .9]
   }

   const objects = [
      prueba12AFlaten,
      prueba12CFlaten,
      prueba12A,
      prueba6,
      football
   ]
   return objects;
}