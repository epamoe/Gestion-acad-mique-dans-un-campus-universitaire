const router = require('express').Router();
const controller = require('../controllers/admin');
const {isAdmin} = require('../middlewares');


// router.route('/new-expert').post(controller.register_expert);

// router.route('/login-expert').post(controller.login_student);

 router.route('/add_coordonator').post(isAdmin,controller.register_coordonateur);
 router.route('/delete_coordonator/:coord_id').delete(isAdmin,controller.deleteCoordonator);
 router.route('/add_jury').post(isAdmin,controller.add_jury);
 router.route('/delete_jury/:jury_id').delete(isAdmin,controller.deleteJury);
 router.route('/add_conseil').post(isAdmin,controller.add_conseil);
 router.route('/delete_conseil/:conseil_id').delete(isAdmin,controller.deleteConseil);
 router.route('add_expert').post(isAdmin,controller.add_expert);
 router.route('delete_expert/:expert_id').delete(isAdmin,controller.deleteExpert);



module.exports = router;

