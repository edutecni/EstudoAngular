import { Injectable } from '@angular/core'; 
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { ICliente } from '../Models/cliente.interface';

@Injectable()
export class ClienteService {

    constructor(private http: Http) { }

    //get
    getClientes() {
        return this.http.get("api/clientes")
            .map(data => <ICliente[]>data.json());
    }

    // POST - Incluir Dados
    addCliente(Cliente: ICliente){
        return this.http.post("api/clientes");
    }

}