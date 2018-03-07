
 /* je cache toutes les sections au départ */
    $(document).ready(function(){ 
    $("#bloc_lshe").hide();   
    $("#bloc_STN").hide();
    $("#bloc_SEJA").hide();
    $("#bloc_right_lshe_science_de_leducation").hide();
    $("#bloc_right_sociologie").hide(); 
    $("#bloc_right_science_politique").hide(); 
    $("#bloc_right_sciences_juridiques").hide();
    $("#bloc_right_aes").hide();  
    $("#bloc_right_lshe").hide();
    $("#bloc_right_developpement_application").hide();  
    $("#bloc_right_multimedia").hide();
    $("#bloc_right_communication_digitale").hide(); 
    $("#bloc_right_arts_graphiques_numeriques").hide(); 
    $("#bloc_right_lshe_anglais_master").hide();
    $("#bloc_right_lshe_science_de_leducation_master").hide();   
    $("#bloc_right_sociologie_master").hide();       
    $("#bloc_right_aes_master").hide();    
    $("#bloc_right_sciences_juridiques_master").hide(); 
    $("#bloc_right_science_politique_master").hide();   
    $("#bloc_right_seja_master").hide();
    $("#bloc_right_stn").hide();
    $("#bloc_right_ingl_master").hide(); 
    $("#bloc_right_mcs_master").hide();
     $("#bloc_right_sr_master").hide();
    });
/*  -----fin----------------- ------------*/

/* action si btn1 est cliqué , correspond au pole STN */
    $("#btn1").click(function(){
    $("#bloc_STN").fadeIn(1000);
    $("#bloc_lshe").hide();
    $("#bloc_right_stn").hide();
    $("#bloc_SEJA").hide(); 
    });
 /*  -----fin----------------- ------------*/

/* action si btn2 est cliqué , correspond au pole LSHE */
    $("#btn2").click(function(){
    $("#bloc_lshe").fadeIn(1000);
    $("#bloc_STN").hide();
    $("#bloc_SEJA").hide();
    $("#bloc_right_lshe").hide(); 
    });
/*  -----fin----------------- ------------*/

/* action si btn3 est cliqué , correspond au pole SEJA */

    $("#btn3").click(function(){
    $("#bloc_SEJA").fadeIn(1000);
    $("#bloc_lshe").hide();
    $("#bloc_STN").hide();
    $("#bloc_right_seja").hide();
    });

 /*  -----fin----------------- ------------*/


/* action si btn-lshe est cliqué , correspond au pole LSHE */
    $("#btn_lshe_anglais").click(function(){
    $("#bloc_right_lshe").fadeIn(1000);
    $("#bloc_right_lshe_science_de_leducation").hide(); 
    $("#bloc_right_lshe_science_de_leducation_master").hide();   
    $("#bloc_right_sociologie").hide();  
    $("#bloc_right_lshe_anglais_master").hide();

    });
/*  -----fin----------------- ------------*/


  /* action si btn-lshe est cliqué , correspond au pole LSHE master */
    $("#btn_lshe_anglais_master").click(function(){
    $("#bloc_right_lshe_anglais_master").fadeIn(1000);
    $("#bloc_right_lshe_science_de_leducation_master").hide();  
    $("#bloc_right_sociologie_master").hide(); 
     $("#bloc_right_lshe").hide(); 
     $("#bloc_right_sociologie").hide();  
    });
/*  -----fin----------------- ------------*/



/* action si btn-lshe est cliqué , correspond au pole LSHE */
    $("#btn_lshe_sociologie").click(function(){
    $("#bloc_right_lshe").hide();
    $("#bloc_right_lshe_science_de_leducation").hide();
    $("#bloc_right_sociologie_master").hide(); 
    $("#bloc_right_lshe_anglais_master").hide(); 
    $("#bloc_right_sociologie").fadeIn(1000);  
    });
/*  -----fin----------------- ------------*/

/* action si btn-lshe est cliqué , correspond au pole LSHE master */
    $("#btn_lshe_sociologie_master").click(function(){
    $("#bloc_right_lshe_anglais_master").hide();
    $("#bloc_right_lshe_science_de_leducation_master").hide();
    $("#bloc_right_sociologie").hide(); 
    $("#bloc_right_lshe").hide();  
    $("#bloc_right_sociologie_master").fadeIn(1000);  
    });
/*  -----fin----------------- ------------*/


/* action si btn-lshe science de l'education est cliqué , correspond au pole LSHE */
  $("#btn_lshe_science_de_leducation").click(function(){  
  $("#bloc_right_lshe_science_de_leducation").fadeIn(); 
  $("#bloc_right_lshe").hide();  
  $("#bloc_right_sociologie").hide(); 
  $("#bloc_right_lshe_science_de_leducation_master").hide();   
});
/* action si btn-lshe science de l'education est cliqué , correspond au pole LSHE */
  $("#btn_lshe_science_de_leducation_master").click(function(){  
  $("#bloc_right_lshe_science_de_leducation_master").fadeIn(); 
  $("#bloc_right_lshe_anglais_master").hide();  
  $("#bloc_right_sociologie_master").hide();
  $("#bloc_right_lshe_science_de_leducation").hide();    
});
 
/* action si btn_SNT_MAI est cliqué , correspond au pole SNT */
    $("#btn_SNT_MAI").click(function(){
    $("#bloc_right_lshe").hide();  
    $("#bloc_right_stn").fadeIn(1000);
    $("#bloc_right_developpement_application").hide();
    $("#bloc_right_multimedia").hide();
    $("#bloc_right_arts_graphiques_numeriques").hide();
     $("#bloc_right_ingl_master").hide(); 
    $("#bloc_right_mcs_master").hide();
    $("#bloc_right_sr_master").hide();
    $("#bloc_right_communication_digitale").hide();
    });
/*  -----fin----------------- ------------*/

/* action si btn_SNT_DAWGM est cliqué , correspond au pole SNT */
    $("#btn_STN_developpement_application").click(function(){
    $("#bloc_right_lshe").hide();  
    $("#bloc_right_stn").hide();
    $("#bloc_right_developpement_application").fadeIn(1000);
    $("#bloc_right_multimedia").hide();
    $("#bloc_right_arts_graphiques_numeriques").hide();
     $("#bloc_right_ingl_master").hide(); 
    $("#bloc_right_mcs_master").hide();
    $("#bloc_right_sr_master").hide();
    $("#bloc_right_communication_digitale").hide();
    });
/*  -----fin----------------- ------------*/

/* action si btn_SNT_multimedai , internet et communication digitale est cliqué , correspond au pole SNT */
    $("#btn_STN_multimedia").click(function(){
    $("#bloc_right_lshe").hide();  
    $("#bloc_right_stn").hide();
    $("#bloc_right_developpement_application").hide();
    $("#bloc_right_communication_digitale").hide();
    $("#bloc_right_arts_graphiques_numeriques").hide();
     $("#bloc_right_ingl_master").hide(); 
    $("#bloc_right_mcs_master").hide();
    $("#bloc_right_sr_master").hide();
    $("#bloc_right_multimedia").fadeIn(1000);
    });
/*  -----fin----------------- ------------*/


/* action si btn_SNT_communication_digitale , internet et communication digitale est cliqué , correspond au pole SNT */
    $("#btn_STN_communication_digitale").click(function(){
    $("#bloc_right_lshe").hide();  
    $("#bloc_right_stn").hide();
    $("#bloc_right_developpement_application").hide();
    $("#bloc_right_multimedia").hide();
    $("#bloc_right_arts_graphiques_numeriques").hide();
     $("#bloc_right_ingl_master").hide(); 
    $("#bloc_right_mcs_master").hide();
    $("#bloc_right_sr_master").hide();
    $("#bloc_right_communication_digitale").fadeIn(1000);
    });
/*  -----fin----------------- ------------*/


/* action si btn_SNT_arts_graphiques_numerique , arts graphiques et numeriques est cliqué , correspond au pole SNT     btn_STN_Ilogicielle   btn_STN_MCS  btn_STN_SRV */   
    $("#btn_STN_arts_graphiques_numériques").click(function(){
    $("#bloc_right_lshe").hide();  
    $("#bloc_right_stn").hide();
    $("#bloc_right_developpement_application").hide();
    $("#bloc_right_multimedia").hide();
    $("#bloc_right_ingl_master").hide(); 
    $("#bloc_right_mcs_master").hide();
    $("#bloc_right_sr_master").hide();
    $("#bloc_right_arts_graphiques_numeriques").fadeIn(1000);
    });
/*  -----fin----------------- ------------*/



/* action si btn_SNT_arts_graphiques_numerique , arts graphiques et numeriques est cliqué , correspond au pole SNT     btn_STN_Ilogicielle   btn_STN_MCS  btn_STN_SRV */   
    $("#btn_STN_Ilogicielle").click(function(){
    $("#bloc_right_lshe").hide();  
    $("#bloc_right_stn").hide();
    $("#bloc_right_developpement_application").hide();
    $("#bloc_right_multimedia").hide();
    $("#bloc_right_arts_graphiques_numeriques").hide();
    $("#bloc_right_ingl_master").fadeIn(1000); 
    $("#bloc_right_mcs_master").hide();
    $("#bloc_right_sr_master").hide();
    
    });
/*  -----fin----------------- ------------*/


   $("#btn_STN_MCS").click(function(){
    $("#bloc_right_lshe").hide();  
    $("#bloc_right_stn").hide();
    $("#bloc_right_developpement_application").hide();
    $("#bloc_right_multimedia").hide();
    $("#bloc_right_arts_graphiques_numeriques").hide();
    $("#bloc_right_ingl_master").hide(); 
    $("#bloc_right_mcs_master").fadeIn(1000);
    $("#bloc_right_sr_master").hide();
    
    });

 $("#btn_STN_SRV").click(function(){
    $("#bloc_right_lshe").hide();  
    $("#bloc_right_stn").hide();
    $("#bloc_right_developpement_application").hide();
    $("#bloc_right_multimedia").hide();
    $("#bloc_right_arts_graphiques_numeriques").hide();
    $("#bloc_right_ingl_master").hide(); 
    $("#bloc_right_mcs_master").hide();
    $("#bloc_right_sr_master").fadeIn(1000);
    
    });
/*  -----fin----------------- ------------*/

 

/* action si btn_SEJA_SEG est cliqué , correspond au pole SEJA */  
    $("#btn_SEJA_SEG").click(function(){  
    $("#bloc_right_seja").fadeIn(1000); 
    $("#bloc_right_science_politique").hide(); 
    $("#bloc_right_sciences_juridiques").hide();
    $("#bloc_right_science_politique_master").hide(); 
    $("#bloc_right_sciences_juridiques_master").hide();
    $("#bloc_right_seja_master").hide();   
    $("#bloc_right_aes").hide(); 
    $("#bloc_right_seja_master").hide();  
    });
/*  -----fin----------------- ------------*/


/* action si btn_SEJA_SEG est cliqué , correspond au pole SEJA audit et gestion  */  
    $("#btn_SEJA_audit_master").click(function(){  
    $("#bloc_right_seja_master").fadeIn(1000); 
    $("#bloc_right_seja").hide();
    $("#bloc_right_aes").hide();
    $("#bloc_right_science_politique_master").hide(); 
    $("#bloc_right_sciences_juridiques_master").hide();   
    $("#bloc_right_aes_master").hide();
    $("#bloc_right_sciences_juridiques").hide(); 
    $("#bloc_right_science_politique").hide(); 
    });
/*  -----fin----------------- ------------*/

/* action si btn_SEJA_SEG est cliqué , correspond au pole SEJA droit privé  */  
    $("#btn_SEJA_DPrive_master").click(function(){ 
    $("#bloc_right_science_politique_master").fadeIn(1000);  
    $("#bloc_right_seja_master").hide();
    $("#bloc_right_seja").hide();
    $("#bloc_right_aes").hide(); 
    $("#bloc_right_sciences_juridiques_master").hide();   
    $("#bloc_right_aes_master").hide(); 
    $("#bloc_right_sciences_juridiques").hide(); 
    $("#bloc_right_science_politique").hide();
    });
/*  -----fin----------------- ------------*/


/* action si btn_SEJA_SEG est cliqué , correspond au pole SEJA droit public  */  
    $("#btn_SEJA_DPublic_master").click(function(){ 
    $("#bloc_right_science_politique_master").hide();  
    $("#bloc_right_seja_master").hide();
    $("#bloc_right_seja").hide();
    $("#bloc_right_aes").hide(); 
    $("#bloc_right_sciences_juridiques_master").fadeIn(1000);   
    $("#bloc_right_aes_master").hide(); 
    $("#bloc_right_sciences_juridiques").hide(); 
     $("#bloc_right_science_politique").hide();
    });
/*  -----fin----------------- ------------*/

/* action si btn_SEJA_Science politique est cliqué , correspond au pole SEJA */
    $("#btn_SEJA_science_politique").click(function(){  
    $("#bloc_right_science_politique").fadeIn(1000);
    $("#bloc_right_seja_master").hide();  
    $("#bloc_right_seja").hide();   
    $("#bloc_right_sciences_juridiques").hide();
    $("#bloc_right_aes").hide();  
    $("#bloc_right_science_politique_master").hide(); 
    $("#bloc_right_sciences_juridiques_master").hide();
    $("#bloc_right_aes_master").hide(); 
    });
/*  -----fin----------------- ------------*/


/* action si btn_SEJA_Science politique est cliqué , correspond au pole SEJA Finance-Comptabilité */
    $("#btn_SEJA_FComptabilité_master").click(function(){   
    $("#bloc_right_aes_master").fadeIn(1000);
    $("#bloc_right_science_politique").hide();
    $("#bloc_right_seja_master").hide();  
    $("#bloc_right_seja").hide();   
    $("#bloc_right_sciences_juridiques").hide();
    $("#bloc_right_aes").hide();  
    $("#bloc_right_science_politique_master").hide(); 
    $("#bloc_right_sciences_juridiques_master").hide(); 
    });
/*  -----fin----------------- ------------*/

/* action si btn_SEJA_Sciences juridiques est cliqué , correspond au pole SEJA   btn_SEJA_Capacite_master */
    $("#btn_SEJA_sciences_juridiques").click(function(){  
    $("#bloc_right_science_politique").hide();
    $("#bloc_right_aes_master").hide();
    $("#bloc_right_science_politique_master").hide(); 
    $("#bloc_right_sciences_juridiques_master").hide(); 
    $("#bloc_right_seja_master").hide();  
    $("#bloc_right_seja").hide(); 
    $("#bloc_right_sciences_juridiques").fadeIn(1000); 
    $("#bloc_right_aes").hide();   
    });
/*  -----fin----------------- ------------*/


/* action si btn_SEJA_Sciences juridiques est cliqué , correspond au pole SEJA   btn_SEJA_Capacite_master */
    $("#btn_SEJA_Capacite_master").click(function(){
    alert('Donnees non disponible pour le moment pour cette formation') ; 
    $("#bloc_right_science_politique").hide();
    $("#bloc_right_aes_master").hide();
    $("#bloc_right_science_politique_master").hide(); 
    $("#bloc_right_sciences_juridiques_master").hide(); 
    $("#bloc_right_seja_master").hide();  
    $("#bloc_right_seja").hide(); 
    $("#bloc_right_sciences_juridiques").hide(); 
    $("#bloc_right_aes").hide();   
    });
/*  -----fin----------------- ------------*/

/* action si btn_SEJA_administration_economique_sociale est cliqué , correspond au pole SEJA   #CCECD8 Appel à candidature */
    $("#btn_SEJA_administration_economique_sociale").click(function(){  
    $("#bloc_right_science_politique").hide(); 
    $("#bloc_right_seja").hide(); 
    $("#bloc_right_sciences_juridiques").hide();
    $("#bloc_right_sciences_juridiques_master").hide(); 
    $("#bloc_right_science_politique_master").hide();  
    $("#bloc_right_aes").fadeIn(1000);     
    });
/*  -----fin----------------- ------------*/


