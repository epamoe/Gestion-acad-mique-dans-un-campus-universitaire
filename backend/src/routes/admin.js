const router = require('express').Router();
const controller = require('../controllers/admin');
const { 
   isAdmin, getAdmin, getAdminFromParam,
   getEtudiantFromParam, getDossierFromParam,

} = require('../middlewares');


router.route('').get(controller.getAll);

router.route('/moi').get(getAdmin, controller.getOne);

router.route('/login').post(controller.login);

router.route('/register').post(controller.register);

router.route('/change-email').put(isAdmin, getAdmin, controller.changeEmail);

router.route('/change-password').put(isAdmin, getAdmin, controller.changePassword);

router.route('/demandes-inscription').get(isAdmin, controller.demandesInscription);

router.route('/notifications').get(isAdmin, getAdmin, controller.notifications);

router.route('/dossiers-master').get(isAdmin, getAdmin, controller.dossiersEtudiantsMaster);

router.route('/dossiers-these').get(isAdmin, getAdmin, controller.dossiersEtudiantsThese);

router.route('/acteurs-avis').get(isAdmin, getAdmin, controller.getActeursAvis);

router.route('/etudiants/:id/accepter-inscription').put(
   isAdmin, 
   getEtudiantFromParam,
   getAdmin, 
   controller.accepterInscriptionEtudiant
);

router.route('/etudiants/:id/rejeter-inscription').put(
   isAdmin, 
   getEtudiantFromParam,
   getAdmin, 
   controller.rejeterInscriptionEtudiant
);

router.route('/dossiers/:id/accepter').put(
   isAdmin, 
   getDossierFromParam,
   getAdmin, 
   controller.accepterDossierEtudiant
);

router.route('/dossiers/:id/rejeter').put(
   isAdmin, 
   getDossierFromParam,
   getAdmin, 
   controller.rejeterDossierEtudiant
);

router.route('/:id').get(getAdminFromParam, controller.getOne)
.delete(isAdmin, controller.delete);


module.exports = router;

