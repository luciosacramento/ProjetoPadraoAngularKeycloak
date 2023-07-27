
import { ValidationErrors, FormControl, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

export class Validadores {

    static cpf(pControl: FormControl): ValidationErrors | undefined {
        if (pControl.value != undefined && pControl.value != null && pControl.value.toString() != '') {

            if (!pControl.value.match("^[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}\\-[0-9]{2}$")
                && !pControl.value.match("^[0-9]{11}$")) {
                return { cpf: true };
            }
        }
        return undefined;
    }

    static cnpj(pControl: FormControl): ValidationErrors| undefined {
        if (pControl.value != undefined && pControl.value != null && pControl.value.toString() != '') {
            if (!pControl.value.match("^[0-9]{2}\\.[0-9]{3}\\.[0-9]{3}\\/[0-9]{4}\\-[0-9]{2}$")
                && !pControl.value.match("^[0-9]{14}$")) {
                return { cnpj: true };
            }
        }
        return undefined;
    }



    static cep(pControl: FormControl): ValidationErrors| undefined {

        if (pControl.value != undefined && pControl.value != null && pControl.value.toString() != '') {
            if (!pControl.value.match("^[0-9]{2}\\.[0-9]{3}\\-[0-9]{3}$")
                && !pControl.value.match("^[0-9]{5}\\-[0-9]{3}$")
                && !pControl.value.match("^[0-9]{8}$")) {
                return { cep: true };
            }
        }
        return undefined;
    }

    static entidadeJPA(pControl: FormControl): ValidationErrors| undefined {
        if (pControl.value != undefined && pControl.value != null && pControl.value.toString() != '') {
            if (!pControl.value.id) {
                return { entidadeJPA: true }
            }
        }

        return undefined;

    }

    static telefone(pControl: FormControl): ValidationErrors| undefined {


        if (pControl.value != undefined && pControl.value != null && pControl.value.toString() != '') {
            if (!pControl.value.match("^\\([0-9]{2}\\)\\s?[0-9]{4,5}\\-[0-9]{4}$")) {
                return { telefone: true };
            }
        }

        return undefined;
    }

    static celular(pControl: FormControl): ValidationErrors| undefined {


        if (pControl.value != undefined && pControl.value != null && pControl.value.toString() != '') {
            if (!pControl.value.match("^\\([0-9]{2}\\)\\s?9[0-9]{4}\\-[0-9]{4}$")) {
                return { celular: true };
            }
        }

        return undefined;
    }

    static email(pControl: FormControl): ValidationErrors| undefined {
        if (pControl.value != undefined && pControl.value != null && pControl.value.toString() != '') {
            if (!pControl.value.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")) {
                return { email: true };
            }
        }
        return undefined;
    }


}