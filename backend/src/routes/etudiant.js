const router = require('express').Router();
const controller = require('../controllers/etudiant');
const { isEtudiant } = require('../middlewares')


router.route('/login-etudiant').post(controller.login_student);

router.route('/register-etudiant').post(controller.register)

router.route('/password/:id').put(isEtudiant, controller.change_student_password);

router.route('/phone/:id').put(isEtudiant, controller.changePhoneNumber)

router.route('/uploader-fichiers').post(isEtudiant, controller.uploadFiles);

router.route('/date_soutenance').get(controller.sort_dateSoutenance_by2Date);


module.exports = router;

