import * as moment from "moment";

export class RegistrarpagoModel {
    IDCONTRATO: string;
    IDPERSONA: string;
    VALOR: number;
    DESCUENTO: number;
    CANTIDADCUOTAS: number;
    MAQUINA: string;
    TRANSAC: string;
    USUARIO: string;
    OBSERVACIONES: string ='';
    CUOTAMENSUAL: number;
    ESTADO: string;
    FORMAPAGO: string='Efectivo';
    FECHAPAGOR: string;
    POSX: string;
    POSY: string;
    PLAN: string;
    NRORECIBO : string;
    PagoDesde: string;
    PagoHasta : string;
    IDENTIFICADORBASE : string ;
    titular: string;
    Departamento: string;
    Ciudad: string;
    ValorLetras: string;
    NROREF: string;
    RESPUESTA: string;
    constructor() {
        this.IDCONTRATO = '';
        this.IDPERSONA = '';
        this.VALOR = 0;
        this.DESCUENTO = 0;
        this.CANTIDADCUOTAS = 1;
        this.MAQUINA = '';
        this.TRANSAC =moment().format('YYYYMMDDhhmmss');
        this.USUARIO = '';
        this.OBSERVACIONES = '';
        this.CUOTAMENSUAL = 0;
        this.ESTADO = '';
        this.FORMAPAGO = 'Efectivo';
        this.FECHAPAGOR = new Date().toISOString();
        this.POSX = '';
        this.POSY = '';
        this.IDENTIFICADORBASE ='';
        this.titular = '';
        this.PLAN = '';
        this.NRORECIBO = moment().format('YYYYMMDDhhmmss');
        this.PagoDesde ='';
        this.PagoHasta ='';
        this.Departamento ='';
        this.Ciudad ='';
        this.ValorLetras ='';
        this.NROREF ='';
        this.RESPUESTA ='';
    

    }
}