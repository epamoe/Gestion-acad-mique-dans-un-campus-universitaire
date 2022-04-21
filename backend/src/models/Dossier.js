const { Schema, model } = require('mongoose')
const { 
    CategorieFichier, EtapeDossier: EtapeDossierEnum,
    GerantEtapeDossier, StatutDossier, TypeNotification,
    ModelNotif, CategorieNote, ActeurDossier, 
} = require('./types')


const DossierSchema = new Schema({
    sujet: { type: String, required: true },
    statut: { 
        type: String, 
        required: true,
        default: StatutDossier.ATTENTE_VALIDATION,
        enum: Object.values(StatutDossier)
    },
    raisonStatut: String,
}, {
    timestamps: { createdAt: 'dateDepot', updatedAt: 'misAJourLe' }
});


DossierSchema.virtual('etudiant', {
    ref: 'Etudiant',
    localField: '_id',
    foreignField: 'dossier',
    justOne: true
});

DossierSchema.virtual('fichiers', {
    ref: 'FichierDossier',
    localField: '_id',
    foreignField: 'dossier'
});

DossierSchema.virtual('notes', {
    ref: 'NoteDossier',
    localField: '_id',
    foreignField: 'dossier',
});

DossierSchema.virtual('etapes', {
    ref: 'EtapeDossier',
    localField: '_id',
    foreignField: 'dossier'
});


// Operations
DossierSchema.virtual('etapeActuelle').get(async function() {
    await this.populate('etapes');
    return this.etapes.at(-1);
});


DossierSchema.methods.changerSujet = async function(nouveauSujet) {
    if (this.sujet !== nouveauSujet) {
        this.sujet = nouveauSujet;
        await this.save();
        // this.save().then(dossier => {
        //     console.log("Le nouveau sujet est", dossier.sujet);
        // }).catch(err => {
        //     console.error(err);
        // });
    }
};


// FichierDossier
const FichierDossierSchema = new Schema({
    categorie: {
        type: String,
        required: true,
        enum: Object.values(CategorieFichier)
    },
    uploadeLe: { type: Date, required: true, default: Date.now },
    dossier: { type: Schema.Types.ObjectId, ref: 'Dossier' },
});


// EtapeDossier
const EtapeDossierSchema = new Schema({
    numEtape: { 
        type: Number, 
        required: true, 
        default: EtapeDossierEnum.UNE,
        enum: Object.values(EtapeDossierEnum)
    },
    dossier: { type: Schema.Types.ObjectId, ref: 'Dossier', required: true },
    debuteeLe: Date,
    acheveeLe: Date,
    delai: Date,
    gereeParActeur: {
        type: String,
        required: true,
        enum: Object.values(GerantEtapeDossier)
    },
});


// NoteDossier
const NoteDossierSchema = new Schema({
    dossier: { type: Schema.Types.ObjectId, ref: 'Dossier', required: true },
    categorie: { type: String, required: true, enum: Object.values(CategorieNote) },
    valeur: { type: Number, required: true },
    notePar: { 
        type: Schema.Types.ObjectId,
        required: true,
        refPath: 'noteParModel'
    },
    noteParModel: {
        type: String,
        required: true,
        default: ActeurDossier.JURY,
        enum: Object.values(ActeurDossier)
    },
    noteLe: { type: Date, default: Date.now, required: true },
});


/**
 * Envoyer une notification a l'administrateur
 */
NoteDossierSchema.post('save', async function(doc) {
    await Notification.create({
        type: TypeNotification.NOTE_JURY,
        destinataireModel: ModelNotif.ADMIN,
        objetConcerne: doc._id,
        objetConcerneModel: ModelNotif.NOTE_DOSSIER
    });
});



const Dossier = model('Dossier', DossierSchema);
const FichierDossier = model('FichierDossier', FichierDossierSchema, 'fichiers_dossiers');
const EtapeDossier = model('EtapeDossier', EtapeDossierSchema, 'etapes_dossiers');
const NoteDossier = model('NoteDossier', NoteDossierSchema, 'notes_dossiers');


module.exports = { Dossier, FichierDossier, EtapeDossier, NoteDossier };

