export interface Inscription {
    etatCivil: {
        nom: string;
        prenom: string;
        dateNaissance: Date;
        lieuNaissance: string;
    };
    coordonnees: {
        adresse: string;
        codePostal: string;
        ville: string;
        pays: string;
    };
    informationsProfessionnelles: {
        profession: string;
        secteurActivite: string;
        niveauEtudes: string;
    };
    informationsPersonnelles: {
        telephone: string;
        email: string;
        situationFamiliale: string;
        personnesAContacter: {
            nom: string;
            prenom: string;
            telephone: string;
        }[];
    };
}


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export class MonFormulaireComponent {
    inscriptionForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.inscriptionForm = this.formBuilder.group({
            etatCivil: this.formBuilder.group({
                nom: ['', Validators.required],
                prenom: ['', Validators.required],
                dateNaissance: ['', Validators.required],
                lieuNaissance: ['', Validators.required]
            }),
            coordonnees: this.formBuilder.group({
                adresse: ['', Validators.required],
                codePostal: ['', Validators.required],
                ville: ['', Validators.required],
                pays: ['', Validators.required]
            }),
            informationsProfessionnelles: this.formBuilder.group({
                profession: ['', Validators.required],
                secteurActivite: ['', Validators.required],
                niveauEtudes: ['', Validators.required]
            }),
            informationsPersonnelles: this.formBuilder.group({
                telephone: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                situationFamiliale: ['', Validators.required],
                personnesAContacter: this.formBuilder.array([])
            })
        });
    }

    addPersonneAContacter() {
        const personneAContacter = this.formBuilder.group({
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            telephone: ['', Validators.required]
        });
        this.personnesAContacter.push(personneAContacter);
    }

    removePersonneAContacter(index: number) {
        this.personnesAContacter.removeAt(index);
    }

    function dateNaissanceValidator(control: AbstractControl): {[key: string]: any} | null {
        const dateNaissance = new Date(control.value);
        const age = differenceInYears(new Date(), dateNaissance);
        return age >= 18 ? null : { 'ageInsuffisant': true };
    }


}




