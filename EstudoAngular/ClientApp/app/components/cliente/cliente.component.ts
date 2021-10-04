import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClienteService } from '../../Services/cliente.service';
import { ICliente } from '../../Models/cliente.interface';
import { FormBuilder, ReactiveFormsModule } from './@angular/forms';

@Component({
    selector: 'cliente-app',
    templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {

    //cliente
    cliente: ICliente = <ICliente>{};
    clientes: ICliente[] = [];

    // Variáveis de formulário
    formLabel: string;
    isEditMode: false;
    form: FormGroup;


    constructor(private clienteService: ClienteService, private fb: FormBuilder) { 

        this.form = fb.group({
            "nome": ["", Validators.requerid],
            "endereco": ["", Validators.requerid],
            "telefone": ["", Validators.requerid],
            "email": ["", Validators.requerid],
        });
        this.formLabel = "Adicionar Cliente cu";
    }

    private getClientes() {

        this.clienteService.getClientes().subscribe(
            data => this.clientes = data,
            error => alert(error),
            ()=> console.log(this.clientes)
         );
   }

    ngOnInit() {
        this.getClientes();
    }

    onSubmit(){};
    cancel(){};
    edit(){};
    delete(){};

}
